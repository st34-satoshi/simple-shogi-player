(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{482:function(e,t,n){"use strict";(function(e,o){Object.defineProperty(t,"__esModule",{value:!0});var r=w(n(491)),l=w(n(492)),c=w(n(495)),f=w(n(487)),d=w(n(498)),_=w(n(499)),h=w(n(500)),y=w(n(501)),v=w(n(502)),k=w(n(503)),m=w(n(14));function w(e){return e&&e.__esModule?e:{default:e}}var M=function(){function e(t){var n=this;(0,v.default)(this,e),Object.defineProperty(this,"attributes",{value:t,writable:!1,enumerable:!1,configurable:!1}),m.default.forIn(t,(function(e,t){(0,f.default)(n,t,{value:e,writable:!1,enumerable:!0,configurable:!1})})),"name"in this||Object.defineProperty(this,"name",{value:t.name||t.key.toString(),writable:!1,enumerable:!0,configurable:!1})}return(0,k.default)(e,null,[{key:"memory_record_reset",value:function(e){return this._values=void 0,this._keys_hash=void 0,this._codes_hash=void 0,this._keys=void 0,this._codes=void 0,this._names=void 0,this._records=e,this}},{key:"memory_record_create_index_or",value:function(e){var t=this;return this.values.reduce((function(a,n){return e.forEach((function(e){var o=n[e];if(null!=o){if(o in a)throw new Error([t.name+"#"+e+" "+(0,y.default)(o)+" is duplicate","Existing: "+(0,y.default)((0,h.default)(a)),"Conflict: "+(0,y.default)(n)].join("\n"));a[o]=n}})),a}),{})}},{key:"lookup",value:function(e){return e instanceof this?e:"number"==typeof e?this.codes_hash[e]:this.keys_hash[e]}},{key:"fetch",value:function(e){var element=this.lookup(e);if(!element)throw new Error([this.name+".fetch("+(0,y.default)(e)+") does not match anything","keys: "+(0,y.default)(this.keys),"codes: "+(0,y.default)(this.codes)].join("\n"));return element}},{key:"fetch_if",value:function(e){if(null!=e)return this.fetch(e)}},{key:"define",get:function(){throw new Error(this.name+".define() is not implemented")}},{key:"values",get:function(){var e=this;return void 0!==this._values||(this._values=m.default.map(this.__source_records,(function(t,i){return"code"in(t=(0,_.default)({},t,{index:i}))||(t=(0,_.default)({},t,{code:i})),"key"in t||(t=(0,_.default)({},t,{key:"_key"+i})),(0,d.default)(new e(t))}))),this._values}},{key:"keys_hash",get:function(){return null!=this._keys_hash||(this._keys_hash=this.memory_record_create_index_or(["key"])),this._keys_hash}},{key:"codes_hash",get:function(){return null!=this._codes_hash||(this._codes_hash=this.memory_record_create_index_or(["code"])),this._codes_hash}},{key:"keys",get:function(){return null!=this._keys||(this._keys=(0,h.default)(this.keys_hash)),this._keys}},{key:"codes",get:function(){return null!=this._codes||(this._codes=this.values.map((function(e){return e.code}))),this._codes}},{key:"names",get:function(){return null!=this._names||(this._names=this.values.map((function(e){return e.name}))),this._names}},{key:"__source_records",get:function(){return null!=this._records||(this._records=this.define),this._records}}]),e}();if(t.default=M,e.argv[1]===o){var x=function(e){function t(){return(0,v.default)(this,t),(0,l.default)(this,(t.__proto__||(0,r.default)(t)).apply(this,arguments))}return(0,c.default)(t,e),(0,k.default)(t,null,[{key:"define",get:function(){return[{key:"black",name:"☗"},{key:"white",name:"☖"},{code:7}]}}]),t}(M);console.log(x.keys),console.log(x.codes);var j=x.values[0];console.log(j.key),console.log(j.code),console.log(j.name),console.log(x.values),console.log(x.lookup("black").name),console.log(x.lookup("black").code),console.log(x.lookup("_key2").name);var O=x.lookup("black");console.log(O instanceof x),console.log(x.lookup(0)),console.log(x.lookup(1)),console.log(x.lookup(2)),console.log(x.values[0]==x.values[0]),console.log(x.values.map((function(e){return e.key}))),console.log((0,h.default)(x.keys_hash)),console.log(x.fetch("unknown"))}}).call(this,n(131),"/index.js")},486:function(e,t,n){"use strict";t.__esModule=!0;var o=c(n(493)),r=c(n(494)),l="function"==typeof r.default&&"symbol"==typeof o.default?function(e){return typeof e}:function(e){return e&&"function"==typeof r.default&&e.constructor===r.default&&e!==r.default.prototype?"symbol":typeof e};function c(e){return e&&e.__esModule?e:{default:e}}t.default="function"==typeof r.default&&"symbol"===l(o.default)?function(e){return void 0===e?"undefined":l(e)}:function(e){return e&&"function"==typeof r.default&&e.constructor===r.default&&e!==r.default.prototype?"symbol":void 0===e?"undefined":l(e)}},487:function(e,t,n){e.exports={default:n(531),__esModule:!0}},491:function(e,t,n){e.exports={default:n(526),__esModule:!0}},492:function(e,t,n){"use strict";t.__esModule=!0;var o,r=n(486),l=(o=r)&&o.__esModule?o:{default:o};t.default=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==(void 0===t?"undefined":(0,l.default)(t))&&"function"!=typeof t?e:t}},493:function(e,t,n){e.exports={default:n(527),__esModule:!0}},494:function(e,t,n){e.exports={default:n(528),__esModule:!0}},495:function(e,t,n){"use strict";t.__esModule=!0;var o=c(n(496)),r=c(n(497)),l=c(n(486));function c(e){return e&&e.__esModule?e:{default:e}}t.default=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":(0,l.default)(t)));e.prototype=(0,r.default)(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(o.default?(0,o.default)(e,t):e.__proto__=t)}},496:function(e,t,n){e.exports={default:n(529),__esModule:!0}},497:function(e,t,n){e.exports={default:n(530),__esModule:!0}},498:function(e,t,n){e.exports={default:n(532),__esModule:!0}},499:function(e,t,n){e.exports={default:n(533),__esModule:!0}},500:function(e,t,n){e.exports={default:n(534),__esModule:!0}},501:function(e,t,n){e.exports={default:n(535),__esModule:!0}},502:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},503:function(e,t,n){"use strict";t.__esModule=!0;var o,r=n(487),l=(o=r)&&o.__esModule?o:{default:o};t.default=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,l.default)(e,n.key,n)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}()},53:function(e,t,n){"use strict";n.r(t),function(e,o){n.d(t,"BgVariantInfo",(function(){return y}));n(479);var r=n(129),l=n(130),c=n(480),f=n(481),d=n(478),_=(n(27),n(482));function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=Object(d.a)(e);if(t){var r=Object(d.a)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Object(f.a)(this,n)}}var y=function(e){Object(c.a)(n,e);var t=h(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,null,[{key:"define",get:function(){return[{key:"is_bg_variant_none",name:"none"},{key:"is_bg_variant_a",name:"木1"},{key:"is_bg_variant_b",name:"木2"},{key:"is_bg_variant_c",name:"木3"},{key:"is_bg_variant_d",name:"木4"},{key:"is_bg_variant_e",name:"木5"},{key:"is_bg_variant_f",name:"木6"},{key:"is_bg_variant_g",name:"木7"}]}}]),n}(n.n(_).a);e.argv[1]===o&&(console.log(y.fetch("is_bg_variant_a").key),console.log(y.fetch("is_bg_variant_a").name))}.call(this,n(131),"/index.js")}}]);