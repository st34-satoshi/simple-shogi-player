
### Nuxt.js

  * いろんな箇所を変更するため半自動化スクリプトでの生成は断念しました
  * 手動で組み込んだ例を https://github.com/akicho8/shogi-player/tree/master/shogi-player-nuxt-sample に置いています

### 共通する組み込みポイント

  * `node_modules/shogi-player` 以下を babel のビルド対象に含める
    * これをやらないと JavaScript のクラス定数や `??` 演算子が解釈できずビルドできない
  * file-loader で *.wav をファイル化するときに `esModule: false` オプションをつける
    * これをやらないと wav ファイルへのパスが文字列でなくなって音が出ない
  * process 定数がグローバルに存在するようにする
    * そうしないと `process` を参照しているライブラリがビルドできない
