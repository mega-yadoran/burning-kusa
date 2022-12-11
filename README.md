# Twitter上に生えてる草を燃やせるChrome拡張

![e856fea28a883104522bac7e245d849f.gif](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/265114/d9a050c3-7262-a94d-ef58-a8e3ce16ea1d.gif)

## 解説記事

[Twitterに生えてる草を焼き払えるChrome拡張 - Qiita](https://qiita.com/mega_yadoran/private/e9ef504e8a3de4293e62)

## 使い方

1. ZIPをダウンロードして解凍する
2. Chrome設定を開く
3. 拡張機能の設定を開く
4. 右上のデベロッパーモードをONにする
5. 「パッケージ化されていない拡張機能を読み込む」で解凍したフォルダを指定する

## 注意
- いらすとやの再配布禁止の利用規約に基づき、イメージのような怪獣のGIF画像はこのリポジトリには含まれておりません。各自でGIF画像を用意してお使いください。
- Twitter以外でも使いたい方は `manifest.json` の `content_scripts` と `web_accessible_resources` を書き換えてください。ただしTwitter以外のサイトでの動作は確認していません。