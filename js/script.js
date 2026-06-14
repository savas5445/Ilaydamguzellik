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
