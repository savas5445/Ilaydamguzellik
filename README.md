# IlaydaGuzellik — Statik Web Sitesi

Bu depo IlaydaGuzellik için basit, responsive bir statik web sitesi içerir (HTML/CSS/JS). Kolayca GitHub Pages ile yayınlanabilir.

Özellikler:
- Ana sayfa, hizmetler, galeri ve iletişim formu (Formspree ile örnek entegrasyon)
- Mobil uyumlu tasarım
- Basit JS form feedback

Kurulum ve yayınlama (yerelde):
1. Dosyaları bir klasöre kaydet.
2. Terminalde:
   git init
   git add .
   git commit -m "İlk site sürümü"
   git branch -M main
   git remote add origin https://github.com/<kullanici>/<repo>.git
   git push -u origin main

GitHub Pages ile yayınlama:
- Depoyu oluşturduktan sonra GitHub → Settings → Pages → Branch seçeneğinden `main` (root) seçip Save yap. Site birkaç dakikada yayına geçer: https://<kullanici>.github.io/<repo>/

Alternatif otomatik deploy (GitHub Actions):
- .github/workflows/gh-pages.yml dosyasını ekleyebilir ve bir GH Action ile gh-pages'e deploy edebilirsin. (Örnek workflow bu repoda sağlanmıştır.)

Form gönderimleri:
- contact form action alanı Formspree örneğidir. Kendi e-posta alıcın için Formspree veya benzeri bir servis kullan veya basitça mailto: kullan.

Kişiselleştirme:
- İsim, adres, telefon, resimler ve renkleri değiştirmek için ilgili dosyalarda düzenleme yap.

Deployed: 2026-06-14T
