---
title: State Management di React Modern
date: 2025-02-20
description: Perbandingan berbagai solusi state management di React mulai dari useState hingga Zustand dan Jotai.
image: https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop
author: Hana Safitri
authorImage: https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face
authorRole: Frontend Developer
category: React
tags: ["react", "state management", "zustand", "jotai"]
readingTime: 7 min read
---

# State Management di React Modern

Era Redux yang kompleks sudah berlalu. Mari eksplorasi solusi state management modern yang **simple** namun **powerful**!

## Evolusi State Management

```
useState → useReducer → Context → Redux → Zustand/Jotai
   │           │           │        │          │
Simple    More Control  Share   Overkill   Just Right
```

## 1. useState + useReducer

Untuk state lokal dan kompleksitas sedang.

```jsx
// Simple state
const [count, setCount] = useState(0);

// Complex state dengan reducer
const [state, dispatch] = useReducer(reducer, initialState);

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + 1 };
    case 'decrement':
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
}
```

## 2. Zustand

Minimalis, tanpa boilerplate, TypeScript-friendly.

```typescript
import { create } from 'zustand';

interface Store {
  bears: number;
  addBear: () => void;
  removeAllBears: () => void;
}

const useStore = create<Store>((set) => ({
  bears: 0,
  addBear: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}));

// Penggunaan di component
function BearCounter() {
  const bears = useStore((state) => state.bears);
  const addBear = useStore((state) => state.addBear);

  return (
    <button onClick={addBear}>
      Bears: {bears}
    </button>
  );
}
```

## 3. Jotai

Atomic state management, bottom-up approach.

```typescript
import { atom, useAtom } from 'jotai';

// Atoms
const countAtom = atom(0);
const doubleCountAtom = atom((get) => get(countAtom) * 2);

// Component
function Counter() {
  const [count, setCount] = useAtom(countAtom);
  const [doubleCount] = useAtom(doubleCountAtom);

  return (
    <div>
      <p>Count: {count}</p>
      <p>Double: {doubleCount}</p>
      <button onClick={() => setCount(c => c + 1)}>
        Increment
      </button>
    </div>
  );
}
```

## Perbandingan

| Library | Bundle Size | Learning Curve | DevTools |
|---------|-------------|----------------|----------|
| Context | 0kb | Rendah | React DevTools |
| Zustand | ~1kb | Rendah | Ya |
| Jotai | ~2kb | Medium | Ya |
| Redux Toolkit | ~10kb | Tinggi | Excellent |

## Kapan Menggunakan Apa?

- **useState/Context**: State sederhana, sedikit consumer
- **Zustand**: Global state, butuh simplicity
- **Jotai**: State atomic, computed values kompleks
- **Redux**: Enterprise, butuh time-travel debugging

---

*Pilih yang paling sederhana untuk kebutuhan Anda. Jangan over-engineer!*
