---
title: Optimasi Performa Web di Tahun 2025
date: 2025-02-01
description: Teknik dan strategi terbaru untuk meningkatkan Core Web Vitals dan pengalaman pengguna website.
author: Diana Kusuma
category: Performance
tags: ["performance", "web vitals", "optimization"]
---

# Optimasi Performa Web di Tahun 2025

Performa website bukan lagi pilihan, tapi **keharusan**. Google menggunakan Core Web Vitals sebagai faktor ranking. Mari pelajari cara mengoptimalkannya!

## Core Web Vitals

### 1. Largest Contentful Paint (LCP)
Target: **< 2.5 detik**

```html
<!-- Preload gambar hero -->
<link rel="preload" as="image" href="/hero.webp">

<!-- Gunakan format modern -->
<picture>
  <source srcset="/hero.avif" type="image/avif">
  <source srcset="/hero.webp" type="image/webp">
  <img src="/hero.jpg" alt="Hero">
</picture>
```

### 2. Interaction to Next Paint (INP)
Target: **< 200ms**

```javascript
// Gunakan requestIdleCallback untuk tugas non-kritis
requestIdleCallback(() => {
  analytics.track('page_view');
});

// Debounce input handler
const handleInput = debounce((e) => {
  search(e.target.value);
}, 300);
```

### 3. Cumulative Layout Shift (CLS)
Target: **< 0.1**

```css
/* Selalu set dimensi untuk media */
img, video {
  width: 100%;
  height: auto;
  aspect-ratio: 16/9;
}

/* Reserve space untuk dynamic content */
.ad-slot {
  min-height: 250px;
}
```

## Teknik Lanjutan

| Teknik | Impact | Effort |
|--------|--------|--------|
| Image lazy loading | Tinggi | Rendah |
| Code splitting | Tinggi | Medium |
| Service Worker | Medium | Tinggi |
| Edge caching | Tinggi | Medium |

## Tools yang Wajib Digunakan

1. **Lighthouse** - Audit performa komprehensif
2. **WebPageTest** - Testing dari berbagai lokasi
3. **Chrome DevTools** - Profiling real-time
4. **Bundlephobia** - Cek ukuran npm package

---

*Performa yang baik = UX yang baik = Konversi yang lebih tinggi*
