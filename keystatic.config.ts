import { config, fields, collection, singleton } from '@keystatic/core';

export default config({
  storage:
    process.env.NODE_ENV === 'production' && process.env.KEYSTATIC_GITHUB_REPO
      ? {
          kind: 'github',
          repo: process.env.KEYSTATIC_GITHUB_REPO as `${string}/${string}`,
        }
      : {
          kind: 'local',
        },
  collections: {
    products: collection({
      label: 'Projects & Case Studies (项目与工程案例)',
      slugField: 'title',
      path: 'src/content/products/*',
      format: { contentField: 'description' },
      schema: {
        title: fields.slug({ name: { label: 'Project Name (项目名称)' } }),
        sku: fields.text({ label: 'Version / Codename (版本或代号)' }),
        category: fields.select({
          label: 'Domain Category (技术领域)',
          options: [
            { label: 'Web Systems & Full-Stack (全栈Web架构)', value: 'web-systems' },
            { label: 'Cloud & Edge Infrastructure (云原生与边缘服务)', value: 'cloud-infra' },
            { label: 'Developer Tools & Automation (工程工具与自动化)', value: 'dev-tools' },
            { label: 'Distributed Systems & Data (分布式与数据管道)', value: 'data-systems' },
          ],
          defaultValue: 'web-systems',
        }),
        summary: fields.text({
          label: 'Elevator Pitch / Summary (项目核心亮点)',
          multiline: true,
        }),
        badge: fields.text({
          label: 'Status Tag (如: Open Source, Enterprise Client, Production Live)',
          defaultValue: 'Production Live',
        }),
        minOrderQty: fields.text({
          label: 'Primary Stack (核心技术栈)',
          defaultValue: 'Astro, TypeScript, Edge',
        }),
        leadTime: fields.text({
          label: 'Performance Benchmark (性能基准指标)',
          defaultValue: 'LCP < 0.8s | 100 CWV',
        }),
        image: fields.image({
          label: 'Project Hero Preview Image (项目主图)',
          directory: 'public/images/products',
          publicPath: '/images/products/',
        }),
        specs: fields.array(
          fields.object({
            label: fields.text({ label: 'Metric / Spec (技术参数/架构特性)' }),
            value: fields.text({ label: 'Value (参数详情)' }),
          }),
          {
            label: 'Architecture Specs Matrix (技术规格参数表)',
            itemLabel: props => `${props.fields.label.value}: ${props.fields.value.value}`,
          }
        ),
        features: fields.array(
          fields.text({ label: 'Key Capability (核心技术壁垒与设计亮点)' }),
          {
            label: 'Feature Bullets (要点清单)',
            itemLabel: props => props.value,
          }
        ),
        description: fields.markdoc({
          label: 'Detailed Case Study (技术方案与业务成效复盘)',
        }),
      },
    }),
    posts: collection({
      label: 'Engineering Articles (技术思考与工程白皮书)',
      slugField: 'title',
      path: 'src/content/posts/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Article Title (文章标题)' } }),
        publishedDate: fields.date({
          label: 'Published Date (发布日期)',
          defaultValue: { kind: 'today' },
        }),
        author: fields.text({
          label: 'Author (作者)',
          defaultValue: 'Naif',
        }),
        summary: fields.text({
          label: 'Summary (摘要)',
          multiline: true,
        }),
        coverImage: fields.image({
          label: 'Cover Image (封面图)',
          directory: 'public/images/posts',
          publicPath: '/images/posts/',
        }),
        content: fields.markdoc({
          label: 'Content (正文 Markdown)',
        }),
      },
    }),
  },
  singletons: {
    settings: singleton({
      label: 'Developer Profile (开发者个人档案)',
      path: 'src/content/settings/general',
      schema: {
        companyName: fields.text({
          label: 'Name / Title (个人名称与定位)',
          defaultValue: 'Naif | Full-Stack Software Engineer & Edge Architect',
        }),
        slogan: fields.text({
          label: 'Headline Tagline (主打技术格言)',
          defaultValue: 'Building resilient, sub-100ms serverless applications and distributed web systems.',
        }),
        contactEmail: fields.text({
          label: 'Work Email (业务咨询邮箱)',
          defaultValue: 'dewellsmell@gmail.com',
        }),
        whatsapp: fields.text({
          label: 'GitHub / Telegram (社交联系)',
          defaultValue: 'https://github.com/tugg86722-create',
        }),
        address: fields.text({
          label: 'Base Location (常驻地与协作时区)',
          defaultValue: 'Remote Worldwide (UTC+8 / US Friendly)',
        }),
      },
    }),
  },
});
