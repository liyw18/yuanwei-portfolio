// Accept a BV id, an official video URL, or an official player URL only.
export function bilibiliSource(input:string):{embed:string;watch:string}|null {
  const valid=/^BV[0-9A-Za-z]{10}$/;
  let id=input.trim();
  if(!valid.test(id)) {
    try {
      const url=new URL(id);
      if(url.protocol!=='https:'||!['bilibili.com','www.bilibili.com','m.bilibili.com','player.bilibili.com'].includes(url.hostname)) return null;
      id=url.hostname==='player.bilibili.com'&&url.pathname==='/player.html'
        ?url.searchParams.get('bvid')||''
        :url.pathname.match(/^\/video\/(BV[0-9A-Za-z]{10})(?:\/|$)/)?.[1]||'';
    } catch { return null; }
  }
  if(!valid.test(id)) return null;
  return {embed:`https://player.bilibili.com/player.html?bvid=${id}&autoplay=0`,watch:`https://www.bilibili.com/video/${id}/`};
}
