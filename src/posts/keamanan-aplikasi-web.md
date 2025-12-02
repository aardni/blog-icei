---
title: Keamanan Aplikasi Web yang Wajib Diketahui
date: 2025-02-25
description: Panduan praktis mengamankan aplikasi web dari serangan umum seperti XSS, CSRF, SQL Injection, dan lainnya.
author: Irfan Maulana
category: Security
tags: ["security", "web security", "owasp"]
---

# Keamanan Aplikasi Web yang Wajib Diketahui

Keamanan bukan fitur tambahan, tapi **fondasi**. Satu vulnerability bisa menghancurkan reputasi dan kepercayaan user. Mari pelajari cara melindungi aplikasi!

## OWASP Top 10 (2024)

1. Broken Access Control
2. Cryptographic Failures
3. Injection
4. Insecure Design
5. Security Misconfiguration
6. Vulnerable Components
7. Auth Failures
8. Software Integrity Failures
9. Logging Failures
10. SSRF

## 1. Cross-Site Scripting (XSS)

### Vulnerable Code

```javascript
// BAHAYA! User input langsung di-render
element.innerHTML = userInput;
```

### Secure Code

```javascript
// Sanitize input
import DOMPurify from 'dompurify';
element.innerHTML = DOMPurify.sanitize(userInput);

// Atau gunakan textContent
element.textContent = userInput;
```

## 2. SQL Injection

### Vulnerable Code

```javascript
// BAHAYA! String concatenation
const query = `SELECT * FROM users WHERE id = ${userId}`;
```

### Secure Code

```javascript
// Gunakan parameterized queries
const query = 'SELECT * FROM users WHERE id = $1';
const result = await db.query(query, [userId]);

// Atau gunakan ORM
const user = await prisma.user.findUnique({
  where: { id: userId }
});
```

## 3. CSRF (Cross-Site Request Forgery)

```javascript
// Server - Generate token
import csrf from 'csurf';
app.use(csrf());

app.get('/form', (req, res) => {
  res.render('form', { csrfToken: req.csrfToken() });
});

// Client - Include token
<form method="POST">
  <input type="hidden" name="_csrf" value="{{csrfToken}}">
  <!-- form fields -->
</form>
```

## Security Headers

```javascript
// Menggunakan Helmet.js
import helmet from 'helmet';

app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      imgSrc: ["'self'", "data:", "https:"],
    },
  },
  hsts: {
    maxAge: 31536000,
    includeSubDomains: true,
  },
}));
```

## Checklist Keamanan

- [ ] Input validation di client DAN server
- [ ] Parameterized queries untuk database
- [ ] HTTPS everywhere
- [ ] Security headers configured
- [ ] Dependencies up to date
- [ ] Rate limiting implemented
- [ ] Logging dan monitoring aktif
- [ ] Regular security audits

## Tools yang Berguna

| Tool | Fungsi |
|------|--------|
| OWASP ZAP | Vulnerability scanning |
| Snyk | Dependency checking |
| npm audit | Package vulnerabilities |
| Burp Suite | Penetration testing |

---

> **Remember:** Security is not a product, but a process. Stay vigilant!
