document.addEventListener('DOMContentLoaded', () => {
  // 1. GESTION DU SCROLL (Optimisée)
  const header = document.querySelector('.site-header');
  let ticking = false;

  if (header) {
    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          header.classList.toggle('scrolled', window.pageYOffset > 50);
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  // 2. MENU MOBILE
  const toggle = document.querySelector('.mobile-toggle');
  const overlay = document.querySelector('.mobile-nav-overlay');
  if (toggle && overlay) {
    toggle.addEventListener('click', () => {
      const isOpen = overlay.classList.toggle('open');
      toggle.classList.toggle('active');
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });
  }

  // 3. AUTO-FOCUS MOBILE (Utilisation de matchMedia pour éviter le Reflow)
  const isMobile = window.matchMedia("(max-width: 900px)");
  
  const setupObserver = (mq) => {
    if (mq.matches) {
      const elements = document.querySelectorAll('.service-card, .gallery-item');
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          entry.target.classList.toggle('active-mobile', entry.isIntersecting);
        });
      }, { rootMargin: '-40% 0px -40% 0px' });
      elements.forEach(el => observer.observe(el));
    }
  };

  setupObserver(isMobile);

  // 4. COOKIES
  const cookiePopup = document.getElementById("cookie-popup");
  const acceptBtn = document.getElementById("accept-cookies");
  if (cookiePopup && !localStorage.getItem("cookiesAccepted")) {
    setTimeout(() => { cookiePopup.style.display = "block"; }, 3000);
  }
  if (acceptBtn) {
    acceptBtn.addEventListener("click", () => {
      localStorage.setItem("cookiesAccepted", "true");
      cookiePopup.style.display = "none";
    });
  }
});
