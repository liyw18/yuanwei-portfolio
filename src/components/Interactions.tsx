'use client';
import {assetUrl} from '@/lib/asset-url';
import {useEffect,useRef,useState} from 'react';
import {MediaImage} from './Works';
export {VideoPlayer} from './VideoPlayer';

export function Lightbox({images,title}:{images:string[];title:string}) {
  const dialog=useRef<HTMLDialogElement>(null);
  const [index,setIndex]=useState(0);
  const trigger=useRef<HTMLButtonElement|null>(null);
  const previousOverflow=useRef('');
  useEffect(()=>{
    const element=dialog.current;
    const close=()=>{document.body.style.overflow=previousOverflow.current;trigger.current?.focus();};
    element?.addEventListener('close',close);
    return()=>{element?.removeEventListener('close',close);if(element?.open)document.body.style.overflow=previousOverflow.current;};
  },[]);
  const change=(step:number)=>setIndex(current=>(current+step+images.length)%images.length);
  if(!images.length) return <p className="missing">项目图片待添加</p>;
  return <><div className="detail-images">{images.map((src,i)=><button key={src+i} aria-label={`放大 ${title} 图片 ${i+1}`} onClick={e=>{
    trigger.current=e.currentTarget;setIndex(i);previousOverflow.current=document.body.style.overflow;
    dialog.current?.showModal();document.body.style.overflow='hidden';
  }}><MediaImage src={src} alt={`${title} ${i+1}`}/><span>点击放大 ↗</span></button>)}</div>
    <dialog ref={dialog} className="lightbox" aria-label="图片预览" onClick={e=>{if(e.target===e.currentTarget)dialog.current?.close();}} onKeyDown={e=>{
      if(e.key==='ArrowRight'){e.preventDefault();change(1);}
      if(e.key==='ArrowLeft'){e.preventDefault();change(-1);}
    }}><button className="close" autoFocus onClick={()=>dialog.current?.close()} aria-label="关闭图片预览">关闭 ×</button>
      <MediaImage src={images[index]} alt={`${title} ${index+1}`}/>
      <div className="lightbox-controls"><button disabled={images.length<2} onClick={()=>change(-1)}>← 上一张</button><span role="status">{index+1} / {images.length}</span><button disabled={images.length<2} onClick={()=>change(1)}>下一张 →</button></div>
    </dialog></>;
}
export function ContactActions({email}:{email:string}) {
  const [status,setStatus]=useState('');
  return <div className="copy-contact"><button disabled={!email} onClick={async()=>{
    try{await navigator.clipboard.writeText(email);setStatus('邮箱已复制');}catch{setStatus('复制失败，请手动选择邮箱');}
  }}>{email?'复制邮箱':'邮箱待填写'}</button><span role="status" className="copy-status">{status}</span></div>;
}
export function ResumeDownload({url,label='下载简历 ↓'}:{url:string;label?:string}) {
  return <div className="resume-download">{url?<a className="button" href={assetUrl(url)} download="李元伟-个人简历.pdf">{label}</a>:<button className="button" disabled>{label}</button>}
    <p className="muted" role="status">{url?'':'PDF 简历待提供，配置文件路径后启用下载。'}</p></div>;
}
