// OKLCHテーマ切り替え機能
document.addEventListener('DOMContentLoaded', function() {
  // ユーザーの設定またはシステムの設定に基づいて初期テーマを決定
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
  const currentTheme = localStorage.getItem('theme');
  
  if (currentTheme === 'dark' || (currentTheme === null && prefersDarkScheme.matches)) {
    document.body.classList.add('dark-theme');
  } else {
    document.body.classList.add('light-theme');
  }
  
  // テーマ切り替えボタンをヘッダーに追加
  const header = document.querySelector('.masthead');
  if (header) {
    const switcherButton = document.createElement('button');
    switcherButton.classList.add('theme-switcher');
    switcherButton.innerHTML = '<i class="fas fa-adjust"></i>';
    switcherButton.title = 'テーマの切り替え';
    header.appendChild(switcherButton);
    
    // ボタンクリックでテーマを切り替え
    switcherButton.addEventListener('click', function() {
      if (document.body.classList.contains('dark-theme')) {
        document.body.classList.replace('dark-theme', 'light-theme');
        localStorage.setItem('theme', 'light');
      } else {
        document.body.classList.replace('light-theme', 'dark-theme');
        localStorage.setItem('theme', 'dark');
      }
    });
    
    // ボタンのスタイル
    const style = document.createElement('style');
    style.textContent = `
      .theme-switcher {
        position: absolute;
        top: 1rem;
        right: 1rem;
        background: transparent;
        border: none;
        color: var(--text-color);
        font-size: 1.5rem;
        cursor: pointer;
        padding: 0.25rem;
        border-radius: 50%;
        transition: transform 0.3s ease;
      }
      .theme-switcher:hover {
        transform: rotate(180deg);
      }
      @media (max-width: 768px) {
        .theme-switcher {
          top: 0.5rem;
          right: 5rem;
        }
      }
    `;
    document.head.appendChild(style);
  }
});