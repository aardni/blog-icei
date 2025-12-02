---
title: Mengenal TypeScript untuk Pemula
date: 2025-01-25
description: Panduan memulai TypeScript dari nol hingga memahami konsep type safety dalam pengembangan aplikasi JavaScript.
author: Budi Santoso
category: Programming
tags: ["typescript", "javascript", "programming"]
---

# Mengenal TypeScript untuk Pemula

TypeScript adalah **superset** dari JavaScript yang menambahkan *static typing*. Dikembangkan oleh Microsoft, TypeScript membantu menangkap error sebelum runtime.

## Mengapa TypeScript?

```typescript
// JavaScript - Error saat runtime
function greet(name) {
  return "Hello, " + name.toUpperCase();
}
greet(123); // Runtime Error!

// TypeScript - Error saat compile
function greet(name: string): string {
  return "Hello, " + name.toUpperCase();
}
greet(123); // Compile Error! Argument must be string
```

## Type Dasar

```typescript
// Primitives
let nama: string = "John";
let umur: number = 25;
let aktif: boolean = true;

// Arrays
let hobi: string[] = ["coding", "gaming"];
let scores: Array<number> = [90, 85, 88];

// Objects
interface User {
  id: number;
  name: string;
  email?: string; // optional
}

const user: User = {
  id: 1,
  name: "Jane"
};
```

## Generics

```typescript
function getFirst<T>(arr: T[]): T | undefined {
  return arr[0];
}

const firstNum = getFirst([1, 2, 3]); // number
const firstName = getFirst(["a", "b"]); // string
```

## Union Types

```typescript
type Status = "pending" | "success" | "error";

function showStatus(status: Status) {
  console.log(`Status: ${status}`);
}

showStatus("success"); // OK
showStatus("unknown"); // Error!
```

## Checklist Belajar TypeScript

- [x] Memahami type annotations
- [x] Belajar interfaces dan types
- [ ] Menguasai generics
- [ ] Eksplorasi utility types

> **Ingat:** TypeScript adalah investasi jangka panjang untuk kualitas kode yang lebih baik!
