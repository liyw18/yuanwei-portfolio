'use client';
import {useEffect,useRef,useState} from 'react';
import {Lightbox} from '@/components/Interactions';
import {MediaImage} from './Works';
import {videoAssetLabels,type VideoAssetGroup,type VideoAssetType,type VideoProduction} from '@/data/videos';
import {ArchiveAudio,MarkdownFile} from './ArchiveMedia';
import styles from './VideoAssets.module.css';
import {productionGroups} from '@/lib/video-production';
const limits:Record<VideoAssetType,number>={characters:3,scenes:3,props:3,storyboards:6,keyframes:4,audio:1,script:1};
const names:Record<VideoAssetType,string>={characters:'角色设计',scenes:'场景设计',props:'道具设计',storyboards:'分镜',keyframes:'关键帧设计',audio:'音频',script:'剧本'};
export default function VideoAssets({groups:legacyGroups=[],production}:{groups?:VideoAssetGroup[];production?:VideoProduction}){
 // Storyboard source files remain in production data, but are excluded from this asset UI.
 const groups=productionGroups(production,legacyGroups).filter(group=>group.type!=='storyboards');const [expanded,setExpanded]=useState(false),[selected,setSelected]=useState<VideoAssetType|null>(null);const count=groups.reduce((sum,g)=>sum+g.images.length+(g.audio?.length||0)+(g.documents?.length||0),0);
 const content=useRef<HTMLDivElement>(null);useEffect(()=>{if(selected||expanded)content.current?.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion:reduce)').matches?'instant':'smooth',block:'start'});},[selected,expanded]);
 const visualGroups=groups.filter(group=>group.images.length>0),fileGroups=groups.filter(group=>!group.images.length);
 const shown=expanded?groups:groups.filter(g=>g.type===selected);
 if(!count)return null;
 return <section className={styles.assets} aria-label="视频制作资产"><span className="eyebrow">04 / 视觉开发</span><h2>视觉开发</h2>
 {visualGroups.length>0&&<div className={styles.archiveCards} data-columns={Math.min(visualGroups.length,2)}>{visualGroups.map(group=>{const total=group.images.length+(group.audio?.length||0)+(group.documents?.length||0);return <button className={styles.archiveCard} key={group.id} aria-pressed={selected===group.type} aria-controls="production-content" onClick={()=>{setSelected(group.type);setExpanded(false);}}><div className={styles.archiveCover}><MediaImage src={group.images[0]} alt={group.title}/></div><div className={styles.archiveMeta}><h3>{names[group.type]}</h3><p>{videoAssetLabels[group.type]}</p><span aria-hidden="true">查看视觉开发 ↗</span></div></button>;})}</div>}
 {fileGroups.length>0&&<div className={styles.archiveLinks}>{fileGroups.map(group=><button key={group.id} className={styles.archiveLink} aria-pressed={selected===group.type} aria-controls="production-content" onClick={()=>{setSelected(group.type);setExpanded(false);}}><div><h3>{names[group.type]}</h3><span>{videoAssetLabels[group.type]}</span></div><p>{group.type==='storyboards'?'查看分镜 →':group.type==='script'?'查看剧本 →':'播放或查看音频 →'}</p></button>)}</div>}
 <button aria-expanded={expanded} aria-controls="production-content" onClick={()=>{setExpanded(v=>!v);setSelected(null);}}>{expanded?'收起完整制作档案':'查看完整制作档案'}</button>
 <div ref={content} id="production-content" className={styles.productionContent}>{[...shown].sort((a,b)=>['script','characters','scenes','props','storyboards','keyframes','audio'].indexOf(a.type)-['script','characters','scenes','props','storyboards','keyframes','audio'].indexOf(b.type)).map(group=>{const images=expanded?group.images:group.images.slice(0,limits[group.type]);const audio=expanded?group.audio:group.audio?.slice(0,1),documents=expanded?group.documents:group.documents?.slice(0,1);return <article key={group.id} className={styles.group} aria-label={videoAssetLabels[group.type]}><span className="eyebrow">{names[group.type]}</span><h3>{group.title}</h3>{group.description&&<p className="muted">{group.description}</p>}{images.length>0&&<div className={styles.imageGallery} data-columns={Math.min(images.length,2)}><Lightbox images={images} title={group.title}/></div>}<div className={styles.mediaList}>{audio?.map(file=><ArchiveAudio key={file.id} file={file}/>)}{documents?.map(file=><MarkdownFile key={file.id} file={file} storyboard={group.type==='storyboards'} images={group.images}/>)}</div></article>;})}{expanded&&!count&&<p role="status">AI Video Production · 暂无真实制作资产。</p>}</div>
 </section>;
}
