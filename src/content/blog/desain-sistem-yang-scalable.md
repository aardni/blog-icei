---
title: Desain Sistem yang Scalable
date: 2025-03-01
description: Prinsip dan pola arsitektur untuk membangun sistem yang dapat menangani jutaan pengguna dengan performa optimal.
image: https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop
author: Joko Widodo
authorImage: https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=150&h=150&fit=crop&crop=face
authorRole: System Architect
category: Architecture
tags: ["system design", "scalability", "architecture"]
readingTime: 10 min read
---

# Desain Sistem yang Scalable

Membangun sistem untuk 100 user berbeda dengan 1 juta user. Mari pelajari prinsip dan pola yang digunakan perusahaan teknologi besar!

## Scaling Strategies

### Vertical vs Horizontal Scaling

```
Vertical Scaling (Scale Up)
┌─────────────┐     ┌─────────────┐
│   Server    │ →   │   Server    │
│   2 CPU     │     │   16 CPU    │
│   4GB RAM   │     │   64GB RAM  │
└─────────────┘     └─────────────┘

Horizontal Scaling (Scale Out)
┌─────────┐         ┌─────────┐ ┌─────────┐ ┌─────────┐
│ Server  │    →    │ Server  │ │ Server  │ │ Server  │
└─────────┘         └─────────┘ └─────────┘ └─────────┘
                           ↑
                    Load Balancer
```

## Load Balancing

```
                    ┌──────────────┐
     Users ────────→│Load Balancer │
                    └──────┬───────┘
                           │
          ┌────────────────┼────────────────┐
          ↓                ↓                ↓
    ┌──────────┐    ┌──────────┐    ┌──────────┐
    │ Server 1 │    │ Server 2 │    │ Server 3 │
    └──────────┘    └──────────┘    └──────────┘
```

**Algoritma Load Balancing:**
- Round Robin
- Least Connections
- IP Hash
- Weighted Round Robin

## Caching Layers

```
Request Flow:
User → CDN → Load Balancer → App Server → Cache → Database
                                    ↑
                            Cache Hit? Return!
```

### Redis Caching Example

```javascript
import Redis from 'ioredis';
const redis = new Redis();

async function getUser(userId) {
  // Check cache first
  const cached = await redis.get(`user:${userId}`);
  if (cached) {
    return JSON.parse(cached);
  }

  // Cache miss - fetch from DB
  const user = await db.user.findUnique({
    where: { id: userId }
  });

  // Store in cache (TTL: 1 hour)
  await redis.setex(
    `user:${userId}`,
    3600,
    JSON.stringify(user)
  );

  return user;
}
```

## Database Scaling

### Read Replicas

```
           ┌─────────────┐
  Write →  │   Primary   │
           │   Database  │
           └──────┬──────┘
                  │ Replication
       ┌──────────┼──────────┐
       ↓          ↓          ↓
┌──────────┐┌──────────┐┌──────────┐
│ Replica 1││ Replica 2││ Replica 3│
└──────────┘└──────────┘└──────────┘
       ↑          ↑          ↑
              Read Queries
```

### Database Sharding

```
User ID 1-1M     → Shard 1
User ID 1M-2M    → Shard 2
User ID 2M-3M    → Shard 3
```

## Key Metrics

| Metric | Target | Tool |
|--------|--------|------|
| Response Time | < 200ms | APM |
| Uptime | 99.9% | Monitoring |
| Error Rate | < 0.1% | Logging |
| Throughput | Based on SLA | Load Testing |

## Checklist System Design

- [ ] Identify bottlenecks
- [ ] Implement caching strategy
- [ ] Set up monitoring & alerting
- [ ] Plan for failure (graceful degradation)
- [ ] Document architecture decisions

---

*"Premature optimization is the root of all evil, but ignoring scalability is the root of all crashes."*
