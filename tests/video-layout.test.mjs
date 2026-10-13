import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFile,writeFile,mkdtemp,rm} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import path from 'node:path';
import ts from 'typescript';
import {metadata,probeMp4} from '../scripts/video-metadata.mjs';
const source=await readFile(new URL('../src/lib/video-layout.ts',import.meta.url),'utf8');
const {videoGroup,videoRatio,videoOrientation}=await import('data:text/javascript;base64,'+Buffer.from(ts.transpileModule(source,{compilerOptions:{module:ts.ModuleKind.ESNext}}).outputText).toString('base64'));
test('real dimensions drive groups independently of category, special and unknown remain distinct',()=>{
 for(const category of ['漫剧','TVC','游戏']){assert.equal(videoGroup({category,width:1920,height:1080,aspectRatio:null}),'landscape');assert.equal(videoGroup({category,width:1080,height:1920,aspectRatio:null}),'portrait');}
 assert.equal(videoGroup({width:1080,height:1080,aspectRatio:1}),'special');assert.equal(videoGroup({width:1440,height:1080,aspectRatio:4/3}),'landscape');assert.equal(videoGroup({width:null,height:null,aspectRatio:null}),'unknown');assert.equal(videoGroup({width:null,height:null,aspectRatio:9/16}),'portrait');assert.equal(videoRatio({width:941,height:1672,aspectRatio:null}),941/1672);assert.equal(videoOrientation(1080,1920),'portrait');
});
function atom(type,payload){const out=Buffer.alloc(payload.length+8);out.writeUInt32BE(out.length);out.write(type,4);payload.copy(out,8);return out;}
function mp4(width,height,rotate=false){const tk=Buffer.alloc(84);tk.writeInt32BE(rotate?0:65536,40);tk.writeInt32BE(rotate?65536:0,44);tk.writeInt32BE(rotate?-65536:0,52);tk.writeInt32BE(rotate?0:65536,56);tk.writeUInt32BE(width*65536,76);tk.writeUInt32BE(height*65536,80);const hd=Buffer.alloc(16);hd.write('vide',8);const md=Buffer.alloc(24);md.writeUInt32BE(1000,12);md.writeUInt32BE(12500,16);return atom('moov',Buffer.concat([atom('mvhd',md),atom('trak',Buffer.concat([atom('tkhd',tk),atom('mdia',Buffer.concat([atom('hdlr',hd),atom('mdhd',md)]))]))]));}
test('MP4 metadata reader extracts dimensions, container duration and rotated display orientation without decoding',async()=>{
 const dir=await mkdtemp(path.join(tmpdir(),'portfolio-video-test-'));try{for(const [w,h,rotated] of [[1920,1080,false],[1080,1920,false],[1920,1080,true],[1080,1080,false]]){const file=path.join(dir,'metadata-only.mp4');await writeFile(file,mp4(w,h,rotated));const actual=await probeMp4(file);assert.equal(actual.width,rotated?h:w);assert.equal(actual.height,rotated?w:h);assert.equal(actual.durationSeconds,12.5);assert.equal(actual.aspectRatio,actual.width/actual.height);}const bad=path.join(dir,'invalid.mp4');await writeFile(bad,Buffer.from('invalid'));await assert.rejects(()=>probeMp4(bad));}finally{await rm(dir,{recursive:true,force:true});}
});
test('missing or invalid metadata is rejected rather than guessed',()=>{for(const args of [[0,1080,10],[1920,1080,0],[NaN,1080,10]])assert.throws(()=>metadata(...args));});
