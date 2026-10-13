import {readFile,access} from 'node:fs/promises';
import path from 'node:path';
import {createHash} from 'node:crypto';
import {createReadStream} from 'node:fs';
import {probeVideo} from './video-metadata.mjs';
import ts from 'typescript';
const root=process.cwd();
async function data(name){const text=await readFile(path.join(root,'src/data',name+'.ts'),'utf8');const js=ts.transpileModule(text,{compilerOptions:{module:ts.ModuleKind.ESNext,target:ts.ScriptTarget.ES2020}}).outputText;return import('data:text/javascript;base64,'+Buffer.from(js).toString('base64'));}
const {designs,designCategories}=await data('design');const {videos,videoCategories,videoAssetTypes}=await data('videos');const {profile}=await data('profile');
const {designArtworks,artworkCategories}=await data('design-artworks');
const {designCases,selectedDesignCaseIds,selectedVideoCaseSlugs}=await data('design-cases');
const manifest=JSON.parse(await readFile(path.join(root,'src/data/design-import-manifest.json'),'utf8'));
const errors=[];
const manifestRows=new Map(manifest.items.map(p=>[p.url,p]));
if(designArtworks.length!==manifest.items.length)errors.push('正式作品数量与manifest不同');
const artworkIds=new Set(),artworkOrders=new Set();
let previous=-1;
for(const artwork of designArtworks){
  const categoryIndex=artworkCategories.indexOf(artwork.category);
  const sortKey=categoryIndex*100000+artwork.order;
  if(categoryIndex<0||!Number.isInteger(artwork.order)||artwork.order<1||sortKey<=previous)errors.push('作品分类/顺序错误 '+artwork.id);
  previous=sortKey;
  if(artworkIds.has(artwork.id)||artworkOrders.has(artwork.category+':'+artwork.order))errors.push('重复作品 '+artwork.id);
  artworkIds.add(artwork.id);artworkOrders.add(artwork.category+':'+artwork.order);
  await resource(artwork.image,artwork.id+' image');
  const expected=manifestRows.get(artwork.image);
  if(!expected||expected.category!==artwork.category||expected.order!==artwork.order||expected.width!==artwork.width||expected.height!==artwork.height||expected.sha256.toLowerCase()!==artwork.sha256)errors.push('作品数据与manifest不同 '+artwork.id);
  if(artwork.width<=0||artwork.height<=0)errors.push('作品尺寸无效 '+artwork.id);
  try{const bytes=await readFile(path.join(root,'public',artwork.image));if(createHash('sha256').update(bytes).digest('hex')!==artwork.sha256)errors.push('作品SHA256不匹配 '+artwork.id);if(bytes.subarray(0,8).toString('hex')!=='89504e470d0a1a0a'||bytes.readUInt32BE(16)!==artwork.width||bytes.readUInt32BE(20)!==artwork.height)errors.push('实际PNG尺寸不匹配 '+artwork.id);}catch{errors.push('读取作品失败 '+artwork.id);}
}
async function resource(value,label,optional=false){if(!value){if(!optional)errors.push(label+': 缺少路径');return;}if(/^https:\/\//.test(value))return;if(!value.startsWith('/')){errors.push(label+': 本地路径须以/开头');return;}const base=path.join(root,'public');const target=path.resolve(base,'.'+value);if(!target.startsWith(base+path.sep)){errors.push(label+': 路径越界');return;}try{await access(target);}catch{errors.push(label+': 文件不存在 '+value);}}
async function projects(items,categories,kind){const ids=new Set(),slugs=new Set();for(const p of items){if(ids.has(p.id)||slugs.has(p.slug))errors.push(kind+': id/slug重复 '+p.slug);ids.add(p.id);slugs.add(p.slug);if(!p.id||!/^[-a-z0-9]+$/.test(p.slug))errors.push(kind+': id/slug格式错误');if(!categories.includes(p.category))errors.push(p.slug+': 分类无效');if(!p.title||(kind==='design'&&!p.description)||!Number.isFinite(p.order)||typeof p.featured!=='boolean')errors.push(p.slug+': 项目信息无效');await resource(p.cover,p.slug+' cover',kind==='video');if(kind==='video'&&!['auto','custom'].includes(p.coverType))errors.push(p.slug+': coverType无效');if(kind==='design'){if(!Array.isArray(p.images))errors.push(p.slug+': images须为数组');else for(const src of p.images)await resource(src,p.slug+' images');if(p.coverAspectRatio!==undefined&&!(Number.isFinite(p.coverAspectRatio)&&p.coverAspectRatio>0))errors.push(p.slug+': 比例无效');}else{
const hasWidth=p.width!==null&&p.width!==undefined,hasHeight=p.height!==null&&p.height!==undefined;
if(hasWidth!==hasHeight||(hasWidth&&(!Number.isFinite(p.width)||p.width<=0||!Number.isFinite(p.height)||p.height<=0)))errors.push(p.slug+': 视频宽高须同时为正值或null');
const ratio=hasWidth&&hasHeight?p.width/p.height:p.aspectRatio;
if(p.aspectRatio!=null&&(!Number.isFinite(p.aspectRatio)||p.aspectRatio<=0||(hasWidth&&Math.abs(p.aspectRatio-ratio)>.0001)))errors.push(p.slug+': 视频比例与宽高不一致');
const expected=ratio?ratio===1?'square':ratio>1?'landscape':'portrait':null;
if(hasWidth&&p.aspectRatio==null)errors.push(p.slug+': 真实尺寸必须同时配置aspectRatio');
if(p.metadataSource==='file'&&(!hasWidth||p.durationSeconds==null))errors.push(p.slug+': 文件元数据须包含宽高和时长');
if(p.orientation!==expected)errors.push(p.slug+': 视频方向与真实比例不一致');
if(p.durationSeconds!=null&&(!Number.isFinite(p.durationSeconds)||p.durationSeconds<=0))errors.push(p.slug+': 视频时长无效');
if(p.videoUrl&&!p.placeholder&&(!ratio||!p.metadataSource))errors.push(p.slug+': 真实视频需要文件测量或真实资料配置比例');
if(p.metadataSource&&!['file','manual'].includes(p.metadataSource))errors.push(p.slug+': 元数据来源无效');
await resource(p.preview,p.slug+' preview',true);if(p.videoType==='mp4')await resource(p.videoUrl,p.slug+' video',true);const groups=new Set();for(const g of p.assets||[]){if(groups.has(g.id)||!g.id)errors.push(p.slug+': 资产组id错误');groups.add(g.id);if(!videoAssetTypes.includes(g.type)||!g.title||!Number.isFinite(g.order)||!Array.isArray(g.images))errors.push(p.slug+': 资产组结构错误');else for(const src of g.images)await resource(src,p.slug+' asset '+g.id);for(const file of [...(g.audio||[]),...(g.documents||[])]){if(!file.id||!file.title)errors.push(p.slug+': 制作档案文件信息缺失');await resource(file.src,p.slug+' archive '+file.id);} }}}}
await projects(designs,designCategories,'design');await projects(videos,videoCategories,'video');await resource(profile.resume,'resume',true);await resource(profile.wechat,'wechat',true);
const videoManifest=JSON.parse(await readFile(path.join(root,'src/data/video-import-manifest.json'),'utf8'));
const clipRows=videos.flatMap(project=>project.episodes?.length?project.episodes:[project]);
if(clipRows.length!==videoManifest.items.length)errors.push('视频段数与导入清单不一致');
const uniqueVideoPaths=new Set();
for(const project of videos){let last=-Infinity;const ids=new Set();for(const clip of project.episodes||[]){if(ids.has(clip.id)||Number(clip.episode)<=last)errors.push(project.slug+': 集数重复或顺序错误');ids.add(clip.id);last=Number(clip.episode);if(clip.video!==clip.videoUrl)errors.push(clip.id+': video别名不一致');await resource(clip.video,clip.id+' episode');}}
async function hashMedia(file){const hasher=createHash('sha256');for await(const chunk of createReadStream(file))hasher.update(chunk);return hasher.digest('hex');}
for(const row of videoManifest.items){const clip=clipRows.find(p=>p.video===row.video);if(!clip||uniqueVideoPaths.has(row.video)){errors.push('视频清单缺失或重复 '+row.video);continue;}uniqueVideoPaths.add(row.video);const target=path.join(root,'public',row.video);try{if(await hashMedia(target)!==row.sha256)errors.push('视频SHA256不匹配 '+row.video);const actual=await probeVideo(target);if(clip.width!==actual.width||clip.height!==actual.height||clip.orientation!==actual.orientation||clip.aspectRatio!==actual.aspectRatio||Math.abs((clip.durationSeconds||0)-actual.durationSeconds)>.01)errors.push('真实视频元数据不一致 '+row.video);}catch(error){errors.push(row.video+': '+error.message);}}
const productionKeys=['script','characters','environments','props','storyboards','keyframes','audio'];
for(const project of videos){const production=project.production;if(!production||productionKeys.some(key=>!Array.isArray(production[key]))){errors.push(project.slug+': production结构缺失');continue;}const files=Object.values(production).flat();const paths=new Set();for(const file of files){if(!file.id||!file.title||!['image','document','audio'].includes(file.kind)||paths.has(file.src))errors.push(project.slug+': production文件信息无效或重复');paths.add(file.src);await resource(file.src,project.slug+' production');if(!videoManifest.assetFiles?.some(row=>row.src===file.src&&row.project===project.slug))errors.push(project.slug+': production与资产清单不一致');}const compatibility=(project.assets||[]).flatMap(group=>[...group.images,...(group.audio||[]).map(file=>file.src),...(group.documents||[]).map(file=>file.src)]);if(compatibility.length!==files.length||compatibility.some(src=>!paths.has(src)))errors.push(project.slug+': production与兼容assets未同步');}
for(const row of videoManifest.assetFiles||[])try{if(await hashMedia(path.join(root,'public',row.src))!==row.sha256)errors.push('制作资产SHA256不一致 '+row.src);}catch{errors.push('缺少制作资产 '+row.src);}
for(const row of videoManifest.coverFiles||[])try{await resource(row.cover,'generated cover');if(row.sha256&&await hashMedia(path.join(root,'public',row.cover))!==row.sha256)errors.push('封面SHA256不一致 '+row.cover);const clip=clipRows.find(p=>p.video===row.video);if(!clip||clip.cover!==row.cover)errors.push('封面配置与清单不一致 '+row.video);if(row.coverType!=='custom'&&row.width&&row.height&&clip?.width&&Math.abs(row.width/row.height-clip.width/clip.height)>.003)errors.push('封面比例不一致 '+row.video);}catch{errors.push('缺少封面 '+row.cover);}
function tags(value,label){if(!Array.isArray(value)||value.some(tag=>typeof tag!=='string'||!tag.trim())||new Set(value).size!==value.length)errors.push(label+': Tags无效');}
for(const artwork of designArtworks)tags(artwork.tags,artwork.id);
for(const video of videos){tags(video.tags,video.slug);if(video.caseStudy&&(!Array.isArray(video.caseStudy.roles)||!Array.isArray(video.caseStudy.process)||typeof video.caseStudy.overview!=='string'||typeof video.caseStudy.outcome!=='string'))errors.push(video.slug+': Case Study结构无效');}
const caseSlugs=new Set();for(const project of designCases){if(caseSlugs.has(project.slug)||designs.some(p=>p.slug===project.slug)||!/^[-a-z0-9]+$/.test(project.slug))errors.push('案例slug重复/无效 '+project.slug);caseSlugs.add(project.slug);if(!project.artworkIds.length||project.artworkIds.some(id=>!designArtworks.some(a=>a.id===id)))errors.push(project.slug+': 案例素材引用无效');tags(project.tags,project.slug);if(!Array.isArray(project.role)||!Array.isArray(project.tools))errors.push(project.slug+': 案例信息无效');}
if(selectedDesignCaseIds.length!==2||selectedDesignCaseIds.some(id=>!designCases.some(c=>c.id===id)))errors.push('首页设计案例引用无效');
if(selectedVideoCaseSlugs.length!==2||selectedVideoCaseSlugs.some(slug=>!videos.some(v=>v.slug===slug)))errors.push('首页视频案例引用无效');
await resource(profile.avatar,'avatar',true);if(!profile.name||!Array.isArray(profile.tools)||profile.positioning?.length!==3)errors.push('个人定位结构无效');
if(errors.length){console.error(errors.join('\n'));process.exitCode=1;}else console.log(`内容检查通过：${designArtworks.length}张真实作品（SHA256与尺寸通过），${designs.length}个兼容旧项目，${videos.length}个视频项目、${clipRows.length}段真实视频（视频SHA256及元数据通过）。本地文件存在、分类和唯一标识有效；外部资源仅检查配置，不验证远程可用性。`);

