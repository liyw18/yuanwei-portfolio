'use client';
// Development QA only. Never included in the production project data or route table.
import {Gallery} from '@/components/Works';
import {VideoPlayer} from '@/components/VideoPlayer';
import VideoAssets from '@/components/VideoAssets';
import {videos,type VideoProject} from '@/data/videos';
const cases:VideoProject[]=[{...videos[0],id:'qa-landscape',slug:'qa-landscape',category:'TVC广告',title:'布局测试 / 横屏占位',width:1920,height:1080,aspectRatio:16/9,orientation:'landscape',durationSeconds:null},{...videos[0],id:'qa-portrait',slug:'qa-portrait',category:'TVC广告',title:'布局测试 / 竖屏占位',width:1080,height:1920,aspectRatio:9/16,orientation:'portrait',durationSeconds:null},{...videos[0],id:'qa-square',slug:'qa-square',category:'TVC广告',title:'布局测试 / 方形占位',width:1080,height:1080,aspectRatio:1,orientation:'square',durationSeconds:null}];
export default function QA(){return <section className="section listing"><h1>视频布局测试</h1><p>仅测试画幅参数，不是真实作品或视频。</p><Gallery kind="video" videoProjects={cases}/>{cases.map(p=><section key={p.id} data-testid={p.id}><h2>{p.title}</h2><VideoPlayer url="" type="mp4" cover={p.cover} width={p.width} height={p.height} aspectRatio={p.aspectRatio} orientation={p.orientation}/></section>)}<section data-testid="qa-bilibili-unknown"><h2>B站画幅缺失测试</h2><VideoPlayer url="BV1xx411c7mD" type="bilibili" cover="" width={null} height={null} aspectRatio={null} orientation={null}/></section><section data-testid="qa-mp4-error"><h2>失效MP4降级测试</h2><VideoPlayer url="/qa-video-v21/missing.mp4" type="mp4" cover="" width={1080} height={1920} aspectRatio={9/16} orientation="portrait"/></section><VideoAssets groups={[{id:'qa-asset',type:'storyboards',title:'资产布局测试 / 已有占位图',description:'仅验证资产模块',images:[videos[0].cover],order:1}]}/></section>}

