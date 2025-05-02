// シンプル化したテーマ切り替え - GitHub Pages互換
document.addEventListener('DOMContentLoaded', function() {
  // 初期テーマの設定
  const currentTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (currentTheme === 'light') {
    document.body.classList.add('light-theme');
  } else if (currentTheme === 'dark' || prefersDark) {
    document.body.classList.add('dark-theme');
  } else {
    document.body.classList.add('light-theme'); // デフォルトはライトテーマ
  }
  
  // テーマ切り替えボタンを作成
  const header = document.querySelector('.masthead');
  if (header) {
    const btn = document.createElement('button');
    btn.className = 'theme-switcher';
    btn.innerHTML = '<i class="fas fa-adjust"></i>';
    btn.title = 'テーマ切り替え';
    header.appendChild(btn);
    
    // テーマ切り替えの処理
    btn.addEventListener('click', function() {
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
    
    // スタイル追加
    const style = document.createElement('style');
    style.textContent = `
      .theme-switcher {
        position: absolute;
        top: 1rem;
        right: 1rem;
        background: transparent;
        border: none;
        color: inherit;
        font-size: 1.5rem;
        cursor: pointer;
        z-index: 10;
        opacity: 0.8;
      }
      .theme-switcher:hover {
        opacity: 1;
      }
      @media (max-width: 768px) {
        .theme-switcher {
          top: 0.5rem;
          right: 4rem;
        }
      }
    `;
    document.head.appendChild(style);
  }
});