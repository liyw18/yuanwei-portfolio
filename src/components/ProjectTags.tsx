import styles from './Portfolio.module.css';
const labels:Record<string,string>={'Visual Design':'视觉设计',Brand:'品牌',Motion:'动态影像',Storyboard:'分镜',Animation:'动画',Game:'游戏','Character Design':'角色设计',Poster:'海报',Banner:'Banner设计',POSTER:'海报',BANNER:'Banner设计','IP DESIGN':'IP设计',VI:'视觉识别'};
export default function ProjectTags({tags}:{tags:string[]}){return tags.length?<ul className={styles.tags} aria-label="项目标签">{[...new Set(tags)].map(tag=><li key={tag}>{labels[tag]||tag}</li>)}</ul>:null;}
