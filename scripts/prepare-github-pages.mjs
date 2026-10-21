// Remove only exported MP4 copies; originals in public/ and Git LFS stay intact.
import {readdir,readFile,unlink,writeFile,mkdir,stat} from 'node:fs/promises';
import {resolve,join,relative} from 'node:path';
import {fileURLToPath} from 'node:url';
const root=resolve(fileURLToPath(new URL('..',import.meta.url))),out=join(root,'out');
if(!process.env.NEXT_PUBLIC_BASE_PATH||!process.env.NEXT_PUBLIC_VIDEO_RELEASE_BASE_URL)throw Error('Pages build environment is missing; refusing to remove media');
async function walk(dir){const result=[];for(const e of await readdir(dir,{withFileTypes:true})){const path=join(dir,e.name);if(e.isSymbolicLink())throw Error('Unexpected symlink');if(e.isDirectory())result.push(...await walk(path));else result.push(path);}return result;}
const files=await walk(out),videos=files.filter(p=>/\.mp4$/i.test(p));
const home=await readFile(join(out,'index.html'),'utf8');
if(!home.includes(process.env.NEXT_PUBLIC_BASE_PATH+'/_next/'))throw Error('Build does not contain the required Pages base path');
const js=files.filter(p=>p.endsWith('.js'));let mapped=false;for(const p of js)if((await readFile(p,'utf8')).includes(process.env.NEXT_PUBLIC_VIDEO_RELEASE_BASE_URL)){mapped=true;break;}
if(!mapped)throw Error('Release playback configuration not found in client bundle');
for(const path of videos){if(!path.startsWith(out+'/')&&!path.startsWith(out+'\\'))throw Error('Unsafe media path');await unlink(path);}
await writeFile(join(out,'.nojekyll'),'');let bytes=0;for(const path of await walk(out))bytes+=(await stat(path)).size;
if(bytes>=1_000_000_000)throw Error('Pages output is still above 1GB');
await mkdir(join(root,'reports/github-pages'),{recursive:true});
const report={bytes,removedExportCopies:videos.map(p=>relative(out,p).replaceAll('\\','/')),originalsUnchanged:true};
await writeFile(join(root,'reports/github-pages/build.json'),JSON.stringify(report,null,2));console.log(JSON.stringify({bytes,removedExportCopies:videos.length}));
