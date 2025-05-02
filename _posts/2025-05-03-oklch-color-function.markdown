---
layout: single
title: "色の革命：OKLCHで感じる、魅せる、伝わるWebデザイン"
date: 2025-05-03 03:35:00 +0900
categories: 
  - フロントエンド
  - デザイン
tags:
  - CSS
  - カラーシステム
  - OKLCH
  - アクセシビリティ
toc: true
toc_label: "目次"
toc_icon: "palette"
toc_sticky: true
header:
  overlay_color: "#000"
  overlay_filter: "0.5"
  overlay_image: https://source.unsplash.com/1600x900/?color,spectrum
  caption: "Photo credit: [**Unsplash**](https://unsplash.com)"
excerpt: "「青って、どんな青？」CSSのOKLCH色空間は、その答えを人間の感覚で表現する、デザインの新たな言語です。"
---

<style>
/* カラーサンプルのスタイル */
.color-sample {
  display: inline-block;
  width: 100px;
  height: 100px;
  margin: 5px;
  border-radius: 5px;
  text-align: center;
  line-height: 100px;
  color: white;
  font-weight: bold;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
}

.color-row {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 20px;
}

.color-pair {
  margin: 10px;
  text-align: center;
}

.color-label {
  margin-top: 5px;
  font-size: 0.8em;
}
</style>

## 「青」の感じ方は人それぞれ

デザイナーのKさんとエンジニアのMさんの会話です：

「このボタン、もう少し『青』を強くしたいんだけど...」とKさん。

「わかった、RGB値を調整するね」とMさんは`rgb(0, 0, 255)`から`rgb(0, 0, 200)`に変更しました。

「あれ？なんか暗くなっちゃった...『鮮やかな青』にしたかったんだけど」

この会話、どこか見覚えありませんか？色の調整は直感的なはずなのに、なぜかRGBやHSLでは意図した通りにならないことがよくあります。

**OKLCHはこの問題を解決します**。人間の目がどう色を感じるかに基づいて設計された、まさに「感覚のための色空間」なのです。

## OKLCH色空間：人間の感覚を数値化する

OKLCH（Oklab Lightness Chroma Hue）は、最近のCSSで利用可能になった新しい色空間です。「人間が感じる色の違い」を忠実に表現できるよう設計されています。

<div class="color-row">
  <div class="color-pair">
    <div class="color-sample" style="background-color: oklch(65% 0.2 240);">OKLCH</div>
    <div class="color-label">oklch(65% 0.2 240)</div>
  </div>
  <div class="color-pair">
    <div class="color-sample" style="background-color: hsl(240, 100%, 50%);">HSL</div>
    <div class="color-label">hsl(240, 100%, 50%)</div>
  </div>
  <div class="color-pair">
    <div class="color-sample" style="background-color: rgb(0, 0, 255);">RGB</div>
    <div class="color-label">rgb(0, 0, 255)</div>
  </div>
</div>

一見似ているように見えますが、微妙な調整を加えると、その違いが明らかになります。

OKLCH色空間は以下の3つの要素でシンプルに構成されています：

1. **L（Lightness）**: 明るさ - 暗い(0%)から明るい(100%)まで
2. **C（Chroma）**: 鮮やかさ - 無彩色(0)から鮮やか(約0.4)まで
3. **H（Hue）**: 色相 - 赤(0度)→黄(60度)→緑(120度)→青(240度)→紫(300度)

```css
/* OKLCH構文はとてもシンプル */
.blue-button {
  background-color: oklch(65% 0.2 240); /* 明るさ65%, 鮮やかさ0.2, 青(240度) */
}
```

## なぜOKLCHが革命的なのか？

### 1. 感覚に合った明るさの変化

「この色をもう少し明るく」と言われたとき、OKLCHならシンプルに明度値だけを調整すれば、**感覚通りの変化**が得られます。

<div class="color-row">
  <div class="color-pair">
    <div class="color-sample" style="background-color: oklch(40% 0.2 240);">暗め</div>
    <div class="color-label">oklch(40% 0.2 240)</div>
  </div>
  <div class="color-pair">
    <div class="color-sample" style="background-color: oklch(60% 0.2 240);">標準</div>
    <div class="color-label">oklch(60% 0.2 240)</div>
  </div>
  <div class="color-pair">
    <div class="color-sample" style="background-color: oklch(80% 0.2 240);">明るめ</div>
    <div class="color-label">oklch(80% 0.2 240)</div>
  </div>
</div>

一方、HSLやRGBでは明度を変更すると、予想外に色相や彩度も変わってしまうことがあります。

