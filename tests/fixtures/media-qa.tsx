'use client';
import {useState} from 'react';
import {MediaImage,WorkCard} from '@/components/Works';
import {Lightbox,VideoPlayer,ResumeDownload} from '@/components/Interactions';
import {videos} from '@/data/videos';
export default function QA(){const [valid,setValid]=useState(false);const [videoCase,setVideoCase]=useState('missing');return <section className="section listing"><h1>TEST ONLY</h1>
  <button onClick={()=>setValid(v=>!v)}>切换图片资源</button><div data-testid="image-recovery"><MediaImage src={valid?'/works/design/sample-2.svg':'/__qa_v11/missing.svg'} alt="测试图片"/></div>
  <Lightbox title="测试图组" images={['/__qa_v11/missing.svg','/works/design/sample-2.svg']}/>
  <button onClick={()=>setVideoCase('broken')}>测试错误 MP4</button><button onClick={()=>setVideoCase('invalid')}>测试错误 B站链接</button><button onClick={()=>setVideoCase('missing')}>测试空视频</button>
  <VideoPlayer url={videoCase==='broken'?'/__qa_v11/missing.mp4':videoCase==='invalid'?'not-a-video':''} type={videoCase==='invalid'?'bilibili':'mp4'} cover="/__qa_v11/missing-cover.svg" width={null} height={null} aspectRatio={null} orientation={null}/>
  <div onClickCapture={event=>event.preventDefault()} data-testid="preview-failure"><WorkCard project={{...videos[0],preview:'/__qa_v11/missing-preview.mp4'}} kind="video"/></div>
  <div data-testid="resume-failure"><ResumeDownload url="/__qa_v11/missing.pdf"/></div>
  <div data-testid="resume-success"><ResumeDownload url="/__qa_v11/test.pdf"/></div>
</section>}
