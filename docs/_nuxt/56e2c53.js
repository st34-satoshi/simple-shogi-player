(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{485:function(e,t,n){"use strict";(function(e,o){Object.defineProperty(t,"__esModule",{value:!0});var r=w(n(494)),l=w(n(495)),f=w(n(498)),c=w(n(490)),d=w(n(501)),_=w(n(502)),h=w(n(503)),y=w(n(504)),m=w(n(505)),k=w(n(506)),v=w(n(17));function w(e){return e&&e.__esModule?e:{default:e}}var x=function(){function e(t){var n=this;(0,m.default)(this,e),Object.defineProperty(this,"attributes",{value:t,writable:!1,enumerable:!1,configurable:!1}),v.default.forIn(t,(function(e,t){(0,c.default)(n,t,{value:e,writable:!1,enumerable:!0,configurable:!1})})),"name"in this||Object.defineProperty(this,"name",{value:t.name||t.key.toString(),writable:!1,enumerable:!0,configurable:!1})}return(0,k.default)(e,null,[{key:"memory_record_reset",value:function(e){return this._values=void 0,this._keys_hash=void 0,this._codes_hash=void 0,this._keys=void 0,this._codes=void 0,this._names=void 0,this._records=e,this}},{key:"memory_record_create_index_or",value:function(e){var t=this;return this.values.reduce((function(a,n){return e.forEach((function(e){var o=n[e];if(null!=o){if(o in a)throw new Error([t.name+"#"+e+" "+(0,y.default)(o)+" is duplicate","Existing: "+(0,y.default)((0,h.default)(a)),"Conflict: "+(0,y.default)(n)].join("\n"));a[o]=n}})),a}),{})}},{key:"lookup",value:function(e){return e instanceof this?e:"number"==typeof e?this.codes_hash[e]:this.keys_hash[e]}},{key:"fetch",value:function(e){var element=this.lookup(e);if(!element)throw new Error([this.name+".fetch("+(0,y.default)(e)+") does not match anything","keys: "+(0,y.default)(this.keys),"codes: "+(0,y.default)(this.codes)].join("\n"));return element}},{key:"fetch_if",value:function(e){if(null!=e)return this.fetch(e)}},{key:"define",get:function(){throw new Error(this.name+".define() is not implemented")}},{key:"values",get:function(){var e=this;return void 0!==this._values||(this._values=v.default.map(this.__source_records,(function(t,i){return"code"in(t=(0,_.default)({},t,{index:i}))||(t=(0,_.default)({},t,{code:i})),"key"in t||(t=(0,_.default)({},t,{key:"_key"+i})),(0,d.default)(new e(t))}))),this._values}},{key:"keys_hash",get:function(){return null!=this._keys_hash||(this._keys_hash=this.memory_record_create_index_or(["key"])),this._keys_hash}},{key:"codes_hash",get:function(){return null!=this._codes_hash||(this._codes_hash=this.memory_record_create_index_or(["code"])),this._codes_hash}},{key:"keys",get:function(){return null!=this._keys||(this._keys=(0,h.default)(this.keys_hash)),this._keys}},{key:"codes",get:function(){return null!=this._codes||(this._codes=this.values.map((function(e){return e.code}))),this._codes}},{key:"names",get:function(){return null!=this._names||(this._names=this.values.map((function(e){return e.name}))),this._names}},{key:"count",get:function(){return this.values.length}},{key:"__source_records",get:function(){return null!=this._records||(this._records=this.define),this._records}}]),e}();if(t.default=x,e.argv[1]===o){var M=function(e){function t(){return(0,m.default)(this,t),(0,l.default)(this,(t.__proto__||(0,r.default)(t)).apply(this,arguments))}return(0,f.default)(t,e),(0,k.default)(t,null,[{key:"define",get:function(){return[{key:"black",name:"☗"},{key:"white",name:"☖"},{code:7}]}}]),t}(x);console.log(M.keys),console.log(M.codes);var j=M.values[0];console.log(j.key),console.log(j.code),console.log(j.name),console.log(M.values),console.log(M.lookup("black").name),console.log(M.lookup("black").code),console.log(M.lookup("_key2").name);var O=M.lookup("black");console.log(O instanceof M),console.log(M.lookup(0)),console.log(M.lookup(1)),console.log(M.lookup(2)),console.log(M.values[0]==M.values[0]),console.log(M.values.map((function(e){return e.key}))),console.log((0,h.default)(M.keys_hash)),console.log(M.fetch("unknown"))}}).call(this,n(130),"/index.js")},489:function(e,t,n){"use strict";t.__esModule=!0;var o=f(n(496)),r=f(n(497)),l="function"==typeof r.default&&"symbol"==typeof o.default?function(e){return typeof e}:function(e){return e&&"function"==typeof r.default&&e.constructor===r.default&&e!==r.default.prototype?"symbol":typeof e};function f(e){return e&&e.__esModule?e:{default:e}}t.default="function"==typeof r.default&&"symbol"===l(o.default)?function(e){return void 0===e?"undefined":l(e)}:function(e){return e&&"function"==typeof r.default&&e.constructor===r.default&&e!==r.default.prototype?"symbol":void 0===e?"undefined":l(e)}},490:function(e,t,n){e.exports={default:n(536),__esModule:!0}},494:function(e,t,n){e.exports={default:n(531),__esModule:!0}},495:function(e,t,n){"use strict";t.__esModule=!0;var o,r=n(489),l=(o=r)&&o.__esModule?o:{default:o};t.default=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==(void 0===t?"undefined":(0,l.default)(t))&&"function"!=typeof t?e:t}},496:function(e,t,n){e.exports={default:n(532),__esModule:!0}},497:function(e,t,n){e.exports={default:n(533),__esModule:!0}},498:function(e,t,n){"use strict";t.__esModule=!0;var o=f(n(499)),r=f(n(500)),l=f(n(489));function f(e){return e&&e.__esModule?e:{default:e}}t.default=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":(0,l.default)(t)));e.prototype=(0,r.default)(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(o.default?(0,o.default)(e,t):e.__proto__=t)}},499:function(e,t,n){e.exports={default:n(534),__esModule:!0}},500:function(e,t,n){e.exports={default:n(535),__esModule:!0}},501:function(e,t,n){e.exports={default:n(537),__esModule:!0}},502:function(e,t,n){e.exports={default:n(538),__esModule:!0}},503:function(e,t,n){e.exports={default:n(539),__esModule:!0}},504:function(e,t,n){e.exports={default:n(540),__esModule:!0}},505:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},506:function(e,t,n){"use strict";t.__esModule=!0;var o,r=n(490),l=(o=r)&&o.__esModule?o:{default:o};t.default=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,l.default)(e,n.key,n)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}()},514:function(e,t,n){"use strict";n.r(t),n.d(t,"PieceYomiage",(function(){return h}));n(482);var o=n(128),r=n(129),l=n(483),f=n(484),c=n(481),d=(n(7),n(485));function _(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=Object(c.a)(e);if(t){var r=Object(c.a)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Object(f.a)(this,n)}}var h=function(e){Object(l.a)(n,e);var t=_(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"yomiage",value:function(e){return e?this.promoted_name:this.name}}],[{key:"define",get:function(){return[{key:"K",prefix_name:"ぎょく",name:"ぎょくっ！",promoted_name:null},{key:"R",prefix_name:"ひしゃ",name:"ひしゃっ！",promoted_name:"りゅー！"},{key:"B",prefix_name:"かく",name:"かくっ！",promoted_name:"うまっ！"},{key:"G",prefix_name:"きん",name:"きんっ！",promoted_name:null},{key:"S",prefix_name:"ぎん",name:"ぎんっ！",promoted_name:"なりぎんっ！"},{key:"N",prefix_name:"けい",name:"けいっ！",promoted_name:"なりけいっ！"},{key:"L",prefix_name:"きょー",name:"きょー！",promoted_name:"なりきょー！"},{key:"P",prefix_name:"ふ",name:"ふーっ！",promoted_name:"ときんっ！"}]}}]),n}(n.n(d).a)}}]);