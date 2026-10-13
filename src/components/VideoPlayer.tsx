'use client';
import {useEffect,useRef,useState,type CSSProperties} from 'react';
import {MediaImage} from './Works';
import {bilibiliSource} from '@/lib/media';
import {videoOrientation,videoRatio} from '@/lib/video-layout';
import type {VideoProject} from '@/data/videos';
import videoStyles from './VideoPresentation.module.css';
type PlayerProps={url:string;type:'mp4'|'bilibili';cover:string}&Pick<VideoProject,'width'|'height'|'aspectRatio'|'orientation'>;
function PlayerAsset({url,type,cover,width,height,aspectRatio,orientation}:PlayerProps) {
  const [actual,setActual]=useState<{width:number;height:number}|null>(null);
  const ratio=actual?actual.width/actual.height:videoRatio({width,height,aspectRatio});
  const direction=actual?videoOrientation(actual.width,actual.height):orientation||(ratio?(ratio===1?'square':ratio>1?'landscape':'portrait'):'unknown');
  const host=useRef<HTMLDivElement>(null);
  const videoRef=useRef<HTMLVideoElement>(null);
  const [ready,setReady]=useState(false);
  const [error,setError]=useState(false);
  const [loaded,setLoaded]=useState(false);
  useEffect(()=>{
    const io=new IntersectionObserver(([entry])=>{if(entry.isIntersecting){setReady(true);io.disconnect();}},{rootMargin:'100px'});
    if(host.current)io.observe(host.current);
    return()=>io.disconnect();
  },[]);
  const source=type==='bilibili'&&url?bilibiliSource(url):null;
  const missingRatio=type==='bilibili'&&!!source&&!ratio;
  const unavailable=!url||error||(type==='bilibili'&&!source)||missingRatio;
  const message=!url?'视频素材待添加':missingRatio?'B站视频画幅待确认，请根据真实资料配置尺寸或比例。':error?'视频加载失败，请检查资源路径与访问权限。':'B站链接格式无效，请填写完整官方视频链接或 BV 号。';
  return <div ref={host} className={`player ${videoStyles.player}`} data-orientation={direction} style={{'--video-ratio':ratio||16/9} as CSSProperties}>
    <div className="player-body">{unavailable||!ready?<div className="player-poster">{cover?<MediaImage src={cover} alt="视频封面"/>:<div className="missing">封面待提供</div>}</div>:type==='mp4'
      ?<video ref={videoRef} controls playsInline preload="metadata" poster={cover||undefined} src={url} onLoadedMetadata={e=>{setLoaded(true);const v=e.currentTarget;if(v.videoWidth&&v.videoHeight)setActual({width:v.videoWidth,height:v.videoHeight});}} onError={()=>setError(true)} onPlay={e=>{
        document.querySelectorAll<HTMLMediaElement>('video,audio').forEach(v=>{if(v!==e.currentTarget)v.pause();});
      }}/>
      :<iframe title="B站视频播放器" src={source!.embed} allow="fullscreen; picture-in-picture" allowFullScreen loading="lazy" onError={()=>setError(true)}/>}</div>
    {unavailable?<p className="player-status" role="status">{message}</p>:type==='mp4'&&!loaded?<p className="player-status" role="status">{ready?'正在加载视频信息…':'视频进入可视区域后加载'}</p>:null}
    {source&&<p className="player-status">若嵌入播放受平台限制，可<a href={source.watch} target="_blank" rel="noopener noreferrer">在 B站 打开 ↗</a></p>}
  </div>;
}
export function VideoPlayer(props:PlayerProps) {
  return <PlayerAsset key={`${props.type}:${props.url}`} {...props}/>;
}
