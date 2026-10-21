/** Resolve public resources for root hosting or a GitHub Pages project site.
 * Original project data and local media paths remain unchanged.
 */
export function assetUrl(src:string, options:{basePath?:string;videoReleaseBase?:string}={}):string {
 const base=(options.basePath??process.env.NEXT_PUBLIC_BASE_PATH??'').replace(/\/$/,'');
 const release=(options.videoReleaseBase??process.env.NEXT_PUBLIC_VIDEO_RELEASE_BASE_URL??'').replace(/\/$/,'');
 if(!src||!src.startsWith('/')||src.startsWith('//'))return src;
 if(release&&/^\/works\/video\/.+\.mp4$/i.test(src))return release+'/'+encodeURIComponent(src.slice(1).replaceAll('/','--'));
 if(base&&(src===base||src.startsWith(base+'/')))return src;
 return base+src;
}
