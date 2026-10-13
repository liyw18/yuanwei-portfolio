import type {VideoProject} from './videos';
export const filmCategories=['ALL','AI FILM','COMMERCIAL','ANIMATION','GAME','SHORT DRAMA'] as const;
export type FilmCategory=typeof filmCategories[number];
export function filmCategory(project:VideoProject):Exclude<FilmCategory,'ALL'>{const categories:Record<VideoProject['category'],Exclude<FilmCategory,'ALL'>>={'TVC广告':'COMMERCIAL','漫剧':'ANIMATION','AI短剧':'SHORT DRAMA','游戏内容':'GAME','创意短视频':'AI FILM'};return categories[project.category];}
export const filmCategoryLabels={ 'AI FILM':'AI影像与创意实验',COMMERCIAL:'AI商业广告',ANIMATION:'AI动画漫剧',GAME:'游戏与互动视频','SHORT DRAMA':'AI短剧'};

/** Confirmed project references only. Missing requested titles are never synthesized. */
export const curatedFilmSlugs=['lingmai-restart','tvc-ad','probiotic-ad','she-from-east','deal-with-devil','changnian-fuqing','eclipse-dream','eastern-swordsman'] as const;
