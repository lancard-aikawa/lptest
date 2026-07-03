# lptest

GA4 計測と「解析 → 改善 → 更新」ループの検証用ランディングページ（静的 HTML 1 枚 / GitHub Pages 配信想定）。

## やること（初回セットアップ）

1. **GA4 測定 ID を差し替え**
   `index.html` 内の `G-XXXXXXXXXX`（2 箇所）を GA4 の測定 ID に置換。
   GA4 → 管理 → データストリーム → 対象ストリーム → 測定 ID。

2. **GitHub リポジトリ作成 & Pages 有効化**
   ```bash
   git remote add origin git@github.com:<user>/lptest.git
   git push -u origin main
   ```
   GitHub → Settings → Pages → Source を `main` / `/ (root)` に設定。

3. **lp-manager へ登録**
   - `local_dir` = このフォルダのパス
   - `deploy_type` = `git` / `git_branch` = `main`
   - `ga4_property_id` = GA4 のプロパティ ID（数値）
   - `cv_event_name` = `generate_lead`（CTA クリックで送信しているイベント）

## 運用

以降は「既存ファイルの更新」を lp-manager が適用し、`git add -u` → commit → push で GitHub Pages に反映されます（新規ファイル追加は現状のデプロイ対象外）。
