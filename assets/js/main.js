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
    
    if (toggle && overlay) {
        toggle.addEventListener('click', () => {
            toggle.classList.toggle('active');
            overlay.classList.toggle('open');
        });
    }

    // 3. EFFET "AUTO-HOVER" SUR MOBILE (Pôles d'intervention)
    // On utilise IntersectionObserver pour détecter quelle carte est au milieu de l'écran
    
    const serviceCards = document.querySelectorAll('.service-card');
    
    // Options : on déclenche quand l'élément est dans la zone centrale (marge de -40% en haut et en bas)
    const observerOptions = {
        root: null,
        rootMargin: '-40% 0px -40% 0px', 
        threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // La carte est au milieu : on active l'effet
                entry.target.classList.add('active-mobile');
            } else {
                // La carte sort du milieu : on désactive
                entry.target.classList.remove('active-mobile');
            }
        });
    }, observerOptions);

    // On lance l'observation sur chaque carte
    serviceCards.forEach(card => {
        observer.observe(card);
    });
});
