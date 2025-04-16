// ヘッダー共通化・イベント
fetch('header.html')
    .then(res => res.text())
    .then(html => {
        document.getElementById('header-include').innerHTML = html;

        // ハンバーガーメニュー
        const hamburger = document.getElementById('hamburger');
        const navMenu = document.getElementById('nav-menu');
        if (hamburger && navMenu) {
            hamburger.addEventListener('click', function () {
                const expanded = hamburger.getAttribute('aria-expanded') === 'true';
                hamburger.setAttribute('aria-expanded', !expanded);
                navMenu.classList.toggle('open');
                hamburger.classList.toggle('open');
            });
        }
    });

// プロフィール共通化
fetch('profile.html')
    .then(res => res.text())
    .then(html => {
        const profile = document.getElementById('profile-include');
        if (profile) profile.innerHTML = html;
    });

// フッター共通化
fetch('footer.html')
    .then(res => res.text())
    .then(html => {
        const footer = document.getElementById('footer-include');
        if (footer) footer.innerHTML = html;
    });
