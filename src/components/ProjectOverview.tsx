import {profile} from '@/data/profile';
import type {DesignCase} from '@/data/design-cases';
import ProjectTags from './ProjectTags';
import styles from './Portfolio.module.css';
export default function ProjectOverview({project}:{project:DesignCase}){const rows=[['项目类型',project.projectType],['品牌 / 项目背景',project.background||'真实项目背景待补充'],['设计目标',project.goal||'设计目标待补充'],['解决方案',project.solution||'设计方案与关键决策待补充'],['最终成果',project.outcome],['参与职责',project.role.length?project.role.join(' / '):'工作方向：视觉设计；具体项目分工待补充'],['工具',project.tools.length?project.tools.join(' / '):`个人常用工具：${profile.tools.join(' / ')}；本项目用法待确认`]];return <section className={styles.caseSection}><span className="eyebrow">01 / 项目概览</span><h2>项目概览</h2><ProjectTags tags={project.tags}/><dl className={styles.overview}>{rows.map(([label,value])=><div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl></section>;}
