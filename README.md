# SMK Thalita Website

Website resmi SMK Thalita - Sekolah Menengah Kejuruan yang menghasilkan lulusan berkarakter, berkompeten, dan siap kerja di era digital.

## 📁 Struktur Proyek

```
ukk_thalita/
├── index.html                 # File utama (monolitik)
├── index-components.html      # File utama (menggunakan komponen)
├── css/
│   └── style.css             # Custom CSS
├── js/
│   ├── main.js              # JavaScript utama
│   └── components.js        # Loader komponen
├── components/              # Komponen-komponen terpisah
│   ├── header.html         # Navigation bar
│   ├── hero.html           # Hero section dengan statistik
│   ├── about.html          # Section tentang sekolah
│   ├── majors.html         # Program keahlian
│   ├── facilities.html     # Fasilitas sekolah
│   ├── news.html           # Berita dan pengumuman
│   ├── contact.html        # Form kontak
│   └── footer.html         # Footer dan back-to-top
└── vendor/                 # Bootstrap files
    ├── css/
    └── js/
```

## 🚀 Cara Penggunaan

### Opsi 1: File Monolitik (Mudah)
Gunakan `index.html` - semua kode dalam satu file, mudah untuk deployment sederhana.

### Opsi 2: Komponen Terpisah (Modular)
Gunakan `index-components.html` - kode dipecah menjadi komponen-komponen terpisah.

**Catatan:** Opsi 2 memerlukan web server (tidak bisa dibuka langsung di browser karena CORS policy).

## 🛠 Development

### Setup Local Server
```bash
# Menggunakan Python
python -m http.server 8000

# Menggunakan Node.js (live-server)
npx live-server

# Menggunakan PHP
php -S localhost:8000
```

### Edit Komponen
1. Edit file di folder `components/` untuk mengubah section tertentu
2. Edit `css/style.css` untuk styling
3. Edit `js/main.js` untuk JavaScript functionality

## 📱 Fitur Website

### ✨ UI/UX Features
- **Responsive Design** - Compatible dengan semua device
- **Modern Design** - Gradient colors dan smooth animations
- **Interactive Elements** - Hover effects dan smooth scrolling
- **Loading States** - Visual feedback untuk user actions

### 🎯 Sections
- **Hero Section** - Dengan animated counters untuk statistik
- **About Section** - Visi, misi, dan akreditasi sekolah
- **Programs** - 6 program keahlian lengkap
- **Facilities** - Fasilitas unggulan sekolah
- **News** - Berita dan pengumuman terbaru
- **Contact** - Form kontak dan informasi lengkap

### ⚡ JavaScript Features
- Smooth scrolling navigation
- Active link highlighting
- Animated counters
- Fade-in animations on scroll
- Back-to-top button
- Form validation dan loading states
- Component lazy loading

## 🎨 Customization

### Mengubah Warna Tema
Edit variabel di `css/style.css`:
```css
/* Ganti gradient colors */
background: linear-gradient(135deg, #your-color-1 0%, #your-color-2 100%);
```

### Menambah Program Keahlian
Edit `components/majors.html` dan tambahkan card baru dengan struktur yang sama.

### Mengubah Konten
- **Nama Sekolah**: Edit semua file komponen
- **Kontak**: Edit `components/contact.html` dan `components/footer.html`
- **Berita**: Edit `components/news.html`

## 🔧 Teknologi yang Digunakan

- **HTML5** - Semantic markup
- **CSS3** - Modern styling dengan Flexbox/Grid
- **JavaScript ES6+** - Modern JavaScript features
- **Bootstrap 5** - Responsive framework
- **Font Awesome 6** - Icons
- **Intersection Observer API** - Scroll animations

## 📝 Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 🤝 Contributing

1. Fork repository ini
2. Buat branch untuk fitur baru (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push ke branch (`git push origin feature/amazing-feature`)
5. Buat Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

## 📧 Contact

SMK Thalita - info@smkthalita.sch.id

Project Link: [https://github.com/yourusername/ukk-thalita](https://github.com/yourusername/ukk-thalita)
# ukk_thalita
