/** A safe Markdown subset: no raw HTML execution or external media loading. */
export type MarkdownBlock={kind:'heading'|'paragraph'|'code'|'list'|'quote'|'table';text?:string;level?:number;lines?:string[];rows?:string[][]};
export function parseMarkdown(text:string):MarkdownBlock[]{
 const lines=text.replace(/\r\n?/g,'\n').split('\n'),out:MarkdownBlock[]=[];
 for(let i=0;i<lines.length;){const line=lines[i];if(!line.trim()){i++;continue;}
 if(/^```/.test(line)){const body=[];i++;while(i<lines.length&&!/^```/.test(lines[i]))body.push(lines[i++]);if(i<lines.length)i++;out.push({kind:'code',text:body.join('\n')});continue;}
 const heading=/^(#{1,6})\s+(.+)$/.exec(line);if(heading){out.push({kind:'heading',level:heading[1].length,text:heading[2]});i++;continue;}
 if(line.includes('|')&&i+1<lines.length&&/^\s*\|?\s*:?-{3,}/.test(lines[i+1])){const cells=(v:string)=>v.trim().replace(/^\||\|$/g,'').split('|').map(c=>c.trim());const rows=[cells(line)];i+=2;while(i<lines.length&&lines[i].includes('|')&&lines[i].trim())rows.push(cells(lines[i++]));out.push({kind:'table',rows});continue;}
 if(/^\s*(?:[-*+]\s|\d+\.\s)/.test(line)){const items=[];while(i<lines.length&&/^\s*(?:[-*+]\s|\d+\.\s)/.test(lines[i]))items.push(lines[i++].replace(/^\s*(?:[-*+]\s|\d+\.\s)/,''));out.push({kind:'list',lines:items});continue;}
 if(/^>\s?/.test(line)){const body=[];while(i<lines.length&&/^>\s?/.test(lines[i]))body.push(lines[i++].replace(/^>\s?/,''));out.push({kind:'quote',text:body.join('\n')});continue;}
 const body=[line];i++;while(i<lines.length&&lines[i].trim()&&!/^(?:#|```|>|[-*+]\s)/.test(lines[i])&&!(lines[i].includes('|')&&/^\s*\|?\s*:?-{3,}/.test(lines[i+1]||'')))body.push(lines[i++]);out.push({kind:'paragraph',text:body.join('\n')});
 }return out;
}
