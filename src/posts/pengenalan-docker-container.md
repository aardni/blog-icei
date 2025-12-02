---
title: Pengenalan Docker dan Containerization
date: 2025-02-15
description: Memahami konsep containerization dan cara menggunakan Docker untuk development dan deployment aplikasi.
author: Gilang Pratama
category: DevOps
tags: ["docker", "container", "devops"]
---

# Pengenalan Docker dan Containerization

Docker telah mengubah cara kita **develop**, **ship**, dan **run** aplikasi. Dengan container, kita bisa memastikan aplikasi berjalan sama di mana pun!

## Konsep Dasar

```
┌─────────────────────────────────────────┐
│              Container                   │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐   │
│  │   App   │ │   App   │ │   App   │   │
│  │  + Deps │ │  + Deps │ │  + Deps │   │
│  └─────────┘ └─────────┘ └─────────┘   │
├─────────────────────────────────────────┤
│            Docker Engine                 │
├─────────────────────────────────────────┤
│           Host OS (Linux)                │
├─────────────────────────────────────────┤
│            Infrastructure                │
└─────────────────────────────────────────┘
```

## Dockerfile

```dockerfile
# Base image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy source code
COPY . .

# Build application
RUN npm run build

# Expose port
EXPOSE 3000

# Start command
CMD ["node", "dist/server.js"]
```

## Docker Commands

```bash
# Build image
docker build -t my-app:1.0 .

# Run container
docker run -d -p 3000:3000 --name my-app my-app:1.0

# List containers
docker ps -a

# View logs
docker logs -f my-app

# Execute command in container
docker exec -it my-app sh

# Stop and remove
docker stop my-app && docker rm my-app
```

## Docker Compose

```yaml
# docker-compose.yml
version: '3.8'

services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - DATABASE_URL=postgres://db:5432/mydb
    depends_on:
      - db

  db:
    image: postgres:15-alpine
    volumes:
      - postgres_data:/var/lib/postgresql/data
    environment:
      - POSTGRES_PASSWORD=secret

volumes:
  postgres_data:
```

## Best Practices

| Practice | Alasan |
|----------|--------|
| Multi-stage builds | Image lebih kecil |
| .dockerignore | Exclude file tidak perlu |
| Non-root user | Keamanan |
| Layer caching | Build lebih cepat |

> **Tip:** Gunakan `docker scan` untuk memeriksa vulnerability di image Anda!