<div class="color-row">
  <div class="color-pair">
    <div class="color-sample" style="background-color: hsl(240, 100%, 25%);">暗め</div>
    <div class="color-label">hsl(240, 100%, 25%)</div>
  </div>
  <div class="color-pair">
    <div class="color-sample" style="background-color: hsl(240, 100%, 50%);">標準</div>
    <div class="color-label">hsl(240, 100%, 50%)</div>
  </div>
  <div class="color-pair">
    <div class="color-sample" style="background-color: hsl(240, 100%, 75%);">明るめ</div>
    <div class="color-label">hsl(240, 100%, 75%)</div>
  </div>
</div>

HSLでは明るさを上げると、色が白っぽくなりすぎて鮮やかさが失われています。

### 2. 今までにない鮮やかな色を表現できる

「このブランドカラーをもっと鮮やかにしたい！」というデザイナーの願いを叶えるのがOKLCHです。

<div class="color-row">
  <div class="color-pair">
    <div class="color-sample" style="background-color: oklch(60% 0.1 30);">控えめ</div>
    <div class="color-label">oklch(60% 0.1 30)</div>
  </div>
  <div class="color-pair">
    <div class="color-sample" style="background-color: oklch(60% 0.2 30);">標準</div>
    <div class="color-label">oklch(60% 0.2 30)</div>
  </div>
  <div class="color-pair">
    <div class="color-sample" style="background-color: oklch(60% 0.3 30);">鮮やか</div>
    <div class="color-label">oklch(60% 0.3 30)</div>
  </div>
</div>

特にP3やRec.2020などの広色域ディスプレイでは、sRGBの限界を超えた色彩表現が可能になります。

### 3. アクセシビリティも考慮しやすい

「このテキストとボタン、コントラストが足りないかも...」というときも、OKLCHなら明度だけを調整すればOK。

<div class="color-row">
  <div class="color-pair">
    <div class="color-sample" style="background-color: oklch(40% 0.2 240); color: oklch(90% 0.05 240);">
      読みやすい
    </div>
    <div class="color-label">背景: 40% / テキスト: 90%</div>
  </div>
  <div class="color-pair">
    <div class="color-sample" style="background-color: oklch(70% 0.2 240); color: oklch(90% 0.05 240);">
      注意
    </div>
    <div class="color-label">背景: 70% / テキスト: 90%</div>
  </div>
</div>

WCAG（ウェブ・コンテンツ・アクセシビリティ・ガイドライン）のコントラスト要件を満たすための調整が直感的に行えます。

## 私がOKLCHを使い始めてから変わったこと

私自身、数年間のWebデザインの経験の中で、色の調整には常に苦労してきました。しかしOKLCHを導入してからは：

1. **デザイナーとの会話が変わった**  
   「もう少し明るく」「もう少し鮮やかに」という指示がそのまま数値に反映できるようになりました。

2. **ブランドカラーの派生色作成が簡単に**  
   「ホバー時は少し暗く」「無効状態は彩度を下げる」という調整が、一貫性を保ちながら簡単にできるようになりました。

3. **アクセシビリティ対応の時間が短縮**  
   コントラスト比の調整が明度の調整だけで済むため、デザインの一貫性を保ちながら修正できるようになりました。

### 実践例：ボタンのホバーエフェクト

```css
.primary-button {
  /* 標準状態 */
  background-color: oklch(60% 0.2 250);
  transition: all 0.3s ease;
}

.primary-button:hover {
  /* ホバー時は少し暗く、でも同じ色味を保つ */
  background-color: oklch(50% 0.2 250);
}

.primary-button:disabled {
  /* 無効時は彩度を下げる */
  background-color: oklch(60% 0.05 250);
}
```

<div class="color-row">
  <div class="color-pair">
    <div class="color-sample" style="background-color: oklch(60% 0.2 250);">通常</div>
    <div class="color-label">標準状態</div>
  </div>
  <div class="color-pair">
    <div class="color-sample" style="background-color: oklch(50% 0.2 250);">ホバー時</div>
    <div class="color-label">ホバー時</div>
  </div>
  <div class="color-pair">
    <div class="color-sample" style="background-color: oklch(60% 0.05 250);">無効時</div>
    <div class="color-label">無効状態</div>
  </div>
</div>

## カラーパレット作成の新しいアプローチ

OKLCHを使ったカラーパレット設計は、論理的に一貫性のある色のセットを作れます。以下は私の実際のプロジェクトでも使っているアプローチです：

```css
:root {
  /* ブランドカラーを基準に設定 */
  --brand-hue: 250; /* 紫がかった青 */
  
  /* 明度と彩度の変数 */
  --l-normal: 60%;
  --c-normal: 0.2;
  
  /* カラーパレット生成 */
  --primary: oklch(var(--l-normal) var(--c-normal) var(--brand-hue));
  --primary-light: oklch(calc(var(--l-normal) + 15%) var(--c-normal) var(--brand-hue));
  --primary-dark: oklch(calc(var(--l-normal) - 15%) var(--c-normal) var(--brand-hue));
  
  /* アクセントカラー（補色：180度反対） */
  --accent-hue: calc(var(--brand-hue) + 180);
  --accent: oklch(var(--l-normal) var(--c-normal) var(--accent-hue));
}
```

