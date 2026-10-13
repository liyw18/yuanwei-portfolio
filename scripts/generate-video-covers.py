"""Real-video covers: custom first, reviewed selection next, sampled quality fallback."""
from pathlib import Path
import argparse,json,subprocess,hashlib,io,shutil
import numpy as np
from PIL import Image,ImageDraw
p=argparse.ArgumentParser();p.add_argument('--ffmpeg',required=True);p.add_argument('--refresh-auto',action='store_true');a=p.parse_args()
r=Path(__file__).resolve().parents[1];mp=r/'src/data/video-import-manifest.json';m=json.loads(mp.read_text(encoding='utf-8'));dp=r/'src/data/videos.ts';prefix,payload=dp.read_text(encoding='utf-8').split('export const videos:VideoProject[]=',1);projects=json.loads(payload.strip().rstrip(';'))
previous={x['cover']:x for x in m.get('coverFiles',[])};selection=r/'scripts/video-cover-selection.json';times=json.loads(selection.read_text(encoding='utf-8'))['times'] if selection.exists() else {};rows=[];tiles=[]
def sha(p):return hashlib.sha256(p.read_bytes()).hexdigest()
def frame(video,time):
 raw=subprocess.run([a.ffmpeg,'-v','error','-ss',str(time),'-i',str(video),'-frames:v','1','-vf',"scale='min(1280,iw)':-1",'-f','image2pipe','-vcodec','png','-threads','1','pipe:1'],stdout=subprocess.PIPE,stderr=subprocess.PIPE,check=True).stdout
 return Image.open(io.BytesIO(raw)).convert('RGB')
for project in projects:
 clips=project.get('episodes') or [project];first=next(x for x in m['items'] if x['slug']==project['slug']);source=(r/first['source']).parent;public=r/'public/works/video'/project['slug'];custom=None
 for base in [source,public]:
  for name in ['cover.jpg','cover.png','poster.jpg']:
   file=base/name
   if not file.is_file():continue
   url='/'+file.relative_to(r/'public').as_posix() if base==public else None;known=previous.get(url or '')
   if base==source or not known or known.get('coverType')=='custom' or (project.get('coverType')=='custom' and url==project.get('cover')) or sha(file)!=known.get('sha256'):
    custom=file;break
  if custom:break
 if custom:
  target=public/custom.name
  if custom.resolve()!=target.resolve():shutil.copyfile(custom,target)
 for i,clip in enumerate(clips):
  video=r/'public'/clip['video'].lstrip('/');out=public/'cover.jpg' if i==0 else video.parent/(video.stem+'-cover.jpg');time=None;method='preserved';coverType='auto'
  if custom:out=target;coverType='custom';method='user-file';image=Image.open(out)
  else:
   current=clip.get('cover','');old=previous.get(current,{})
   if current and (r/'public'/current.lstrip('/')).exists() and not a.refresh_auto:
    out=r/'public'/current.lstrip('/');image=Image.open(out);time=old.get('timeSeconds');method=old.get('method','preserved')
   else:
    if clip['video'] in times:time=times[clip['video']];image=frame(video,time);method='visual-review'
    else:
     candidates=[]
     for fraction in [.08,.14,.22,.31,.42,.54,.66,.78]:
      t=round(clip['durationSeconds']*fraction,3);im=frame(video,t);gray=np.asarray(im.resize((256,256)).convert('L'),dtype=float);mean=gray.mean();contrast=gray.std();sharp=np.abs(gray[1:]-gray[:-1]).mean()+np.abs(gray[:,1:]-gray[:,:-1]).mean();score=sharp+.12*contrast-.05*abs(mean-115)-45*(gray<12).mean()-35*(gray>245).mean();candidates.append((score,t,im))
     _,time,image=max(candidates,key=lambda x:x[0]);method='quality-sampling-review-required'
    out.parent.mkdir(parents=True,exist_ok=True);image.save(out,quality=90,subsampling=0,optimize=True)
  url='/'+out.relative_to(r/'public').as_posix();clip.update(cover=url,coverType=coverType)
  if i==0:project.update(cover=url,coverType=coverType)
  item=next(x for x in m['items'] if x['video']==clip['video']);item.update(cover=url,coverType=coverType)
  row={'project':project['slug'],'title':clip['title'],'video':clip['video'],'cover':url,'coverType':coverType,'method':method,'timeSeconds':time,'width':image.width,'height':image.height,'bytes':out.stat().st_size,'sha256':sha(out)};rows.append(row)
  tile=Image.new('RGB',(320,230),'#101722');thumb=image.copy();thumb.thumbnail((310,190));tile.paste(thumb,((320-thumb.width)//2,0));ImageDraw.Draw(tile).text((5,198),project['slug']+' '+str(time)+'s',fill='white');tiles.append(tile);print(project['slug'],clip['episode'],method,flush=True)
dp.write_text(prefix+'export const videos:VideoProject[]='+json.dumps(projects,ensure_ascii=False,indent=2)+';\n',encoding='utf-8');m.update(coverFiles=rows,covers=sum(bool(p['cover']) for p in projects));mp.write_text(json.dumps(m,ensure_ascii=False,indent=2),encoding='utf-8')
report=r/'reports/video-covers';report.mkdir(exist_ok=True,parents=True);(report/'manifest.json').write_text(json.dumps(rows,ensure_ascii=False,indent=2),encoding='utf-8');sheet=Image.new('RGB',(1280,230*((len(tiles)+3)//4)),'#101722')
for i,t in enumerate(tiles):sheet.paste(t,((i%4)*320,(i//4)*230))
sheet.save(report/'contact-sheet.jpg',quality=90)
