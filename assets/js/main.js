document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Gestion du Scroll (Header)
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

    // 3. EFFET "AUTO-FOCUS" (MOBILE)
    // S'applique aux Cartes Services ET à la Galerie Photo
    if (window.innerWidth < 900) {
        
        // C'EST ICI LA MODIFICATION : On sélectionne les cartes ET les images de galerie
        const elementsToAnimate = document.querySelectorAll('.service-card, .gallery-item');
        
        const observerOptions = {
            root: null,
            // Zone de déclenchement très étroite au centre de l'écran (45% de marge haut/bas)
            // Cela force l'effet uniquement quand l'élément est VRAIMENT au milieu
            rootMargin: '-45% 0px -45% 0px', 
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

        elementsToAnimate.forEach(el => {
            observer.observe(el);
        });
    }
});
