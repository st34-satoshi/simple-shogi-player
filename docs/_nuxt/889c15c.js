(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{523:function(t,e,o){"use strict";o.r(e),function(t,r){o.d(e,"MoveInfo",(function(){return _}));o(27),o(21),o(26),o(33),o(34);var n=o(4),f=o(128),c=o(129);o(7);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var _=function(){function t(e){Object(f.a)(this,t),Object.assign(this,e)}return Object(c.a)(t,[{key:"to_sfen",get:function(){var t=null;if("move"===this.type)t=this.from.place.to_sfen+this.to.place.to_sfen;else if("promotable"===this.type)t=this.from.place.to_sfen+this.to.place.to_sfen+(this.to.promoted?"+":"");else{if("put"!==this.type)throw new Error("must not happen");t=this.to.piece.key+"*"+this.to.place.to_sfen}return t}},{key:"to_kif",get:function(){return this.to_custom_kif()}},{key:"to_kif_without_from",get:function(){return this.to_custom_kif({from:!1})}},{key:"to_yomiage",get:function(){var t=null;if("move"===this.type)t=this.from.yomiage_name;else if("promotable"===this.type)t=this.from.piece.piece_yomiage.prefix_name+"、"+(this.to.promoted?"なりっ！":"ならずっ！");else{if("put"!==this.type)throw new Error("must not happen");t=this.to.piece.piece_yomiage.prefix_name+"、うつ！"}return[this.to.place.yomiage_x,this.to.place.yomiage_y,t].join(" ")}},{key:"effect_key",get:function(){if(this.killed_soldier)return"kill_attack";if("move"===this.type)return"move_or_appear";if("promotable"===this.type)return this.to.promoted,"move_or_appear";if("put"===this.type)return"move_or_appear";throw new Error("must not happen")}},{key:"to_custom_kif",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t=m({location:!0,from:!0},t);var e=null,o="";if("move"===this.type)e=this.from.name,t.from&&(o=this.__from_xy);else if("promotable"===this.type)e=this.from.name+(this.to.promoted?"成":"不成"),t.from&&(o=this.__from_xy);else{if("put"!==this.type)throw new Error("must not happen");e=this.to.name+"打"}return[t.location?this.to.location.name:"",this.__to_xy,e,o].join("")}},{key:"__from_xy",get:function(){return["(",this.from.place.digit_human,")"].join("")}},{key:"__to_xy",get:function(){return[this.to.place.human_x,this.to.place.kanji_human_y].join("")}}]),t}();t.argv[1]}.call(this,o(130),"/index.js")}}]);