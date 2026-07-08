---
title: "はじめてのブログ記事"
description: "Astro 化後のブログ動作確認用サンプル記事。"
pubDate: 2026-07-08
draft: false
---

これは `src/content/blog/` で管理される最初のブログ記事です。

lp-manager がこのフォルダに Markdown を追加 → `git push` → GitHub Actions が
`astro build` → `/lptest/blog/{slug}/` に公開、という流れで運用します。

- 記事 1 本＝Markdown 1 ファイル＝独立ページ
- 計測タグ（GA4）は共通レイアウトに入っているので各記事にも自動で載る
- インデックス（LP トップ）はブログ追加では変化しない
