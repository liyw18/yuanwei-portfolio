import 'server-only';
import {existsSync,statSync} from 'node:fs';
import path from 'node:path';
import type {VideoProject} from '@/data/videos';
function localFile(url:string){if(!url||!url.startsWith('/')||url.startsWith('//'))return false;const root=path.resolve(process.cwd(),'public');const file=path.resolve(root,'.'+decodeURIComponent(url));if(!file.startsWith(root+path.sep))return false;try{return existsSync(file)&&statSync(file).isFile()&&statSync(file).size>0;}catch{return false;}}
export function completeVideo(project:VideoProject){if(project.placeholder||!localFile(project.cover))return false;const clips=project.episodes?.length?project.episodes:[project];return clips.every(clip=>localFile(clip.video||clip.videoUrl)&&localFile(clip.cover||project.cover));}
