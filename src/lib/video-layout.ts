import type {VideoProject,VideoOrientation} from '@/data/videos';
export function videoOrientation(width:number,height:number):VideoOrientation{return width===height?'square':width>height?'landscape':'portrait';}
export function videoRatio(video:Pick<VideoProject,'width'|'height'|'aspectRatio'>):number|null{
  if(video.width&&video.height&&video.width>0&&video.height>0)return video.width/video.height;
  return video.aspectRatio&&video.aspectRatio>0?video.aspectRatio:null;
}
export const videoGroupLabels={landscape:'横屏视频',portrait:'竖屏视频',special:'方形 / 特殊比例视频',unknown:'画幅待确认'} as const;
export type VideoGroup=keyof typeof videoGroupLabels;
export function videoGroup(video:Pick<VideoProject,'width'|'height'|'aspectRatio'>):VideoGroup{
  const ratio=videoRatio(video);if(!ratio)return 'unknown';
  return ratio===1?'special':ratio>1?'landscape':'portrait';
}
