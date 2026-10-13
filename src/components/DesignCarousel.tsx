'use client';
import {useEffect,useRef,useState,type CSSProperties} from 'react';
import {artworkCategories,designArtworks,type ArtworkCategory} from '@/data/design-artworks';
import {MediaImage} from '@/components/Works';
import ProjectTags from './ProjectTags';
import styles from './DesignCarousel.module.css';
const sorted=[...designArtworks].sort((a,b)=>artworkCategories.indexOf(a.category)-artworkCategories.indexOf(b.category)||a.order-b.order);
export default function DesignCarousel(){
  const [filter,setFilter]=useState('ALL');
  const [target,setTarget]=useState({id:'',revision:0});
  useEffect(()=>{const restore=()=>{const q=new URLSearchParams(location.search);const c=q.get('category')||'ALL';setFilter(artworkCategories.some(v=>v===c)?c:'ALL');setTarget(t=>({id:q.get('artwork')||'',revision:t.revision+1}));};restore();window.addEventListener('popstate',restore);return()=>window.removeEventListener('popstate',restore);},[]);
  function select(c:string){setFilter(c);const url=new URL(location.href);url.searchParams.set('category',c);url.searchParams.delete('artwork');history.replaceState(history.state,'',url);}
  function sync(c:ArtworkCategory,index:number){const list=sorted.filter(p=>p.category===c);const url=new URL(location.href);url.searchParams.set('category',filter);if(list[index])url.searchParams.set('artwork',list[index].id);history.replaceState(history.state,'',url);}
  return <div className={styles.carousel}>
    <div className="filters" role="group" aria-label="作品分类">{['ALL',...artworkCategories].map(c=><button key={c} aria-pressed={filter===c} aria-controls="design-carousel" onClick={()=>select(c)}>{c}<span>{c==='ALL'?sorted.length:sorted.filter(p=>p.category===c).length}</span></button>)}</div>
    <div id="design-carousel" className={styles.modules}>{artworkCategories.map((category,i)=><section key={category} hidden={filter!=='ALL'&&filter!==category} className={styles.module} aria-label={category+'作品'}>
      <div className={styles.moduleHeading}><h2>{String(i+1).padStart(2,'0')} / {category}<span>{sorted.filter(p=>p.category===category).length} WORKS</span></h2>{filter==='ALL'&&<button onClick={()=>select(category)}>VIEW CATEGORY ↗</button>}</div>
      <CategoryCarousel category={category} target={target} onChange={index=>sync(category,index)}/>
    </section>)}</div>
  </div>;
}
function CategoryCarousel({category,target,onChange}:{category:ArtworkCategory;target:{id:string;revision:number};onChange:(index:number)=>void}){
  const [index,setIndex]=useState(0);
  const [offset,setOffset]=useState(0);
  const gesture=useRef<{id:number;x:number;y:number;horizontal:boolean;dx:number}|null>(null);
  const suppressClick=useRef(false);
  const dialog=useRef<HTMLDialogElement>(null);
  const trigger=useRef<HTMLButtonElement|null>(null);
  const overflow=useRef('');
  const items=sorted.filter(p=>p.category===category);
  const current=items[index]||items[0];
  useEffect(()=>{const match=sorted.filter(p=>p.category===category).findIndex(p=>p.id===target.id);if(match>=0){setIndex(match);setOffset(0);}},[category,target]);
  useEffect(()=>{const element=dialog.current;const close=()=>{document.body.style.overflow=overflow.current;trigger.current?.focus();};element?.addEventListener('close',close);return()=>{element?.removeEventListener('close',close);if(element?.open)document.body.style.overflow=overflow.current;};},[]);
  function move(direction:number){if(!items.length)return;const next=(index+direction+items.length)%items.length;setIndex(next);setOffset(0);onChange(next);}
  function finish(cancel=false){const g=gesture.current;if(!g)return;gesture.current=null;suppressClick.current=g.horizontal;if(!cancel&&Math.abs(g.dx)>45)move(g.dx<0?1:-1);setOffset(0);}
  function open(button:HTMLButtonElement){if(suppressClick.current){suppressClick.current=false;return;}trigger.current=button;overflow.current=document.body.style.overflow;dialog.current?.showModal();document.body.style.overflow='hidden';}
  const label=current?`${current.category} ${String(index+1).padStart(2,'0')} / ${String(items.length).padStart(2,'0')}`:'暂无作品';
  return <div className={styles.carousel}>
    <div className={`${styles.stage} ${category==='POSTER'?styles.portrait:styles.landscape}`} role="region" aria-roledescription="轮播" aria-label={category+"轮播"} tabIndex={0} style={{'--main-ratio':current?current.width/current.height:16/9} as CSSProperties}
      onKeyDown={e=>{if(e.key==='ArrowLeft'||e.key==='ArrowRight'){e.preventDefault();move(e.key==='ArrowRight'?1:-1);}}}
      onPointerDown={e=>{suppressClick.current=false;if(e.button!==0||items.length<2)return;gesture.current={id:e.pointerId,x:e.clientX,y:e.clientY,horizontal:false,dx:0};}}
      onPointerMove={e=>{const g=gesture.current;if(!g||g.id!==e.pointerId)return;const dx=e.clientX-g.x,dy=e.clientY-g.y;if(!g.horizontal&&Math.abs(dy)>Math.abs(dx)&&Math.abs(dy)>10){gesture.current=null;setOffset(0);return;}g.dx=dx;if(Math.abs(dx)>10&&!g.horizontal){g.horizontal=true;e.currentTarget.setPointerCapture(e.pointerId);}if(g.horizontal)setOffset(Math.max(-160,Math.min(160,dx)));}}
      onPointerUp={()=>finish()} onPointerCancel={()=>finish(true)} onLostPointerCapture={()=>finish(true)}>
      <div className={styles.track} style={{transform:`translateX(${offset}px)`}} data-dragging={offset!==0}>
        {[-1,0,1].map(position=>{const artwork=items[(index+position+items.length)%items.length];if(!artwork||(position!==0&&items.length===1))return null;return <div key={position} className={`${styles.slide} ${position===0?styles.active:styles.neighbor}`} data-position={position} aria-hidden={position!==0} style={{'--ratio':artwork.width/artwork.height} as CSSProperties}>
          {position===0?<button className={styles.coverButton} aria-label={`放大 ${artwork.category} ${String(artwork.order).padStart(2,'0')}`} onClick={e=>open(e.currentTarget)}><MediaImage src={artwork.image} alt={`${artwork.category} ${String(artwork.order).padStart(2,'0')}`}/></button>:<MediaImage src={artwork.image} alt=""/>}
        </div>;})}
      </div>
    </div>
    <div className={styles.controls}><button aria-label={category+"上一作品"} disabled={items.length<2} onClick={()=>move(-1)}>←</button><span role="status" aria-live="polite">{label}</span><button aria-label={category+"下一作品"} disabled={items.length<2} onClick={()=>move(1)}>→</button></div>
{current&&<ProjectTags tags={current.tags}/>}
    <dialog ref={dialog} className={`lightbox ${styles.artworkDialog}`} aria-label={category+"高清作品预览"} onClick={e=>{if(e.target===e.currentTarget)dialog.current?.close();}} onKeyDown={e=>{if(e.key==='ArrowLeft'||e.key==='ArrowRight'){e.preventDefault();e.stopPropagation();move(e.key==='ArrowRight'?1:-1);}}}>
      <button className="close" autoFocus onClick={()=>dialog.current?.close()} aria-label="关闭作品预览">关闭 ×</button>
      {current&&<MediaImage src={current.image} alt={`${current.category} ${current.order}`}/>}
      <div className="lightbox-controls"><button disabled={items.length<2} onClick={()=>move(-1)}>← 上一张</button><span role="status">{label}</span><button disabled={items.length<2} onClick={()=>move(1)}>下一张 →</button></div>
    </dialog>
  </div>;
}
