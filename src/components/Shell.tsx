'use client';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {useEffect,useLayoutEffect,useRef,useState} from 'react';
import {profile} from '@/data/profile';
export function Shell({children}:{children:React.ReactNode}){
 const path=usePathname();const [activeHome,setActiveHome]=useState('HOME');const cursor=useRef<HTMLDivElement>(null);
 const restoringHistory=useRef<string|null>(null);
 useEffect(()=>{const restore=()=>{restoringHistory.current=location.pathname.replace(/\/$/,'')||'/';};window.addEventListener('popstate',restore);return()=>window.removeEventListener('popstate',restore);},[]);
 useLayoutEffect(()=>{
   const restored=restoringHistory.current===(path.replace(/\/$/,'')||'/');
   restoringHistory.current=null;
   if(restored)return;
   if(location.hash){try{document.getElementById(decodeURIComponent(location.hash.slice(1)))?.scrollIntoView({behavior:'instant'});}catch{window.scrollTo({top:0,behavior:'instant'});}}
   else window.scrollTo({top:0,behavior:'instant'});
 },[path]);
 useEffect(()=>{const media=matchMedia('(pointer:fine) and (prefers-reduced-motion:no-preference)');const move=(e:PointerEvent)=>{if(media.matches&&cursor.current){cursor.current.style.transform=`translate(${e.clientX}px,${e.clientY}px)`;cursor.current.style.opacity='1';cursor.current.classList.toggle('hover',!!(e.target as Element).closest('a,button'));}};const leave=()=>{if(cursor.current)cursor.current.style.opacity='0'};window.addEventListener('pointermove',move);document.addEventListener('pointerleave',leave);media.addEventListener('change',leave);return()=>{media.removeEventListener('change',leave);window.removeEventListener('pointermove',move);document.removeEventListener('pointerleave',leave)}},[]);
 useEffect(()=>{const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.08});document.querySelectorAll('.reveal').forEach(e=>observer.observe(e));return()=>observer.disconnect()},[path]);
 useEffect(()=>{if(path!=='/')return;const sections=[...document.querySelectorAll<HTMLElement>('[data-home-nav]')];const update=()=>{const reference=innerHeight*.35;let current=sections[0];for(const section of sections){if(section.getBoundingClientRect().top<=reference)current=section;}setActiveHome(current?.dataset.homeNav||'HOME');};const observer=new IntersectionObserver(update,{rootMargin:'-20% 0px -45% 0px',threshold:0});const handlers=sections.map(section=>{const enter=()=>setActiveHome(section.dataset.homeNav||'HOME');section.addEventListener('mouseenter',enter);observer.observe(section);return()=>section.removeEventListener('mouseenter',enter)});update();window.addEventListener('scroll',update,{passive:true});return()=>{observer.disconnect();handlers.forEach(cleanup=>cleanup());window.removeEventListener('scroll',update)}},[path]);
 return <><a className="skip" href="#main">跳到正文</a><header><Link className="brand" href="/" aria-label="返回首页">P<span>®</span></Link><nav aria-label="主导航">{['首页','设计','视频','关于'].map((n,i)=>{const route=['/','/design','/video','/about'][i];const href=path==='/'?['#home-intro','#design-works','#video-works','#about-preview'][i]:route;const active=path==='/'?activeHome===['HOME','DESIGN','VIDEO','ABOUT'][i]:(i===0?path==='/':path.startsWith(route));return <Link key={n} href={href} aria-current={active?(path==='/'?'location':'page'):undefined}>{n}</Link>})}</nav></header><main id="main" tabIndex={-1} key={path} className="page-enter">{children}</main>{path==='/'?<footer className="home-personal-footer"><div className="home-footer-identity"><strong>{profile.name}</strong><span>AI Visual Designer / AIGC Content Creator</span></div><span>© 2026 Yuanwei Li</span><a href="#main">返回顶部 ↑</a></footer>:<footer><div><span className="eyebrow">{path==='/'?'有合作项目？':'有合作项目？'}</span><Link className="contact-title" href="/about#contact">{path==='/'?'联系合作':'联系合作'} <span>↗</span></Link></div><div className="footer-bottom"><span>{profile.email||'邮箱待填写 · 联系信息尚未配置'}</span><span>© {new Date().getFullYear()} {profile.name}</span><a href="#main">{path==='/'?'返回顶部 ↑':'返回顶部 ↑'}</a></div></footer>}<div className="cursor" ref={cursor} aria-hidden="true"/></>
}




