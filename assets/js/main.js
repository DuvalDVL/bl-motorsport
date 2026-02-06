document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Gestion du Scroll (Header transparent -> Header noir)
    const header = document.querySelector('.site-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 2. Menu Mobile
    const toggle = document.querySelector('.mobile-toggle');
    const overlay = document.querySelector('.mobile-nav-overlay');
    
    toggle.addEventListener('click', () => {
        toggle.classList.toggle('active'); // Transforme le burger en croix
        overlay.classList.toggle('open');  // Affiche le menu plein écran
    });
});
