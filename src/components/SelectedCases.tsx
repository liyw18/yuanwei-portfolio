import {designCases,selectedDesignCaseIds} from '@/data/design-cases';
import {designArtworks} from '@/data/design-artworks';
import {videos} from '@/data/videos';
import {selectedVideoCaseSlugs} from '@/data/design-cases';
import CaseCard from './CaseCard';
import styles from './Portfolio.module.css';
export default function SelectedCases({kind,featured=false}:{kind:'design'|'video';featured?:boolean}){return <div className={styles.caseGrid} aria-label={kind==='design'?'精选设计案例':'精选视频案例'}>{kind==='design'?(featured?selectedDesignCaseIds.map(id=>designCases.find(c=>c.id===id)).filter(c=>c!==undefined):designCases).map(c=>{const image=designArtworks.find(a=>a.id===c.artworkIds[0])!.image;return <CaseCard key={c.id} title={c.title} category={c.projectType} image={image} href={`/design/${c.slug}`} role={c.role} tools={c.tools} tags={c.tags}/>;}):selectedVideoCaseSlugs.map(slug=>videos.find(v=>v.slug===slug)).filter(v=>v!==undefined).map(v=><CaseCard key={v.id} title={v.title} category={v.category} image={v.cover} href={`/video/${v.slug}`} role={v.caseStudy?.roles.length?v.caseStudy.roles:v.role?[v.role]:[]} tools={v.tools} tags={v.tags}/>)}</div>;}
