import {readFile,writeFile,copyFile,mkdir} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import path from 'node:path';
const root=process.cwd();
const sourceDir=path.resolve(process.argv[2]||'../Design素材导入');
const manifest=JSON.parse(await readFile(path.join(sourceDir,'manifest.json'),'utf8'));
const categories=['POSTER','BANNER','IP DESIGN','VI'];
const folders={POSTER:'poster',BANNER:'banner','IP DESIGN':'ip',VI:'vi'};
const ids=new Set(),orders=new Set();
const checked=[];
for(const item of manifest.items){
  if(!categories.includes(item.category)||!Number.isInteger(item.order)||item.order<1)throw Error('Invalid category/order');
  const relative=item.file.replace(/^Design素材导入\//,'');
  const source=path.resolve(sourceDir,relative);
  if(!source.startsWith(sourceDir+path.sep))throw Error('Source outside import directory');
  const expectedUrl='/works/design/'+folders[item.category]+'/'+path.basename(source);
  if(item.url!==expectedUrl)throw Error('Manifest URL mismatch: '+item.file);
  const bytes=await readFile(source);
  const sha256=createHash('sha256').update(bytes).digest('hex');
  if(sha256!==item.sha256.toLowerCase())throw Error('SHA256 mismatch: '+source);
  if(bytes.subarray(0,8).toString('hex')!=='89504e470d0a1a0a'||bytes.readUInt32BE(16)!==item.width||bytes.readUInt32BE(20)!==item.height)throw Error('PNG dimensions mismatch: '+source);
  const id=path.basename(source,path.extname(source));const orderKey=item.category+':'+item.order;
  if(ids.has(id)||orders.has(orderKey))throw Error('Duplicate id/order');ids.add(id);orders.add(orderKey);
  checked.push({source,item,artwork:{id,category:item.category,image:item.url,order:item.order,width:item.width,height:item.height,sha256,sourceName:item.source,tags:({POSTER:['Visual Design','Poster'],BANNER:['Visual Design','Banner'],'IP DESIGN':['Visual Design','IP'],VI:['Brand','VI']})[item.category]}});
}
checked.sort((a,b)=>categories.indexOf(a.item.category)-categories.indexOf(b.item.category)||a.item.order-b.item.order);
for(const {source,item} of checked){const destination=path.join(root,'public',item.url);await mkdir(path.dirname(destination),{recursive:true});await copyFile(source,destination);const copied=await readFile(destination);if(createHash('sha256').update(copied).digest('hex')!==item.sha256.toLowerCase())throw Error('Copy hash mismatch');}
const header=`// Generated from the verified manifest. Original bytes are never transformed.
export const artworkCategories = ['POSTER','BANNER','IP DESIGN','VI'] as const;
export type ArtworkCategory = typeof artworkCategories[number];
export interface DesignArtwork {id:string;category:ArtworkCategory;image:string;order:number;width:number;height:number;sha256:string;sourceName:string;tags:string[]}
export const designArtworks:DesignArtwork[] = `;
const footer=`;
export const featuredDesignArtworks=artworkCategories.flatMap(category=>[...designArtworks].filter(p=>p.category===category).sort((a,b)=>a.order-b.order).slice(0,1));
export function artworkHref(artwork:DesignArtwork){return '/design?category='+encodeURIComponent(artwork.category)+'&artwork='+encodeURIComponent(artwork.id)+'#design-carousel';}
`;
await writeFile(path.join(root,'src/data/design-artworks.ts'),header+JSON.stringify(checked.map(p=>p.artwork),null,2)+footer);
await writeFile(path.join(root,'src/data/design-import-manifest.json'),JSON.stringify(manifest,null,2)+'\n');
console.log(JSON.stringify({total:checked.length,categories:Object.fromEntries(categories.map(c=>[c,checked.filter(p=>p.item.category===c).length])),sha256:'all matched'},null,2));
