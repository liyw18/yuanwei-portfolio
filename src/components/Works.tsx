'use client';
import {assetUrl} from '@/lib/asset-url';
import Link from 'next/link';
import ProjectTags from './ProjectTags';
import {useEffect, useState, useRef,type CSSProperties} from 'react';
import {designs, designCategories, DesignProject} from '@/data/design';
import {videos, videoCategories, VideoProject} from '@/data/videos';
import {videoGroup,videoGroupLabels,type VideoGroup} from '@/lib/video-layout';
import videoStyles from './VideoPresentation.module.css';

function ImageAsset({src,alt,className=''}:{src:string;alt:string;className?:string}) {
  const [state,setState]=useState<'loading'|'ready'|'failed'>(src?'loading':'failed');
  const image=useRef<HTMLImageElement>(null);
  useEffect(()=>{if(image.current?.complete) setState(image.current.naturalWidth?'ready':'failed');},[]);
  return <div className={`media-image ${className}`} data-state={state} aria-busy={state==='loading'}>
    {state==='failed'?<div className="missing" role="img" aria-label={`${alt}：图片暂不可用`}><span>图片暂不可用</span><small>请检查素材路径或添加作品图片</small></div>:<img ref={image} src={assetUrl(src)} alt={alt} loading="lazy" decoding="async" onLoad={()=>setState('ready')} onError={()=>setState('failed')}/>}
  </div>;
}
export function MediaImage(props:{src:string;alt:string;className?:string}) {
  return <ImageAsset key={props.src} {...props}/>;
}
function PreviewVideo({src,onUnavailable,onStop}:{src:string;onUnavailable:()=>void;onStop:()=>void}) {
  const ref=useRef<HTMLVideoElement>(null);
  const [playing,setPlaying]=useState(false);
  useEffect(()=>{
    const element=ref.current;
    if(!element) return;
    let active=true;
    element.play().catch(()=>{if(active) onUnavailable();});
    const stop=()=>{element.pause(); onStop();};
    const visibility=()=>{if(document.hidden) stop();};
    const media=matchMedia('(hover:hover) and (pointer:fine) and (prefers-reduced-motion:no-preference)');
    const preference=()=>{if(!media.matches) stop();};
    const observer=new IntersectionObserver(([entry])=>{if(!entry.isIntersecting)stop();});
    observer.observe(element); document.addEventListener('visibilitychange',visibility); media.addEventListener('change',preference);
    return()=>{active=false; element.pause(); observer.disconnect(); document.removeEventListener('visibilitychange',visibility); media.removeEventListener('change',preference);};
  },[src,onUnavailable,onStop]);
  return <video ref={ref} className={playing?'preview-playing':''} src={assetUrl(src)} muted loop playsInline preload="none" aria-hidden="true" onPlaying={()=>setPlaying(true)} onError={onUnavailable}/>;
}
export function WorkCard({project,kind,href}:{project:DesignProject|VideoProject;kind:'design'|'video';href?:string}) {
  const [failedSource,setFailedSource]=useState('');
  const [preview,setPreview]=useState(false);
  const video='videoUrl' in project?project:null;
  const stop=useRef(()=>setPreview(false)).current;
  const previewSource=video?.preview||'';
  // Keep callbacks stable so playing previews do not restart on a state render.
  const unavailable=useRef(()=>{});
  unavailable.current=()=>{setFailedSource(previewSource);setPreview(false);};
  const fail=useRef(()=>unavailable.current()).current;
  function enter(){if(previewSource&&failedSource!==previewSource&&matchMedia('(hover:hover) and (pointer:fine) and (prefers-reduced-motion:no-preference)').matches)setPreview(true);}
  return <Link className={`work-card ${kind} ${video?videoStyles.videoCard:''}`} href={href||`/${kind}/${project.slug}`} onPointerEnter={e=>{if(e.pointerType==='mouse')enter();}} onPointerLeave={stop} onBlur={stop}>
    <div className={`work-visual ${video?videoStyles.visual:''}`} style={video?{'--video-ratio':video.orientation==='portrait'?9/16:video.orientation==='square'?1:16/9} as CSSProperties:undefined}>
      {video&&!project.cover?<div className="missing" role="img" aria-label={`${project.title}：封面待提供`}><span>封面待提供</span></div>:<MediaImage src={project.cover} alt={project.title}/>}
      {preview&&previewSource&&failedSource!==previewSource&&<PreviewVideo src={previewSource} onUnavailable={fail} onStop={stop}/>}
      {previewSource&&failedSource===previewSource&&<span className="preview-unavailable" role="status">预览暂不可用 · 显示封面</span>}
      <span className="project-action" aria-hidden="true">{kind==='video'?'▷':'↗'}<small>{kind==='video'?'PLAY / 播放':'VIEW PROJECT'}</small></span>
      {project.placeholder&&<span className="sample-label">PLACEHOLDER / 占位作品</span>}
    </div>
    {video?<div className={`card-meta ${videoStyles.cardInfo}`}><div><h3>{project.title}</h3><ProjectTags tags={video.tags}/><p>{project.category} / {video.episode?`Episode ${String(video.episode).padStart(2,'0')}`:'单集作品'}{video.episodes?.length?` · ${video.episodes.length}集`:''}</p><span className="eyebrow">{project.year||'年份待提供'} · {video.duration}</span></div><span aria-hidden="true">↗</span></div>:<div className="card-meta"><div><span className="eyebrow">{project.category}</span><h3>{project.title}</h3></div><span aria-hidden="true">↗</span></div>}
  </Link>;
}
export function Gallery({kind,videoProjects=videos}:{kind:'design'|'video';videoProjects?:VideoProject[]}) {
  const [filter,setFilter]=useState('ALL');
  const items=kind==='design'?designs:videoProjects;
  const categories=kind==='design'?designCategories:videoCategories;
  const filtered=items.filter(p=>filter==='ALL'||p.category===filter).sort((a,b)=>a.order-b.order);
  return <><div className="filters" role="group" aria-label="作品分类">{['ALL',...categories].map(c=><button key={c} aria-pressed={filter===c} aria-controls={`${kind}-results`} onClick={()=>setFilter(c)}>{kind==='video'&&c!=='ALL'?`${String(categories.indexOf(c as never)+1).padStart(2,'0')} / ${c}`:c}<span>{c==='ALL'?items.length:items.filter(p=>p.category===c).length}</span></button>)}</div>
    {items.some(p=>p.placeholder)&&<p className="muted">当前包含明确标注的占位资源，等待替换为真实作品。</p>}
    {kind==='video'?<div id="video-results" className={videoStyles.groups}>{(Object.keys(videoGroupLabels) as VideoGroup[]).map(group=>{const projects=(filtered as VideoProject[]).filter(p=>videoGroup(p)===group);return projects.length?<section key={group} className={videoStyles.group} aria-label={videoGroupLabels[group]}><div className={videoStyles.heading}><h2>{videoGroupLabels[group]}</h2><span>{projects.length} 个作品</span></div>{group==='unknown'&&<p className="muted">尚未提供真实视频尺寸，导入后按画幅显示。</p>}<div className={videoStyles.grid} data-group={group}>{projects.map(p=><WorkCard key={p.id} project={p} kind="video"/>)}</div></section>:null;})}</div>:<div id="design-results" className="work-grid">{filtered.map(p=><WorkCard key={p.id} project={p} kind={kind}/>)}</div>}
    <p role="status" className="muted">{filter} / {filtered.length} 个项目{kind==='video'?` · ${(filtered as VideoProject[]).reduce((sum,p)=>sum+(p.episodes?.length||1),0)} 个视频`:null}</p></>;
}

