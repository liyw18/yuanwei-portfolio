/** Homepage presentation references the shared real project library. */
export const homeSelection = [
  {kind:'video',slug:'lingmai-restart',category:'东方神话漫剧 / AI Animated Series'},
  {kind:'video',slug:'tvc-ad',category:'商业TVC / Commercial Film'},
  {kind:'video',slug:'deal-with-devil',category:'海外漫剧 / AI Animated Series'},
  {kind:'video',slug:'eclipse-dream',category:'游戏推广 / Game Content'},
  {kind:'design',slug:'xiaoqi-ip-visual',category:'IP设计 / Character Design'},
  {kind:'design',slug:'xiaoqi-brand-visual',category:'品牌VI / Brand Identity'}
] as const;
/** Supply a genuine short preview file to enable a silent loop; full films stay on detail pages. */
export const homeHeroVisuals=[
  {key:'myth',label:'东方神话',slug:'lingmai-restart',preview:''},
  {key:'series',label:'AI漫剧',slug:'deal-with-devil',preview:''},
  {key:'tvc',label:'TVC',slug:'tvc-ad',preview:''},
  {key:'ip',label:'IP',slug:'xiaoqi-ip-visual',preview:''}
] as const;
