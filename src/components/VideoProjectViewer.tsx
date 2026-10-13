'use client';
import {useEffect,useState} from 'react';
import Link from 'next/link';
import ProjectTags from './ProjectTags';
import {useSearchParams} from 'next/navigation';
import {productionGroups} from '@/lib/video-production';
import type {VideoProject} from '@/data/videos';
import {VideoPlayer} from './VideoPlayer';
import styles from './VideoPresentation.module.css';
export default function VideoProjectViewer({project}:{project:VideoProject}){
 const clips=project.episodes?.length?project.episodes:[project];
 const query=useSearchParams().get('episode');const [index,setIndex]=useState(0);useEffect(()=>{setIndex(Math.max(0,clips.findIndex(clip=>String(clip.episode)===query)));},[query,project.slug]);const current=clips[index]||clips[0];const archive=productionGroups(project.production,project.assets);const assetLabels=archive.map(group=>group.title);
 const concept=project.slug==='lingmai-restart'?'《灵脉重启》是一部东方幻想题材的AI漫剧，通过人物塑造、场景设计与视觉叙事，呈现充满想象力的奇幻世界。':project.caseStudy?.overview||project.description;const roles=project.caseStudy?.roles.length?project.caseStudy.roles:project.role?[project.role]:[];
 return <><div className={styles.detailHero}><span className="eyebrow">01 / 项目名称</span><h1>{project.title}</h1><span className="eyebrow">项目类型</span><p>{project.category}</p>{concept&&<div><span className="eyebrow">项目介绍</span><p className={styles.positioning}>{concept}</p></div>}</div>{project.tags.length>0&&<div className={styles.detailTags}><span className="eyebrow">项目标签</span><ProjectTags tags={project.tags}/></div>}<VideoPlayer url={current.video||current.videoUrl} type={project.videoType} cover={current.cover||project.cover} width={current.width} height={current.height} aspectRatio={current.aspectRatio} orientation={current.orientation}/><div className={styles.backToVideo}><Link className="text-link" href="/video">← 返回视频作品</Link></div>
 {clips.length>1&&<div className={styles.episodes} role="group" aria-label="选择剧集">{clips.map((clip,i)=><button key={clip.id} aria-pressed={i===index} onClick={()=>setIndex(i)}>第{String(clip.episode).padStart(2,'0')}集<small>{clip.duration}</small></button>)}</div>}
 <section className={styles.projectInfo}><span className="eyebrow">02 / 案例概览</span><h2>项目信息</h2><dl data-fields={2+(roles.length?1:0)}><div><dt>类型</dt><dd>{project.category}</dd></div>{current.duration&&<div><dt>时长</dt><dd>{current.duration}</dd></div>}{roles.length>0&&<div><dt>职责</dt><dd>{roles.join(' / ')}</dd></div>}</dl></section>
 </>;
}
