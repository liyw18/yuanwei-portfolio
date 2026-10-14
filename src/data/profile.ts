export interface Profile {
  name:string;title:string;hero:string[];introduction:string;
  tools:string[];exploringTools:string[];positioning:string[];avatar:string;summary:string[];skillGroups:{name:string;items:string[];tools:string[]}[];
  email:string;phone:string;location:string;resume:string;wechat:string;bilibili:string;
  platforms:{label:string;url:string}[];
  skills:{name:string;description:string}[];
  experience:{company:string;position:string;time:string;description:string;achievements?:string[]}[];
  education:{school:string;major:string;time:string;degree:string}[];
  siteUrl:string;placeholder?:boolean;
}
export const profile:Profile = {
  placeholder:false,
  name: '李元伟', title: 'AIGC视频制作师 / 视觉设计', hero: ['MAKE IDEAS', 'VISIBLE.'],
  introduction: '专注AI视觉设计、品牌视觉与视频内容创作。通过设计、影像与AI技术，将创意转化为完整视觉作品。',
  tools:['PS','AI','GPT','Seedance 2.5'],exploringTools:['After Effects','Adobe Premiere','Blender'],
  positioning:['AI Visual Designer','AIGC Video Producer','AIGC Content Creator'],avatar:'/assets/about/portrait-blue.png',
  summary:['专注AIGC视频制作与视觉设计。','以设计、影像与AI技术作为创意表达的主要媒介。','作品覆盖品牌视觉、IP形象、广告、漫剧与游戏内容。','用真实成片、设计图与制作档案展示创作思路和视觉呈现。'],
  skillGroups:[{name:'Design',items:['Brand Design','VI','Poster','Banner','IP Design'],tools:['PS','AI']},{name:'AI Production',items:['AI Video','Storyboard','Character Design'],tools:['GPT','Seedance 2.5']},{name:'Motion',items:['TVC','Short Film','Animation'],tools:[]}],
  email: '1129672958@qq.com', phone: '15910396984', location: 'Beijing', resume: '/resume/李元伟-个人简历.pdf', wechat: '', bilibili: '', platforms: [] as {label:string;url:string}[],
  skills: [{name:'视觉设计',description:'待填写：你的专业技能与擅长领域。'},{name:'影像创作',description:'待填写：制作流程与创作能力。'},{name:'创意表达',description:'待填写：常用工具与创作方法。'}],
  experience: [
    {time:'2025.02 - 2026.10',company:'北京慧墨金乌文化科技发展有限公司',position:'AIGC内容制作 / AI视觉设计',description:'负责AI内容生产流程搭建。参与AI剧集、短片、TVC广告、推广视频等内容创作。完成从策划、分镜、角色设计、视觉资产生成到视频后期制作的完整流程。'},
    {time:'2023.08 - 2025.01',company:'北京融创博信科技有限公司',position:'Java开发工程师',description:'负责企业系统开发与维护。技术开发经历帮助建立自动化思维，并辅助后续AI创作流程搭建。'},
    {time:'2016.08 - 2023.07',company:'北京兰亭妙微科技有限公司',position:'视觉设计师',description:'负责产品视觉设计与商业视觉输出。参与产品设计流程，积累视觉规范、品牌表达以及团队协作经验。'}
  ],
  education: [{school:'北京工业大学',major:'计算机科学与技术',time:'2020 - 2023',degree:''},{school:'北京科技大学延庆分校',major:'工程造价',time:'2013 - 2016',degree:''}],
  siteUrl: ''
};

