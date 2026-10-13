'use client';
import {useEffect,useRef,useState,MouseEvent} from 'react';
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
  const [pending,setPending]=useState(false);
  const [status,setStatus]=useState('');
  async function download(event:MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();if(pending)return;
    setPending(true);setStatus('正在检查简历文件…');
    const controller=new AbortController();const timeout=setTimeout(()=>controller.abort(),10000);
    try {
      const response=await fetch(url,{method:'HEAD',signal:controller.signal});
      const mime=(response.headers.get('content-type')||'').toLowerCase();
      const pathname=new URL(url,location.href).pathname;
      if(!response.ok||!(mime.includes('application/pdf')||(mime.includes('application/octet-stream')&&/\.pdf$/i.test(pathname))))throw new Error('简历 PDF 暂不可用，请检查文件路径。');
      const link=document.createElement('a');link.href=url;link.download=pathname.split('/').pop()||'resume.pdf';
      document.body.append(link);link.click();link.remove();setStatus('已开始下载简历');
    } catch {setStatus('简历 PDF 暂不可用，请检查文件路径或访问权限。');}
    finally {clearTimeout(timeout);setPending(false);}
  }
  return <div className="resume-download">{url?<a className="button" href={url} download onClick={download} aria-disabled={pending}>{pending?'检查文件中…':label}</a>:<button className="button" disabled>{label}</button>}
    <p className="muted" role="status">{url?status:'PDF 简历待提供，配置文件路径后启用下载。'}</p></div>;
}

