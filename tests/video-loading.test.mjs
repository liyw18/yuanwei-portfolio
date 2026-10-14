import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';

test('video loading feedback cannot reintroduce the retired status bar',()=>{
  const player=readFileSync(new URL('../src/components/VideoPlayer.tsx',import.meta.url),'utf8');
  assert.doesNotMatch(player,/正在加载视频信息|player-status/);
  const theme=readFileSync(new URL('../src/app/creative-theme.css',import.meta.url),'utf8');
  const selector=theme.match(/body main \[class\*="play"\][^{]*/)?.[0];
  assert.ok(selector,'existing play affordance rule must remain scoped');
  assert.ok(selector.includes(':not(.player)'),'a media container is not a play button');
  assert.ok(selector.includes(':not(.player-status)'),'legacy status containers must not inherit a button background');
});
