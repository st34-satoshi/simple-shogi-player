(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{296:function(n,e,t){"use strict";t.d(e,"a",(function(){return o}));var o=t(571),l=new o.Renderer;l.table=function(header,body){return'\n  <div class="table_wrap">\n    <table>\n      <thead>'.concat(header,"</thead>\n      <tbody>").concat(body,"</tbody>\n    </table>\n  </div>")},o.setOptions({renderer:l,gfm:!0,tables:!0,breaks:!1,pedantic:!1,sanitize:!1,smartLists:!0,smartypants:!1})},473:function(n,e,t){"use strict";e.a='## Vue CLI への組み込み例\n\nバージョン確認\n\n    % node -v\n    v12.6.0\n\n    % vue -V\n    @vue/cli 4.5.9\n\n~/src/shogi-player-vue-cli-sample に作成することします\n\n    % cd ~/src\n\n    % vue create shogi-player-vue-cli-sample\n    ↑\n    Default ([Vue 2] babel, eslint) を選択\n\n    % cd shogi-player-vue-cli-sample\n\n    % yarn add shogi-player\n\n既存の components/HelloWorld.vue をこのような内容に書き換えます\n\n    <template lang="pug">\n    .is-flex.is-justify-content-center\n      .MyShogiPlayerContainer\n        ShogiPlayer(\n          sp_layout="is_horizontal"\n          sp_controller="is_controller_on"\n          sp_body="position sfen lnsgkgsnl/1r7/ppppppppp/9/9/9/PPPPPPPPP/1B5R1/LNSGKGSNL w - 1 moves 7a6b 7g7f 5c5d 2g2f 5a4b 2f2e 4b3b 2e2d 2c2d 2h2d 6b5c 2d2f P*2c 3i4h 8c8d 7i7h 8d8e 8h7g 4a4b 5g5f 6a5b 6g6f 7c7d 7g6h 5c6d 7h6g 5b5c 6i7h 9c9d 9g9f 5c4d 6f6e 6d7c 4h5g 8b6b 8i7g 6b8b 5g6f 1c1d 1g1f 9d9e 9f9e 8e8f 8g8f 9a9e P*9g 9e9g 9i9g P*9f 7g8e 9f9g+ 8e7c+ 8a7c P*9d 8b9b S*8c 9b9a 2f2h P*8g 6h4f 5d5e 6f5e 4d4e 4f5g 7c6e 5g8d N*3e L*2g 3e2g+ 2h2g 8g8h+ 7h6h 9g8g 5e6f 8h7h 6g7h 8g7h 6h7h L*6d P*6g 4e5f P*5h P*5g 2g2f L*5c 6f6e 6d6e 5i6h 5g5h+ 4i5h P*5g 5h4h S*8i N*7i P*8g 7h8g S*7h N*6f 9a8a 9d9c+ 7h8g+ 7i8g 8a8c 9c8c G*7h 6h5i S*5h"\n          )\n    </template>\n\n    <script>\n    import Vue from "vue"\n\n    // Buefy\n    import Buefy from "buefy"\n    import "buefy/dist/buefy.css"\n    Vue.use(Buefy)\n\n    // 本体\n    import ShogiPlayer from "shogi-player/components/ShogiPlayer.vue"\n\n    export default {\n      name: "HelloWorld",\n      components: {\n        ShogiPlayer,\n      },\n      props: {\n        msg: String,\n      },\n    }\n    <\/script>\n\n    <style lang="sass">\n    // ShogiPlayer のスタイルの読み込み\n    $sp_assets_dir: "../../node_modules/shogi-player/assets"\n    @import "../../node_modules/shogi-player/components/ShogiPlayer.sass"\n\n    // これは public/index.html で読み込んだ方がいいかも\n    @import url("https://cdn.jsdelivr.net/npm/@mdi/font@5.x/css/materialdesignicons.min.css")\n\n    // +mobile などを使うため\n    @import "~bulma/sass/utilities/_all"\n\n    // ShogiPlayer は常に横100%まで広がるので外側で大きさを調整する\n    .MyShogiPlayerContainer\n      +mobile\n        width: 100%\n      +tablet\n        width: 80vmin\n    </style>\n\n起動\n\n    vue-cli-service serve --port 3100 --open\n\n完成品は https://github.com/akicho8/shogi-player-vue-cli-sample に置いています\n\n上の手順をまとめた半自動生成スクリプトはこちら [shogi-player-vue-cli-sample-create.sh](https://github.com/akicho8/shogi-player/blob/master/shogi-player-vue-cli-sample-create.sh) です\n\n## Nuxt.js への組み込み例\n\n- だいたい Vue Cli の場合と同じです\n- nuxt 用の buefy があるので yarn add nuxt-buefy してください\n\nshogi-player がビルドできないと言われたときは、よくわかってないんですが nuxt.config.js の適切な個所に次の設定を追加してください\n\n    build: {\n      transpile: ["shogi-player/components"],\n    },\n'}}]);