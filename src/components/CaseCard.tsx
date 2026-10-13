import Link from 'next/link';
import {profile} from '@/data/profile';
import {MediaImage} from './Works';
import ProjectTags from './ProjectTags';
import styles from './Portfolio.module.css';
export default function CaseCard({title,category,image,href,role=[],tools=[],tags=[]}:{title:string;category:string;image:string;href:string;role?:string[];tools?:string[];tags?:string[]}){return <article className={styles.caseCard}><Link href={href} className={styles.caseVisual} aria-label={`查看案例：${title}`}><MediaImage src={image} alt={title}/></Link><div className={styles.caseBody}><span className="eyebrow">{category} / CASE STUDY</span><h3><Link href={href}>{title}</Link></h3><ProjectTags tags={tags}/><dl><div><dt>{role.length?'我的职责':'职责方向'}</dt><dd>{role.length?role.join(' / '):profile.title}</dd></div><div><dt>{tools.length?'项目工具':'个人常用工具'}</dt><dd>{(tools.length?tools:profile.tools).join(' / ')}</dd></div></dl>{(!role.length||!tools.length)&&<p className={styles.pendingNote}>项目分工与工具用法待补充</p>}<Link className="text-link" href={href}>VIEW CASE STUDY ↗</Link></div></article>;}
