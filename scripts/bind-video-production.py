"""Bind reviewed package names, normalize real assets; never execute package contents."""
from pathlib import Path
import json,hashlib,shutil,re
root=Path(__file__).resolve().parents[1];external=Path('C:/Users/PC/Desktop/视频漫剧/新建文件夹');archive=root/'assets/video'
mapping={'tvc-ad':['TVC广告国内_制作包'],'probiotic-ad':['国外种草视频_剧本分镜固定资产'],'lingmai-restart':['灵脉重启_第一二集_剧本分镜固定资产'],'deal-with-devil':['魔鬼的交易_第三集_制作包','魔鬼的交易_第四集_剧本分镜新增资产'],'she-from-east':['她来自东方_第三四集_剧本分镜固定资产'],'changnian-fuqing':['长念缚卿_第二三集_剧本分镜共享资产包'],'wolf-awakening':['出海AI短片1_制作包'],'mysterious-pendant':['出海AI短片2_制作包'],'seven-pei':['国内短片_七声呸_制作包'],'liuli-lamp':['国内短剧2_琉璃盏_制作包'],'eastern-swordsman':['东方剑侠_剧本分镜资产包'],'eclipse-dream':['月蚀梦域_互动游戏_剧本分镜固定资产'],'poli-adventure':['波利大冒险_游戏推广_剧本分镜固定资产'],'transformation':['变装_剧本分镜资产包']}
config=archive/'project-bindings.json'
archive.mkdir(parents=True,exist_ok=True)
if config.exists():mapping=json.loads(config.read_text(encoding='utf-8'))
else:config.write_text(json.dumps(mapping,ensure_ascii=False,indent=2),encoding='utf-8')
data_text=(root/'src/data/videos.ts').read_text(encoding='utf-8');projects=json.loads(data_text.split('export const videos:VideoProject[]=')[1].strip().rstrip(';'))
known={name for names in mapping.values() for name in names}
for package in archive.iterdir():
 if not package.is_dir() or package.name in known:continue
 matches=[project for project in projects if len(project['title'])>=3 and package.name.startswith(project['title'])]
 if len(matches)==1:mapping.setdefault(matches[0]['slug'],[]).append(package.name)
 else:print('Unmatched/ambiguous package; configure project-bindings.json:',package.name)
config.write_text(json.dumps(mapping,ensure_ascii=False,indent=2),encoding='utf-8')
manifest_path=root/'src/data/video-import-manifest.json';manifest=json.loads(manifest_path.read_text(encoding='utf-8'));records=[];summary=[]
def digest(p):return hashlib.sha256(p.read_bytes()).hexdigest()
def asset_type(file):
 name=file.name.lower();parts=file.parent.as_posix().lower();ext=file.suffix.lower()
 if ext in ['.mp3','.m4a','.wav']:return 'audio'
 if ext in ['.md','.txt']:
  if '分镜' in name or 'storyboard' in name:return 'storyboards'
  if '声音' in parts or '声音' in name or '对白' in name:return 'audio'
  return 'script'
 if ext not in ['.png','.jpg','.jpeg','.webp','.avif','.gif','.svg']:return None
 # Classify the nearest asset directory, not a project wrapper such as 游戏角色短片.
 for folder in reversed(file.parent.parts):
  label=folder.lower()
  if any(x in label for x in ['分镜参考','storyboards']):return 'storyboards'
  if any(x in label for x in ['参考图','原生参考','画面依据','资产参考','转场对照','界面','光效','微观','keyframes']):return 'keyframes'
  if any(x in label for x in ['道具','兵器','武器','船只','鱼获','产品','props']):return 'props'
  if any(x in label for x in ['场景','scenes','environments']):return 'scenes'
  if label in ['characters','角色','人物'] or any(x in label for x in ['人物三视图','角色三视图','人物设定','角色设定','群演','动物设定']):return 'characters'
 return 'keyframes' 
previous_path=root/'reports/v2.3/bindings.json'
previous=json.loads(previous_path.read_text(encoding='utf-8'))['files'] if previous_path.exists() else []
previous_by_original={(row['project'],row['original']):row for row in previous}
for slug,names in mapping.items():
 item=next(x for x in manifest['items'] if x['slug']==slug);staging=(root/item['source']).parent/'assets';counts={}
 for name in names:
  package=archive/name
  if not package.exists():shutil.copytree(external/name,package)
  for file in sorted(package.rglob('*'),key=lambda p:p.as_posix()):
   if not file.is_file():continue
   if file.is_symlink():raise RuntimeError('Symbolic links not supported')
   relative=file.relative_to(package);kind=asset_type(relative)
   if kind is None:continue
   public_type='scenes' if kind=='scenes' else kind
   target=staging/public_type/name/relative
   old=previous_by_original.get((slug,str(file.relative_to(root))))
   if old and (root/old['staged']).resolve()!=target.resolve():
    old_target=(root/old['staged']).resolve()
    if not old_target.is_relative_to(staging.resolve()):raise RuntimeError('Old staged path outside intended project')
    if old_target.exists():
     if digest(old_target)!=old['sha256']:raise RuntimeError('Existing staging file changed; preserve it and resolve mapping manually')
     old_target.unlink() # Remove only our verified duplicate, never the source package.
   target.parent.mkdir(parents=True,exist_ok=True);shutil.copyfile(file,target)
   if digest(file)!=digest(target):raise RuntimeError('Copy mismatch')
   records.append({'project':slug,'package':name,'original':str(file.relative_to(root)),'staged':str(target.relative_to(root)),'type':kind,'sha256':digest(file)})
   counts[kind]=counts.get(kind,0)+1
 summary.append({'project':slug,'packages':names,'counts':counts})
(root/'reports/v2.3/bindings.json').write_text(json.dumps({'projects':summary,'files':records},ensure_ascii=False,indent=2),encoding='utf-8');print('Bound projects:',len(summary),'files:',len(records))
