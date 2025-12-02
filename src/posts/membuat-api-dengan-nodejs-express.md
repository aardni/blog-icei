---
title: Membuat REST API dengan Node.js dan Express
date: 2025-02-05
description: Tutorial step-by-step membangun REST API yang scalable menggunakan Node.js, Express, dan best practices modern.
author: Eko Prasetyo
category: Backend
tags: ["nodejs", "express", "api", "backend"]
---

# Membuat REST API dengan Node.js dan Express

Express.js tetap menjadi pilihan populer untuk membangun API di Node.js. Mari buat API yang **clean**, **scalable**, dan mengikuti best practices!

## Setup Proyek

```bash
mkdir my-api && cd my-api
npm init -y
npm install express cors helmet morgan dotenv
npm install -D nodemon
```

## Struktur Folder

```
my-api/
├── src/
│   ├── controllers/
│   ├── middleware/
│   ├── routes/
│   ├── services/
│   └── app.js
├── .env
└── package.json
```

## Kode Dasar

```javascript
// src/app.js
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

const app = express();

// Middleware
app.use(helmet());
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);

// Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    error: 'Something went wrong!'
  });
});

export default app;
```

## Controller Pattern

```javascript
// src/controllers/userController.js
export const getUsers = async (req, res, next) => {
  try {
    const users = await userService.findAll();
    res.json({ data: users });
  } catch (error) {
    next(error);
  }
};

export const createUser = async (req, res, next) => {
  try {
    const user = await userService.create(req.body);
    res.status(201).json({ data: user });
  } catch (error) {
    next(error);
  }
};
```

## HTTP Methods & Status Codes

| Method | Endpoint | Status | Deskripsi |
|--------|----------|--------|-----------|
| GET | /users | 200 | List users |
| POST | /users | 201 | Create user |
| PUT | /users/:id | 200 | Update user |
| DELETE | /users/:id | 204 | Delete user |

## Tips Keamanan

- **Selalu validasi input** menggunakan Joi atau Zod
- **Rate limiting** untuk mencegah abuse
- **Sanitize data** sebelum masuk database
- **Gunakan HTTPS** di production

> **Next Step:** Tambahkan authentication dengan JWT dan database dengan Prisma!
