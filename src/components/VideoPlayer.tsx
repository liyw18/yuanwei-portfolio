'use client';
import {useEffect,useRef,useState,type CSSProperties} from 'react';
import {MediaImage} from './Works';
import {bilibiliSource} from '@/lib/media';
import {videoOrientation,videoRatio} from '@/lib/video-layout';
import type {VideoProject} from '@/data/videos';
import videoStyles from './VideoPresentation.module.css';
import feedback from './VideoPlayer.module.css';
type PlayerProps={url:string;type:'mp4'|'bilibili';cover:string}&Pick<VideoProject,'width'|'height'|'aspectRatio'|'orientation'>;
function PlayerAsset({url,type,cover,width,height,aspectRatio,orientation}:PlayerProps) {
  const [actual,setActual]=useState<{width:number;height:number}|null>(null);
  const ratio=actual?actual.width/actual.height:videoRatio({width,height,aspectRatio});
  const direction=actual?videoOrientation(actual.width,actual.height):orientation||(ratio?(ratio===1?'square':ratio>1?'landscape':'portrait'):'unknown');
  const host=useRef<HTMLDivElement>(null);
  const videoRef=useRef<HTMLVideoElement>(null);
  const mounted=useRef(true);
  useEffect(()=>{mounted.current=true;return()=>{mounted.current=false}},[]);
  const isCurrent=(video:HTMLVideoElement)=>mounted.current&&video===videoRef.current;
  const [ready,setReady]=useState(false);
  const [error,setError]=useState(false);
  const [loaded,setLoaded]=useState(false);
  const [busy,setBusy]=useState(false);
  const [requested,setRequested]=useState(false);
  const [attempt,setAttempt]=useState(0);
  const requestPlay=()=>{setReady(true);setBusy(true);const video=videoRef.current;if(video){video.play().catch(reason=>{if(isCurrent(video)&&reason?.name!=='AbortError'){setBusy(false);if(reason?.name!=='NotAllowedError')setError(true);}});}else setRequested(true);};
  useEffect(()=>{if(!requested||error||type!=='mp4')return;const video=videoRef.current;if(!video)return;let active=true;video.play().catch(reason=>{if(active&&isCurrent(video)&&reason?.name!=='AbortError'){setBusy(false);setRequested(false);if(reason?.name!=='NotAllowedError')setError(true);}});return()=>{active=false}},[requested,ready,attempt,error,type]);
  const retry=()=>{setLoaded(false);setBusy(true);setRequested(false);setError(false);setReady(true);setAttempt(n=>n+1);};
  useEffect(()=>{
    const io=new IntersectionObserver(([entry])=>{if(entry.isIntersecting){setReady(true);if(type==='mp4')setBusy(true);io.disconnect();}},{rootMargin:'100px'});
    if(host.current)io.observe(host.current);
    return()=>io.disconnect();
  },[]);
  const source=type==='bilibili'&&url?bilibiliSource(url):null;
  const missingRatio=type==='bilibili'&&!!source&&!ratio;
  const unavailable=!url||error||(type==='bilibili'&&!source)||missingRatio;
  const message=!url?'视频素材待添加':missingRatio?'B站视频画幅待确认，请根据真实资料配置尺寸或比例。':error?'视频加载失败，请重试':'B站链接格式无效，请填写完整官方视频链接或 BV 号。';
  return <div ref={host} className={`player ${videoStyles.player}`} data-orientation={direction} data-media-source={url} data-media-state={unavailable?'error':!ready?'idle':!loaded?'loading':busy?'buffering':'ready'} style={{'--video-ratio':ratio||16/9} as CSSProperties}>
    <div className={`player-body ${feedback.canvas}`}>{unavailable||!ready?<div className="player-poster">{cover?<MediaImage src={cover} alt="视频封面"/>:<div className="missing">封面待提供</div>}</div>:type==='mp4'
      ?<video key={attempt} ref={videoRef} controls playsInline preload="metadata" poster={cover||undefined} src={url} onLoadedMetadata={e=>{const v=e.currentTarget;if(!isCurrent(v))return;if(v.videoWidth&&v.videoHeight)setActual({width:v.videoWidth,height:v.videoHeight});}} onError={e=>{if(isCurrent(e.currentTarget)){setBusy(false);setError(true)}}} onWaiting={e=>{if(isCurrent(e.currentTarget)&&(requested||!e.currentTarget.paused))setBusy(true)}} onPlaying={e=>{if(isCurrent(e.currentTarget)){setLoaded(true);setBusy(false);setRequested(false)}}} onCanPlay={e=>{if(isCurrent(e.currentTarget)){setLoaded(true);setBusy(false)}}} onPause={e=>{if(isCurrent(e.currentTarget)){setBusy(false);setRequested(false)}}} onPlay={e=>{
        if(!isCurrent(e.currentTarget))return;
        document.querySelectorAll<HTMLMediaElement>('video,audio').forEach(v=>{if(v!==e.currentTarget)v.pause();});
      }}/>
      :<iframe key={attempt} title="B站视频播放器" src={source!.embed} allow="fullscreen; picture-in-picture" allowFullScreen loading="lazy" onError={()=>setError(true)}/>}
      {!unavailable&&type==='mp4'&&ready&&!loaded&&<div className={feedback.poster}>{cover?<MediaImage src={cover} alt="视频封面"/>:null}</div>}
      {!unavailable&&type==='mp4'&&!loaded&&!busy&&<button type="button" className={feedback.start} aria-label="播放视频" onClick={requestPlay}>▶</button>}
      {busy&&!unavailable&&<div className={feedback.indicator} role="status" aria-label="视频正在加载"><span aria-hidden="true"/></div>}
      {unavailable&&<div className={feedback.failure} role="alert"><p>{message}</p>{error&&<button type="button" onClick={retry}>重新加载</button>}</div>}
    </div>
    {source&&<p className={feedback.help}>若嵌入播放受平台限制，可<a href={source.watch} target="_blank" rel="noopener noreferrer">在 B站 打开 ↗</a></p>}
  </div>;
}
export function VideoPlayer(props:PlayerProps) {
  return <PlayerAsset key={`${props.type}:${props.url}`} {...props}/>;
}
