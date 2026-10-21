import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import ts from 'typescript';
const source=await readFile(new URL('../src/lib/asset-url.ts',import.meta.url),'utf8');
const {assetUrl}=await import('data:text/javascript;base64,'+Buffer.from(ts.transpileModule(source,{compilerOptions:{module:ts.ModuleKind.ESNext}}).outputText).toString('base64'));
test('project hosting resolves images, resume, audio and documents without double-prefixing',()=>{
 const opts={basePath:'/yuanwei-portfolio',videoReleaseBase:''};
 for(const path of ['/assets/about/portrait-blue.png','/resume/李元伟-个人简历.pdf','/works/video/demo/assets/script.md','/works/video/demo/audio.wav'])assert.equal(assetUrl(path,opts),opts.basePath+path);
 assert.equal(assetUrl('/yuanwei-portfolio/works/test.png',opts),'/yuanwei-portfolio/works/test.png');
 for(const path of ['https://example.com/a.mp4','//example.com/a.png','', '#main'])assert.equal(assetUrl(path,opts),path);
 assert.equal(assetUrl('/works/test.png',{basePath:'',videoReleaseBase:''}),'/works/test.png');
});
test('release media mapping keeps identically named episodes in different projects separate',()=>{
 const opts={basePath:'/yuanwei-portfolio',videoReleaseBase:'https://github.com/liyw18/yuanwei-portfolio/releases/download/portfolio-media-v1'};
 assert.equal(assetUrl('/works/video/lingmai-restart/episodes/episode-01.mp4',opts),opts.videoReleaseBase+'/works--video--lingmai-restart--episodes--episode-01.mp4');
 assert.notEqual(assetUrl('/works/video/a/video.mp4',opts),assetUrl('/works/video/b/video.mp4',opts));
 assert.equal(assetUrl('/works/video/a/cover.jpg',opts),opts.basePath+'/works/video/a/cover.jpg');
});