<div class="color-row">
  <div class="color-pair">
    <div class="color-sample" style="background-color: oklch(45% 0.2 250);">Primary Dark</div>
  </div>
  <div class="color-pair">
    <div class="color-sample" style="background-color: oklch(60% 0.2 250);">Primary</div>
  </div>
  <div class="color-pair">
    <div class="color-sample" style="background-color: oklch(75% 0.2 250);">Primary Light</div>
  </div>
</div>

<div class="color-row">
  <div class="color-pair">
    <div class="color-sample" style="background-color: oklch(45% 0.2 70);">Accent Dark</div>
  </div>
  <div class="color-pair">
    <div class="color-sample" style="background-color: oklch(60% 0.2 70);">Accent</div>
  </div>
  <div class="color-pair">
    <div class="color-sample" style="background-color: oklch(75% 0.2 70);">Accent Light</div>
  </div>
</div>

## ブラウザ対応状況と現場での使いどころ

「素晴らしいけど、今のプロジェクトで使えるの？」という疑問にお答えします。

OKLCHは以下のモダンブラウザで既にサポートされています：

- Chrome 111以上（2023年3月〜）
- Safari 16.4以上（2023年3月〜）
- Firefox 113以上（2023年5月〜）
- Edge 111以上（2023年3月〜）

つまり、**2023年後半以降にリリースされたほとんどのブラウザ**で動作します。しかし、ブラウザシェアによっては古いバージョンのサポートも必要でしょう。その場合は、フォールバックを使いましょう：

```css
.brand-color {
  /* 古いブラウザ用フォールバック */
  color: #3050ff;
  /* モダンブラウザ用OKLCH */
  color: oklch(60% 0.2 250);
}
```

## 実践的なユースケース：私の実例から

### ケース1：ダークモード対応

```css
:root {
  --text-light: oklch(95% 0.01 250);
  --text-dark: oklch(20% 0.01 250);
  --bg-light: oklch(98% 0.005 250);
  --bg-dark: oklch(15% 0.01 250);
}

body {
  /* ライトモード */
  color: var(--text-dark);
  background-color: var(--bg-light);
}

body.dark-mode {
  /* ダークモード */
  color: var(--text-light);
  background-color: var(--bg-dark);
}
```

<div class="color-row">
  <div class="color-pair">
    <div class="color-sample" style="background-color: oklch(98% 0.005 250); color: oklch(20% 0.01 250);">
      ライトモード
    </div>
  </div>
  <div class="color-pair">
    <div class="color-sample" style="background-color: oklch(15% 0.01 250); color: oklch(95% 0.01 250);">
      ダークモード
    </div>
  </div>
</div>

### ケース2：スペクトルの表現

```css
.temperature {
  /* 温度で色が変わるUI要素 */
  background: linear-gradient(
    to right,
    oklch(65% 0.2 220), /* 寒色 */
    oklch(65% 0.15 260),
    oklch(65% 0.1 0),
    oklch(65% 0.15 30),
    oklch(65% 0.2 60)   /* 暖色 */
  );
}
```

<div style="height: 50px; width: 100%; margin: 20px 0; background: linear-gradient(to right, oklch(65% 0.2 220), oklch(65% 0.15 260), oklch(65% 0.1 0), oklch(65% 0.15 30), oklch(65% 0.2 60)); border-radius: 5px;"></div>

## まとめ：OKLCHが変える未来のWebデザイン

OKLCHは単なる「新しいカラーフォーマット」ではありません。それは、人間の感覚を中心に据えたデザインアプローチへの転換です。

私たちが色を選ぶとき、実は「数値」を選んでいるのではなく、「感覚」を選んでいるのです。OKLCHはその「感覚」を直接表現できる言語といえます。

- RGBは「機械のための色空間」
- HSLは「理論のための色空間」
- OKLCHは「人間のための色空間」

Webデザインの世界がより直感的で、アクセシブルで、美しくなるための大きな一歩。それがOKLCHなのです。

あなたも次のプロジェクトで、ぜひOKLCHを試してみてください。きっと色との対話が、もっと楽しく、もっと創造的になるはずです。

## 参考リソース

- [CSS Color Module Level 4 仕様](https://www.w3.org/TR/css-color-4/#ok-lab)
- [OKLCHとは何か - MDN Web Docs](https://developer.mozilla.org/ja/docs/Web/CSS/color_value/oklch)
- [色とアクセシビリティ - W3C](https://www.w3.org/WAI/WCAG21/Understanding/contrast-enhanced.html)
- [Colorjs.io - OKLCHカラー計算ライブラリ](https://colorjs.io/)