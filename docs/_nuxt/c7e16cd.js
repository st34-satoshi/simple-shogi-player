(window.webpackJsonp=window.webpackJsonp||[]).push([[107,88],{272:function(e,t,n){"use strict";n.r(t),n.d(t,"sound_module",(function(){return f}));n(27),n(21),n(26),n(33),n(34);var o=n(4),r=(n(90),n(527));function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var f={props:{sp_sound_enabled:{type:Boolean,default:!1},sp_sound_body_changed:{type:Boolean,default:!0},sp_sound_volume:{type:Number,default:.5}},methods:{sound_play:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(this.$emit("sound_play",e),this.sp_sound_enabled){var n=r.SoundPresetInfo.fetch(e),o=c({src:n.source,volume:n.volume*this.sp_sound_volume,autoplay:!0},t);if("undefined"!=typeof Howl)return new Howl(o)}},sp_sound_resume_all:function(){if("undefined"!=typeof Howler)return Howler.unload()},sp_Howler:function(){if("undefined"!=typeof Howler)return Howler}}}},485:function(e,t,n){"use strict";(function(e,o){Object.defineProperty(t,"__esModule",{value:!0});var r=w(n(494)),l=w(n(495)),c=w(n(498)),f=w(n(490)),d=w(n(501)),_=w(n(502)),h=w(n(503)),y=w(n(504)),v=w(n(505)),m=w(n(506)),k=w(n(17));function w(e){return e&&e.__esModule?e:{default:e}}var O=function(){function e(t){var n=this;(0,v.default)(this,e),Object.defineProperty(this,"attributes",{value:t,writable:!1,enumerable:!1,configurable:!1}),k.default.forIn(t,(function(e,t){(0,f.default)(n,t,{value:e,writable:!1,enumerable:!0,configurable:!1})})),"name"in this||Object.defineProperty(this,"name",{value:t.name||t.key.toString(),writable:!1,enumerable:!0,configurable:!1})}return(0,m.default)(e,null,[{key:"memory_record_reset",value:function(e){return this._values=void 0,this._keys_hash=void 0,this._codes_hash=void 0,this._keys=void 0,this._codes=void 0,this._names=void 0,this._records=e,this}},{key:"memory_record_create_index_or",value:function(e){var t=this;return this.values.reduce((function(a,n){return e.forEach((function(e){var o=n[e];if(null!=o){if(o in a)throw new Error([t.name+"#"+e+" "+(0,y.default)(o)+" is duplicate","Existing: "+(0,y.default)((0,h.default)(a)),"Conflict: "+(0,y.default)(n)].join("\n"));a[o]=n}})),a}),{})}},{key:"lookup",value:function(e){return e instanceof this?e:"number"==typeof e?this.codes_hash[e]:this.keys_hash[e]}},{key:"fetch",value:function(e){var element=this.lookup(e);if(!element)throw new Error([this.name+".fetch("+(0,y.default)(e)+") does not match anything","keys: "+(0,y.default)(this.keys),"codes: "+(0,y.default)(this.codes)].join("\n"));return element}},{key:"fetch_if",value:function(e){if(null!=e)return this.fetch(e)}},{key:"define",get:function(){throw new Error(this.name+".define() is not implemented")}},{key:"values",get:function(){var e=this;return void 0!==this._values||(this._values=k.default.map(this.__source_records,(function(t,i){return"code"in(t=(0,_.default)({},t,{index:i}))||(t=(0,_.default)({},t,{code:i})),"key"in t||(t=(0,_.default)({},t,{key:"_key"+i})),(0,d.default)(new e(t))}))),this._values}},{key:"keys_hash",get:function(){return null!=this._keys_hash||(this._keys_hash=this.memory_record_create_index_or(["key"])),this._keys_hash}},{key:"codes_hash",get:function(){return null!=this._codes_hash||(this._codes_hash=this.memory_record_create_index_or(["code"])),this._codes_hash}},{key:"keys",get:function(){return null!=this._keys||(this._keys=(0,h.default)(this.keys_hash)),this._keys}},{key:"codes",get:function(){return null!=this._codes||(this._codes=this.values.map((function(e){return e.code}))),this._codes}},{key:"names",get:function(){return null!=this._names||(this._names=this.values.map((function(e){return e.name}))),this._names}},{key:"count",get:function(){return this.values.length}},{key:"__source_records",get:function(){return null!=this._records||(this._records=this.define),this._records}}]),e}();if(t.default=O,e.argv[1]===o){var E=function(e){function t(){return(0,v.default)(this,t),(0,l.default)(this,(t.__proto__||(0,r.default)(t)).apply(this,arguments))}return(0,c.default)(t,e),(0,m.default)(t,null,[{key:"define",get:function(){return[{key:"black",name:"☗"},{key:"white",name:"☖"},{code:7}]}}]),t}(O);console.log(E.keys),console.log(E.codes);var j=E.values[0];console.log(j.key),console.log(j.code),console.log(j.name),console.log(E.values),console.log(E.lookup("black").name),console.log(E.lookup("black").code),console.log(E.lookup("_key2").name);var x=E.lookup("black");console.log(x instanceof E),console.log(E.lookup(0)),console.log(E.lookup(1)),console.log(E.lookup(2)),console.log(E.values[0]==E.values[0]),console.log(E.values.map((function(e){return e.key}))),console.log((0,h.default)(E.keys_hash)),console.log(E.fetch("unknown"))}}).call(this,n(130),"/index.js")},489:function(e,t,n){"use strict";t.__esModule=!0;var o=c(n(496)),r=c(n(497)),l="function"==typeof r.default&&"symbol"==typeof o.default?function(e){return typeof e}:function(e){return e&&"function"==typeof r.default&&e.constructor===r.default&&e!==r.default.prototype?"symbol":typeof e};function c(e){return e&&e.__esModule?e:{default:e}}t.default="function"==typeof r.default&&"symbol"===l(o.default)?function(e){return void 0===e?"undefined":l(e)}:function(e){return e&&"function"==typeof r.default&&e.constructor===r.default&&e!==r.default.prototype?"symbol":void 0===e?"undefined":l(e)}},490:function(e,t,n){e.exports={default:n(536),__esModule:!0}},494:function(e,t,n){e.exports={default:n(531),__esModule:!0}},495:function(e,t,n){"use strict";t.__esModule=!0;var o,r=n(489),l=(o=r)&&o.__esModule?o:{default:o};t.default=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==(void 0===t?"undefined":(0,l.default)(t))&&"function"!=typeof t?e:t}},496:function(e,t,n){e.exports={default:n(532),__esModule:!0}},497:function(e,t,n){e.exports={default:n(533),__esModule:!0}},498:function(e,t,n){"use strict";t.__esModule=!0;var o=c(n(499)),r=c(n(500)),l=c(n(489));function c(e){return e&&e.__esModule?e:{default:e}}t.default=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":(0,l.default)(t)));e.prototype=(0,r.default)(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(o.default?(0,o.default)(e,t):e.__proto__=t)}},499:function(e,t,n){e.exports={default:n(534),__esModule:!0}},500:function(e,t,n){e.exports={default:n(535),__esModule:!0}},501:function(e,t,n){e.exports={default:n(537),__esModule:!0}},502:function(e,t,n){e.exports={default:n(538),__esModule:!0}},503:function(e,t,n){e.exports={default:n(539),__esModule:!0}},504:function(e,t,n){e.exports={default:n(540),__esModule:!0}},505:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},506:function(e,t,n){"use strict";t.__esModule=!0;var o,r=n(490),l=(o=r)&&o.__esModule?o:{default:o};t.default=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,l.default)(e,n.key,n)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}()},520:function(e,t,n){e.exports=n.p+"assets/Universal_Sound_FX/TABLE_TENNIS_Racket_Ball_Hit_07_Hard_mono.wav"},521:function(e,t,n){e.exports=n.p+"assets/Universal_Sound_FX/RELOAD_Rechamber_Leaver_Action_stereo.wav"},527:function(e,t,n){"use strict";n.r(t),n.d(t,"SoundPresetInfo",(function(){return h}));n(482);var o=n(128),r=n(129),l=n(483),c=n(484),f=n(481),d=n(485);function _(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=Object(f.a)(e);if(t){var r=Object(f.a)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Object(c.a)(this,n)}}var h=function(e){Object(l.a)(c,e);var t=_(c);function c(){return Object(o.a)(this,c),t.apply(this,arguments)}return Object(r.a)(c,null,[{key:"define",get:function(){return[{key:"piece_put",source:n(520),volume:.5},{key:"flip_sound",source:n(521),volume:1}]}}]),c}(n.n(d).a)},567:function(e,t,n){var o=n(9),r=n(47),l=n(18),c=n(568),f="["+c+"]",d=RegExp("^"+f+f+"*"),_=RegExp(f+f+"*$"),h=function(e,t,n){var r={},f=l((function(){return!!c[e]()||"​"!="​"[e]()})),d=r[e]=f?t(y):c[e];n&&(r[n]=d),o(o.P+o.F*f,"String",r)},y=h.trim=function(e,t){return e=String(r(e)),1&t&&(e=e.replace(d,"")),2&t&&(e=e.replace(_,"")),e};e.exports=h},568:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},90:function(e,t,n){"use strict";var o=n(11),r=n(40),l=n(41),c=n(281),f=n(94),d=n(18),_=n(75).f,h=n(76).f,y=n(23).f,v=n(567).trim,m="Number",k=o.Number,w=k,O=k.prototype,E=l(n(137)(O))==m,j="trim"in String.prototype,x=function(e){var t=f(e,!1);if("string"==typeof t&&t.length>2){var n,o,r,l=(t=j?t.trim():v(t,3)).charCodeAt(0);if(43===l||45===l){if(88===(n=t.charCodeAt(2))||120===n)return NaN}else if(48===l){switch(t.charCodeAt(1)){case 66:case 98:o=2,r=49;break;case 79:case 111:o=8,r=55;break;default:return+t}for(var code,c=t.slice(2),i=0,d=c.length;i<d;i++)if((code=c.charCodeAt(i))<48||code>r)return NaN;return parseInt(c,o)}}return+t};if(!k(" 0o1")||!k("0b1")||k("+0x1")){k=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof k&&(E?d((function(){O.valueOf.call(n)})):l(n)!=m)?c(new w(x(t)),n,k):x(t)};for(var M,I=n(15)?_(w):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),N=0;I.length>N;N++)r(w,M=I[N])&&!r(k,M)&&y(k,M,h(w,M));k.prototype=O,O.constructor=k,n(28)(o,m,k)}}}]);