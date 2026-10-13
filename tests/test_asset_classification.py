import ast,unittest
from pathlib import Path
source=Path(__file__).resolve().parents[1]/'scripts/bind-video-production.py'
node=next(n for n in ast.parse(source.read_text(encoding='utf-8-sig')).body if isinstance(n,ast.FunctionDef) and n.name=='asset_type')
namespace={};exec(compile(ast.Module(body=[node],type_ignores=[]),str(source),'exec'),namespace);classify=namespace['asset_type']
class ClassificationTest(unittest.TestCase):
 def test_project_wrapper_does_not_classify_weapon_scene_or_reference_as_character(self):
  base=Path('东方剑侠_游戏角色短片_制作包/资产')
  for folder,expected in [('兵器设定图','props'),('场景设定图','scenes'),('参考图','keyframes'),('人物三视图','characters')]:
   with self.subTest(folder=folder):self.assertEqual(classify(base/folder/'01.png'),expected)
 def test_real_document_and_audio_keep_their_kind(self):
  self.assertEqual(classify(Path('剧本/东方剑侠分镜提示词.md')),'storyboards');self.assertEqual(classify(Path('声音/完整音轨.m4a')),'audio')
if __name__=='__main__':unittest.main()
