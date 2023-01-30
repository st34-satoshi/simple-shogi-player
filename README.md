# simple-shogi-player
test

https://github.com/akicho8/shogi-player/tree/9fc2d386ce8ee7e335e6bbc17ca0c13d40b90373 からfork。

※ `git filter-repo --invert-paths --force --path path/to/large/file` でファイルを削除しているためfork元にマージするのは大変かもしれないです。

<p><img src="https://raw.github.com/st34-satoshi/simple-shogi-player/master/application.png" height="480" /></p>

## できること
- 将棋盤・持ち駒の表示
- 将棋盤と持ち駒のクリックイベント
- 成る・不成の表示
- (駒を動かす)

## 範囲外(fork元ではできるはず)
- 将棋のルールの管理: 合法手判定・手番判定など
- 棋譜の管理

将棋のルールや棋譜の管理をする場合は以下のライブラリが参考になる
- [akicho8/shogi-player](https://github.com/akicho8/shogi-player): fork元
- [na2hiro/Shogi.js](https://github.com/na2hiro/Shogi.js/)


## Build Setup

```bash
$ yarn
# serve with hot reload at localhost:3000
$ yarn run nuxt dev -p 3000
```
