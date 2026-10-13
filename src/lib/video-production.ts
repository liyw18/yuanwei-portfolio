import {videoAssetLabels,type VideoProduction,type VideoAssetGroup,type VideoAssetType} from '@/data/videos';
/** Production is canonical; old assets groups are accepted for retained legacy routes. */
export function productionGroups(production?:VideoProduction,fallback:VideoAssetGroup[]=[]):VideoAssetGroup[]{
 if(!production)return fallback.map(group=>({...group,images:group.images.filter(src=>src.trim()),audio:group.audio?.filter(file=>file.src?.trim()),documents:group.documents?.filter(file=>file.src?.trim())})).filter(group=>group.images.length||(group.audio?.length||0)+(group.documents?.length||0));
 const types:VideoAssetType[]=['characters','scenes','props','storyboards','keyframes','script','audio'];
 return types.flatMap((type,order)=>{const files=(production[type==='scenes'?'environments':type]||[]).filter(file=>file.src?.trim()&&['image','document','audio'].includes(file.kind));return files.length?[{id:type,type,title:videoAssetLabels[type],description:'',order:order+1,images:files.filter(f=>f.kind==='image').map(f=>f.src),audio:files.filter(f=>f.kind==='audio'),documents:files.filter(f=>f.kind==='document')}]:[];});
}
