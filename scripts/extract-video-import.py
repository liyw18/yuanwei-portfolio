"""V2.2 original ZIP import. Never changes or re-encodes media."""
import pathlib,zipfile,re,json,hashlib,shutil
root=pathlib.Path(__file__).resolve().parents[1]
base=root/'素材待添加'/'video'
archives={'TVC广告.zip':('TVC广告',''),'漫剧.zip':('漫剧',''),'国内短剧.zip':('AI短剧','国内'),'海外短剧.zip':('AI短剧','海外'),'游戏视频.zip':('游戏内容',''),'创意短视频.zip':('创意短视频','')}
slugs={'TVC广告':'tvc-ad','益生菌胶囊广告视频':'probiotic-ad','灵脉重启':'lingmai-restart','和魔鬼的交易':'deal-with-devil','她来自东方':'she-from-east','长念缚卿':'changnian-fuqing','狼族血脉：王者觉醒':'wolf-awakening','神秘吊坠':'mysterious-pendant','七声呸':'seven-pei','琉璃盏':'liuli-lamp','东方剑侠游戏角色短片':'eastern-swordsman','月蚀梦域互动游戏视频':'eclipse-dream','波利大冒险':'poli-adventure','变装':'transformation'}
sequence=list(slugs)
rows=[]
def decode(entry):
 name=entry.filename
 if not entry.flag_bits&2048:
  try:name=name.encode('cp437').decode('gbk')
  except UnicodeError:pass
 return name
for archive,(category,region) in archives.items():
 with zipfile.ZipFile(base/archive) as z:
  for entry in z.infolist():
   if entry.is_dir():continue
   name=decode(entry)
   if pathlib.PurePosixPath(name).suffix.lower()!='.mp4':raise ValueError('Unclassified supplied file: '+name)
   filename=pathlib.PurePosixPath(name).name
   title=pathlib.Path(filename).stem
   match=re.fullmatch(r'(.+?)第([一二三四五六七八九十\d]+)集',title)
   series=match.group(1) if match else ''
   number=int(match.group(2)) if match and match.group(2).isdigit() else {'一':1,'二':2,'三':3,'四':4}.get(match.group(2),0) if match else 0
   project=series or title
   slug=slugs[project]
   folder={'AI短剧':'短剧','游戏内容':'游戏视频'}.get(category,category)
   target=base/folder/project/filename
   if not target.resolve().is_relative_to(base.resolve()):raise ValueError('Source path outside workspace')
   target.parent.mkdir(parents=True,exist_ok=True)
   digest=hashlib.sha256()
   with z.open(entry) as src,target.open('wb') as dst:
    while chunk:=src.read(1024*1024):dst.write(chunk);digest.update(chunk)
   url=f'/works/video/{slug}/'+(f'episodes/episode-{number:02d}.mp4' if series else 'video.mp4')
   out=root/'public'/url.lstrip('/')
   if not out.resolve().is_relative_to((root/'public').resolve()):raise ValueError('Public path outside workspace')
   out.parent.mkdir(parents=True,exist_ok=True)
   shutil.copyfile(target,out)
   sha=digest.hexdigest()
   with out.open('rb') as f:copied=hashlib.file_digest(f,'sha256').hexdigest()
   if copied!=sha:raise ValueError('Copy differs: '+name)
   for kind in ['characters','scenes','props','storyboards','keyframes','audio','script']:(base/folder/project/'assets'/kind).mkdir(parents=True,exist_ok=True)
   rows.append({'title':title,'project':project,'slug':slug,'category':category,'series':series,'region':region,'episode':number or '', 'source':str(target.relative_to(root)).replace('\\','/'),'archive':archive,'entry':name,'video':url,'bytes':entry.file_size,'sha256':sha,'order':sequence.index(project)+1})
rows.sort(key=lambda p:(p['order'],p['episode'] or 0))
if len(rows)!=18:raise ValueError('Expected current batch of 18 videos')
# The three unnamed archives are duplicate exports; verify content and retain originals.
duplicates=[]
by_name={pathlib.PurePosixPath(p['entry']).name:p for p in rows}
for archive in base.glob('新建文件夹*.zip'):
 with zipfile.ZipFile(archive) as z:
  for entry in z.infolist():
   if entry.is_dir():continue
   name=decode(entry);expected=by_name[pathlib.PurePosixPath(name).name]
   with z.open(entry) as src:sha=hashlib.file_digest(src,'sha256').hexdigest()
   if sha!=expected['sha256']:raise ValueError('Duplicate archive differs: '+name)
   duplicates.append({'archive':archive.name,'entry':name,'sameAs':expected['video'],'sha256':sha})
manifest={'items':rows,'duplicates':duplicates,'assets':{'images':0,'audio':0,'markdown':0},'covers':0}
(root/'src/data/video-import-manifest.json').write_text(json.dumps(manifest,ensure_ascii=False,indent=2),encoding='utf-8')
print(json.dumps({'videos':len(rows),'projects':len(set(p['slug'] for p in rows)),'duplicates':len(duplicates),'hashes':'all matched'},ensure_ascii=True))
