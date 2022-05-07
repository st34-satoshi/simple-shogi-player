(window.webpackJsonp=window.webpackJsonp||[]).push([[95,7,74],{259:function(e,t,n){"use strict";n.r(t),function(e,o){n.d(t,"SfenParser",(function(){return R}));n(479);var r=n(129),c=n(130),_=n(489),f=n(480),l=n(481),h=n(478),d=(n(51),n(257),n(89),n(45),n(488)),k=n.n(d),y=n(3),P=n(14),v=n.n(P),m=n(133),x=n(504),w=n(483),S=n(132),L=n(484),N=n(69),j=n(509);n(90);function G(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=Object(h.a)(e);if(t){var r=Object(h.a)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Object(l.a)(this,n)}}var B,R=function(e){Object(f.a)(n,e);var t=G(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"reset",value:function(){Object(_.a)(Object(h.a)(n.prototype),"reset",this).call(this),this.attributes={}}},{key:"parse",value:function(){this.raw_body=this.raw_body.replace(/startpos/,"sfen lnsgkgsnl/1r5b1/ppppppppp/9/9/9/PPPPPPPPP/1B5R1/LNSGKGSNL b - 1");var e=k()("sfen\\s+(?<board>\\S+)\\s+(?<b_or_w>\\S+)\\s+(?<hold_pieces>\\S+)\\s+(?<turn_counter_next>\\d+)(\\s+moves\\s+(?<moves>.*))?");this.attributes=k.a.exec(this.raw_body,e)}},{key:"board",get:function(){var e=this,t=new m.Board;return this.attributes.board.split("/").forEach((function(n,o){var r=0;k.a.forEach(n,k()("(?<promoted>\\+?)(?<piece>\\S)"),(function(n,i){if(/\d+/.test(n.piece))r+=Number(n.piece);else{var c=new L.Soldier({place:new S.Place([r,o]),piece:w.Piece.fetch(n.piece),promoted:"+"===n.promoted,location:e.__location_by_upper_or_lower_case(n.piece)});t.place_on(c),r++}}))})),t}},{key:"base_location",get:function(){var e=null;return e="b"===this.attributes.b_or_w?"black":"white",N.Location.fetch(e)}},{key:"hold_pieces",get:function(){var e=this,t=this.hold_pieces_empty_hash();return"-"!==this.attributes.hold_pieces&&k.a.forEach(this.attributes.hold_pieces,k()("(?<count>\\d+)?(?<piece_char>\\S)"),(function(n,i){var o=w.Piece.fetch(n.piece_char),r=Number(n.count||1),c=e.__location_by_upper_or_lower_case(n.piece_char);r+=t[c.key][o.key]||0,y.a.set(t[c.key],o.key,r)})),t}},{key:"turn_base",get:function(){return Number(this.attributes.turn_counter_next)-1}},{key:"move_infos",get:function(){var e=this,t=[];return v.a.forEach(this.moves,(function(n,i){var o=j.MoveHash.parse(n);if(!o)return!1;o.location=e.location_by_offset(i),t.push(o)})),t}},{key:"moves",get:function(){return this.moves_exist_p?this.attributes.moves.split(/\s+/):[]}},{key:"moves_exist_p",get:function(){return""!==(this.attributes.moves||"")}},{key:"init_sfen_from_one",get:function(){var e=[];return e.push("position"),e.push("sfen"),e.push(this.attributes.board),e.push(this.attributes.b_or_w),e.push(this.attributes.hold_pieces),e.push(1),e.join(" ")}},{key:"init_sfen",get:function(){var e=[];return e.push("position"),e.push("sfen"),e.push(this.init_sfen_strip),e.join(" ")}},{key:"init_sfen_strip",get:function(){var e=[];return e.push(this.attributes.board),e.push(this.attributes.b_or_w),e.push(this.attributes.hold_pieces),e.push(this.attributes.turn_counter_next),e.join(" ")}},{key:"to_sfen",get:function(){var e=[];return e.push("position"),e.push("sfen"),e.push(this.attributes.board),e.push(this.attributes.b_or_w),e.push(this.attributes.hold_pieces),e.push(this.attributes.turn_counter_next),this.moves_exist_p&&(e.push("moves"),e.push(this.attributes.moves)),e.join(" ")}},{key:"__location_by_upper_or_lower_case",value:function(e){var t=null;return t=/[A-Z]/.test(e)?"black":"white",N.Location.fetch(t)}}],[{key:"sfen_flop",value:function(e){var source=this.parse(e);return source.attributes.board=source.board.flop.to_sfen,source.attributes.moves=source.move_infos.map((function(e){return e.to_flop_sfen})).join(" "),source.to_sfen}}]),n}(x.ParserBase);e.argv[1]===o&&(B=R.parse("position sfen +lnsgkgsnl/1r5b1/ppppppppp/9/9/9/PPPPPPPPP/1B5R1/LNSGKGSNL b S2s 1 moves 7i6h S*2d"),console.log(B),B=R.parse("position sfen +lnsgkgsnl/1r5b1/ppppppppp/9/9/9/PPPPPPPPP/1B5R1/LNSGKGSNL b S2s 1 moves 7i6h S*2d"),console.log(B))}.call(this,n(131),"/index.js")},273:function(e,t,n){"use strict";n.r(t),n.d(t,"preset_module",(function(){return c}));n(15),n(36);var o=n(90),r=n(490),c={props:{sp_preset_key:{type:String,default:null}},data:function(){return{new_preset_key:this.sp_preset_key}},watch:{preset_key:function(e){this.new_preset_key=e},new_preset_key:function(e){this.mediator_setup_by_preset(e)}},methods:{mediator_setup_by_preset:function(e){e=r.PresetInfo.fetch(e),this.mediator=new o.Mediator,e.sfen&&(this.mediator.data_source=this.data_source_by(e.sfen)),this.mediator.run(),this.mediator.piece_box_piece_counts_adjust(),this.init_location_key=this.mediator.current_location.key}},computed:{preset_info_values:function(){return r.PresetInfo.values},init_preset_sfen:function(){if(this.sp_preset_key)return r.PresetInfo.fetch(this.sp_preset_key).sfen}}}},490:function(e,t,n){"use strict";n.r(t),function(e,o){n.d(t,"PresetInfo",(function(){return k}));n(479);var r=n(129),c=n(130),_=n(480),f=n(481),l=n(478),h=n(482);function d(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=Object(l.a)(e);if(t){var r=Object(l.a)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Object(f.a)(this,n)}}var k=function(e){Object(_.a)(n,e);var t=d(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,null,[{key:"define",get:function(){return[{key:"詰将棋",sfen:"position sfen 4k4/9/9/9/9/9/9/9/9 b 2r2b4g4s4n4l18p 1",first_location_key:"black",piece_box:[["K",1]]},{key:"詰将棋 - 美濃",sfen:"position sfen ln1g5/1ks6/1ppp5/p8/9/9/9/9/9 b BGSNL2rb2g2s2n2l14p 1",first_location_key:"black",piece_box:[["K",1]]},{key:"詰将棋 - 矢倉",sfen:"position sfen 7nl/6gk1/5gspp/5pp2/9/9/9/9/9 b BGSNL2rbg2s2n2l14p 1",first_location_key:"black",piece_box:[["K",1]]},{key:"戦型 右四間 vs 四間飛車",sfen:"position sfen ln1g1g1nl/1ks2r3/1pppp1bpp/p3spp2/9/P1P1SP1PP/1P1PP1P2/1BK1GR3/LNSG3NL b - 25",first_location_key:"black",piece_box:[]},{key:"全部駒箱",sfen:"position sfen 9/9/9/9/9/9/9/9/9 b - 1",first_location_key:"black",piece_box:[["B",2],["R",2],["L",4],["N",4],["S",4],["G",4],["P",18],["K",2]]},{key:"平手",sfen:"position sfen lnsgkgsnl/1r5b1/ppppppppp/9/9/9/PPPPPPPPP/1B5R1/LNSGKGSNL b - 1",first_location_key:"black",piece_box:[]},{key:"香落ち",sfen:"position sfen lnsgkgsn1/1r5b1/ppppppppp/9/9/9/PPPPPPPPP/1B5R1/LNSGKGSNL w - 1",first_location_key:"white",piece_box:[["L",1]]},{key:"右香落ち",sfen:"position sfen 1nsgkgsnl/1r5b1/ppppppppp/9/9/9/PPPPPPPPP/1B5R1/LNSGKGSNL w - 1",first_location_key:"white",piece_box:[["L",1]]},{key:"角落ち",sfen:"position sfen lnsgkgsnl/1r7/ppppppppp/9/9/9/PPPPPPPPP/1B5R1/LNSGKGSNL w - 1",first_location_key:"white",piece_box:[["B",1]]},{key:"飛車落ち",sfen:"position sfen lnsgkgsnl/7b1/ppppppppp/9/9/9/PPPPPPPPP/1B5R1/LNSGKGSNL w - 1",first_location_key:"white",piece_box:[["R",1]]},{key:"飛香落ち",sfen:"position sfen lnsgkgsn1/7b1/ppppppppp/9/9/9/PPPPPPPPP/1B5R1/LNSGKGSNL w - 1",first_location_key:"white",piece_box:[["R",1],["L",1]]},{key:"二枚落ち",sfen:"position sfen lnsgkgsnl/9/ppppppppp/9/9/9/PPPPPPPPP/1B5R1/LNSGKGSNL w - 1",first_location_key:"white",piece_box:[["B",1],["R",1]]},{key:"三枚落ち",sfen:"position sfen lnsgkgsn1/9/ppppppppp/9/9/9/PPPPPPPPP/1B5R1/LNSGKGSNL w - 1",first_location_key:"white",piece_box:[["B",1],["R",1],["L",1]]},{key:"四枚落ち",sfen:"position sfen 1nsgkgsn1/9/ppppppppp/9/9/9/PPPPPPPPP/1B5R1/LNSGKGSNL w - 1",first_location_key:"white",piece_box:[["B",1],["R",1],["L",2]]},{key:"六枚落ち",sfen:"position sfen 2sgkgs2/9/ppppppppp/9/9/9/PPPPPPPPP/1B5R1/LNSGKGSNL w - 1",first_location_key:"white",piece_box:[["B",1],["R",1],["L",2],["N",2]]},{key:"八枚落ち",sfen:"position sfen 3gkg3/9/ppppppppp/9/9/9/PPPPPPPPP/1B5R1/LNSGKGSNL w - 1",first_location_key:"white",piece_box:[["B",1],["R",1],["L",2],["N",2],["S",2]]},{key:"十枚落ち",sfen:"position sfen 4k4/9/ppppppppp/9/9/9/PPPPPPPPP/1B5R1/LNSGKGSNL w - 1",first_location_key:"white",piece_box:[["B",1],["R",1],["L",2],["N",2],["S",2],["G",2]]},{key:"十九枚落ち",sfen:"position sfen 4k4/9/9/9/9/9/PPPPPPPPP/1B5R1/LNSGKGSNL w - 1",first_location_key:"white",piece_box:[["B",1],["R",1],["L",2],["N",2],["S",2],["G",2],["P",9]]},{key:"二十枚落ち",sfen:"position sfen 9/9/9/9/9/9/PPPPPPPPP/1B5R1/LNSGKGSNL w - 1",first_location_key:"white",piece_box:[["B",1],["R",1],["L",2],["N",2],["S",2],["G",2],["P",9],["K",1]]},{key:"青空将棋",sfen:"position sfen lnsgkgsnl/1r5b1/9/9/9/9/9/1B5R1/LNSGKGSNL b - 1",first_location_key:"black",piece_box:[]}]}}]),n}(n.n(h).a);e.argv[1]===o&&(console.log(k.fetch("平手")),console.log(k.fetch("香落ち").first_location_key))}.call(this,n(131),"/index.js")},504:function(e,t,n){"use strict";n.r(t),function(e,o){n.d(t,"ParserBase",(function(){return h}));var r=n(129),c=n(130),_=(n(15),n(36),n(14)),f=n.n(_),l=n(69),h=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;Object(r.a)(this,e),this.reset(),this.raw_body=t}return Object(c.a)(e,[{key:"reset",value:function(){this.raw_body="",this.header={}}},{key:"parse",value:function(){}},{key:"board",get:function(){console.warn("not implemented")}},{key:"hold_pieces_empty_hash",value:function(){return f.a.reduce(l.Location.values,(function(a,e){return a[e.key]={},a}),{})}},{key:"turn_offset_min",get:function(){return 0}},{key:"turn_offset_max",get:function(){return this.move_infos.length}},{key:"turn_base",get:function(){return 0}},{key:"location_by_offset",value:function(e){return this.base_location.advance(e)}},{key:"last_location",get:function(){return this.location_by_offset(this.turn_offset_max-1)}},{key:"next_location",get:function(){return this.location_by_offset(this.turn_offset_max)}},{key:"move_infos",get:function(){console.warn("not implemented")}},{key:"comments_pack",get:function(){return null}}],[{key:"parse",value:function(e){var t=new this(e);return t.parse(),t}}]),e}();e.argv[1]}.call(this,n(131),"/index.js")},509:function(e,t,n){"use strict";n.r(t),n.d(t,"MoveHash",(function(){return h}));var o=n(129),r=n(130),c=(n(45),n(257),n(488)),_=n.n(c),f=n(483),l=n(132),h=function(){function e(t){Object(o.a)(this,e),this.promoted_trigger="+"===t.promoted,"*"===t.origin_y?this.drop_piece=f.Piece.fetch(t.origin_x):this.origin_place=l.Place.fetch("".concat(t.origin_x).concat(t.origin_y)),this.place=l.Place.fetch("".concat(t.pos_x).concat(t.pos_y))}return Object(r.a)(e,[{key:"to_sfen",get:function(){return this.to_custom_sfen()}},{key:"to_flop_sfen",get:function(){return this.to_custom_sfen({flop:!0})}},{key:"to_custom_sfen",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=[];return this.drop_piece?(a.push(this.drop_piece.key),a.push("*")):a.push(this.origin_place.flop_if(e.flop).to_sfen),a.push(this.place.flop_if(e.flop).to_sfen),this.promoted_trigger&&a.push("+"),a.join("")}}],[{key:"line_flop",value:function(e){return this.parse_line(e).map((function(e){return e.to_flop_sfen})).join(" ")}},{key:"str_flop",value:function(e){var t=this.parse(e);if(t)return t.to_flop_sfen}},{key:"parse_line",value:function(line){var e=this,s=line||"";return""===s?[]:s.split(/\s+/).map((function(t){return e.parse(t)}))}},{key:"parse",value:function(e){var t=_.a.exec(e,_()("(?<origin_x>\\S)(?<origin_y>\\S)(?<pos_x>\\S)(?<pos_y>\\S)(?<promoted>\\+?)?"));return t?new this(t):null}}]),e}()},510:function(e,t,n){"use strict";n.r(t),function(e,o){n.d(t,"SfenSerializer",(function(){return k}));var r=n(129),c=n(130),_=(n(45),n(15),n(36),n(14)),f=n.n(_),l=n(483),h=(n(132),n(90)),d=n(69),k=(n(133),function(){function e(t){Object(r.a)(this,e),this.mediator=t}return Object(c.a)(e,[{key:"to_s",get:function(){var e=this.__base_parts;return e.push(this.mediator.display_turn+1),e.join(" ")}},{key:"to_s_without_turn",get:function(){return this.__base_parts.join(" ")}},{key:"to_board_sfen",get:function(){return this.mediator.board.to_sfen}},{key:"to_hold_pieces",get:function(){var e=this,t=d.Location.values.map((function(t){var n=e.mediator.hold_pieces[t.key],o=l.Piece.values.map((function(e){var o=n[e.key]||0,r="";if(0===o)return null;o>=2&&(r+=o);var c=e.key;return r+=c="white"===t.key?c.toLowerCase():c.toUpperCase()}));return f.a.compact(o).join("")})).join("");return f.a.isEmpty(t)&&(t="-"),t}},{key:"__base_parts",get:function(){var e=[];return e.push(this.to_board_sfen),e.push(this.mediator.current_location.key[0]),e.push(this.to_hold_pieces),e}}]),e}());if(e.argv[1]===o){var y=new h.Mediator;y.source="position sfen +lnsgkgsnl/1r5b1/ppppppppp/9/9/9/PPPPPPPPP/1B5R1/LNSGKGSNL b S2s 1 moves 7i6h S*2d",y.current_turn=1,y.run();var P=new k(y);console.log(P.to_s)}}.call(this,n(131),"/index.js")},90:function(e,t,n){"use strict";n.r(t),n.d(t,"Mediator",(function(){return w}));var o=n(17),r=n(129),c=n(130),_=(n(27),n(89),n(260),n(45),n(28),n(15),n(36),n(14)),f=n.n(_),l=n(3),h=n(133),d=n(132),k=n(483),y=n(484),P=n(259),v=n(510),m=n(490),x=n(69),w=function(){function e(){Object(r.a)(this,e);var t=new P.SfenParser;t.raw_body="position startpos",t.parse(),this.data_source=t,this.current_turn=0,this.board=null,this.hold_pieces=null,this.last_hand=null,this.piece_box={},this.env="production"}return Object(c.a)(e,[{key:"run",value:function(){var e=this;this.board=this.data_source.board,this.hold_pieces=this.data_source.hold_pieces,this.last_hand=null;var t=this.data_source.move_infos,n=this.turn_offset-this.turn_offset_min;f()(n).times((function(i){e.execute_one(t[i])}))}},{key:"execute_one",value:function(e){if(this.last_hand=e,e.drop_piece){var t=new y.Soldier({piece:e.drop_piece,place:e.place,promoted:e.promoted,location:e.location});this.hold_pieces_add(e.location,t.piece,-1),this.board.place_on(t)}else{var n=this.board.lookup(e.place);n&&this.hold_pieces_add(e.location,n.piece,1);var o=this.board.lookup(e.origin_place);e.promoted_trigger&&(o.promoted=!0),o.place=e.place,this.board.delete_at(e.origin_place),this.board.place_on(o)}}},{key:"hold_pieces_count",value:function(e,t){return this.hold_pieces[e.key][t.key]||0}},{key:"hold_pieces_add",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,o=this.hold_pieces_count(e,t)+n,r=this.hold_pieces[e.key];l.a.delete(r,t.key),o>=1&&l.a.set(r,t.key,o)}},{key:"hold_pieces_can_be_reduced_count",value:function(e,t,n){var o=this.hold_pieces_count(e,t);return n>o&&(n=o),n}},{key:"board_safe_delete_on",value:function(e){this.board.delete_at(e)}},{key:"board_piece_fore_class",value:function(e){var t=d.Place.fetch(e),n=this.board.lookup(t);return n?n.css_class_list:[]}},{key:"cell_piece_class",value:function(e){var t=d.Place.fetch(e),n=this.board.lookup(t),o=[];return n&&o.push("location_".concat(n.location.key)),o}},{key:"cell_view",value:function(e){var t=d.Place.fetch(e),n=this.board.lookup(t),o="";return n&&(o=n.name),o}},{key:"dimension",get:function(){return h.Board.dimension}},{key:"turn_offset",get:function(){var e=Number(this.current_turn);return e<0&&(e+=this.turn_offset_max+1),this.turn_clamp(e)}},{key:"turn_clamp",value:function(e){return f.a.clamp(Number(e),this.turn_offset_min,this.turn_offset_max)}},{key:"previous_location",get:function(){return this.data_source.location_by_offset(this.turn_offset-1)}},{key:"current_location",get:function(){return this.data_source.location_by_offset(this.turn_offset)}},{key:"current_comments",get:function(){if(this.data_source.comments_pack)return this.data_source.comments_pack[this.turn_offset]}},{key:"turn_offset_min",get:function(){return this.data_source.turn_offset_min}},{key:"turn_offset_max",get:function(){return this.data_source.turn_offset_max}},{key:"current_turn_label",get:function(){return this.turn_offset===this.turn_offset_max?"まで".concat(this.display_turn,"手で").concat(this.previous_location.name,"の勝ち"):"".concat(this.display_turn,"手")}},{key:"display_turn",get:function(){return this.turn_base+this.turn_offset}},{key:"turn_base",get:function(){return this.data_source.turn_base}},{key:"realized_hold_pieces_of",value:function(e){var t=Object.entries(this.hold_pieces[e]);return f()(t).filter((function(e){var t=Object(o.a)(e,2);t[0];return t[1]>=1})).map((function(e){var t=Object(o.a)(e,2),n=t[0],r=t[1];return[k.Piece.fetch(n),r]})).sortBy((function(e){var t=Object(o.a)(e,2),n=t[0];t[1];return n.code})).value()}},{key:"to_simple_sfen",get:function(){return this.sfen_serializer.to_s}},{key:"to_sfen_without_turn",get:function(){return this.sfen_serializer.to_s_without_turn}},{key:"to_position_sfen",get:function(){return"position sfen ".concat(this.to_simple_sfen)}},{key:"sfen_serializer",get:function(){return new v.SfenSerializer(this)}},{key:"piece_box_count",value:function(e){return this.piece_box[e.key]||0}},{key:"piece_box_add",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=this.piece_box_count(e)+t;l.a.delete(this.piece_box,e.key),n>=1&&l.a.set(this.piece_box,e.key,n)}},{key:"piece_box_can_be_reduced_count",value:function(e,t){var n=this.piece_box_count(e);return t>n&&(t=n),t}},{key:"piece_box_realize",value:function(){var e=Object.entries(this.piece_box);return f()(e).filter((function(e){var t=Object(o.a)(e,2);t[0];return t[1]>=1})).map((function(e){var t=Object(o.a)(e,2),n=t[0],r=t[1];return[k.Piece.fetch(n),r]})).sortBy((function(e){var t=Object(o.a)(e,2),n=t[0];t[1];return n.code})).value()}},{key:"hold_pieces_to_piece_box",value:function(e){var t=this;f.a.forIn(this.hold_pieces[e.key],(function(n,o){var r=k.Piece.fetch(o);t.hold_pieces_add(e,r,-n),t.piece_box_add(r,n)}))}},{key:"piece_box_to_hold_pieces",value:function(e){var t=this;f.a.forIn(this.piece_box,(function(n,o){var r=k.Piece.fetch(o);t.piece_box_add(r,-n),t.hold_pieces_add(e,r,n)}))}},{key:"piece_box_reset_by_preset",value:function(e){var t=this;this.piece_box_clear(),m.PresetInfo.fetch(e).piece_box.forEach((function(e){var n=Object(o.a)(e,2),r=n[0],c=n[1];t.piece_box_add(k.Piece.fetch(r),c)}))}},{key:"piece_box_piece_counts_adjust",value:function(){var e=this;this.piece_box_clear();var t=this.hold_piece_all_counts_hash,n=this.board.piece_counts_hash;m.PresetInfo.fetch("全部駒箱").piece_box.forEach((function(r){var c=Object(o.a)(r,2),_=c[0],f=c[1],l=k.Piece.fetch(_),h=f-((t[l.key]||0)+(n[l.key]||0));e.piece_box_add(l,h)}))}},{key:"hold_piece_all_counts_hash",get:function(){var e=this,t={};return x.Location.values.forEach((function(n){f.a.forIn(e.hold_pieces[n.key],(function(e,n){t[n]=(t[n]||0)+e}))})),t}},{key:"piece_box_clear",value:function(){this.piece_box={}}},{key:"king_formation_auto_set_on_off",value:function(e){return e?this.king_formation_auto_set():this.king_formation_auto_unset()}},{key:"king_formation_auto_set",value:function(){var e=!1;return e||(e=this.king_formation_set("bottom_left")),e||(e=this.king_formation_set("bottom_right")),e}},{key:"king_formation_auto_unset",value:function(){var e=!1;return e||(e=this.king_formation_unset("bottom_left")),e||(e=this.king_formation_unset("bottom_right")),e}},{key:"king_formation_set",value:function(e){var t=this,n=this.king_formation_soldiers(e);if(!n.some((function(e){return t.board.lookup(e.place)})))return n.forEach((function(e){return t.piece_search_and_place_on(e)})),!0}},{key:"king_formation_unset",value:function(e){var t=this,n=this.king_formation_soldiers(e);if(!n.some((function(e){return!t.board.lookup(e.place)})))return n.forEach((function(e){var n=t.board.lookup(e.place);if(n){var o=n.piece;t.board.delete_at(n.place),"K"===o.key?t.piece_box_add(o):t.hold_pieces_add(x.Location.fetch("white"),o)}})),!0}},{key:"piece_search_and_place_on",value:function(e){if(!this.board.lookup(e.place)){if("K"===e.piece.key)this.piece_search_and_decrement(e.piece);else if(!this.piece_search_and_decrement(e.piece))return;this.board.place_on(e)}}},{key:"piece_search_and_decrement",value:function(e){var t=!1;return t||(t=this.piece_search_on_hold_pieces_and_decrement("white",e)),t||this.piece_box_count(e)>=1&&(this.piece_box_add(e,-1),t=!0),t}},{key:"piece_search_on_hold_pieces_and_decrement",value:function(e,t){var n=x.Location.fetch(e);if(this.hold_pieces_count(n,t)>=1)return this.hold_pieces_add(n,t,-1),!0}},{key:"king_formation_soldiers",value:function(e){var t=null,n=null,o=null,r=null;return"bottom_left"===e&&(t=0,n=1,o=h.Board.dimension-1,r=-1),"bottom_right"===e&&(t=h.Board.dimension-1,n=-1,o=h.Board.dimension-1,r=-1),[{piece:"K",promoted:!1,location:"black",place:[t,o]},{piece:"P",promoted:!0,location:"white",place:[t,o+r+r]},{piece:"P",promoted:!0,location:"white",place:[t+n,o+r+r]},{piece:"P",promoted:!0,location:"white",place:[t+n+n,o+r+r]},{piece:"P",promoted:!0,location:"white",place:[t+n+n,o+r]},{piece:"P",promoted:!0,location:"white",place:[t+n+n,o]}].map((function(e){return new y.Soldier({piece:k.Piece.fetch(e.piece),promoted:e.promoted,location:x.Location.fetch(e.location),place:d.Place.fetch(e.place)})}))}},{key:"slide_xy",value:function(e,t){this.board=this.board.slide_xy(e,t)}},{key:"shuffle_apply",value:function(e){var t=this.board.shuffle_apply(e);if(t)return this.board=t,!0}}]),e}()}}]);