---
title: Git Workflow untuk Tim Development
date: 2025-02-10
description: Strategi dan best practices menggunakan Git dalam tim untuk kolaborasi yang efektif dan minim konflik.
author: Faisal Rahman
category: DevOps
tags: ["git", "workflow", "collaboration"]
---

# Git Workflow untuk Tim Development

Git adalah *version control* standar industri. Namun, tanpa workflow yang tepat, kolaborasi bisa menjadi kacau. Mari pelajari strategi yang terbukti efektif!

## Git Flow vs Trunk-Based

### Git Flow
Cocok untuk release terjadwal dengan branch terpisah.

```
main ──────●────────────●────────────●
            \          /              \
develop ─────●────●───●────●────●─────●
              \      /      \        /
feature ───────●────●        ●──────●
```

### Trunk-Based Development
Cocok untuk CI/CD dengan deployment frequent.

```
main ──●──●──●──●──●──●──●──●
       │  │     │     │
       └──┴─────┴─────┴── short-lived branches
```

## Commands yang Wajib Dikuasai

```bash
# Buat branch baru dari main
git checkout -b feature/user-auth main

# Rebase sebelum merge untuk history yang clean
git fetch origin
git rebase origin/main

# Interactive rebase untuk squash commits
git rebase -i HEAD~3

# Stash perubahan sementara
git stash save "WIP: user validation"
git stash pop

# Cherry-pick commit tertentu
git cherry-pick abc123
```

## Commit Message Convention

```
<type>(<scope>): <subject>

<body>

<footer>
```

**Types:**
- `feat`: Fitur baru
- `fix`: Bug fix
- `docs`: Dokumentasi
- `style`: Formatting
- `refactor`: Refactoring
- `test`: Testing
- `chore`: Maintenance

**Contoh:**
```
feat(auth): add JWT refresh token support

- Implement token rotation
- Add refresh endpoint
- Update auth middleware

Closes #123
```

## Code Review Checklist

- [ ] Kode sudah di-test
- [ ] Tidak ada console.log tertinggal
- [ ] Naming jelas dan konsisten
- [ ] Tidak ada hardcoded values
- [ ] Documentation updated

## Tips Menghindari Konflik

1. **Pull sering** - Jangan biarkan branch ketinggalan jauh
2. **Branch kecil** - Fitur dipecah menjadi PR kecil
3. **Komunikasi** - Koordinasi siapa mengerjakan file apa

---

*"Git tidak sulit, yang sulit adalah konsistensi tim dalam mengikuti workflow."*
