(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{519:function(e,t,n){e.exports=function(){"use strict";function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}function n(e,n){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,n){if(e){if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?t(e,n):void 0}}(e))||n&&e&&"number"==typeof e.length){r&&(e=r);var i=0;return function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(r=e[Symbol.iterator]()).next.bind(r)}var r=function(e,t){return e(t={exports:{}},t.exports),t.exports}((function(e){function t(){return{baseUrl:null,breaks:!1,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}e.exports={defaults:{baseUrl:null,breaks:!1,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1},getDefaults:t,changeDefaults:function(t){e.exports.defaults=t}}})),l=(r.defaults,r.getDefaults,r.changeDefaults,/[&<>"']/),o=/[&<>"']/g,c=/[<>"']|&(?!#?\w+;)/,h=/[<>"']|&(?!#?\w+;)/g,f={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},d=function(e){return f[e]},k=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;function m(html){return html.replace(k,(function(e,t){return"colon"===(t=t.toLowerCase())?":":"#"===t.charAt(0)?"x"===t.charAt(1)?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""}))}var x=/(^|[^\[])\^/g,v=/[^\w:]/g,w=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i,_={},y=/^[^:]+:\/*[^/]*$/,z=/^([^:]+:)[\s\S]*$/,S=/^([^:]+:\/*[^/]*)[\s\S]*$/;function $(base,e){_[" "+base]||(y.test(base)?_[" "+base]=base+"/":_[" "+base]=A(base,"/",!0));var t=-1===(base=_[" "+base]).indexOf(":");return"//"===e.substring(0,2)?t?e:base.replace(z,"$1")+e:"/"===e.charAt(0)?t?e:base.replace(S,"$1")+e:base+e}function A(e,t,n){var r=e.length;if(0===r)return"";for(var l=0;l<r;){var o=e.charAt(r-l-1);if(o!==t||n){if(o===t||!n)break;l++}else l++}return e.substr(0,r-l)}var R=function(html,e){if(e){if(l.test(html))return html.replace(o,d)}else if(c.test(html))return html.replace(h,d);return html},T=m,I=function(e,t){e=e.source||e,t=t||"";var n={replace:function(t,r){return r=(r=r.source||r).replace(x,"$1"),e=e.replace(t,r),n},getRegex:function(){return new RegExp(e,t)}};return n},Z=function(e,base,t){if(e){var n;try{n=decodeURIComponent(m(t)).replace(v,"").toLowerCase()}catch(e){return null}if(0===n.indexOf("javascript:")||0===n.indexOf("vbscript:")||0===n.indexOf("data:"))return null}base&&!w.test(t)&&(t=$(base,t));try{t=encodeURI(t).replace(/%25/g,"%")}catch(e){return null}return t},O={exec:function(){}},U=function(e){for(var t,n,i=1;i<arguments.length;i++)for(n in t=arguments[i])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},C=function(e,t){var n=e.replace(/\|/g,(function(e,t,n){for(var r=!1,l=t;--l>=0&&"\\"===n[l];)r=!r;return r?"|":" |"})).split(/ \|/),i=0;if(n.length>t)n.splice(t);else for(;n.length<t;)n.push("");for(;i<n.length;i++)n[i]=n[i].trim().replace(/\\\|/g,"|");return n},j=A,E=function(e,b){if(-1===e.indexOf(b[1]))return-1;for(var t=e.length,n=0,i=0;i<t;i++)if("\\"===e[i])i++;else if(e[i]===b[0])n++;else if(e[i]===b[1]&&--n<0)return i;return-1},P=function(e){e&&e.sanitize&&!e.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")},D=function(pattern,e){if(e<1)return"";for(var t="";e>1;)1&e&&(t+=pattern),e>>=1,pattern+=pattern;return t+pattern},L=r.defaults,N=j,B=C,F=R,J=E;function M(e,link,t){var n=link.href,title=link.title?F(link.title):null,text=e[1].replace(/\\([\[\]])/g,"$1");return"!"!==e[0].charAt(0)?{type:"link",raw:t,href:n,title:title,text:text}:{type:"image",raw:t,href:n,title:title,text:F(text)}}var X=function(){function e(e){this.options=e||L}var t=e.prototype;return t.space=function(e){var t=this.rules.block.newline.exec(e);if(t)return t[0].length>1?{type:"space",raw:t[0]}:{raw:"\n"}},t.code=function(e,t){var n=this.rules.block.code.exec(e);if(n){var r=t[t.length-1];if(r&&"paragraph"===r.type)return{raw:n[0],text:n[0].trimRight()};var text=n[0].replace(/^ {4}/gm,"");return{type:"code",raw:n[0],codeBlockStyle:"indented",text:this.options.pedantic?text:N(text,"\n")}}},t.fences=function(e){var t=this.rules.block.fences.exec(e);if(t){var n=t[0],text=function(e,text){var t=e.match(/^(\s+)(?:```)/);if(null===t)return text;var n=t[1];return text.split("\n").map((function(e){var t=e.match(/^\s+/);return null===t?e:t[0].length>=n.length?e.slice(n.length):e})).join("\n")}(n,t[3]||"");return{type:"code",raw:n,lang:t[2]?t[2].trim():t[2],text:text}}},t.heading=function(e){var t=this.rules.block.heading.exec(e);if(t){var text=t[2].trim();if(/#$/.test(text)){var n=N(text,"#");this.options.pedantic?text=n.trim():n&&!/ $/.test(n)||(text=n.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:text}}},t.nptable=function(e){var t=this.rules.block.nptable.exec(e);if(t){var n={type:"table",header:B(t[1].replace(/^ *| *\| *$/g,"")),align:t[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:t[3]?t[3].replace(/\n$/,"").split("\n"):[],raw:t[0]};if(n.header.length===n.align.length){var i,r=n.align.length;for(i=0;i<r;i++)/^ *-+: *$/.test(n.align[i])?n.align[i]="right":/^ *:-+: *$/.test(n.align[i])?n.align[i]="center":/^ *:-+ *$/.test(n.align[i])?n.align[i]="left":n.align[i]=null;for(r=n.cells.length,i=0;i<r;i++)n.cells[i]=B(n.cells[i],n.header.length);return n}}},t.hr=function(e){var t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:t[0]}},t.blockquote=function(e){var t=this.rules.block.blockquote.exec(e);if(t){var text=t[0].replace(/^ *> ?/gm,"");return{type:"blockquote",raw:t[0],text:text}}},t.list=function(e){var t=this.rules.block.list.exec(e);if(t){var n,r,l,o,c,h,f,d,k=t[0],m=t[2],x=m.length>1,v={type:"list",raw:k,ordered:x,start:x?+m.slice(0,-1):"",loose:!1,items:[]},w=t[0].match(this.rules.block.item),_=!1,y=w.length;l=this.rules.block.listItemStart.exec(w[0]);for(var i=0;i<y;i++){if(k=n=w[i],i!==y-1){if((o=this.rules.block.listItemStart.exec(w[i+1]))[1].length>l[0].length||o[1].length>3){w.splice(i,2,w[i]+"\n"+w[i+1]),i--,y--;continue}(!this.options.pedantic||this.options.smartLists?o[2][o[2].length-1]!==m[m.length-1]:x===(1===o[2].length))&&(c=w.slice(i+1).join("\n"),v.raw=v.raw.substring(0,v.raw.length-c.length),i=y-1),l=o}r=n.length,~(n=n.replace(/^ *([*+-]|\d+[.)]) ?/,"")).indexOf("\n ")&&(r-=n.length,n=this.options.pedantic?n.replace(/^ {1,4}/gm,""):n.replace(new RegExp("^ {1,"+r+"}","gm"),"")),h=_||/\n\n(?!\s*$)/.test(n),i!==y-1&&(_="\n"===n.charAt(n.length-1),h||(h=_)),h&&(v.loose=!0),this.options.gfm&&(d=void 0,(f=/^\[[ xX]\] /.test(n))&&(d=" "!==n[1],n=n.replace(/^\[[ xX]\] +/,""))),v.items.push({type:"list_item",raw:k,task:f,checked:d,loose:h,text:n})}return v}},t.html=function(e){var t=this.rules.block.html.exec(e);if(t)return{type:this.options.sanitize?"paragraph":"html",raw:t[0],pre:!this.options.sanitizer&&("pre"===t[1]||"script"===t[1]||"style"===t[1]),text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(t[0]):F(t[0]):t[0]}},t.def=function(e){var t=this.rules.block.def.exec(e);if(t)return t[3]&&(t[3]=t[3].substring(1,t[3].length-1)),{tag:t[1].toLowerCase().replace(/\s+/g," "),raw:t[0],href:t[2],title:t[3]}},t.table=function(e){var t=this.rules.block.table.exec(e);if(t){var n={type:"table",header:B(t[1].replace(/^ *| *\| *$/g,"")),align:t[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:t[3]?t[3].replace(/\n$/,"").split("\n"):[]};if(n.header.length===n.align.length){n.raw=t[0];var i,r=n.align.length;for(i=0;i<r;i++)/^ *-+: *$/.test(n.align[i])?n.align[i]="right":/^ *:-+: *$/.test(n.align[i])?n.align[i]="center":/^ *:-+ *$/.test(n.align[i])?n.align[i]="left":n.align[i]=null;for(r=n.cells.length,i=0;i<r;i++)n.cells[i]=B(n.cells[i].replace(/^ *\| *| *\| *$/g,""),n.header.length);return n}}},t.lheading=function(e){var t=this.rules.block.lheading.exec(e);if(t)return{type:"heading",raw:t[0],depth:"="===t[2].charAt(0)?1:2,text:t[1]}},t.paragraph=function(e){var t=this.rules.block.paragraph.exec(e);if(t)return{type:"paragraph",raw:t[0],text:"\n"===t[1].charAt(t[1].length-1)?t[1].slice(0,-1):t[1]}},t.text=function(e,t){var n=this.rules.block.text.exec(e);if(n){var r=t[t.length-1];return r&&"text"===r.type?{raw:n[0],text:n[0]}:{type:"text",raw:n[0],text:n[0]}}},t.escape=function(e){var t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:F(t[1])}},t.tag=function(e,t,n){var r=this.rules.inline.tag.exec(e);if(r)return!t&&/^<a /i.test(r[0])?t=!0:t&&/^<\/a>/i.test(r[0])&&(t=!1),!n&&/^<(pre|code|kbd|script)(\s|>)/i.test(r[0])?n=!0:n&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(r[0])&&(n=!1),{type:this.options.sanitize?"text":"html",raw:r[0],inLink:t,inRawBlock:n,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(r[0]):F(r[0]):r[0]}},t.link=function(e){var t=this.rules.inline.link.exec(e);if(t){var n=t[2].trim();if(!this.options.pedantic&&/^</.test(n)){if(!/>$/.test(n))return;var r=N(n.slice(0,-1),"\\");if((n.length-r.length)%2==0)return}else{var l=J(t[2],"()");if(l>-1){var o=(0===t[0].indexOf("!")?5:4)+t[1].length+l;t[2]=t[2].substring(0,l),t[0]=t[0].substring(0,o).trim(),t[3]=""}}var c=t[2],title="";if(this.options.pedantic){var link=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(c);link&&(c=link[1],title=link[3])}else title=t[3]?t[3].slice(1,-1):"";return c=c.trim(),/^</.test(c)&&(c=this.options.pedantic&&!/>$/.test(n)?c.slice(1):c.slice(1,-1)),M(t,{href:c?c.replace(this.rules.inline._escapes,"$1"):c,title:title?title.replace(this.rules.inline._escapes,"$1"):title},t[0])}},t.reflink=function(e,t){var n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){var link=(n[2]||n[1]).replace(/\s+/g," ");if(!(link=t[link.toLowerCase()])||!link.href){var text=n[0].charAt(0);return{type:"text",raw:text,text:text}}return M(n,link,n[0])}},t.strong=function(e,t,n){void 0===n&&(n="");var r=this.rules.inline.strong.start.exec(e);if(r&&(!r[1]||r[1]&&(""===n||this.rules.inline.punctuation.exec(n)))){t=t.slice(-1*e.length);var l,o="**"===r[0]?this.rules.inline.strong.endAst:this.rules.inline.strong.endUnd;for(o.lastIndex=0;null!=(r=o.exec(t));)if(l=this.rules.inline.strong.middle.exec(t.slice(0,r.index+3)))return{type:"strong",raw:e.slice(0,l[0].length),text:e.slice(2,l[0].length-2)}}},t.em=function(e,t,n){void 0===n&&(n="");var r=this.rules.inline.em.start.exec(e);if(r&&(!r[1]||r[1]&&(""===n||this.rules.inline.punctuation.exec(n)))){t=t.slice(-1*e.length);var l,o="*"===r[0]?this.rules.inline.em.endAst:this.rules.inline.em.endUnd;for(o.lastIndex=0;null!=(r=o.exec(t));)if(l=this.rules.inline.em.middle.exec(t.slice(0,r.index+2)))return{type:"em",raw:e.slice(0,l[0].length),text:e.slice(1,l[0].length-1)}}},t.codespan=function(e){var t=this.rules.inline.code.exec(e);if(t){var text=t[2].replace(/\n/g," "),n=/[^ ]/.test(text),r=/^ /.test(text)&&/ $/.test(text);return n&&r&&(text=text.substring(1,text.length-1)),text=F(text,!0),{type:"codespan",raw:t[0],text:text}}},t.br=function(e){var t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}},t.del=function(e){var t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[2]}},t.autolink=function(e,t){var text,n,r=this.rules.inline.autolink.exec(e);if(r)return n="@"===r[2]?"mailto:"+(text=F(this.options.mangle?t(r[1]):r[1])):text=F(r[1]),{type:"link",raw:r[0],text:text,href:n,tokens:[{type:"text",raw:text,text:text}]}},t.url=function(e,t){var n;if(n=this.rules.inline.url.exec(e)){var text,r;if("@"===n[2])r="mailto:"+(text=F(this.options.mangle?t(n[0]):n[0]));else{var l;do{l=n[0],n[0]=this.rules.inline._backpedal.exec(n[0])[0]}while(l!==n[0]);text=F(n[0]),r="www."===n[1]?"http://"+text:text}return{type:"link",raw:n[0],text:text,href:r,tokens:[{type:"text",raw:text,text:text}]}}},t.inlineText=function(e,t,n){var text,r=this.rules.inline.text.exec(e);if(r)return text=t?this.options.sanitize?this.options.sanitizer?this.options.sanitizer(r[0]):F(r[0]):r[0]:F(this.options.smartypants?n(r[0]):r[0]),{type:"text",raw:r[0],text:text}},e}(),G=O,V=I,H=U,K={newline:/^\n+/,code:/^( {4}[^\n]+\n*)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?:\n+|$)|$)/,hr:/^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3})(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?! {0,3}bull )\n*|\s*$)/,html:"^ {0,3}(?:<(script|pre|style)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:\\n{2,}|$)|<(?!script|pre|style)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$)|</(?!script|pre|style)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$))",def:/^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,nptable:G,table:G,lheading:/^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html)[^\n]+)*)/,text:/^[^\n]+/,_label:/(?!\s*\])(?:\\[\[\]]|[^\[\]])+/,_title:/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/};K.def=V(K.def).replace("label",K._label).replace("title",K._title).getRegex(),K.bullet=/(?:[*+-]|\d{1,9}[.)])/,K.item=/^( *)(bull) ?[^\n]*(?:\n(?! *bull ?)[^\n]*)*/,K.item=V(K.item,"gm").replace(/bull/g,K.bullet).getRegex(),K.listItemStart=V(/^( *)(bull)/).replace("bull",K.bullet).getRegex(),K.list=V(K.list).replace(/bull/g,K.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+K.def.source+")").getRegex(),K._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",K._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/,K.html=V(K.html,"i").replace("comment",K._comment).replace("tag",K._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),K.paragraph=V(K._paragraph).replace("hr",K.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)").replace("tag",K._tag).getRegex(),K.blockquote=V(K.blockquote).replace("paragraph",K.paragraph).getRegex(),K.normal=H({},K),K.gfm=H({},K.normal,{nptable:"^ *([^|\\n ].*\\|.*)\\n {0,3}([-:]+ *\\|[-| :]*)(?:\\n((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)",table:"^ *\\|(.+)\\n {0,3}\\|?( *[-:]+[-| :]*)(?:\\n *((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"}),K.gfm.nptable=V(K.gfm.nptable).replace("hr",K.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)").replace("tag",K._tag).getRegex(),K.gfm.table=V(K.gfm.table).replace("hr",K.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)").replace("tag",K._tag).getRegex(),K.pedantic=H({},K.normal,{html:V("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment",K._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:G,paragraph:V(K.normal._paragraph).replace("hr",K.hr).replace("heading"," *#{1,6} *[^\n]").replace("lheading",K.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()});var Q={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:G,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,nolink:/^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",strong:{start:/^(?:(\*\*(?=[*punctuation]))|\*\*)(?![\s])|__/,middle:/^\*\*(?:(?:(?!overlapSkip)(?:[^*]|\\\*)|overlapSkip)|\*(?:(?!overlapSkip)(?:[^*]|\\\*)|overlapSkip)*?\*)+?\*\*$|^__(?![\s])((?:(?:(?!overlapSkip)(?:[^_]|\\_)|overlapSkip)|_(?:(?!overlapSkip)(?:[^_]|\\_)|overlapSkip)*?_)+?)__$/,endAst:/[^punctuation\s]\*\*(?!\*)|[punctuation]\*\*(?!\*)(?:(?=[punctuation_\s]|$))/,endUnd:/[^\s]__(?!_)(?:(?=[punctuation*\s])|$)/},em:{start:/^(?:(\*(?=[punctuation]))|\*)(?![*\s])|_/,middle:/^\*(?:(?:(?!overlapSkip)(?:[^*]|\\\*)|overlapSkip)|\*(?:(?!overlapSkip)(?:[^*]|\\\*)|overlapSkip)*?\*)+?\*$|^_(?![_\s])(?:(?:(?!overlapSkip)(?:[^_]|\\_)|overlapSkip)|_(?:(?!overlapSkip)(?:[^_]|\\_)|overlapSkip)*?_)+?_$/,endAst:/[^punctuation\s]\*(?!\*)|[punctuation]\*(?!\*)(?:(?=[punctuation_\s]|$))/,endUnd:/[^\s]_(?!_)(?:(?=[punctuation*\s])|$)/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:G,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^([\s*punctuation])/,_punctuation:"!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~"};Q.punctuation=V(Q.punctuation).replace(/punctuation/g,Q._punctuation).getRegex(),Q._blockSkip="\\[[^\\]]*?\\]\\([^\\)]*?\\)|`[^`]*?`|<[^>]*?>",Q._overlapSkip="__[^_]*?__|\\*\\*\\[^\\*\\]*?\\*\\*",Q._comment=V(K._comment).replace("(?:--\x3e|$)","--\x3e").getRegex(),Q.em.start=V(Q.em.start).replace(/punctuation/g,Q._punctuation).getRegex(),Q.em.middle=V(Q.em.middle).replace(/punctuation/g,Q._punctuation).replace(/overlapSkip/g,Q._overlapSkip).getRegex(),Q.em.endAst=V(Q.em.endAst,"g").replace(/punctuation/g,Q._punctuation).getRegex(),Q.em.endUnd=V(Q.em.endUnd,"g").replace(/punctuation/g,Q._punctuation).getRegex(),Q.strong.start=V(Q.strong.start).replace(/punctuation/g,Q._punctuation).getRegex(),Q.strong.middle=V(Q.strong.middle).replace(/punctuation/g,Q._punctuation).replace(/overlapSkip/g,Q._overlapSkip).getRegex(),Q.strong.endAst=V(Q.strong.endAst,"g").replace(/punctuation/g,Q._punctuation).getRegex(),Q.strong.endUnd=V(Q.strong.endUnd,"g").replace(/punctuation/g,Q._punctuation).getRegex(),Q.blockSkip=V(Q._blockSkip,"g").getRegex(),Q.overlapSkip=V(Q._overlapSkip,"g").getRegex(),Q._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g,Q._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,Q._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,Q.autolink=V(Q.autolink).replace("scheme",Q._scheme).replace("email",Q._email).getRegex(),Q._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,Q.tag=V(Q.tag).replace("comment",Q._comment).replace("attribute",Q._attribute).getRegex(),Q._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,Q._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/,Q._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,Q.link=V(Q.link).replace("label",Q._label).replace("href",Q._href).replace("title",Q._title).getRegex(),Q.reflink=V(Q.reflink).replace("label",Q._label).getRegex(),Q.reflinkSearch=V(Q.reflinkSearch,"g").replace("reflink",Q.reflink).replace("nolink",Q.nolink).getRegex(),Q.normal=H({},Q),Q.pedantic=H({},Q.normal,{strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:V(/^!?\[(label)\]\((.*?)\)/).replace("label",Q._label).getRegex(),reflink:V(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",Q._label).getRegex()}),Q.gfm=H({},Q.normal,{escape:V(Q.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*~]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))/}),Q.gfm.url=V(Q.gfm.url,"i").replace("email",Q.gfm._extended_email).getRegex(),Q.breaks=H({},Q.gfm,{br:V(Q.br).replace("{2,}","*").getRegex(),text:V(Q.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()});var W={block:K,inline:Q},Y=r.defaults,ee=W.block,te=W.inline,ne=D;function re(text){return text.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…")}function ie(text){var i,e,t="",n=text.length;for(i=0;i<n;i++)e=text.charCodeAt(i),Math.random()>.5&&(e="x"+e.toString(16)),t+="&#"+e+";";return t}var se=function(){function t(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||Y,this.options.tokenizer=this.options.tokenizer||new X,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options;var t={block:ee.normal,inline:te.normal};this.options.pedantic?(t.block=ee.pedantic,t.inline=te.pedantic):this.options.gfm&&(t.block=ee.gfm,this.options.breaks?t.inline=te.breaks:t.inline=te.gfm),this.tokenizer.rules=t}t.lex=function(e,n){return new t(n).lex(e)},t.lexInline=function(e,n){return new t(n).inlineTokens(e)};var n,r,l,o=t.prototype;return o.lex=function(e){return e=e.replace(/\r\n|\r/g,"\n").replace(/\t/g,"    "),this.blockTokens(e,this.tokens,!0),this.inline(this.tokens),this.tokens},o.blockTokens=function(e,t,n){var r,i,l,o;for(void 0===t&&(t=[]),void 0===n&&(n=!0),e=e.replace(/^ +$/gm,"");e;)if(r=this.tokenizer.space(e))e=e.substring(r.raw.length),r.type&&t.push(r);else if(r=this.tokenizer.code(e,t))e=e.substring(r.raw.length),r.type?t.push(r):((o=t[t.length-1]).raw+="\n"+r.raw,o.text+="\n"+r.text);else if(r=this.tokenizer.fences(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.heading(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.nptable(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.hr(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.blockquote(e))e=e.substring(r.raw.length),r.tokens=this.blockTokens(r.text,[],n),t.push(r);else if(r=this.tokenizer.list(e)){for(e=e.substring(r.raw.length),l=r.items.length,i=0;i<l;i++)r.items[i].tokens=this.blockTokens(r.items[i].text,[],!1);t.push(r)}else if(r=this.tokenizer.html(e))e=e.substring(r.raw.length),t.push(r);else if(n&&(r=this.tokenizer.def(e)))e=e.substring(r.raw.length),this.tokens.links[r.tag]||(this.tokens.links[r.tag]={href:r.href,title:r.title});else if(r=this.tokenizer.table(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.lheading(e))e=e.substring(r.raw.length),t.push(r);else if(n&&(r=this.tokenizer.paragraph(e)))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.text(e,t))e=e.substring(r.raw.length),r.type?t.push(r):((o=t[t.length-1]).raw+="\n"+r.raw,o.text+="\n"+r.text);else if(e){var c="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(c);break}throw new Error(c)}return t},o.inline=function(e){var i,t,n,r,l,o,c=e.length;for(i=0;i<c;i++)switch((o=e[i]).type){case"paragraph":case"text":case"heading":o.tokens=[],this.inlineTokens(o.text,o.tokens);break;case"table":for(o.tokens={header:[],cells:[]},r=o.header.length,t=0;t<r;t++)o.tokens.header[t]=[],this.inlineTokens(o.header[t],o.tokens.header[t]);for(r=o.cells.length,t=0;t<r;t++)for(l=o.cells[t],o.tokens.cells[t]=[],n=0;n<l.length;n++)o.tokens.cells[t][n]=[],this.inlineTokens(l[n],o.tokens.cells[t][n]);break;case"blockquote":this.inline(o.tokens);break;case"list":for(r=o.items.length,t=0;t<r;t++)this.inline(o.items[t].tokens)}return e},o.inlineTokens=function(e,t,n,r){var l;void 0===t&&(t=[]),void 0===n&&(n=!1),void 0===r&&(r=!1);var o,c,h,f=e;if(this.tokens.links){var d=Object.keys(this.tokens.links);if(d.length>0)for(;null!=(o=this.tokenizer.rules.inline.reflinkSearch.exec(f));)d.includes(o[0].slice(o[0].lastIndexOf("[")+1,-1))&&(f=f.slice(0,o.index)+"["+ne("a",o[0].length-2)+"]"+f.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;null!=(o=this.tokenizer.rules.inline.blockSkip.exec(f));)f=f.slice(0,o.index)+"["+ne("a",o[0].length-2)+"]"+f.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;e;)if(c||(h=""),c=!1,l=this.tokenizer.escape(e))e=e.substring(l.raw.length),t.push(l);else if(l=this.tokenizer.tag(e,n,r))e=e.substring(l.raw.length),n=l.inLink,r=l.inRawBlock,t.push(l);else if(l=this.tokenizer.link(e))e=e.substring(l.raw.length),"link"===l.type&&(l.tokens=this.inlineTokens(l.text,[],!0,r)),t.push(l);else if(l=this.tokenizer.reflink(e,this.tokens.links))e=e.substring(l.raw.length),"link"===l.type&&(l.tokens=this.inlineTokens(l.text,[],!0,r)),t.push(l);else if(l=this.tokenizer.strong(e,f,h))e=e.substring(l.raw.length),l.tokens=this.inlineTokens(l.text,[],n,r),t.push(l);else if(l=this.tokenizer.em(e,f,h))e=e.substring(l.raw.length),l.tokens=this.inlineTokens(l.text,[],n,r),t.push(l);else if(l=this.tokenizer.codespan(e))e=e.substring(l.raw.length),t.push(l);else if(l=this.tokenizer.br(e))e=e.substring(l.raw.length),t.push(l);else if(l=this.tokenizer.del(e))e=e.substring(l.raw.length),l.tokens=this.inlineTokens(l.text,[],n,r),t.push(l);else if(l=this.tokenizer.autolink(e,ie))e=e.substring(l.raw.length),t.push(l);else if(n||!(l=this.tokenizer.url(e,ie))){if(l=this.tokenizer.inlineText(e,r,re))e=e.substring(l.raw.length),h=l.raw.slice(-1),c=!0,t.push(l);else if(e){var k="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(k);break}throw new Error(k)}}else e=e.substring(l.raw.length),t.push(l);return t},n=t,l=[{key:"rules",get:function(){return{block:ee,inline:te}}}],(r=null)&&e(n.prototype,r),l&&e(n,l),t}(),le=r.defaults,ae=Z,oe=R,ce=function(){function e(e){this.options=e||le}var t=e.prototype;return t.code=function(e,t,n){var r=(t||"").match(/\S*/)[0];if(this.options.highlight){var l=this.options.highlight(e,r);null!=l&&l!==e&&(n=!0,e=l)}return r?'<pre><code class="'+this.options.langPrefix+oe(r,!0)+'">'+(n?e:oe(e,!0))+"</code></pre>\n":"<pre><code>"+(n?e:oe(e,!0))+"</code></pre>\n"},t.blockquote=function(e){return"<blockquote>\n"+e+"</blockquote>\n"},t.html=function(e){return e},t.heading=function(text,e,t,n){return this.options.headerIds?"<h"+e+' id="'+this.options.headerPrefix+n.slug(t)+'">'+text+"</h"+e+">\n":"<h"+e+">"+text+"</h"+e+">\n"},t.hr=function(){return this.options.xhtml?"<hr/>\n":"<hr>\n"},t.list=function(body,e,t){var n=e?"ol":"ul";return"<"+n+(e&&1!==t?' start="'+t+'"':"")+">\n"+body+"</"+n+">\n"},t.listitem=function(text){return"<li>"+text+"</li>\n"},t.checkbox=function(e){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "},t.paragraph=function(text){return"<p>"+text+"</p>\n"},t.table=function(header,body){return body&&(body="<tbody>"+body+"</tbody>"),"<table>\n<thead>\n"+header+"</thead>\n"+body+"</table>\n"},t.tablerow=function(content){return"<tr>\n"+content+"</tr>\n"},t.tablecell=function(content,e){var t=e.header?"th":"td";return(e.align?"<"+t+' align="'+e.align+'">':"<"+t+">")+content+"</"+t+">\n"},t.strong=function(text){return"<strong>"+text+"</strong>"},t.em=function(text){return"<em>"+text+"</em>"},t.codespan=function(text){return"<code>"+text+"</code>"},t.br=function(){return this.options.xhtml?"<br/>":"<br>"},t.del=function(text){return"<del>"+text+"</del>"},t.link=function(e,title,text){if(null===(e=ae(this.options.sanitize,this.options.baseUrl,e)))return text;var t='<a href="'+oe(e)+'"';return title&&(t+=' title="'+title+'"'),t+=">"+text+"</a>"},t.image=function(e,title,text){if(null===(e=ae(this.options.sanitize,this.options.baseUrl,e)))return text;var t='<img src="'+e+'" alt="'+text+'"';return title&&(t+=' title="'+title+'"'),t+=this.options.xhtml?"/>":">"},t.text=function(e){return e},e}(),ue=function(){function e(){}var t=e.prototype;return t.strong=function(text){return text},t.em=function(text){return text},t.codespan=function(text){return text},t.del=function(text){return text},t.html=function(text){return text},t.text=function(e){return e},t.link=function(e,title,text){return""+text},t.image=function(e,title,text){return""+text},t.br=function(){return""},e}(),pe=function(){function e(){this.seen={}}var t=e.prototype;return t.serialize=function(e){return e.toLowerCase().trim().replace(/<[!\/a-z].*?>/gi,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")},t.getNextSafeSlug=function(e,t){var n=e,r=0;if(this.seen.hasOwnProperty(n)){r=this.seen[e];do{n=e+"-"+ ++r}while(this.seen.hasOwnProperty(n))}return t||(this.seen[e]=r,this.seen[n]=0),n},t.slug=function(e,t){void 0===t&&(t={});var n=this.serialize(e);return this.getNextSafeSlug(n,t.dryrun)},e}(),he=r.defaults,ge=T,fe=function(){function e(e){this.options=e||he,this.options.renderer=this.options.renderer||new ce,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new ue,this.slugger=new pe}e.parse=function(t,n){return new e(n).parse(t)},e.parseInline=function(t,n){return new e(n).parseInline(t)};var t=e.prototype;return t.parse=function(e,t){void 0===t&&(t=!0);var i,n,r,l,o,c,h,header,body,f,d,k,m,x,v,w,_,y,z="",S=e.length;for(i=0;i<S;i++)switch((f=e[i]).type){case"space":continue;case"hr":z+=this.renderer.hr();continue;case"heading":z+=this.renderer.heading(this.parseInline(f.tokens),f.depth,ge(this.parseInline(f.tokens,this.textRenderer)),this.slugger);continue;case"code":z+=this.renderer.code(f.text,f.lang,f.escaped);continue;case"table":for(header="",h="",l=f.header.length,n=0;n<l;n++)h+=this.renderer.tablecell(this.parseInline(f.tokens.header[n]),{header:!0,align:f.align[n]});for(header+=this.renderer.tablerow(h),body="",l=f.cells.length,n=0;n<l;n++){for(h="",o=(c=f.tokens.cells[n]).length,r=0;r<o;r++)h+=this.renderer.tablecell(this.parseInline(c[r]),{header:!1,align:f.align[r]});body+=this.renderer.tablerow(h)}z+=this.renderer.table(header,body);continue;case"blockquote":body=this.parse(f.tokens),z+=this.renderer.blockquote(body);continue;case"list":for(d=f.ordered,k=f.start,m=f.loose,l=f.items.length,body="",n=0;n<l;n++)w=(v=f.items[n]).checked,_=v.task,x="",v.task&&(y=this.renderer.checkbox(w),m?v.tokens.length>0&&"text"===v.tokens[0].type?(v.tokens[0].text=y+" "+v.tokens[0].text,v.tokens[0].tokens&&v.tokens[0].tokens.length>0&&"text"===v.tokens[0].tokens[0].type&&(v.tokens[0].tokens[0].text=y+" "+v.tokens[0].tokens[0].text)):v.tokens.unshift({type:"text",text:y}):x+=y),x+=this.parse(v.tokens,m),body+=this.renderer.listitem(x,_,w);z+=this.renderer.list(body,d,k);continue;case"html":z+=this.renderer.html(f.text);continue;case"paragraph":z+=this.renderer.paragraph(this.parseInline(f.tokens));continue;case"text":for(body=f.tokens?this.parseInline(f.tokens):f.text;i+1<S&&"text"===e[i+1].type;)body+="\n"+((f=e[++i]).tokens?this.parseInline(f.tokens):f.text);z+=t?this.renderer.paragraph(body):body;continue;default:var $='Token with "'+f.type+'" type was not found.';if(this.options.silent)return void console.error($);throw new Error($)}return z},t.parseInline=function(e,t){t=t||this.renderer;var i,n,r="",l=e.length;for(i=0;i<l;i++)switch((n=e[i]).type){case"escape":r+=t.text(n.text);break;case"html":r+=t.html(n.text);break;case"link":r+=t.link(n.href,n.title,this.parseInline(n.tokens,t));break;case"image":r+=t.image(n.href,n.title,n.text);break;case"strong":r+=t.strong(this.parseInline(n.tokens,t));break;case"em":r+=t.em(this.parseInline(n.tokens,t));break;case"codespan":r+=t.codespan(n.text);break;case"br":r+=t.br();break;case"del":r+=t.del(this.parseInline(n.tokens,t));break;case"text":r+=t.text(n.text);break;default:var o='Token with "'+n.type+'" type was not found.';if(this.options.silent)return void console.error(o);throw new Error(o)}return r},e}(),de=U,ke=P,be=R,me=r.getDefaults,xe=r.changeDefaults,ve=r.defaults;function we(e,t,n){if(null==e)throw new Error("marked(): input parameter is undefined or null");if("string"!=typeof e)throw new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected");if("function"==typeof t&&(n=t,t=null),t=de({},we.defaults,t||{}),ke(t),n){var r,l=t.highlight;try{r=se.lex(e,t)}catch(e){return n(e)}var o=function(e){var o;if(!e)try{o=fe.parse(r,t)}catch(t){e=t}return t.highlight=l,e?n(e):n(null,o)};if(!l||l.length<3)return o();if(delete t.highlight,!r.length)return o();var c=0;return we.walkTokens(r,(function(e){"code"===e.type&&(c++,setTimeout((function(){l(e.text,e.lang,(function(t,code){if(t)return o(t);null!=code&&code!==e.text&&(e.text=code,e.escaped=!0),0==--c&&o()}))}),0))})),void(0===c&&o())}try{var h=se.lex(e,t);return t.walkTokens&&we.walkTokens(h,t.walkTokens),fe.parse(h,t)}catch(e){if(e.message+="\nPlease report this to https://github.com/markedjs/marked.",t.silent)return"<p>An error occurred:</p><pre>"+be(e.message+"",!0)+"</pre>";throw e}}return we.options=we.setOptions=function(e){return de(we.defaults,e),xe(we.defaults),we},we.getDefaults=me,we.defaults=ve,we.use=function(e){var t=de({},e);if(e.renderer&&function(){var n=we.defaults.renderer||new ce,r=function(t){var r=n[t];n[t]=function(){for(var l=arguments.length,o=new Array(l),c=0;c<l;c++)o[c]=arguments[c];var h=e.renderer[t].apply(n,o);return!1===h&&(h=r.apply(n,o)),h}};for(var l in e.renderer)r(l);t.renderer=n}(),e.tokenizer&&function(){var n=we.defaults.tokenizer||new X,r=function(t){var r=n[t];n[t]=function(){for(var l=arguments.length,o=new Array(l),c=0;c<l;c++)o[c]=arguments[c];var h=e.tokenizer[t].apply(n,o);return!1===h&&(h=r.apply(n,o)),h}};for(var l in e.tokenizer)r(l);t.tokenizer=n}(),e.walkTokens){var n=we.defaults.walkTokens;t.walkTokens=function(t){e.walkTokens(t),n&&n(t)}}we.setOptions(t)},we.walkTokens=function(e,t){for(var r,l=n(e);!(r=l()).done;){var o=r.value;switch(t(o),o.type){case"table":for(var c,h=n(o.tokens.header);!(c=h()).done;){var f=c.value;we.walkTokens(f,t)}for(var d,k=n(o.tokens.cells);!(d=k()).done;)for(var m,x=n(d.value);!(m=x()).done;){var v=m.value;we.walkTokens(v,t)}break;case"list":we.walkTokens(o.items,t);break;default:o.tokens&&we.walkTokens(o.tokens,t)}}},we.parseInline=function(e,t){if(null==e)throw new Error("marked.parseInline(): input parameter is undefined or null");if("string"!=typeof e)throw new Error("marked.parseInline(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected");t=de({},we.defaults,t||{}),ke(t);try{var n=se.lexInline(e,t);return t.walkTokens&&we.walkTokens(n,t.walkTokens),fe.parseInline(n,t)}catch(e){if(e.message+="\nPlease report this to https://github.com/markedjs/marked.",t.silent)return"<p>An error occurred:</p><pre>"+be(e.message+"",!0)+"</pre>";throw e}},we.Parser=fe,we.parser=fe.parse,we.Renderer=ce,we.TextRenderer=ue,we.Lexer=se,we.lexer=se.lex,we.Tokenizer=X,we.Slugger=pe,we.parse=we,we}()}}]);