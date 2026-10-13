import filmStyles from '@/components/VideoPortfolio.module.css';
import {Suspense} from 'react';
import VideoCaseStudy from '@/components/VideoCaseStudy';
import VideoAssets from '@/components/VideoAssets';
import VideoProjectViewer from '@/components/VideoProjectViewer';
import {notFound} from 'next/navigation';
import {videos} from '@/data/videos';
import {legacyVideos} from '@/data/videos-legacy';
const routes=[...videos,...legacyVideos];
export function generateStaticParams(){return routes.map(p=>({slug:p.slug}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const {slug}=await params;return {title:routes.find(p=>p.slug===slug)?.title||'Video'};}
export default async function Page({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const project=routes.find(p=>p.slug===slug);if(!project)notFound();return <section className={`section listing detail ${filmStyles.detail}`}><Suspense fallback={<p role="status">正在加载视频项目…</p>}><VideoProjectViewer project={project}/></Suspense><VideoCaseStudy project={project}/><VideoAssets production={project.production} groups={project.assets}/>{Boolean(project.video||project.videoUrl)&&<section className={filmStyles.outcome}><span className="eyebrow">05 / 项目成果</span><h2>最终成果</h2>{project.caseStudy?.outcome&&project.caseStudy.outcome!==(project.caseStudy?.overview||project.description)&&<p>{project.caseStudy.outcome}</p>}<dl><div><dt>项目类型</dt><dd>{project.category}</dd></div>{project.duration&&<div><dt>时长</dt><dd>{project.duration}</dd></div>}<div><dt>作品输出</dt><dd>{project.episodes?.length?`${project.episodes.length} 集完整视频`:'完整视频'}{project.width&&project.height?` · ${project.width} × ${project.height}`:''}</dd></div></dl></section>}</section>;}
