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
      label: 'Products (外贸产品库)',
      slugField: 'title',
      path: 'src/content/products/*',
      format: { contentField: 'description' },
      schema: {
        title: fields.slug({ name: { label: 'Product Name (产品名称)' } }),
        sku: fields.text({ label: 'Model / SKU (型号编码)' }),
        category: fields.select({
          label: 'Category (分类)',
          options: [
            { label: 'Precision Valves (精密阀门配件)', value: 'valves' },
            { label: 'Optical Sensors (光电传感器)', value: 'sensors' },
            { label: 'CNC Machined Parts (CNC精加工件)', value: 'cnc-parts' },
            { label: 'Industrial Fasteners (工业紧固件)', value: 'fasteners' },
          ],
          defaultValue: 'valves',
        }),
        summary: fields.text({
          label: 'Short Summary (简短摘要)',
          multiline: true,
        }),
        badge: fields.text({
          label: 'Badge / Tag (如: In Stock, Custom OEM, Best Seller)',
          defaultValue: 'Custom OEM Available',
        }),
        minOrderQty: fields.text({
          label: 'MOQ (最小起订量)',
          defaultValue: '50 PCS',
        }),
        leadTime: fields.text({
          label: 'Lead Time (交期)',
          defaultValue: '7-15 Days',
        }),
        image: fields.image({
          label: 'Primary Image (主图)',
          directory: 'public/images/products',
          publicPath: '/images/products/',
        }),
        specs: fields.array(
          fields.object({
            label: fields.text({ label: 'Specification Name (参数名)' }),
            value: fields.text({ label: 'Value (参数值)' }),
          }),
          {
            label: 'Technical Specifications (技术参数表)',
            itemLabel: props => `${props.fields.label.value}: ${props.fields.value.value}`,
          }
        ),
        features: fields.array(
          fields.text({ label: 'Key Feature (核心优势卖点)' }),
          {
            label: 'Feature Bullets (优势要点)',
            itemLabel: props => props.value,
          }
        ),
        description: fields.markdoc({
          label: 'Product Details & Overview (详细描述富文本)',
        }),
      },
    }),
    posts: collection({
      label: 'Insights & News (行业博客/动态)',
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
          defaultValue: 'Technical Editorial Team',
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
          label: 'Content (正文)',
        }),
      },
    }),
  },
  singletons: {
    settings: singleton({
      label: 'Global Settings (全局配置)',
      path: 'src/content/settings/general',
      schema: {
        companyName: fields.text({
          label: 'Company Name (公司英文全称)',
          defaultValue: 'Apex Precision Engineering Co., Ltd.',
        }),
        slogan: fields.text({
          label: 'Slogan / Tagline (品牌标语)',
          defaultValue: 'ISO 9001 Certified OEM/ODM Precision Manufacturing Partner',
        }),
        contactEmail: fields.text({
          label: 'Inquiry Email (官方询盘邮箱)',
          defaultValue: 'sales@apexprecision.com',
        }),
        whatsapp: fields.text({
          label: 'WhatsApp / Phone (海外即时联系)',
          defaultValue: '+852 9876 5432',
        }),
        address: fields.text({
          label: 'Factory / HQ Address (厂址/总部地址)',
          defaultValue: 'Industrial Zone B, Hong Kong & Greater Bay Area Manufacturing Center',
        }),
      },
    }),
  },
});
