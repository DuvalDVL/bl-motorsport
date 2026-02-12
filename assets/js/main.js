document.addEventListener('DOMContentLoaded', function() {
    
    // 1. GESTION DU SCROLL (Optimisée pour éviter le Forced Reflow)
    const header = document.querySelector('.site-header');
    let ticking = false;

    if (header) {
        window.addEventListener('scroll', () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    if (window.scrollY > 50) {
                        header.classList.add('scrolled');
                    } else {
                        header.classList.remove('scrolled');
                    }
                    ticking = false;
                });
                ticking = true;
            }
        }, { passive: true }); // "passive" booste la performance au scroll
    }

    // 2. MENU MOBILE
    const toggle = document.querySelector('.mobile-toggle');
    const overlay = document.querySelector('.mobile-nav-overlay');
    
    if (toggle && overlay) {
        toggle.addEventListener('click', () => {
            toggle.classList.toggle('active');
            overlay.classList.toggle('open');
            // Bloque le scroll quand le menu est ouvert
            document.body.style.overflow = overlay.classList.contains('open') ? 'hidden' : '';
        });
    }

    // 3. EFFET "AUTO-FOCUS" MOBILE (Intersection Observer)
    if (window.innerWidth < 900) {
        const elementsToAnimate = document.querySelectorAll('.service-card, .gallery-item');
        
        const observerOptions = {
            root: null,
            rootMargin: '-40% 0px -40% 0px', // Légèrement élargi pour plus de souplesse
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

        elementsToAnimate.forEach(el => observer.observe(el));
    }

    // 4. GESTION DES COOKIES
    const cookiePopup = document.getElementById("cookie-popup");
    const acceptBtn = document.getElementById("accept-cookies");

    if (cookiePopup && !localStorage.getItem("cookiesAccepted")) {
        setTimeout(() => {
            cookiePopup.style.display = "block";
        }, 3000); 
    }

    if (acceptBtn) {
        acceptBtn.addEventListener("click", function() {
            localStorage.setItem("cookiesAccepted", "true");
            cookiePopup.style.display = "none";
        });
    }
});
