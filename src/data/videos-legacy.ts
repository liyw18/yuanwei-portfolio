export const legacyVideoCategories = ['漫剧','仿真人剧','TVC','游戏','推广种草','短片','娱乐短视频'] as const;
import {emptyProduction,type VideoProject} from './videos';
export const legacyVideos: VideoProject[] = legacyVideoCategories.map((category,i)=>({id:`video-${i+1}`,slug:`sample-${i+1}`,title:`${category}作品 · 待添加`,category:({TVC:'TVC广告',漫剧:'漫剧',仿真人剧:'AI短剧',游戏:'游戏内容',推广种草:'创意短视频',短片:'创意短视频',娱乐短视频:'创意短视频'} as Record<string,string>)[category] as VideoProject['category'],description:'视频展示占位。添加真实视频、封面和项目介绍后即可播放。',duration:'待填写',year:'—',coverType:'custom',cover:`/works/video/sample-${i+1}/cover.svg`,preview:'',videoUrl:'',videoType:'mp4',role:'待填写实际参与职责',tools:[],featured:i<4,order:i,placeholder:true,width:null,height:null,aspectRatio:null,orientation:null,durationSeconds:null,video:'',series:'',region:'',episode:'',tags:[],production:emptyProduction(),assets:[]}));


