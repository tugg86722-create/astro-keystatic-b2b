export interface ResourceEntry {
  key: string;
  name: string;
  url: string;
  domain: string;
  category: 'performance' | 'edge' | 'diagnostics' | 'intelligence';
  /** Localised description. */
  description: string;
}

export const pages = {
  home: {
    meta: {
      title: 'Naif | DTC 电商操盘手 & 全漏斗增长架构师',
      description:
        '用亚秒级速度、Meta 广告落地页 CRO、自动化 Klaviyo 留存和 100% 数据驱动的转化，帮助高客单价 DTC 品牌实现规模化增长。',
    },
    hero: {
      pill: 'DTC 电商操盘手 & 全漏斗增长架构师',
      titleLead: '把高客单价 DTC 品牌做大的关键，是',
      titleHighlight: '亚秒级速度',
      titleTail: '与全漏斗精准度。',
      lead:
        '弥合奢侈品牌叙事、技术型店铺前台性能与 Meta/Google 广告盈利之间的断层。零臃肿插件，零廉价 AI 塑料感，100% 数据驱动的转化。',
      fitPrefix: '我服务的客户：',
      fitBody:
        '月营收 $50k–$2M、客单价通常在 $99 以上、已经在投付费流量，却让流量在页面渲染前就白白流失的 DTC 品牌。',
      fitLink: '看看是不是你 →',
    },
    benchmarks: {
      cwv: '移动端 Core Web Vitals 评分',
      clickLoss: '广告点击到落地页流失率（行业均值 25%+）',
      klaviyo: 'Klaviyo 自动化收入贡献占比',
      ticket: '高客单价转化架构',
    },
    cases: {
      eyebrow: '已上线的 DTC 项目',
      heading: '全漏斗案例研究',
    },
    pillars: {
      eyebrow: '核心增长与架构原则',
      heading: '高客单价 DTC 工程的四大支柱',
      lead: '我消灭广告预算浪费、臃肿的应用栈和转化摩擦，打造既赚钱、又抗得住的 DTC 运营体系。',
      items: [
        {
          title: '高客单价 DTC 店铺前台',
          body: '定制 Shopify OS2.0 与 Jamstack 开发、6 图反塑料感视觉体系，以及专为 $99+ 奢华价位设计的移动端优先购买流程。',
        },
        {
          title: '广告落地页 CRO 与流量防守',
          body: '消除移动端跳出率，打通直达结账流程，收紧 Meta 与 TikTok Ads 上的出站点击泄漏。亚秒级 LCP，确保每一分广告钱都不白花。',
        },
        {
          title: '自动化留存与生命周期（Klaviyo）',
          body: '零打扰的浏览弃购挽回、VIP 召回序列、购买后的客户惊喜体验，稳定贡献 15%+ 的基线自动化收入。',
        },
        {
          title: '履约真实度与拒付防护',
          body: '让线上店铺的承诺和包裹实际履约对齐，提前掐掉 PayPal 与 Stripe 的争议，守住运营健康线。',
        },
      ],
    },
    fitCheck: {
      eyebrow: '匹配度自检',
      headingLead: '说点实话，',
      headingHighlight: '这套打法适合谁',
      lead: '最浪费彼此时间的做法就是硬凑合作。下面是我实际用的筛选标准——不合适的单子，我宁可不做，也不接下来再后悔。',
      goodTitle: '符合这些条件就合适：',
      badTitle: '符合这些条件就不合适：',
      good: [
        '月营收已过 $50k，而且已经在投付费流量',
        '客单价在 $99 以上，结账摩擦肉眼可见',
        '移动端 PageSpeed 常年不及格，却没人负责',
        '装了 Klaviyo，但流程从来没重建过',
        '每周都能找到能拍板改动的决策人',
      ],
      bad: [
        '月营收大致在 $50k 以下',
        '你要求第一个月就保证转化提升',
        '你想让别人替你做决策',
        '做的是单 SKU 一件代发或灰市倒卖',
        '还没有付费流量——先从免费审计开始',
      ],
    },
    diagnostics: {
      eyebrow: '先自己动手跑一遍',
      heading: '给你的店铺做免费体检',
      lead: '这几个工具就是我在付费审计里跑的那套引擎。不用注册、不做推销——用你自己的数据跑一遍，再判断这份活儿值不值得。',
      clickLossTitle: '点击流失审计器',
      clickLossDesc:
        '把 Meta 出站点击和 GA4 落地页浏览对上账。给这个缺口标个价，并告诉你这是渲染流失，还是埋点统计造成的假象。',
      scorecardTitle: '拒付风险评分卡',
      scorecardDesc:
        '8 个问题、1 个风险分，以及每一条红旗对应的具体解法——从履约真实度到争议举证材料。',
      roiTitle: '广告 ROI 与延迟计算器',
      roiDesc:
        '算清移动端加载时间让你在浪费的广告费、丢失的点击和可挽回订单上付出了多少代价——基于 Google 真实用户数据。',
    },
    articles: {
      eyebrow: '文章与白皮书',
      heading: '技术文章与实战案例',
      read: '阅读架构白皮书',
    },
  },

  about: {
    meta: {
      title: '关于 Naif | DTC 电商操盘手 & 全漏斗增长架构师',
      description:
        'DTC 电商操盘手，弥合高客单价店铺架构、亚秒级边缘性能、Meta 广告经济账与 Klaviyo 自动化留存之间的断层。',
    },
    hero: {
      pill: '可承接 DTC 品牌架构、CRO 与增长顾问合作',
      titleLead: '把高客单价 DTC 做大的关键，是',
      titleHighlight: '工程级精度',
      titleTail: '与广告盈利。',
      quote:
        '“我天天泡在跨境电商的一线。既不像纯写代码的人那样完全不懂广告投放，也不像纯买量的人那样完全不懂网站架构——我把这整条链路都串起来：从主题代码、边缘性能，到 Meta 广告经济账和客户留存。”',
      lead:
        '在高客单价（$99+）Shopify OS2.0 与 Jamstack 店铺的一线实战中，我专治那些悄悄漏掉广告钱的暗伤：移动端落地页延迟、没打磨过的结账流程、线上承诺与实际履约的断裂，以及被丢在角落的购买后留存。',
    },
    attributes: {
      locationLabel: '所在地',
      locationValue: '全球远程',
      locationNote: 'UTC+8 / 兼容美国时区',
      focusLabel: '主攻方向',
      focusValue: '高客单价 DTC 与 CRO',
      focusNote: 'Shopify、Meta Ads、Klaviyo',
      metricLabel: '性能指标',
      metricValue: '点击流失率 < 8%',
      metricNote: '移动端 CWV 100/100',
    },
    stack: {
      eyebrow: '技术与运营栈',
      heading: '全漏斗 DTC 技术栈雷达',
      lead: '一套久经实战的组合：企业级店铺架构、性能工程、广告归因与留存自动化。',
      items: [
        {
          title: '店铺前台与速度',
          desc: '用定制 Liquid、Astro Islands 与边缘缓存，干掉客户端运行时的臃肿。',
        },
        {
          title: '流量与 CRO',
          desc: '直达结账漏斗、反塑料感视觉体系，以及高客单价文案框架。',
        },
        {
          title: '归因与数据埋点',
          desc: '对广告点击流失做取证级分析、服务端归因，以及零侵入式埋点。',
        },
        {
          title: '留存与风险防护',
          desc: '自动化客户生命周期流程，以及对客诉争议与拒付的攻防。',
        },
      ],
    },
    pillars: {
      eyebrow: '战略原则',
      heading: '四大战略支柱',
      lead: '每一个客户品牌、每一次店铺重构、每一个增长项目，都按这四条不妥协的标准来工程化交付。',
      items: [
        {
          title: '店铺架构与速度',
          body: 'Shopify OS2.0、Liquid 重构、Astro Jamstack，以及亚秒级核心网页指标。砍掉臃肿的第三方应用和拖慢速度的资源，让移动端访客秒开页面，不再因为加载摩擦跳出。',
          result: '移动端 CWV 100/100 • LCP < 0.8s 兜底承诺',
        },
        {
          title: '转化率优化（CRO）',
          body: '6 图反塑料感视觉体系（首图、开箱、动态垂坠、生活场景、宝石微距、平铺细节）、高客单价文案（Hook-FAB-Ideal），以及专为拿下 $99+ 高价而调的无摩擦结账漏斗。',
          result: '高客单价信任感 • 无摩擦直达结账',
        },
        {
          title: '流量与归因防守',
          body: 'Meta Graph API 对接、点击流失审计、GA4 漏斗取证、零侵入事件埋点。我们审计并合上付费出站点击与真实落地页浏览之间那 15%–30% 的缺口。',
          result: '点击流失率 < 8% • 真实 ROAS 可穿透',
        },
        {
          title: '运营与品牌保护',
          body: 'Klaviyo 生命周期旅程（欢迎、浏览弃购、VIP 购买后），配合实物包裹履约审计。让店铺承诺和包装现实对齐，就能避免拒付和支付通道冻结。',
          result: '自动化流程贡献 15%+ 收入 • 零拒付冻结',
        },
      ],
    },
    flow: {
      eyebrow: '工作流程',
      heading: '全漏斗 DTC 交付流程',
      lead: '一套可预期、有数据支撑的执行框架，专门用来消灭广告浪费、放大品牌收入。',
      items: [
        {
          title: '增长与速度审计',
          body: '深度取证：Meta 出站点击 vs GA4 落地页浏览、移动端 Lighthouse CWV、结账流失点，以及履约承诺是否对齐。',
          timeline: '2–3 天',
        },
        {
          title: 'CRO 与视觉原型',
          body: '在预发环境里落地 6 图反塑料感视觉体系、高客单价 Hook-FAB-Ideal 文案，以及无摩擦直达结账流程。',
          timeline: '5–7 天',
        },
        {
          title: '上线与流量切换',
          body: '零停机主题发布、CDN 边缘加速、Meta Pixel 事件去重，以及广告流量下的实时结账监控。',
          timeline: '1–2 周',
        },
        {
          title: '留存与健康度防守',
          body: '自动化 Klaviyo 生命周期流程、多语言一致性校验、客户开箱审计，以及拒付预防，守住卖家健康度。',
          timeline: '持续监控',
        },
      ],
    },
    cta: {
      badge: '直接战略合作',
      heading: '准备好把你的高客单价 DTC 品牌做赚钱了吗？',
      lead:
        '无论你是广告钱烧在慢吞吞的移动端落地页上、高客单价流量转化不动，还是想要自动化 Klaviyo 留存——我们一起搭一套能赚钱的系统。',
      emailButton: '发邮件给我：contact@naif.is-a.dev',
    },
  },

  services: {
    meta: {
      title: '合作档位与报价 — DTC 架构、CRO 与 Klaviyo 顾问服务 | Naif',
      description:
        'DTC 架构审计、转化冲刺、增长顾问合同与白标代理服务，透明公开的合作区间。范围固定、书面报价，不按小时计费。',
    },
    header: {
      badge: '范围固定 · 书面报价 · 不按小时计费',
      headingLead: '四种',
      headingHighlight: '合作方式',
      lead: '先给你一个参考区间，方便开口之前自己判断合不合适。每一次合作都是书面报价，范围固定、价格固定——要改范围，先经你点头。',
    },
    tiers: [
      {
        name: '架构审计',
        price: '$1,500 – $3,500',
        priceNote: '一次性，范围固定',
        duration: '2–3 天',
        bestFor: '怀疑自己在漏钱，但不知道钱漏在哪儿的品牌。',
        includes: [
          '店铺前台、埋点、留存栈的取证级拆解',
          'Meta 出站点击与 GA4 落地页浏览对账',
          '移动端 CWV 真实数据审计（LCP / INP / CLS，取 p75）',
          'Klaviyo 流程、分层与送达率检查',
          '履约承诺与实际交付之间的差距检查',
          '按收入影响排序的书面报告与整改方案',
        ],
      },
      {
        name: '转化冲刺',
        price: '$5,000 – $12,000',
        priceNote: '一次性，范围固定',
        duration: '4–6 周',
        bestFor: '要的是把改动做上线，而不是拿一份文档的品牌。',
        includes: [
          '架构审计的全部内容，重新跑一遍作为实时基线',
          '在你自己的主题里落地影响最大的 3–5 项改动',
          'Liquid / JS / CSS 由我写好，先发到预发环境',
          '重建广告落地页或直达结账流程',
          '改动前后对比 CVR、单次会话收入与 CWV',
          'Loom 讲解 + 书面交接文档',
        ],
      },
      {
        name: '增长顾问合同',
        price: '$3,000 – $8,000',
        priceNote: '按月计，提前 30 天通知',
        duration: '长期合作，季度路线图',
        bestFor: '每个月都需要一位资深操盘手在圈内的团队。',
        includes: [
          '每月测试路线图，对齐收入而不是对齐感觉',
          '持续的 CRO 与性能维护',
          'Klaviyo 流程扩展与生命周期项目全盘接手',
          '广告落地页与创意方向持续迭代',
          '每周汇报流量、漏斗与留存',
          '直接对接——没有客户经理，没有工单排队',
        ],
      },
      {
        name: '白标合作',
        price: '按代理机构定范围',
        priceNote: '代理费率表',
        duration: '按项目或长期',
        bestFor: '需要资深 CRO 人力的代理公司与内部团队。',
        includes: [
          '审计与交付全部用你的品牌、你的模板呈现',
          '我不直接接触你的客户——客户关系始终在你手里',
          '不扩编也能用上资深的 CRO、性能与 Klaviyo 人力',
          '无利益冲突，配一张简单的月度费率表',
          '用你的客户汇报模板，走你的 SLA',
        ],
      },
    ],
    footnote:
      '以上区间对应月营收 $50k–$2M 品牌的典型范围。最终报价为固定范围、书面确认，在开工前给出。付款方式：固定范围项目付 50% 排期、交付时付清 50%；顾问合同按月预付。',
    process: {
      eyebrow: '合作怎么跑',
      heading: '可预期、数据驱动的流程',
      lead: '每一次合作都是同样这四个阶段——从一次单独审计，到全量顾问合同。',
      items: [
        {
          stage: '阶段 01',
          title: '审计与基线',
          duration: '2–3 天',
          detail:
            '对店铺前台、广告埋点、留存与履约做取证级拆解。在改任何一行代码之前，我们先一起把基线谈定——转化率、单次会话收入、p75 真实 CWV、点击流失率。',
        },
        {
          stage: '阶段 02',
          title: '优先级路线图',
          duration: '第 3–4 天',
          detail:
            '一份按收入影响除以投入成本排序的整改清单，不是 50 页 PPT。你会清楚看到这一轮发什么、什么先押后。',
        },
        {
          stage: '阶段 03',
          title: '实施与流量切换',
          duration: '4–6 周',
          detail:
            '影响最大的改动先写进主题副本或预发环境，对照 CWV 与转化影响过一遍评审，然后零停机上线。',
        },
        {
          stage: '阶段 04',
          title: '留存与健康度防守',
          duration: '长期',
          detail:
            'Klaviyo 生命周期流程、履约真实度审计与多语言一致性检查持续运行，守住 LTV、口碑和支付通道的健康度。',
        },
      ],
    },
    notFit: {
      eyebrow: '在雇我之前',
      headingLead: '什么时候我是',
      headingHighlight: '不合适的那一个',
      lead: '我能做的最贵的事，就是接下一个我根本做不成的活。下面这些情况，我会把你指到别处去——而且第一次通话就直说。',
      items: [
        {
          title: '月营收大致在 $50k 以下',
          detail: '这笔费用会占到毛利的相当比例。一个免费 Shopify 主题加一次聚焦的 CRO 辅导，通常比我的报价更划算。',
        },
        {
          title: '单 SKU 一件代发或灰市倒卖',
          detail: '既没有值得维护的长期客户关系，也没有值得捍卫的品牌溢价。这门生意的账算不过来。',
        },
        {
          title: '想要一份转化提升的承诺',
          detail: '谁跟你承诺首月就提升，说的其实是季节性。我能承诺的是流程、测量和有据可查的基线——不是我控制不了的数字。',
        },
        {
          title: '你需要有人替你做决策',
          detail: '这是顾问 + 实施，不是一个外包部门。我需要你这边有一位能在冲刺周期内拍板改动的决策人。',
        },
      ],
    },
    cta: {
      heading: '从最便宜的真话开始',
      lead:
        '先跑下面的免费诊断，或者把店铺链接发我，我会告诉你哪一档才真的合适——哪怕答案是“暂时哪一档都不合适”。',
    },
  },

  faq: {
    meta: {
      title: '常见问题 — DTC 架构、CRO 与 Klaviyo 顾问服务 | Naif',
      description:
        '关于合作费用、周期、平台覆盖、权限要求、NDA 处理、测量标准，以及这项服务到底适合谁，直接给你答案。',
    },
    header: {
      badgePrefix: '在写信之前 —',
      badgeSuffix: '个直接回答',
      headingLead: '你的问题',
      headingHighlight: '直接答',
      headingTail: '不用等你开口',
      lead:
        '费用、周期、权限、NDA、测量标准，还有同样重要的一点——哪些情况下我会劝你别雇我。你的问题不在这里，直接问，24 小时内给你一个不绕弯的答案。',
    },
    items: [
      {
        q: 'DTC 架构合作到底要花多少钱？',
        a: '三种合作方式，先给你一个参考区间，方便开口之前自己判断合不合适。每种范围都在开工前书面报价——不按小时计费，也没有意外账单。',
        detail: [
          '架构审计 — $1,500–$3,500。2–3 天对你的店铺前台、广告埋点和留存栈做取证级拆解，交付一份按优先级排序的书面报告和按收入权重的整改方案。',
          '转化冲刺 — $5,000–$12,000。4–6 周的实施计划：把影响最大的 3–5 项改动直接写进你的主题，改动前后都有测量。',
          '增长顾问合同 — $3,000–$8,000/月。持续做 CRO、性能与 Klaviyo，配套月度路线图、测试节奏和直接对接。',
        ],
      },
      {
        q: '多久能看到效果？',
        a: '审计 2–3 天出结果，第一批冲刺发现通常在实施的头两周内就上线。但说实话：一套测试跑出可信结论大约需要 90 天——在那之前你读到的只是单个结果，不是整套打法。谁承诺首月就提升，说的其实是季节性，不是工作。',
        detail: [
          '第 1–3 天：审计、基线共识、优先级路线图',
          '第 1–2 周：第一批改动上线',
          '第 3–8 周：测试循环、数据复盘、持续叠加的收入影响',
        ],
      },
      {
        q: '你做哪些平台？',
        a: 'Shopify 是我的主场——OS 2.0 和 Shopify Plus、Liquid、Shopify Functions、自定义区块、值得时才用的 headless Hydrogen/Oxygen，以及 Jamstack（Astro）店铺。我也接 WooCommerce 和 BigCommerce 迁移到 Shopify Plus 的活。',
        detail: [
          '店铺前台：Shopify OS 2.0、Shopify Plus、Hydrogen、Astro/Jamstack',
          '数据与埋点：GA4、Meta Graph API、Conversions API、GTM、Shopify Web Pixels',
          '留存：Klaviyo 流程、SMS、会员与订阅打通',
        ],
      },
      {
        q: '能和我们处在其他时区的团队一起干吗？',
        a: '可以。我在 UTC+8，能覆盖美东晚间、欧洲上午和亚太的工作时段。冲刺节点和线上故障都不认时区，所以我把异步留痕做扎实——Loom 讲解、书面记录、一块共享看板——不依赖我们俩同时醒着。',
        detail: [],
      },
      {
        q: '开始合作需要你给我什么权限？',
        a: '开始阶段只读权限就够：你的 GA4 媒体属性、Meta Ads Manager 账号，以及 Shopify 协作者权限。我不需要、也不会要你的 Meta 密码或第一天就给全部管理员权限。最好能给我预发环境或一份主题副本，这样我干活的时候线上店铺照常出单。',
        detail: [
          'GA4 媒体属性（查看者）',
          'Meta Ads Manager（广告主只读权限）',
          'Shopify 协作者权限，或一份主题副本分支',
          '留存工作所需的 Klaviyo 账号只读权限',
        ],
      },
      {
        q: '能签 NDA 吗？',
        a: '随时可以，而且这是默认做法。我接的大部分合作都在 NDA 下，因为内容涉及商业敏感信息。我发布的案例会做匿名处理，但真实数字照留——你的数据、你的指标、你的品牌，全部摘掉。',
        detail: [],
      },
      {
        q: '你怎么证明一个改动真的有效？',
        a: '第一个改动上线前，我们先把基线谈定，然后持续对照转化率、单次会话收入、p75 真实 CWV（LCP、INP、CLS）、点击到落地页流失率、拒付率。测试输了就回滚。不搞面子工程，不拿状态好那天的截图交差。',
        detail: [],
      },
      {
        q: '你能保证转化率提升吗？',
        a: '不能，而且谁保证你就该警惕谁。我能保证的是流程：有据可查的基线、优先级路线图、改动直接写进你的主题，以及每个假设都能被测量证实或证伪。提升是结果，不是合同条款。',
        detail: [],
      },
      {
        q: '你只做策略，还是真的动手做？',
        a: '我动手实现。交给内部团队执行的策略通常死在待办列表里，尤其当修复内容是一个 Liquid 循环、一个 Meta 事件或者一条 Klaviyo 流程的时候。我写好代码，发到预发主题，再交一份 Loom 讲解和书面记录，之后你的团队就自己接手了。',
        detail: [],
      },
      {
        q: '我们已经有合作的 Shopify 代理公司了，你还能帮上忙吗？',
        a: '能，而且这条路很成熟。我以白标方式服务那些需要资深 CRO 与性能人力、但不想扩编的代理公司——客户关系留在你的团队手里，审计和实施由我来做，所有交付物都署你的品牌。这也是我不建销售团队也能保持稳定项目流的原因。',
        detail: [],
      },
      {
        q: '我们店还很小，这笔投入值得吗？',
        a: '说实话，很多时候不值得。月营收低于大约 $50,000，这笔费用会占到毛利的可观比例，而更便宜的解法通常是一个搭得不错的免费 Shopify 主题加一次聚焦的 CRO 辅导。第一次通话我就告诉你这话，而不是卖你一个你自己都说服不了自己的顾问合同。',
        detail: [],
      },
      {
        q: '我们还没有投放流量，你能帮上吗？',
        a: '店铺前台、速度和 CRO——完全能。广告花费效率和点击流失找回——暂时不行，因为还没有点击数据可以对账。先从审计开始，把站点做快、做具备转化能力，等有预算了再回来处理付费流量。',
        detail: [],
      },
      {
        q: '合作结束之后会怎样？',
        a: '所有东西都归你：代码、Liquid、Klaviyo 流程、GA4 事件、文档和测量设置。顾问合同是方便，不是绑定。如果这活儿没跑出收益，退出不该是最难的那一步。',
        detail: [],
      },
    ] as { q: string; a: string; detail: string[] }[],
    cta: {
      heading: '你的问题不在这页上',
      lead: '那通常说明这才是有意思的问题。带上你的店铺链接发给我，我会用具体的答案回复你，而不是一份宣传册。',
    },
  },

  contact: {
    meta: {
      title: '与 Naif 合作 | DTC 架构与增长顾问 | Naif',
      description:
        '就高客单价 DTC 的 Shopify/Jamstack 店铺架构、Meta 广告落地页 CRO、Klaviyo 留存体系与增长顾问服务联系 Naif。',
    },
    eyebrow: 'DTC 增长合作与顾问合同',
    heading: '与我合作 / DTC 架构与顾问服务',
    lead:
      '我与高客单价 DTC 品牌、奢侈品电商创始人和正在放量的跨境操盘手合作，打造高转化店铺、堵住广告漏损，守住卖家健康度。',
    channelsHeading: '直接联系方式',
    emailLabel: '工作邮箱：',
    githubLabel: 'GitHub 主页：',
    availabilityLabel: '可合作时间与时区：',
    availability:
      '目前可承接 DTC 架构审计、转化冲刺与增长顾问合同，能与美国、欧洲、亚太的品牌团队灵活对齐时间。',
    offeringsHeading: '核心合作内容',
    offerings: [
      {
        title: '高客单价店铺架构',
        body: '定制 Shopify OS2.0 与 Jamstack 开发，配套 6 图反塑料感视觉体系。',
      },
      {
        title: 'Meta/Google 广告落地页 CRO',
        body: '把移动端点击到落地页的流失率从 25%+ 压到 < 8%。',
      },
      {
        title: 'Klaviyo 生命周期留存',
        body: '高转化的欢迎流程、浏览弃购挽回与 VIP 留存。',
      },
      {
        title: '履约真实度与拒付防护',
        body: '让线上承诺与实物包裹交付对齐，提前掐掉 PayPal 与 Stripe 的争议。',
      },
    ],
  },

  rfq: {
    badge: 'DTC 架构与增长咨询',
    heading: '发起 DTC 架构审计或顾问合作',
    lead:
      '无论你需要高客单价 Shopify 重构、Meta 广告落地页提速，还是自动化 Klaviyo 留存流程，都可以从下面找我。24 小时内直接回复。',
    nameLabel: '你的称呼 *',
    companyLabel: '品牌 / 店铺链接 / 公司 *',
    emailLabel: '工作邮箱地址 *',
    contactLabel: 'Telegram / WhatsApp / 电话',
    scopeLabel: '合作类型 / 范围',
    budgetLabel: '期望周期与月度预算',
    messageLabel: '店铺链接、当前月度 GMV 与关键瓶颈 *',
    namePlaceholder: '例如：Alex Morgan',
    companyPlaceholder: '例如：Amesha Energy / brand.com',
    emailPlaceholder: 'alex@brand.com',
    contactPlaceholder: '@用户名 或电话',
    scopePlaceholder: '例如：高客单价 Shopify 店铺 / Meta 广告落地页 CRO / Klaviyo 流程',
    budgetPlaceholder: '例如：尽快启动 / $3k-$10k 冲刺或顾问合同',
    messagePlaceholder:
      '简单说说你的品牌、当前月度 GMV、投放平台，以及最主要的转化或留存瓶颈……',
    confidentiality: '严格的知识产权与 NDA 保密保护',
    submitting: '正在连接边缘网关……',
    success:
      '<strong>已收到你的需求！</strong>谢谢，{name}。你的项目需求已经记录，我会过一遍并在 24 小时内通过邮件（{email}）回复。',
    failure:
      '<strong>提交失败：</strong>{error}。你也可以直接发邮件到 <a href="mailto:dewellsmell@gmail.com" class="underline text-white">dewellsmell@gmail.com</a>。',
  },

  products: {
    meta: {
      title: '生产环境 DTC 案例与增长系统 | Naif',
      description:
        '查看 Naif 的生产环境 DTC 案例：高客单价店铺架构、Meta 广告点击流失治理，以及自动化 Klaviyo 留存引擎。',
    },
    eyebrow: 'DTC 系统与增长作品集',
    heading: '生产环境 DTC 案例与漏斗架构',
    lead:
      '挑选出来的生产环境架构、CRO 案例与留存基础设施方案。每个项目都展示真实世界的转化提升、广告流量防守，以及能量化的业务结果。',
    allSystems: '全部系统',
  },

  productDetail: {
    stackLabel: '核心技术栈：',
    benchmarkLabel: '性能基准：',
    targetLabel: '部署目标：',
    targetValue: 'Shopify & Edge CDN',
    highlightsHeading: '核心创新与增长能力',
    inquire: '咨询同类架构',
    back: '← 返回全部项目',
    specsHeading: '系统架构与技术参数',
    walkthroughHeading: '案例拆解与工程影响',
    footerNote: 'DTC 增长架构 • 开放品牌审计与顾问合作',
  },

  postDetail: {
    badge: '架构白皮书',
    crumb: '技术文章',
    authorRole: '全栈软件工程师 & Serverless 架构师',
    authorBio: '专做亚 100ms 的 Jamstack 平台、零 JS 的 Islands 架构，以及 Cloudflare Edge 上的云成本优化。',
    workWithMe: '与我合作 →',
    metaTitleSuffix: '技术文章 | Naif',
    metaFallback: 'Naif 带你深入拆解现代 Web 架构与系统工程。',
  },

  resources: {
    meta: {
      title: '精选 DTC 工程与全球贸易资源 | Naif',
      description:
        '精心挑选的 24 个权威开发者工具、边缘 Serverless 基础设施、网络诊断套件与全球贸易情报平台目录。',
    },
    badge: '已验证的技术工具箱 • 24 个精选工具',
    headingLead: '权威的工程与',
    headingHighlight: '情报工具',
    lead:
      '一份我每天都在用的生产级工具精选：从亚秒级核心网页指标诊断套件，到全球贸易提单记录和 Anycast 边缘云平台。',
    allResources: '全部资源',
    categories: {
      performance: '网页性能与审计',
      edge: '边缘云与 Serverless',
      diagnostics: '邮件与网络诊断',
      intelligence: '全球贸易与情报',
    },
    launch: '打开',
    openInNewTab: '打开 {name}',
    diagnosticCta: {
      heading: '想用这些工具做一次专家级审计？',
      body: '跑一遍审计不难。把数据变成一份零停机的工程路线图不容易——这需要横跨性能、邮件信誉与云基础设施的系统性思考。',
      button: '预约架构评审',
    },
    entries: [
      {
        key: 'psi',
        name: 'Google PageSpeed Insights',
        url: 'https://pagespeed.web.dev/',
        domain: 'pagespeed.web.dev',
        category: 'performance',
        description:
          '移动端与桌面端核心网页指标（LCP、INP、CLS）的行业权威标准，数据取自真实的 Chrome 用户体验报告现场数据。',
      },
      {
        key: 'wpt',
        name: 'WebPageTest',
        url: 'https://www.webpagetest.org/',
        domain: 'webpagetest.org',
        category: 'performance',
        description:
          '支持多节点深度性能剖析：连接限速、CPU 降速模拟、视频逐帧图，以及视觉对比。',
      },
      {
        key: 'urlscan',
        name: 'URLScan.io',
        url: 'https://urlscan.io/',
        domain: 'urlscan.io',
        category: 'performance',
        description:
          '沙箱化的浏览器扫描器，分析并录制全部 HTTP 请求、第三方追踪脚本、安全响应头与 DOM 变更。',
      },
      {
        key: 'gtmetrix',
        name: 'GTmetrix',
        url: 'https://gtmetrix.com/',
        domain: 'gtmetrix.com',
        category: 'performance',
        description:
          '合成式网站测速套件，提供瀑布图拆解、页面生成时间线与可执行的优化建议。',
      },
      {
        key: 'yellowlab',
        name: 'Yellow Lab Tools',
        url: 'https://yellowlab.tools/',
        domain: 'yellowlab.tools',
        category: 'performance',
        description:
          '前端代码质量审计器，可检出过深的 DOM 树、复杂的 CSS 选择器、不良 JavaScript 写法，以及网页字体渲染瓶颈。',
      },
      {
        key: 'speedvitals',
        name: 'SpeedVitals Global TTFB Test',
        url: 'https://speedvitals.com/ttfb-test',
        domain: 'speedvitals.com',
        category: 'performance',
        description:
          '在 35+ 个全球边缘节点并发测量首字节时间（TTFB），用于评估 CDN 缓存效率与源站延迟。',
      },
      {
        key: 'cfworkers',
        name: 'Cloudflare Workers & Pages',
        url: 'https://workers.cloudflare.com/',
        domain: 'workers.cloudflare.com',
        category: 'edge',
        description:
          '部署在 300+ 个 Anycast 城市的 Serverless 执行环境，运行轻量 JavaScript/Wasm，容器零冷启动。',
      },
      {
        key: 'astro',
        name: 'Astro Web Framework',
        url: 'https://astro.build/',
        domain: 'astro.build',
        category: 'edge',
        description:
          '为内容驱动型站点打造的现代 Web 框架，Islands 架构的先行者——只发纯 HTML，按需选择性水合。',
      },
      {
        key: 'resend',
        name: 'Resend',
        url: 'https://resend.com/',
        domain: 'resend.com',
        category: 'edge',
        description:
          '开发者优先的事务邮件 API，配 React Email 模板、极快的 REST 端点和扎实的收件箱送达率。',
      },
      {
        key: 'upstash',
        name: 'Upstash',
        url: 'https://upstash.com/',
        domain: 'upstash.com',
        category: 'edge',
        description:
          '边缘原生数据基础设施，提供 Serverless Redis、消息队列（QStash）与 Kafka，并为边缘 Worker 提供无状态 HTTP/REST API。',
      },
      {
        key: 'turso',
        name: 'Turso (libSQL)',
        url: 'https://turso.tech/',
        domain: 'turso.tech',
        category: 'edge',
        description:
          '由 libSQL 驱动的分布式数据库，把 SQLite 数据全球复制到靠近边缘用户的位置，本地读查询亚毫秒级返回。',
      },
      {
        key: 'keystatic',
        name: 'Keystatic',
        url: 'https://keystatic.com/',
        domain: 'keystatic.com',
        category: 'edge',
        description:
          '基于 Git 的 headless CMS，把结构化的 JSON、YAML 与 Markdoc 文件直接写进你的 GitHub 仓库。',
      },
      {
        key: 'mailtester',
        name: 'Mail-Tester',
        url: 'https://www.mail-tester.com/',
        domain: 'mail-tester.com',
        category: 'diagnostics',
        description:
          '检查 SPF 记录、DKIM 签名、DMARC 对齐与 SpamAssassin 规则，评估外发邮件的送达率。',
      },
      {
        key: 'mxtoolbox',
        name: 'MxToolbox',
        url: 'https://mxtoolbox.com/',
        domain: 'mxtoolbox.com',
        category: 'diagnostics',
        description:
          '综合网络诊断平台：MX 记录查询、DNS 传播、SMTP 握手测试，以及 100+ 个全球邮件黑名单。',
      },
      {
        key: 'ssllabs',
        name: 'Qualys SSL Labs',
        url: 'https://www.ssllabs.com/ssltest/',
        domain: 'ssllabs.com',
        category: 'diagnostics',
        description:
          '深度分析任意公开 SSL/TLS 服务器，给出证书链、加密套件强度、前向保密性与漏洞暴露度的评级。',
      },
      {
        key: 'securityheaders',
        name: 'SecurityHeaders.com',
        url: 'https://securityheaders.com/',
        domain: 'securityheaders.com',
        category: 'diagnostics',
        description:
          '即时审计 HTTP 安全响应头，包括 CSP、HSTS、Permissions-Policy 与 Referrer-Policy。',
      },
      {
        key: 'dnsviz',
        name: 'DNSViz',
        url: 'https://dnsviz.net/',
        domain: 'dnsviz.net',
        category: 'diagnostics',
        description:
          '交互式可视化工具，分析 DNS 与 DNSSEC 链健康度、加密委派与权威服务器状态。',
      },
      {
        key: 'bgpview',
        name: 'BGPView',
        url: 'https://bgpview.io/',
        domain: 'bgpview.io',
        category: 'diagnostics',
        description:
          '实时 BGP 路由查看器，揭示 ASN 归属、前缀广播、Anycast 对等互联与国际互联网交换。',
      },
      {
        key: 'importyeti',
        name: 'ImportYeti',
        url: 'https://www.importyeti.com/',
        domain: 'importyeti.com',
        category: 'intelligence',
        description:
          '数百万条美国海关海运记录的可检索数据库，用来找出真实工厂供应商、OEM 合作伙伴与竞争对手的物流路线。',
      },
      {
        key: 'metalib',
        name: 'Meta Ad Library',
        url: 'https://www.facebook.com/ads/library/',
        domain: 'facebook.com/ads/library',
        category: 'intelligence',
        description:
          '收录 Facebook、Instagram、Messenger 与 Audience Network 上所有商业广告素材的可检索档案库。',
      },
      {
        key: 'adstransparency',
        name: 'Google Ads Transparency Center',
        url: 'https://adstransparency.google.com/',
        domain: 'adstransparency.google.com',
        category: 'intelligence',
        description:
          '官方广告主透明度资料库，覆盖 Google 全球网络的搜索、YouTube 与展示广告系列。',
      },
      {
        key: 'wipo',
        name: 'WIPO Global Brand Database',
        url: 'https://branddb.wipo.int/',
        domain: 'branddb.wipo.int',
        category: 'intelligence',
        description:
          '全球商标检索门户，覆盖马德里体系的国际注册与各地区国家知识产权局数据。',
      },
      {
        key: 'builtwith',
        name: 'BuiltWith',
        url: 'https://builtwith.com/',
        domain: 'builtwith.com',
        category: 'intelligence',
        description:
          'Web 技术探针，揭示任意目标域名背后使用的 CMS、CDN、追踪代码、支付网关与广告像素。',
      },
      {
        key: 'similarweb',
        name: 'Similarweb',
        url: 'https://www.similarweb.com/',
        domain: 'similarweb.com',
        category: 'intelligence',
        description:
          '数字市场情报平台，提供流量基准、引流来源、受众地域分布与搜索意图拆解。',
      },
    ] as ResourceEntry[],
  },
} as const;

export type PageStrings = typeof pages;
