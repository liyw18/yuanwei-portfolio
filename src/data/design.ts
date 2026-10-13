export const designCategories = ['POSTER','BANNER','IP DESIGN','VI','PORTFOLIO'] as const;
export type DesignCategory = typeof designCategories[number];
/** One entry is one project; images contains the ordered series, not list items. */
export interface DesignProject { id:string;slug:string;title:string;category:DesignCategory;year:string;description:string;cover:string;images:string[];featured:boolean;order:number;tags?:string[];placeholder?:boolean;coverAspectRatio?:number }
const placeholders:DesignProject[]=designCategories.filter(category=>category!=='PORTFOLIO').map((category,i)=>({id:`design-${i+1}`,slug:`sample-${i+1}`,title:['海报设计项目 · 待添加','Banner设计项目 · 待添加','IP设计项目 · 待添加','视觉识别项目 · 待添加'][i],category,year:'—',description:'项目资料待添加。此处为项目级展示结构，后续在 images 中配置该项目的完整系列作品。',cover:`/works/design/sample-${i+1}/cover.svg`,images:i===0?['/works/design/sample-1/cover.svg','/works/design/sample-1/images/02.svg']:[`/works/design/sample-${i+1}/cover.svg`],coverAspectRatio:[3/4,12/5,4/3,4/3][i],featured:true,order:i+1,tags:[category],placeholder:true}));
export const designs:DesignProject[]=[{
  id:'aigc-portfolio',
  // Retain the published V1.4 URL so existing project links continue to work.
  slug:'aigc-cover-test',
  title:'AIGC作品集',category:'PORTFOLIO',year:'2026',
  description:'AIGC作品集视觉项目。当前展示已提供的封面，系列作品与项目简介待补充。',
  cover:'/works/design/aigc-portfolio/cover.png',
  images:[
    '/works/design/aigc-portfolio/cover.png',
    // Add real files here in display order, e.g. banner-01.png, poster-01.png, vi-01.png.
    // Do not add nonexistent resource paths to the active array.
  ],
  tags:['AI','Portfolio','Visual Design'],coverAspectRatio:1672/941,featured:true,order:0,placeholder:false,
},...placeholders];





