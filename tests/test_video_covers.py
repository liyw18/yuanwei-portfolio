import unittest,tempfile,shutil,json,subprocess,sys
from pathlib import Path
class CoverOverrideTest(unittest.TestCase):
 def test_custom_cover_wins_without_decoding_or_modifying_image(self):
  root=Path(__file__).resolve().parents[1]
  for name,location in [('cover.png','source'),('poster.jpg','public')]:
   with self.subTest(name=name),tempfile.TemporaryDirectory(prefix='portfolio-cover-qa-',dir=root/'reports') as folder:
    r=Path(folder);(r/'scripts').mkdir();shutil.copyfile(root/'scripts/generate-video-covers.py',r/'scripts/generate-video-covers.py');(r/'src/data').mkdir(parents=True);source=r/'素材待添加/video/TVC广告/test';source.mkdir(parents=True);public=r/'public/works/video/test';public.mkdir(parents=True)
    original=root/'public/works/video/tvc-ad/cover.jpg';target=(source if location=='source' else public)/name;shutil.copyfile(original,target)
    clip={'id':'test','slug':'test','title':'技术测试','video':'/works/video/test/video.mp4','cover':'','durationSeconds':10,'episode':'','width':2176,'height':1228,'orientation':'landscape'}
    (r/'src/data/videos.ts').write_text('export const videos:VideoProject[]='+json.dumps([clip])+';',encoding='utf-8');(r/'src/data/video-import-manifest.json').write_text(json.dumps({'items':[{'slug':'test','video':clip['video'],'source':'素材待添加/video/TVC广告/test/video.mp4'}],'coverFiles':[]}),encoding='utf-8')
    subprocess.run([sys.executable,str(r/'scripts/generate-video-covers.py'),'--ffmpeg','nonexistent-test-binary'],check=True,stdout=subprocess.PIPE)
    result=json.loads((r/'src/data/videos.ts').read_text(encoding='utf-8').split('export const videos:VideoProject[]=')[1].strip().rstrip(';'))[0]
    self.assertEqual(result['coverType'],'custom');self.assertEqual((r/'public'/result['cover'].lstrip('/')).read_bytes(),original.read_bytes());self.assertTrue(result['cover'].endswith(name))
if __name__=='__main__':unittest.main()

