export const tools = {
  roi: {
    meta: {
      title: '网页性能与广告 ROI 浪费计算器 | Naif | DTC 架构师',
      description:
        '算清每月有多少广告预算被移动端加载延迟吃掉。基于 Google 与 Cloudflare 核心网页指标研究的交互式 ROI 泄漏计算器。',
    },
    badge: 'Google & Cloudflare 延迟影响关联引擎',
    headingLead: '网页性能与',
    headingHighlight: '广告 ROI 浪费',
    headingTail: '计算器',
    lead:
      '移动端加载慢不只是惹恼访客——它是在烧付费营销的钱。测一测延迟如何抬高跳出率、在首屏绘制前丢掉付费点击，再算清楚升级到亚 1.0s Jamstack 架构能立刻拿到多少真金白银。',
    switcher: {
      clickLoss: '点击流失审计器',
      scorecard: '拒付风险评分卡',
      roi: '广告 ROI 与延迟计算器',
      clickLossDesc: '把 Meta 出站点击与 GA4 落地页浏览对账，给缺口标个价。',
      scorecardDesc: '8 个问题，1 个卖家健康度评分，以及每条红旗的修法。',
      roiDesc: '算清移动端加载时间在浪费的广告费和流失的订单上花了多少。',
    },
    inputsHeading: '投放与延迟参数',
    reset: '重置默认值',
    fields: {
      spend: '月度付费广告预算（$）',
      cpc: '平均 CPC（$ USD）',
      loadTime: '当前移动端加载时间（秒）',
      cvr: '当前移动端转化率（%）',
    },
    scale: {
      spend: ['$500', '$50,000', '$100,000+'],
      cpc: ['$0.20', '$5.00', '$15.00'],
      loadTime: ['0.8s（Jamstack）', '3.0s', '7.0s（严重）'],
      cvr: ['0.2%', '2.5%', '6.0%'],
    },
    groundTruth: {
      title: '真实基准数据模型',
      body: '依据 Google Research 与 SOASTA 的移动端遥测数据：53% 的移动端访问在页面加载超过 3 秒时被放弃；每多延迟 1 秒，转化率最多下降 4.42%。',
    },
    results: {
      wastedTitle: '每月被浪费的广告预算',
      wastedDesc: '在 4G 移动设备上，页面还没渲染出来就跳走所损失的估算资金。',
      wastedAnnualLabel: '年化损失：',
      bouncedTitle: '每月被放弃的点击',
      bouncedDesc: '在 {total} 次付费访问中，因移动端渲染卡顿而跳走的部分。',
      penaltyLabel: '移动端跳出惩罚：',
      recoveredTitle: '可挽回的转化',
      recoveredDesc: '换成亚 1.0s Jamstack 边缘交付后，预计多拿到的增量客户。',
      recoveredAnnualLabel: '预计年订单量：',
      valueTitle: '预计年度 ROI 增量',
      valueDesc: '留存流量 + 亚秒级转化率倍增带来的价值合计。',
      paybackLabel: '架构回本周期：',
      paybackValue: '< 30 天',
      pills: {
        optimal: '边缘速度最优',
        moderate: '存在中等摩擦',
        severe: '严重流失',
        critical: '预算严重浪费',
      },
      latencyLabels: {
        high: '高延迟 / 存在瓶颈',
        moderate: '速度中等',
      },
    },
    benchmark: {
      heading: '延迟与转化的差值',
      indexLabel: 'Google SOASTA 指数',
      currentLabel: '当前基础设施延迟：',
      targetLabel: 'Naif 的 Jamstack 边缘架构：',
      currentNote: '高额水合开销、阻塞式 JS 包、数据库往返查询。',
      targetNote: '300+ 边缘节点上的预渲染 HTML，即时首屏绘制，0ms 冷启动。',
    },
    roadmap: {
      heading: '架构整改路线图',
      items: [
        {
          title: '1. 消除边缘 TTFB',
          body: '用 Cloudflare Workers 预渲染的边缘 HTML 取代源站服务器上的数据库解析，把全球 TTFB 压到 60ms 以内。',
        },
        {
          title: '2. 剥离零 JS 水合',
          body: '把沉重的 SPA 或 WooCommerce/Shopify 主题脚本迁移到 Astro Islands，消除 90%+ 的客户端主线程卡顿。',
        },
        {
          title: '3. 图片自动转码',
          body: '通过 Cloudflare Images 直接按物理屏幕 DPR 交付自适应 AVIF/WebP 资源，零布局偏移（CLS = 0）。',
        },
        {
          title: '4. Serverless RFQ 与结账',
          body: '用云队列（Cloudflare Queues/KV）异步路由表单线索与下单请求，响应时间保证在 100ms 以内。',
        },
      ],
    },
    cta: {
      heading: '别再烧付费广告预算了',
      body: '为你的店铺或应用申请一份完整的延迟拆解与迁移方案。',
    },
  },

  clickLoss: {
    meta: {
      title: '点击流失审计器 — 对账 Meta 出站点击与 GA4 落地页浏览 | Naif',
      description:
        '免费工具：把 Meta Ads 出站点击与 GA4 落地页浏览对账，测出真实点击流失、浪费的广告费和可挽回的收入。告诉你漏损到底出在渲染还是归因。',
    },
    badge: 'Meta Graph API × GA4 对账引擎',
    heading: '点击流失审计器',
    reset: '重置默认值',
    lead:
      '你的广告平台说你买了 40,000 次点击。你的分析工具说只来了 31,000 个人。这 9,000 的缺口，是你早就付过钱、却根本没机会卖给他们造成的损失——而大多数品牌把这笔账算在素材疲劳头上。这个工具会测出真实流失、给它标价，并告诉你这是渲染问题还是统计口径造成的假象。',
    inputsHeading: '对账参数',
    fields: {
      outbound: 'Meta 每月出站点击',
      lpv: 'GA4 每月落地页浏览',
      cpc: '平均每次点击成本（$）',
      loadTime: '落地页移动端加载时间（秒）',
      cvr: '落地页转化率（%）',
      aov: '客单价（$）',
    },
    hints: {
      outbound: 'Meta Ads Manager → Ads Manager → Columns → Outbound clicks（全部广告系列，近 30 天）。',
      lpv: 'GA4 → Reports → Acquisition → Traffic acquisition → Session source/medium = Meta → Landing page + session starts。',
      loadTime: '用 PageSpeed Insights（移动端、限速）或 CrUX 真实用户数据，检查广告指向的那个 URL。',
    },
    scale: {
      outbound: ['1K', '500K'],
      lpv: ['500', '500K'],
      cpc: ['$0.10', '$5', '$15'],
      loadTime: ['0.8s', '3.0s', '8.0s+'],
      cvr: ['0.1%', '2.5%', '10%'],
      aov: ['$20', '$120', '$800'],
    },
    results: {
      lossTitle: '真实点击流失率',
      lossDesc: '{total} 次付费点击中，从未产生一次落地页浏览的比例。',
      benchmarkLabel: '行业基准：',
      benchmarkValue: '典型值 25%+',
      wastedTitle: '每月浪费的广告费',
      wastedDesc: '为 {clicks} 次从未渲染出页面的点击付出的成本。',
      wastedAnnualLabel: '年化：',
      ordersTitle: '每月可挽回订单',
      ordersDesc: '如果把缺口收敛到 8% 以内的目标水平，能拿回多少订单量。',
      ordersAnnualLabel: '年订单量：',
      revenueTitle: '每月可挽回收入',
      revenueDesc: '同样的媒体预算能跑出的收入，减去同一笔花费。',
      revenueAnnualLabel: '年化增量：',
      pills: {
        critical: '严重漏损',
        elevated: '流失偏高',
        guarded: '基本可控',
        healthy: '健康',
      },
    },
    diagnosis: {
      heading: '根因诊断',
      types: {
        rendering: '渲染流失',
        attribution: '统计口径问题',
        mixed: '两种原因都有',
        guarded: '基本可控',
        healthy: '健康通道',
      },
      summaries: {
        rendering:
          '你的落地页慢到真实访客在页面渲染出来之前就走了。这是实打实丢掉的需求，不是报表上的小毛病。',
        attribution:
          '你的页面加载很快，所以缺口不是跳出问题。最可能是埋点与归因失效——你在为 GA4 从未记录的点击付费，这也意味着你的 ROAS 是错的。',
        mixed:
          '两个因素都在起作用：一部分访客确实在中等等待的加载时长下跳走了，另一部分缺口是统计漂移。按这个顺序修。',
        guarded:
          '你的点击流失率已经接近 8% 以内的目标线。剩下的残余缺口值得每个季度查一次，而不是紧急救火——把对账口径收紧，然后往下走。',
        healthy:
          '你的付费流量既落地了也被记录下来了。到了这个水平，剩下的增长空间在转化率和客单价，而不在流量对账。',
      },
      causes: {
        rendering: [
          {
            title: '1. 预加载 LCP 首图，剥离阻塞渲染的营销标签脚本',
            body: '把非必要像素放到 requestIdleCallback 之后加载，让首次绘制不必等第三方 JS。',
          },
          {
            title: '2. 砍掉臃肿应用，解放主线程',
            body: '你每加一个应用，它就会在每个模板里加载脚本。审计 Total Blocking Time，把最拖后腿的移除或延后。',
          },
          {
            title: '3. 按匹配的 DPR 交付 AVIF/WebP，把 CLS 压到零',
            body: '广告点击后的布局偏移，是移动端应用内浏览器白屏跳出的头号原因。',
          },
        ],
        attribution: [
          {
            title: '1. 在 iOS 14.5+ / Consent Mode v2 下重新对齐 Meta 信号',
            body: '你的 CAPI 服务端事件和客户端事件必须按 event_id 去重，否则 GA4 会少算 Meta 算进去了的付费会话。',
          },
          {
            title: '2. 排查重定向链与跨域测量丢失',
            body: '广告经由短链或国家选择器跳转，会打断会话归因——点击落地了，GA4 从头到尾没看见。',
          },
          {
            title: '3. 过滤掉内部流量、同意拒绝与 ITP 影响',
            body: 'Safari 和应用内浏览器会剥离第三方 Cookie，真实受众也可能看起来像测量缺口。',
          },
          {
            title: '4. 确认落地页 URL 与广告目标地址完全一致',
            body: '广告 URL 与最终 URL 不一致，会在统计之前悄悄把会话劈成两半。',
          },
        ],
        mixed: [
          {
            title: '1. 先修渲染路径——它解释了大部分缺口',
            body: '你的页面超过了 3 秒这条线，移动端放弃率在这个区间陡增，所以这部分流失是实打实丢掉的需求。',
          },
          {
            title: '2. 再去对齐统计侧的缺口',
            body: '页面已经够快，剩下任何缺口都是统计问题。把 Meta 出站点击与 GA4 会话对比，并按 event_id 做 CAPI 去重。',
          },
          {
            title: '3. 审计你排名前 5 的广告落地页，别只看店铺首页',
            body: '漏损很少是均匀分布的——一个慢版本就可能吃掉大部分流失。',
          },
        ],
      },
    },
    benchmark: {
      heading: '点击流失率与基准对比',
      targetLabel: '目标 < 8%',
      yours: '你的店铺：',
      typical: '典型 Shopify 店铺：',
      typicalValue: '20% – 30%',
      target: '亚秒级边缘架构：',
      targetValue: '< 8%',
    },
    gate: {
      heading: '拿到完整对账报告',
      body: '逐会话的缺口拆解、确切的 GA4 与 Meta 报告路径，以及针对你店铺的 90 天修复顺序。',
      newsletterHeading: '把完整对账报告发给我',
      newsletterSubheading: '留下你的店铺链接，我会给出个性化诊断——包括你的哪个落地页漏得最狠。',
      cta: '获取报告',
      note: '一份完整报告，之后每周一封广告浪费报告。随时可退订。',
    },
  },

  scorecard: {
    meta: {
      title: '拒付风险评分卡 — 免费 DTC 卖家健康度诊断 | Naif',
      description:
        '免费 8 题诊断，给你的拒付风险敞口打分、给这份风险标上价，并针对每一条红旗给出具体修法。建立在履约真实度、交付承诺与争议抗辩之上。',
    },
    badge: '卖家健康度诊断 · 8 个问题',
    headingLead: '拒付',
    headingHighlight: '风险评分卡',
    lead:
      '拒付不是支付问题。它是一个被升级了的履约真实度问题——而商家通常握着能赢下这场争议的证据。8 个问题，1 个风险分，以及你撞上的每一条红旗的具体修法。大多数品牌三分钟内就能做完。',
    exposure: {
      gmv: '月度营收（$）',
      gmvHint: '用来把风险敞口换算成美元金额。',
      cbRate: '当前拒付率（%）',
      cbRateHint: '卡组织的预警线在 1% 附近。查一下你的支付服务商后台。',
      aov: '客单价（$）',
      aovHint: '争议随客单价走高——40 美元的订单很少被发起争议，200 美元的就会。',
    },
    questions: [
      {
        id: 'fulfillment-truth',
        q: '包裹里收到的东西，和商品页承诺的是否一致——材质、重量、数量、做工？',
        why: '履约不一致是增长最快的争议原因。它也是最难抗辩的，因为证据就是商家自己的商品页。',
        options: [
          {
            label: '是——我们按商品页描述核查每一批发货',
            fix: '守住这一条。把核查过程记录下来，这样才有据可查。',
            score: 0,
          },
          {
            label: '部分——有些商品查了，有些没查',
            fix: '按营收挑出前 5 个 SKU 先查。把你对其余商品的那份严谨，同样用在这前 80% 的营收上。',
            score: 12,
          },
          {
            label: '没有——商品页是照着转化率写的，不是照着事实写的',
            fix: '这是整张清单里杠杆最高的修法。重写流量最高的 10 个商品页，确保文案里每一句承诺，包裹都拿得出来证据。',
            score: 20,
          },
        ],
      },
      {
        id: 'delivery-promise',
        q: '结账页显示的送达日期，和承运商实际送达的时间一致吗？',
        why: '延迟交付是服装和家居类目拒付的首要原因。买家是冲着承诺发起争议的，不是冲着包裹。',
        options: [
          {
            label: '是——结账页的日期经过承运商核验',
            fix: '保持送达预估与承运商实时数据绑定，而不是一个固定缓冲值。',
            score: 0,
          },
          {
            label: '我们会在预估上留缓冲，但不追踪实际签收',
            fix: '开始追踪承诺送达与实际送达的差值。按你实际延迟率算，3–5 天的缓冲比一起争议便宜得多。',
            score: 10,
          },
          {
            label: '不是——预估过于乐观，延迟是常态',
            fix: '把真实时间窗口显示出来，哪怕少几个点击。9–12 天的诚实预估，胜过 5 天的空头承诺。',
            score: 20,
          },
        ],
      },
      {
        id: 'refund-speed',
        q: '客户申请退款时，多久能拿到手？',
        why: '退款一慢，服务投诉就变成拒付。买家的另一个选择是等期限耗尽，让发卡机构来判。',
        options: [
          {
            label: '当天，自动处理',
            fix: '无需修改——这直接压住了争议量。',
            score: 0,
          },
          {
            label: '3–5 个工作日内',
            fix: '在送达后 30 天内自动即时退款，之后再转交人工。',
            score: 10,
          },
          {
            label: '看情况——常常超过 10 天',
            fix: '设定 24–48 小时的硬性 SLA，对明确成立的案子自动批准。仅这一条通常就能砍掉三分之一的争议。',
            score: 20,
          },
        ],
      },
      {
        id: 'order-comms',
        q: '客户能自动收到订单确认、发货通知和可用的物流链接吗？',
        why: '结账之后的沉默，是把中立买家变成争议方的关键。买家听不到消息时，只会往最坏处想。',
        options: [
          {
            label: '是——三封都有，由真实事件触发',
            fix: '保持流程由事件驱动，而不是固定排期。',
            score: 0,
          },
          {
            label: '部分——确认和发货有，物流经常缺',
            fix: '加一封在运单创建时自动发出的物流号邮件，而不是等人工录入。',
            score: 8,
          },
          {
            label: '没有——客户得反过来催我们',
            fix: '把 Klaviyo 事务流接到你的履约事件上。这是个两天的活，也是目前能拿到的最快争议降幅。',
            score: 16,
          },
        ],
      },
      {
        id: 'expectation-setting',
        q: '对于客单价更高的商品，买家有没有看到实物的视觉与材质证据？',
        why: '客单价超过大约 100 美元，买家是为图买的。图如果是渲染过的、包裹是朴素的，退款申请先来，争议后到。',
        options: [
          {
            label: '是——有真实商品图、细节图和尺寸参照',
            fix: '守住这一条。真实照片也是你手上最硬的 CRO 素材。',
            score: 0,
          },
          {
            label: '只有场景图，没有尺寸或细节参照',
            fix: '每个主推 SKU 补一张尺寸参照图和两张微距细节图。这比任何折扣都便宜。',
            score: 10,
          },
          {
            label: '渲染图或重度修图',
            fix: '这是高客单价下的直接争议来源。把修图换成未修、尺寸准确的实拍。',
            score: 18,
          },
        ],
      },
      {
        id: 'review-integrity',
        q: '你的评价、评分和用户证言都是真实且可核验的吗？',
        why: '刷评或返现评价同时违反卡组织和平台规则。代价不只是一笔罚款——而是你能否在争议中获胜的能力。',
        options: [
          {
            label: '是——只接受已验证买家的评价，没有返现内容',
            fix: '把验证链路的记录保留好。',
            score: 0,
          },
          {
            label: '大部分是真的，但我们确实在跑返现计划',
            fix: '把返现挪到不与好评挂钩的购买后问卷上，同时保留评价正文不被修改。',
            score: 14,
          },
          {
            label: '我们不知道评价是从哪来的',
            fix: '审计评价应用、应用区块和历史上的返现活动。清掉一切无法追溯到真实订单的内容。',
            score: 20,
          },
        ],
      },
      {
        id: 'dispute-defence',
        q: '你会实时监控争议，并在截止前提交证据吗？',
        why: '举证窗口很短，多数商家默认就会错过。窗口内提交的证据能赢，过了窗口提交的不能。',
        options: [
          {
            label: '是——每一笔争议我们都提交证据',
            fix: '把按类目维护的证据模板库记录下来。',
            score: 0,
          },
          {
            label: '我们等邮件到了才反应，常常已经晚了',
            fix: '按 SKU 类目建立常备证据包：订单、物流、签收照片、商品页快照。把截止日历自动化。',
            score: 12,
          },
          {
            label: '这些我们基本赢不了',
            fix: '这是整张清单里回报最高的一项。常备证据包通常就是赢与输的分界线。',
            score: 20,
          },
        ],
      },
      {
        id: 'unboxing-parcel',
        q: '包裹到达时的状态，符合品牌给出的承诺吗？',
        why: '破损、压角和配件缺失，会被直接读成低价值商品。买家会同时对订单和物流发起争议。',
        options: [
          {
            label: '是——包装经过测试并有防护',
            fix: '守住这一条。在争议证据包里放一张开箱照片。',
            score: 0,
          },
          {
            label: '整体还行，但易碎或重货是短板',
            fix: '只给易碎 SKU 加护角和经过实测的跌落标准。你不需要把全部商品重新包装一遍。',
            score: 10,
          },
          {
            label: '算不上——我们能用最小盒子就用什么盒子',
            fix: '对高客单价和易碎线，包装本身就是产品的一部分。一个快递袋加一个成型内衬，比一次拒付便宜。',
            score: 16,
          },
        ],
      },
    ],
    action: {
      heading: '准备好打分了吗？',
      body: '你的答案只留在浏览器里——除非你主动要邮件报告，否则不会发送任何数据。',
      button: '计算我的风险分',
    },
    results: {
      scoreLabel: '拒付风险评分',
      outOf: '满分 {max}',
      tiers: {
        critical: '风险敞口严重',
        elevated: '风险敞口偏高',
        moderate: '风险敞口中等',
        healthy: '运营健康',
      },
      verdicts: {
        critical:
          '你的争议来源是结构性的，不是偶发的。按这个费率走下去，你已经在卡组织的观察名单上，而你依赖的那道防线——你自己的商品页——正是被反过来用来打你的东西。先修履约真实度和交付承诺，这两样没夯实之前，其余都是噪音。',
        elevated:
          '你的收入正以可预测的方式漏进争议里。好消息是：你的答案里至少有一条指向几天就能做完的修法。坏消息是：你每拖一个月，支付手续费和流失的好客户就多滚一层。',
        moderate:
          '你的基本盘是扎实的，剩下的风险集中在一两个地方。找出它们、修掉它们，你的争议率应该就能掉进支付服务商认可的 0.2% 以下区间。',
        healthy:
          '你的卖家健康度状况良好——你在正面抗辩争议，也在兑现承诺。保持证据包是最新的，每季度重跑一次这张评分卡，因为让品牌掉出这一档的从来不是新对手，而是履约上的滑坡。',
      },
      exposureLabel: '年化风险敞口',
      exposureDesc: '按你当前争议率计算，有多少营收处在风险中。',
      recoverableLabel: '每年可挽回',
      recoverableDesc: '如果把争议率压到 0.1%。',
      disputesLabel: '每年争议数',
      disputesDesc: '按当前费率算，尚未计入手续费。',
      fixHeading: '你的修复队列，按影响从大到小',
      fixLead: '每一条红旗都对应具体整改动作，不是泛泛的建议。',
      yourAnswer: '你的回答：',
      fixPrefix: '修法：',
      severities: { critical: '严重', high: '高', moderate: '中等' },
      noFlags: '没有红旗。每一题都过了——保持证据包是最新的，每季度重跑一次。',
      gate: {
        heading: '拿到完整的卖家健康度报告',
        subheading: '你的评分、按 SKU 类目的证据包模板，以及针对你店铺的 90 天争议削减顺序。',
        cta: '把报告发给我',
        note: '一份完整报告，之后每周一封广告浪费报告。随时可退订。',
      },
    },
  },
} as const;

export type ToolStrings = typeof tools;
