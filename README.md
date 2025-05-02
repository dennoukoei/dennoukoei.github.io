# 電脳狐影の技術ブログ

![GitHub Pages Build Status](https://github.com/dennoukoei/dennoukoei.github.io/actions/workflows/pages/pages-build-deployment/badge.svg)

## 技術スタック

このブログは以下の技術スタックで構築されています：

- **静的サイトジェネレーター**: [Jekyll](https://jekyllrb.com/) 4.3.2
- **テーマ**: [Minimal Mistakes](https://mmistakes.github.io/minimal-mistakes/) 4.24.0（remote_themeとして実装）
- **ホスティング**: [GitHub Pages](https://pages.github.com/)
- **マークアップ言語**: Markdown（Kramdown）
- **スタイリング**: SCSS/Sass
- **フロントエンド拡張**: JavaScript、jQuery

## 技術的な特徴

### 1. Jekyll/GitHub Pages の最適化

- **GitHub Actions対応**: GitHub Pagesの制限内での最適なビルドプロセス
- **remote_theme実装**: サブモジュールを避けることで管理性を向上
- **Sass最適化**: BEM命名規則に基づくモジュラーなスタイル構成

### 2. フロントエンドパフォーマンス

- **画像最適化**: WebP形式と適切なサイズ設定
- **遅延読み込み**: JavaScript非依存の画像遅延読み込み
- **ミニマルなJavaScript**: 必要最小限のスクリプトのみを使用

### 3. SEOとアクセシビリティ

- **構造化データ**: JSON-LDを用いた検索エンジン最適化
- **WAI-ARIA対応**: アクセシブルなUIコンポーネント
- **サイトマップ**: XML形式の自動生成サイトマップ

### 4. コンテンツ管理

- **カテゴリー/タグシステム**: 記事の効率的な整理と検索
- **投稿フロー**: Git/GitHubを活用したバージョン管理
- **国際化対応**: 将来的な多言語サポートの基盤

## ローカル開発環境

### 前提条件

- Ruby 3.0以上
- Bundler 2.2以上
- Git

### セットアップ

```bash
# リポジトリをクローン
git clone https://github.com/dennoukoei/dennoukoei.github.io.git
cd dennoukoei.github.io

# 依存関係のインストール
bundle install

# ローカルサーバーの起動
bundle exec jekyll serve
```

### ブログポストの作成方法

```bash
# 新しい記事のテンプレート作成
bundle exec jekyll post "記事のタイトル"
```

または、`_posts`ディレクトリに直接`YYYY-MM-DD-title.md`形式でファイルを作成し、以下のフロントマターを含めます：

```yaml
---
layout: single
title: "記事タイトル"
date: YYYY-MM-DD HH:MM:SS +0900
categories: 
  - カテゴリ名
tags:
  - タグ名
toc: true
---
```

## コントリビューション

プルリクエストは歓迎します。大きな変更を加える場合は、まず問題点について議論するための Issue を開いてください。

---

<p align="center">Built with ❤️ using <b>Jekyll</b> and <b>GitHub Pages</b></p>