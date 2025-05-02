// OKLCHテーマ切り替え機能 - GitHub Pages 互換バージョン
document.addEventListener('DOMContentLoaded', function() {
  // ユーザーの設定またはシステムの設定に基づいて初期テーマを決定
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
  const currentTheme = localStorage.getItem('theme');
  
  // テーマの初期設定
  if (currentTheme === 'light') {
    document.body.classList.add('light-theme');
  } else if (currentTheme === 'dark') {
    document.body.classList.add('dark-theme');
  } else {
    // ユーザー設定がなければ、システム設定に基づく
    if (prefersDarkScheme.matches) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.add('light-theme');
    }
  }
  
  // DOM要素が揃ってからテーマ切り替えボタンを追加
  setTimeout(function() {
    addThemeSwitcher();
  }, 500);
  
  function addThemeSwitcher() {
    // ヘッダー要素を取得
    const header = document.querySelector('.masthead');
    if (!header) return;
    
    // 既存のスイッチャーを確認
    if (document.querySelector('.theme-switcher')) return;
    
    // テーマ切り替えボタンを作成
    const switcherButton = document.createElement('button');
    switcherButton.setAttribute('class', 'theme-switcher');
    switcherButton.setAttribute('title', 'テーマの切り替え');
    switcherButton.innerHTML = '<i class="fas fa-adjust"></i>';
    
    // ボタンをヘッダーに追加
    header.appendChild(switcherButton);
    
    // クリックイベントリスナーを追加
    switcherButton.addEventListener('click', function() {
      if (document.body.classList.contains('dark-theme')) {
        document.body.classList.remove('dark-theme');
        document.body.classList.add('light-theme');
        localStorage.setItem('theme', 'light');
      } else {
        document.body.classList.remove('light-theme');
        document.body.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark');
      }
    });
    
    // ボタンのスタイルを追加
    addSwitcherStyles();
  }
  
  function addSwitcherStyles() {
    // 既存のスタイルを確認
    if (document.querySelector('#theme-switcher-styles')) return;
    
    const styleEl = document.createElement('style');
    styleEl.setAttribute('id', 'theme-switcher-styles');
    styleEl.textContent = `
      .theme-switcher {
        position: absolute;
        top: 1rem;
        right: 1rem;
        background: transparent;
        border: none;
        color: inherit;
        font-size: 1.5rem;
        cursor: pointer;
        padding: 0.25rem;
        border-radius: 50%;
        z-index: 100;
        opacity: 0.8;
        transition: transform 0.3s ease, opacity 0.3s ease;
      }
      .theme-switcher:hover {
        transform: rotate(180deg);
        opacity: 1;
      }
      @media (max-width: 768px) {
        .theme-switcher {
          top: 0.5rem;
          right: 5rem;
          font-size: 1.2rem;
        }
      }
    `;
    document.head.appendChild(styleEl);
  }
});