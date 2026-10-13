import {open} from 'node:fs/promises';
import {execFile} from 'node:child_process';
import {promisify} from 'node:util';
import {pathToFileURL} from 'node:url';
const run=promisify(execFile);
export function metadata(width,height,durationSeconds){
  if(!Number.isFinite(width)||!Number.isFinite(height)||width<=0||height<=0||!Number.isFinite(durationSeconds)||durationSeconds<=0)throw new Error('无法读取有效的视频尺寸和时长');
  const seconds=Math.round(durationSeconds),minutes=Math.floor(seconds/60);
  return {width,height,aspectRatio:width/height,orientation:width===height?'square':width>height?'landscape':'portrait',durationSeconds,duration:`${minutes}:${String(seconds%60).padStart(2,'0')}`,metadataSource:'file'};
}
async function bytes(handle,position,length){const buffer=Buffer.alloc(length);const {bytesRead}=await handle.read(buffer,0,length,position);if(bytesRead!==length)throw new Error('视频文件不完整');return buffer;}
async function atoms(handle,start,end){const list=[];for(let at=start;at<end;){if(end-at<8)throw new Error('损坏的MP4 atom');const header=await bytes(handle,at,8);let size=header.readUInt32BE(0),prefix=8;const type=header.toString('ascii',4,8);if(size===1){const n=(await bytes(handle,at+8,8)).readBigUInt64BE();if(n>BigInt(Number.MAX_SAFE_INTEGER))throw new Error('文件过大');size=Number(n);prefix=16;}if(size===0)size=end-at;if(size<prefix||at+size>end)throw new Error('损坏的MP4 atom尺寸');list.push({type,start:at+prefix,end:at+size});at+=size;}return list;}
function duration(buffer){const version=buffer[0];if(version!==0&&version!==1)throw new Error('不支持的媒体时间版本');const timescale=buffer.readUInt32BE(version===1?20:12);const value=version===1?Number(buffer.readBigUInt64BE(24)):buffer.readUInt32BE(16);if(!timescale)throw new Error('媒体时间基准无效');return value/timescale;}
export async function probeMp4(file){
  const handle=await open(file,'r');try{
    const root=await atoms(handle,0,(await handle.stat()).size);const moov=root.find(a=>a.type==='moov');if(!moov)throw new Error('没有MP4媒体信息；请使用ffprobe检查其他格式');
    const movie=await atoms(handle,moov.start,moov.end);
    let trackInfo=null;
    for(const track of movie.filter(a=>a.type==='trak')){const children=await atoms(handle,track.start,track.end);const mdia=children.find(a=>a.type==='mdia'),tkhd=children.find(a=>a.type==='tkhd');if(!mdia||!tkhd)continue;const media=await atoms(handle,mdia.start,mdia.end);const hdlr=media.find(a=>a.type==='hdlr'),mdhd=media.find(a=>a.type==='mdhd');if(!hdlr||!mdhd)continue;const h=await bytes(handle,hdlr.start,Math.min(16,hdlr.end-hdlr.start));if(h.toString('ascii',8,12)!=='vide')continue;
      const t=await bytes(handle,tkhd.start,Math.min(96,tkhd.end-tkhd.start));if(t[0]!==0&&t[0]!==1)throw new Error('不支持的MP4轨道版本');const shift=t[0]===1?12:0;let width=t.readUInt32BE(76+shift)/65536,height=t.readUInt32BE(80+shift)/65536;
      const a=t.readInt32BE(40+shift),b=t.readInt32BE(44+shift),c=t.readInt32BE(52+shift),d=t.readInt32BE(56+shift);if(a===0&&d===0&&Math.abs(b)===65536&&Math.abs(c)===65536)[width,height]=[height,width];else if(Math.abs(a)!==65536||Math.abs(d)!==65536||b!==0||c!==0)throw new Error('复杂视频变换矩阵，请使用ffprobe或真实资料确认显示尺寸');
      const md=await bytes(handle,mdhd.start,Math.min(40,mdhd.end-mdhd.start));trackInfo={width,height,duration:duration(md)};break;
    }
    if(!trackInfo)throw new Error('没有可读取的视频轨道');const mvhd=movie.find(a=>a.type==='mvhd');const seconds=mvhd?duration(await bytes(handle,mvhd.start,Math.min(40,mvhd.end-mvhd.start))):trackInfo.duration;
    return metadata(trackInfo.width,trackInfo.height,seconds);
  }finally{await handle.close();}
}
export async function probeVideo(file){
  try{const {stdout}=await run(process.env.FFPROBE_PATH||'ffprobe',['-v','error','-select_streams','v:0','-show_entries','stream=width,height,duration,sample_aspect_ratio:stream_tags=rotate:stream_side_data=rotation:format=duration','-of','json',file],{maxBuffer:1024*1024});const result=JSON.parse(stdout),v=result.streams?.[0];if(!v)throw new Error('没有视频轨道');let width=Number(v.width),height=Number(v.height);const sar=v.sample_aspect_ratio?.split(':').map(Number);if(sar?.[0]>0&&sar?.[1]>0)width*=sar[0]/sar[1];const rotation=Number(v.side_data_list?.find(x=>x.rotation!==undefined)?.rotation??v.tags?.rotate??0);if(Math.abs(rotation)%180===90)[width,height]=[height,width];else if(Math.abs(rotation)%180!==0)throw new Error('非直角旋转需确认真实显示尺寸');return metadata(width,height,Number(result.format?.duration??v.duration));}
  catch(error){if(error.code!=='ENOENT')throw error;return probeMp4(file);}
}
if(process.argv[1]&&import.meta.url===pathToFileURL(process.argv[1]).href){try{if(!process.argv[2])throw new Error('用法：node scripts/video-metadata.mjs "真实视频完整路径"');console.log(JSON.stringify(await probeVideo(process.argv[2]),null,2));}catch(error){console.error(error.message);process.exitCode=1;}}
