/* Yıl güncelleme */
document.getElementById('year').textContent = new Date().getFullYear();

/* Mobil menü açılır kapanır */
function setupMobileMenu() {
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('.nav');
  
  if (!hamburger || !nav) return;
  
  hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
    hamburger.classList.toggle('active');
  });
  
  // Menü linklerine tıklandığında menüyü kapat
  const navLinks = nav.querySelectorAll('a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('active');
      hamburger.classList.remove('active');
    });
  });
  
  // Dışına tıklandığında menüyü kapat
  document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !nav.contains(e.target)) {
      nav.classList.remove('active');
      hamburger.classList.remove('active');
    }
  });
}

/* Form gönderme feedback */
function setupFormHandling() {
  const form = document.querySelector('.contact-form');
  
  if (!form) return;
  
  form.addEventListener('submit', function(e) {
    const btn = form.querySelector('button[type="submit"]');
    if (btn) {
      btn.disabled = true;
      btn.textContent = '⏳ Gönderiliyor...';
      
      // 2 saniye sonra butonu eski haline getir
      setTimeout(() => {
        btn.disabled = false;
        btn.textContent = 'Randevu Talep Et';
      }, 2000);
    }
  });
}

/* Smooth scroll behavior for anchor links */
function setupSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href !== '#' && document.querySelector(href)) {
        e.preventDefault();
        document.querySelector(href).scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
}

/* AOS - Animasyon (scroll sırasında görünüme gelme) */
function observeElements() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };
  
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);
  
  document.querySelectorAll('.service-card, .faq-item, .gallery-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
  });
}

/* Page load animation */
function pageLoadAnimation() {
  document.body.style.opacity = '1';
  document.body.style.transition = 'opacity 0.5s ease';
}

/* Initialize everything on page load */
document.addEventListener('DOMContentLoaded', function() {
  setupMobileMenu();
  setupFormHandling();
  setupSmoothScroll();
  observeElements();
  pageLoadAnimation();
  
  console.log('İlaydam Güzellik & Estetik Merkezi - Web Sitesi Hazır ✨');
});

/* Scroll to top button functionality */
window.addEventListener('scroll', function() {
  const scrollPos = window.scrollY;
  const header = document.querySelector('.site-header');
  
  if (scrollPos > 100) {
    header.style.boxShadow = '0 2px 12px rgba(0,0,0,0.15)';
  } else {
    header.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
  }
});

/* Sayfa performans tipleri */
if ('performance' in window) {
  window.addEventListener('load', function() {
    const perfData = performance.timing;
    const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
    console.log('Sayfa yükleme süresi: ' + pageLoadTime + 'ms');
  });
}
