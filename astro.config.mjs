// @ts-check
import { defineConfig } from 'astro/config';

// GitHub Pages のプロジェクトサイト（https://lancard-aikawa.github.io/lptest/）向け設定。
// site + base を正しく設定しないとアセットのパスが /lptest 抜けで壊れる。
export default defineConfig({
  site: 'https://lancard-aikawa.github.io',
  base: '/lptest',
});
