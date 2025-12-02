---
title: Panduan Lengkap Tailwind CSS
date: 2025-01-20
description: Menguasai utility-first CSS framework untuk membuat desain yang konsisten dan responsive dengan cepat.
image: https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=800&h=400&fit=crop
author: Sarah Putri
authorImage: https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face
authorRole: UI/UX Designer
category: CSS
tags: ["tailwind", "css", "design"]
readingTime: 6 min read
---

# Panduan Lengkap Tailwind CSS

Tailwind CSS telah merevolusi cara kita menulis CSS. Framework *utility-first* ini memungkinkan kita membangun desain custom tanpa meninggalkan HTML.

## Keunggulan Tailwind

| Fitur | Keuntungan |
|-------|-----------|
| Utility Classes | Tidak perlu naming CSS |
| Responsive | Prefix seperti `md:`, `lg:` |
| Dark Mode | Dukungan built-in |
| JIT Engine | Build super cepat |

## Instalasi

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

## Konfigurasi

```javascript
// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{html,js,astro}"],
  theme: {
    extend: {
      colors: {
        primary: '#3b82f6',
        secondary: '#10b981'
      }
    }
  }
}
```

## Contoh Penggunaan

```html
<button class="bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
  Klik Saya
</button>
```

## Tips Produktivitas

- **Gunakan @apply** untuk komponen yang sering dipakai
- **Manfaatkan Plugin** seperti `@tailwindcss/forms`
- **Install Extension** Tailwind IntelliSense di VS Code

---

*"Tailwind CSS bukan tentang menulis lebih sedikit CSS, tapi tentang menulis CSS yang lebih maintainable."*
