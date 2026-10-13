import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import ts from 'typescript';
const source=await readFile(new URL('../src/lib/markdown.ts',import.meta.url),'utf8');
const {parseMarkdown}=await import('data:text/javascript;base64,'+Buffer.from(ts.transpileModule(source,{compilerOptions:{module:ts.ModuleKind.ESNext}}).outputText).toString('base64'));
test('production archive Markdown preserves script headings, shots and dialogue tables',()=>{const blocks=parseMarkdown('# 剧本标题\n\n## 分镜描述\n\n| 镜头 | 对白 | 镜头信息 |\n| --- | --- | --- |\n| 01 | 测试对白 | 固定镜头 |\n\n```\n<script>not code execution</script>\n```');assert.equal(blocks[0].kind,'heading');assert.equal(blocks[2].kind,'table');assert.deepEqual(blocks[2].rows[1],['01','测试对白','固定镜头']);assert.equal(blocks[3].kind,'code');});
test('raw HTML remains literal text and is never parsed as executable markup',()=>{assert.deepEqual(parseMarkdown('<script>alert(1)</script>'),[{kind:'paragraph',text:'<script>alert(1)</script>'}]);});
