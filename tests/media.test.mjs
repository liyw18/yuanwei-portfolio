import { test } from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import ts from 'typescript';
const source=readFileSync(new URL('../src/lib/media.ts',import.meta.url),'utf8');
const compiled=ts.transpileModule(source,{compilerOptions:{module:ts.ModuleKind.ESNext,target:ts.ScriptTarget.ES2020}}).outputText;
const {bilibiliSource}=await import('data:text/javascript;base64,'+Buffer.from(compiled).toString('base64'));
const id='BV1xx411c7mD';
test('official watch links, mobile links, player links and BV ids preserve the id and disable autoplay',()=>{
 for(const input of [id,`https://www.bilibili.com/video/${id}/?share_source=copy`,`https://m.bilibili.com/video/${id}`,`https://player.bilibili.com/player.html?bvid=${id}&autoplay=1`]) {
  const result=bilibiliSource(input);assert.ok(result);assert.equal(new URL(result.embed).searchParams.get('bvid'),id);assert.equal(new URL(result.embed).searchParams.get('autoplay'),'0');assert.equal(result.watch,`https://www.bilibili.com/video/${id}/`);
 }
});
test('malformed links and unofficial hosts do not produce an embed',()=>{
 for(const input of ['', 'BV123', 'javascript:alert(1)', `https://example.com/video/${id}`,`https://www.bilibili.com.evil.example/video/${id}`,`https://www.bilibili.com/video/${id}EXTRA`])assert.equal(bilibiliSource(input),null);
});

