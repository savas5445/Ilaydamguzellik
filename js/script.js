document.getElementById('year')?.replaceWith(document.createElement('span'));
const yEl = document.getElementById('year') || document.querySelector('#year');
if(yEl) yEl.textContent = new Date().getFullYear();

/* Basit form gönderme feedback */
const form = document.querySelector('.contact-form');
if(form){
  form.addEventListener('submit', () => {
    const btn = form.querySelector('button[type="submit"]');
    if(btn){ btn.disabled = true; btn.textContent = 'Gönderiliyor...'; }
  });
}

/* Mobil menü açılır kapanır */
function setupMobileMenu() {
  const header = document.querySelector('.site-header');
  const nav = document.querySelector('.nav');
  
  // Hamburger menü butonu oluştur
  const hamburger = document.createElement('button');
  hamburger.className = 'hamburger';
  hamburger.innerHTML = '☰';
  hamburger.setAttribute('aria-label', 'Menüyü aç/kapat');
  
  // Header'a hamburger ekle
  const headerInner = document.querySelector('.header-inner');
  if(headerInner && nav) {
    headerInner.appendChild(hamburger);
    
    // Menüyü mobilde toggle et
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
  }
}

// Sayfayı yükledikten sonra mobil menüyü kur
document.addEventListener('DOMContentLoaded', setupMobileMenu);
