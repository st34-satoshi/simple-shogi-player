(window.webpackJsonp=window.webpackJsonp||[]).push([[56,9,10,11,12,45,46,47,49,50,51,57,62,64,65],{3:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var o={inject:["TheSp"]}},582:function(e,t,n){"use strict";(function(e,o){Object.defineProperty(t,"__esModule",{value:!0});var r=j(n(700)),c=j(n(701)),l=j(n(704)),f=j(n(658)),d=j(n(707)),_=j(n(708)),h=j(n(709)),y=j(n(710)),v=j(n(711)),k=j(n(712)),m=j(n(25));function j(e){return e&&e.__esModule?e:{default:e}}var w=function(){function e(t){var n=this;(0,v.default)(this,e),Object.defineProperty(this,"attributes",{value:t,writable:!1,enumerable:!1,configurable:!1}),m.default.forIn(t,(function(e,t){(0,f.default)(n,t,{value:e,writable:!1,enumerable:!0,configurable:!1})})),"name"in this||Object.defineProperty(this,"name",{value:t.name||t.key.toString(),writable:!1,enumerable:!0,configurable:!1})}return(0,k.default)(e,null,[{key:"memory_record_reset",value:function(e){return this._values=void 0,this._keys_hash=void 0,this._codes_hash=void 0,this._keys=void 0,this._codes=void 0,this._names=void 0,this._records=e,this}},{key:"memory_record_create_index_or",value:function(e){var t=this;return this.values.reduce((function(a,n){return e.forEach((function(e){var o=n[e];if(null!=o){if(o in a)throw new Error([t.name+"#"+e+" "+(0,y.default)(o)+" is duplicate","Existing: "+(0,y.default)((0,h.default)(a)),"Conflict: "+(0,y.default)(n)].join("\n"));a[o]=n}})),a}),{})}},{key:"lookup",value:function(e){return e instanceof this?e:"number"==typeof e?this.codes_hash[e]:this.keys_hash[e]}},{key:"fetch",value:function(e){var element=this.lookup(e);if(!element)throw new Error([this.name+".fetch("+(0,y.default)(e)+") does not match anything","keys: "+(0,y.default)(this.keys),"codes: "+(0,y.default)(this.codes)].join("\n"));return element}},{key:"fetch_if",value:function(e){if(null!=e)return this.fetch(e)}},{key:"define",get:function(){throw new Error(this.name+".define() is not implemented")}},{key:"values",get:function(){var e=this;return void 0!==this._values||(this._values=m.default.map(this.__source_records,(function(t,i){return"code"in(t=(0,_.default)({},t,{index:i}))||(t=(0,_.default)({},t,{code:i})),"key"in t||(t=(0,_.default)({},t,{key:"_key"+i})),(0,d.default)(new e(t))}))),this._values}},{key:"keys_hash",get:function(){return null!=this._keys_hash||(this._keys_hash=this.memory_record_create_index_or(["key"])),this._keys_hash}},{key:"codes_hash",get:function(){return null!=this._codes_hash||(this._codes_hash=this.memory_record_create_index_or(["code"])),this._codes_hash}},{key:"keys",get:function(){return null!=this._keys||(this._keys=(0,h.default)(this.keys_hash)),this._keys}},{key:"codes",get:function(){return null!=this._codes||(this._codes=this.values.map((function(e){return e.code}))),this._codes}},{key:"names",get:function(){return null!=this._names||(this._names=this.values.map((function(e){return e.name}))),this._names}},{key:"count",get:function(){return this.values.length}},{key:"__source_records",get:function(){return null!=this._records||(this._records=this.define),this._records}}]),e}();if(t.default=w,e.argv[1]===o){var O=function(e){function t(){return(0,v.default)(this,t),(0,c.default)(this,(t.__proto__||(0,r.default)(t)).apply(this,arguments))}return(0,l.default)(t,e),(0,k.default)(t,null,[{key:"define",get:function(){return[{key:"black",name:"☗"},{key:"white",name:"☖"},{code:7}]}}]),t}(w);console.log(O.keys),console.log(O.codes);var x=O.values[0];console.log(x.key),console.log(x.code),console.log(x.name),console.log(O.values),console.log(O.lookup("black").name),console.log(O.lookup("black").code),console.log(O.lookup("_key2").name);var M=O.lookup("black");console.log(M instanceof O),console.log(O.lookup(0)),console.log(O.lookup(1)),console.log(O.lookup(2)),console.log(O.values[0]==O.values[0]),console.log(O.values.map((function(e){return e.key}))),console.log((0,h.default)(O.keys_hash)),console.log(O.fetch("unknown"))}}).call(this,n(175),"/index.js")},657:function(e,t,n){"use strict";t.__esModule=!0;var o=l(n(702)),r=l(n(703)),c="function"==typeof r.default&&"symbol"==typeof o.default?function(e){return typeof e}:function(e){return e&&"function"==typeof r.default&&e.constructor===r.default&&e!==r.default.prototype?"symbol":typeof e};function l(e){return e&&e.__esModule?e:{default:e}}t.default="function"==typeof r.default&&"symbol"===c(o.default)?function(e){return void 0===e?"undefined":c(e)}:function(e){return e&&"function"==typeof r.default&&e.constructor===r.default&&e!==r.default.prototype?"symbol":void 0===e?"undefined":c(e)}},658:function(e,t,n){e.exports={default:n(906),__esModule:!0}},700:function(e,t,n){e.exports={default:n(901),__esModule:!0}},701:function(e,t,n){"use strict";t.__esModule=!0;var o,r=n(657),c=(o=r)&&o.__esModule?o:{default:o};t.default=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==(void 0===t?"undefined":(0,c.default)(t))&&"function"!=typeof t?e:t}},702:function(e,t,n){e.exports={default:n(902),__esModule:!0}},703:function(e,t,n){e.exports={default:n(903),__esModule:!0}},704:function(e,t,n){"use strict";t.__esModule=!0;var o=l(n(705)),r=l(n(706)),c=l(n(657));function l(e){return e&&e.__esModule?e:{default:e}}t.default=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":(0,c.default)(t)));e.prototype=(0,r.default)(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(o.default?(0,o.default)(e,t):e.__proto__=t)}},705:function(e,t,n){e.exports={default:n(904),__esModule:!0}},706:function(e,t,n){e.exports={default:n(905),__esModule:!0}},707:function(e,t,n){e.exports={default:n(907),__esModule:!0}},708:function(e,t,n){e.exports={default:n(908),__esModule:!0}},709:function(e,t,n){e.exports={default:n(909),__esModule:!0}},710:function(e,t,n){e.exports={default:n(910),__esModule:!0}},711:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},712:function(e,t,n){"use strict";t.__esModule=!0;var o,r=n(658),c=(o=r)&&o.__esModule?o:{default:o};t.default=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,c.default)(e,n.key,n)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}()},78:function(e,t,n){"use strict";(function(e,o){n.d(t,"a",(function(){return y}));n(18),n(579);var r=n(173),c=n(174),l=n(580),f=n(581),d=n(578),_=(n(38),n(582));function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=Object(d.a)(e);if(t){var r=Object(d.a)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Object(f.a)(this,n)}}var y=function(e){Object(l.a)(n,e);var t=h(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,null,[{key:"define",get:function(){return[{key:"view_mode",name:"再生"},{key:"play_mode",name:"操作"},{key:"edit_mode",name:"編集"}]}}]),n}(n.n(_).a);e.argv[1]===o&&(console.log(y.fetch("simple").key),console.log(y.fetch("simple").name))}).call(this,n(175),"/index.js")},79:function(e,t,n){"use strict";(function(e,o){n.d(t,"a",(function(){return y}));n(18),n(579);var r=n(173),c=n(174),l=n(580),f=n(581),d=n(578),_=(n(38),n(582));function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=Object(d.a)(e);if(t){var r=Object(d.a)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Object(f.a)(this,n)}}var y=function(e){Object(l.a)(n,e);var t=h(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,null,[{key:"define",get:function(){return[{key:"is_bg_variant_none",name:"none"},{key:"is_bg_variant_a",name:"木1"},{key:"is_bg_variant_b",name:"木2"}]}}]),n}(n.n(_).a);e.argv[1]===o&&(console.log(y.fetch("is_bg_variant_a").key),console.log(y.fetch("is_bg_variant_a").name))}).call(this,n(175),"/index.js")},80:function(e,t,n){"use strict";(function(e,o){n.d(t,"a",(function(){return y}));n(18),n(579);var r=n(173),c=n(174),l=n(580),f=n(581),d=n(578),_=(n(38),n(582));function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=Object(d.a)(e);if(t){var r=Object(d.a)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Object(f.a)(this,n)}}var y=function(e){Object(l.a)(n,e);var t=h(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,null,[{key:"define",get:function(){return[{key:"is_pi_variant_none",name:"none"},{key:"is_pi_variant_a",name:"ぬれよん(svg)"},{key:"is_pi_variant_b",name:"紙面風(svg)"},{key:"is_pi_variant_c",name:"図案駒(png)"},{key:"is_pi_variant_d",name:"Portella(png)"}]}}]),n}(n.n(_).a);e.argv[1]===o&&(console.log(y.fetch("is_pi_variant_a").key),console.log(y.fetch("is_pi_variant_a").name))}).call(this,n(175),"/index.js")}}]);