import Link from 'next/link';
import {MediaImage} from '@/components/Works';
import {artworkHref,type DesignArtwork} from '@/data/design-artworks';
import styles from './FeaturedDesign.module.css';
export default function DesignArtworkCard({artwork}:{artwork:DesignArtwork}){
  return <Link className={styles.card} href={artworkHref(artwork)} aria-label={`查看 ${artwork.category} 分类`}>
    <div className={styles.visual}><MediaImage src={artwork.image} alt={`${artwork.category} 精选作品`}/></div>
    <div className={styles.meta}><span>{artwork.category}</span><span aria-hidden="true">↗</span></div>
  </Link>;
}
