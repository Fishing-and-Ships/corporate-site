# F&S株式会社 コーポレートサイト

F&S株式会社(Fishing and Ships Inc.)の会社ホームページ。静的 HTML / CSS / JS のみで構成。

## デザイン

[opa のデザイン DNA(罫線・活字 / エディトリアル)](https://github.com/Fishing-and-Ships/opa)を継承しつつ、地色をオフホワイトから深海のダークネイビーへ反転させたダークテーマ。

- レイアウトの基本単位は罫線。カード・影・色ピルは使わない
- キッカー + 極太見出し。数字・日付は mono(`tabular-nums`)
- 記号は活字で表現: `→ ↗ ›` そしてヒーローを泳ぐ `><>`
- アクセント: clear-cyan(情報・アクティブ)/ sand(注意・募集)
- 書体: Shippori Mincho B1(見出し)+ Zen Kaku Gothic New(本文)+ IBM Plex Mono(数字)

## 構成

```
index.html        # 単一ページ(お知らせ・事業内容・会社概要・採用・お問い合わせ)
css/style.css     # スタイル(CSS 変数でブランドトークンを定義)
js/main.js        # 水深計スクロールインジケーター・フェードイン
assets/favicon.svg
```

## ローカル確認

ビルド不要。ブラウザで `index.html` を開くか:

```bash
python3 -m http.server 8000
# → http://localhost:8000
```

## 備考

`index.html` の会社概要セクション(`<!-- TODO -->` コメント箇所)は仮の情報。正式な会社情報に差し替えること。
