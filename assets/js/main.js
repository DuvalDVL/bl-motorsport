document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Gestion du Scroll (Header transparent -> Header noir)
    const header = document.querySelector('.site-header');
    if(header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // 2. Menu Mobile
    const toggle = document.querySelector('.mobile-toggle');
    const overlay = document.querySelector('.mobile-nav-overlay');
    
    if (toggle && overlay) {
        toggle.addEventListener('click', () => {
            toggle.classList.toggle('active');
            overlay.classList.toggle('open');
        });
    }

    // 3. EFFET "AUTO-HOVER" (UNIQUEMENT SUR MOBILE)
    // On vérifie la largeur de l'écran avant de lancer le script
    if (window.innerWidth < 900) {
        
        const serviceCards = document.querySelectorAll('.service-card');
        
        // Marge négative pour cibler le centre exact de l'écran
        const observerOptions = {
            root: null,
            rootMargin: '-40% 0px -40% 0px', 
            threshold: 0
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active-mobile');
                } else {
                    entry.target.classList.remove('active-mobile');
                }
            });
        }, observerOptions);

        serviceCards.forEach(card => {
            observer.observe(card);
        });
    }
});
