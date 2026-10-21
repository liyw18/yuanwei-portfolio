 'use client';
import {assetUrl} from '@/lib/asset-url';
import {useState} from 'react';
import Link from 'next/link';
import {designArtworks,artworkCategories,type ArtworkCategory} from '@/data/design-artworks';
import {MediaImage} from './Works';
import styles from './DesignArchive.module.css';
const labels:Record<ArtworkCategory,string>={POSTER:'海报设计',BANNER:'Banner设计','IP DESIGN':'IP形象设计',VI:'视觉识别设计'};
export default function DesignArchive(){const [category,setCategory]=useState<'ALL'|ArtworkCategory>('ALL');const works=designArtworks.filter(a=>category==='ALL'||a.category===category).sort((a,b)=>artworkCategories.indexOf(a.category)-artworkCategories.indexOf(b.category)||a.order-b.order);return <section className={styles.archive}><div className={styles.heading}><h1>设计作品档案</h1><span>{works.length} 件真实设计作品</span></div><nav className={styles.filters} aria-label="设计作品筛选">{(['ALL',...artworkCategories] as const).map(item=><button key={item} aria-pressed={category===item} onClick={()=>setCategory(item)}>{item==='ALL'?'全部':labels[item]}</button>)}</nav><div className={styles.grid}>{works.map(work=><Link href={`/design/${work.id}`} className={styles.card} key={work.id}><div className={styles.image} data-portrait={work.height>work.width}>{work.height>work.width&&<div className={styles.backdrop} style={{backgroundImage:`url("${assetUrl(work.image)}")`}} aria-hidden="true"/>}<MediaImage src={work.image} alt={`${labels[work.category]} ${String(work.order).padStart(2,'0')}`}/></div><div className={styles.info}><div><h2>{labels[work.category]} {String(work.order).padStart(2,'0')}</h2><p>{labels[work.category]} · {work.width} × {work.height}</p></div><span>查看案例 →</span></div></Link>)}</div></section>}
