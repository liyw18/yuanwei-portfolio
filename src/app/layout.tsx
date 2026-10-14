import type {Metadata} from 'next';
import './globals.css';
import './creative-theme.css';
import './responsive.css';
import {Shell} from '@/components/Shell';
import {profile} from '@/data/profile';
const siteTitle=`${profile.name} | AI Visual Designer | Creative Director Portfolio`;
const siteDescription='AI视觉设计、品牌设计、视频创作、AIGC内容制作个人作品集。';
export const metadata:Metadata={title:{default:siteTitle,template:`%s | ${profile.name}`},description:siteDescription,keywords:[profile.name,'AI Visual Designer','AIGC视频制作师','Creative Director Portfolio','品牌视觉','IP','TVC','Storyboard'],openGraph:{title:siteTitle,description:siteDescription,type:'website',locale:'zh_CN'},robots:{index:true,follow:true}};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="zh-CN" data-scroll-behavior="smooth"><body><Shell>{children}</Shell></body></html>}

