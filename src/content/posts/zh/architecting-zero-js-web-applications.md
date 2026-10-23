---
title: 如何架构零 JS 的 Web 应用，把核心网页指标做到 100/100
publishedDate: 2026-10-20
author: Naif
summary: 深入拆解 Islands 架构、选择性水合，以及为什么少发 JavaScript 才是现代高转化 Web 应用最彻底的优化。
coverImage: https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80
---

## 为什么单页应用（SPA）扛不住现代性能要求

过去十年，Web 工程长期重度依赖客户端 JavaScript 框架。它们带来了极好的开发体验，但也引入了沉重的水合税、臃肿的包体积，以及糟糕的首字节时间（TTFB）。

### Islands 架构范式
Astro 开创了现代 **Islands 架构**：
1. 默认情况下，页面在构建期被预渲染成 100% 纯净的语义化 HTML 和 CSS。
2. JavaScript 被从构建产物中彻底剥离。
3. 只有特定的动态组件（例如交互式筛选栏、搜索自动补全、联系表单）才用 `client:idle` 或 `client:visible` 声明。

### 可衡量的结果
- **包体积缩小 90%**：首屏 HTML 载荷从 480KB 降到 24KB。
- **零水合延迟**：主线程 CPU 空闲时间提升 300ms+，在真实 4G 移动设备上把交互到下次绘制（INP）压在 30ms 以内。
