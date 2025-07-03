# 🌐 Personal Portfolio Template ( - No coding !!)

Selamat datang di **Personal Portfolio Template**!  
Template ini cocok untuk kamu yang ingin membuat website portofolio pribadi yang terlihat 
profesional, hanya dengan edits teks dan gambar dengan mudah, tanpa perlu pengalaman coding.
cocok untuk pelajar, freelancer, maupun pencari kerja.

---
## Penjelasan Folder
- assets => untuk gambar
- SRC => CSS dan JS
index.html => berisi file utama yang bisa kamu edit sesuai biodata kamu

## Fitur Utama

- Desain modern & responsif (bisa dibuka di HP/laptop)
- Navigasi mudah (Home, About, Skills, Contact)
- Animasi sederhana & interaktif
- Formulir kontak langsung ke email (menggunakan Formspree)
- Mudah diubah sesuai kebutuhan

---

## Cara Menggunakan

### 1. Download & Ekstrak

1. Download file ZIP project ini.
2. Ekstrak ke folder mana saja di komputer kamu.

### 2. Buka di Visual Studio Code

1. Install [Visual Studio Code](https://code.visualstudio.com/) jika belum punya.
2. Buka folder "portofolio-template" hasil ekstrak tadi di VS Code.

### 3. Jalankan Website

1. Install ekstensi **Live Server** di VS Code (gratis).
2. Klik kanan pada file `index.html` → pilih **Open with Live Server**.
3. Website akan terbuka otomatis di browser.

### 4. Edit Konten

- **Ganti Nama, Foto, dan Deskripsi**
  - Edit file `index.html`
  - Cari bagian seperti `"Your Name"`, `"Your status/job"`, dan ganti sesuai data kamu.
  - Ganti gambar profil di folder `assets/img/user-foto.png` dengan foto kamu (nama file harus sama).

- **Ganti Skill & Pengalaman**
  - Masih di `index.html`, cari bagian **Skills** dan **Experience**.
  - Edit judul dan deskripsi sesuai keahlian & pengalamanmu.

- **Ganti Link Sosial Media**
  - Cari bagian sosial media (ikon Instagram, GitHub, dll).
  - Ganti linknya dengan akun milikmu.

- **Ganti Email Formulir**
  - Daftar gratis di [Formspree.io](https://formspree.io/)
  - Dapatkan `form-id` kamu, lalu ganti di bagian:
    ```html
    <form action="https://formspree.io/f/your-form-id" ...>
    ```
  - Sekarang pesan dari pengunjung akan masuk ke email kamu.

---

## Struktur Folder

```
index.html -> file utama
how-to-use.txt
README.MD
.vscode/
    settings.json
assets/
    img/
        logo-skills.png
        user-foto.png
SRC/
    css/
        style.css
    javascript/
        form-status.js
        script.js
```

---

## FAQ

**Q: Apakah harus bisa coding?**  
A: Tidak! Cukup edit teks di file `index.html` sesuai petunjuk di atas.

**Q: Bagaimana jika ingin menambah fitur?**  
A: Silakan modifikasi file HTML, CSS, atau JavaScript. Untuk pemula, cukup edit bagian yang sudah ada.

**Q: Bagaimana cara mengganti warna/tampilan?**  
A: Edit file `SRC/css/style.css`. Ubah nilai warna pada bagian `:root`.

**Q: Bisa dipakai buat di upload ke Netlify atau GitHub Pages?**
A: Bisaa! Upload folder SRC ke GitHub atau Netlify. Kamu bisa cari tutorial di YouTube dengan keyword: "Upload
static site to netlify/github pages".


---

## Saran Tools

- [Visual Studio Code](https://code.visualstudio.com/) (editor gratis & mudah)
- [Live Server Extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) (untuk preview website langsung)
- [Formspree.io](https://formspree.io/) (untuk formulir kontak)

---

## Lisensi

Bebas digunakan & dimodifikasi untuk keperluan pribadi.

---

**Selamat mencoba!**  
