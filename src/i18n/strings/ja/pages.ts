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
      title: 'Naif | DTC ECオペレーター & フルファネル・グロースアーキテクト',
      description:
        'サブ秒の表示速度、Meta広告LPのCRO、自動化Klaviyoリテンション、そして100%データドリブンの転換で、ハイチケットDTCブランドをスケールさせます。',
    },
    hero: {
      pill: 'DTC ECオペレーター & フルファネル・グロースアーキテクト',
      titleLead: 'ハイチケットDTCブランドを',
      titleHighlight: 'サブ秒の速さ',
      titleTail: 'とフルファネルの精度でスケールさせる。',
      lead:
        'ラグジュアリーブランドのストーリーテリング、ストアフロントの技術パフォーマンス、Meta/Google広告の収益性。その3つを橋渡しします。膨らんだプラグインゼロ、安いAIスローゼロ、100%データドリブンの転換。',
      fitPrefix: '対象はこういう方：',
      fitBody:
        '月間売上が$50k〜$2M、AOVが$99前後で、すでにペイドトラフィックに投資しているのに、ページが描画する前にそのトラフィックを失っているDTCブランド。',
      fitLink: 'あなたに当てはまるか確認する →',
    },
    benchmarks: {
      cwv: 'モバイル Core Web Vitals スコア',
      clickLoss: '広告クリック→LP到達ロスの割合（業界平均25%+比）',
      klaviyo: '自動化Klaviyoによる売上寄与率',
      ticket: 'ハイチケットの転換設計',
    },
    cases: {
      eyebrow: '本番環境で稼働するDTCデプロイ',
      heading: 'フルファネルのケーススタディ',
    },
    pillars: {
      eyebrow: 'グロースとアーキテクチャの原則',
      heading: 'ハイチケットDTCエンジニアリングの4本柱',
      lead:
        '広告予算の浪費、膨らんだアプリスタック、転換への摩擦を取り除き、利益の出る強いDTC運営を組み立てます。',
      items: [
        {
          title: 'ハイチケットDTCストアフロント',
          body: 'Shopify OS2.0 & Jamstackの専用ビルド、6カット構成のビジュアルディレクション、$99+のラグジュアリー価格帯に合わせたモバイルファーストの購入フロー。',
        },
        {
          title: '広告LPのCRO & トラフィック防衛',
          body: 'モバイルのバウンス率、チェックアウト直行フロー、Meta & TikTok Adsのアウトバウンドクリック漏えいを潰します。サブ秒のLCPが広告費の浪費を防ぎます。',
        },
        {
          title: '自動化リテンション & ライフサイクル（Klaviyo）',
          body: '手動介入なしの閲覧離脱対応、VIPの買い戻し、ポスト購入後の顧客体験。15%+のベースライン自動化売上を安定して生み出します。',
        },
        {
          title: 'フルフィルメントの真実 & チャージバックシールド',
          body: 'デジタル上の約束と実物の配送現実を揃え、PayPal & Stripeの異議申立てを先回りし、持続可能な営業状態を確保します。',
        },
      ],
    },
    fitCheck: {
      eyebrow: 'フィットチェック',
      headingLead: 'このサービスが',
      headingHighlight: '合うのはどんな案件か',
      lead:
        '互いの時間を浪費する一番の方法は、相性が合わないこと。以下は実際に基準として使っているフィルターです。無理に受けるくらいなら、お断りするほうが双方のためです。',
      goodTitle: 'こういう方にあてはまります',
      badTitle: 'こういう方にはあてはまりません',
      good: [
        '月間の売上が$50kを超えていて、すでにペイドトラフィックを流している',
        'AOVが$99以上で、チェックアウトの摩擦が明らかに大きい',
        'モバイルのPageSpeedが赤くて、責任者が誰もいない',
        'Klaviyoは使っているが、フローは一度も作り直していない',
        '毎週、意思決定者が変更を承認できる体制にある',
      ],
      bad: [
        '月間の売上がおよそ$50kを下回っている',
        '1ヶ月目の転換率向上を確約してほしい',
        '判断はすべて相手に委ねたい',
        '単一SKUのドロップシッピングやグレーマーケット転売が主業',
        'まだペイドトラフィックがない —— まずは無料診断から始めてください',
      ],
    },
    diagnostics: {
      eyebrow: 'まずは自分で回してみる',
      heading: 'あなたのストアの無料診断',
      lead:
        'これは有料監査の内部で使っているものと同じエンジンです。登録も営業の売り込みもなし。自分の数字で走らせて、この作業にいくらかかるかを判断してください。',
      clickLossTitle: 'クリック損失監査',
      clickLossDesc:
        'MetaのアウトバウンドクリックとGA4のランディングページビューを突合。差分を金額換算し、レンダリングの落ち込みなのか計測のノイズなのかを切り分けます。',
      scorecardTitle: 'チャージバックリスク評価',
      scorecardDesc:
        '8つの質問、1つのリスクスコア、そしてすべてのレッドフラッグへの具体的な修正策。フルフィルメントの真実から異議申立て用のエビデンスパックまで。',
      roiTitle: '広告ROI & レイテンシ計算機',
      roiDesc:
        'モバイルの表示遅延が、浪費される広告費・失われるクリック・取り戻せる受注にどれだけコストになるかを、Googleの実データにもとづいて算出します。',
    },
    articles: {
      eyebrow: '発行物 & ホワイトペーパー',
      heading: '技術記事 & ケーススタディ',
      read: 'アーキテクチャ・ホワイトペーパーを読む',
    },
  },

  about: {
    meta: {
      title: 'Naifプロフィール | DTC ECオペレーター & フルファネル・グロースアーキテクト',
      description:
        'ハイチケットストアフロントのアーキテクチャ、サブ秒エッジ性能、Meta広告の経済性、自動化KlaviyoリテンションをつなぐDTC ECオペレーター。',
    },
    hero: {
      pill: 'DTCブランド設計・CRO・グロース顧問を受付中',
      titleLead: 'ハイチケットDTCを',
      titleHighlight: '精密なエンジニアリング',
      titleTail: 'と広告収益性でスケールさせる。',
      quote:
        '「越境ECの最前線に立っています。広告予算の感覚を持たない純粋なエンジニアでも、ウェブアーキテクチャを知らないメディアバイヤーでもありません。テーマのコードからエッジ性能、Meta広告の経済性、顧客リテンションまで、その全体を横断してつなぎます。」',
      lead:
        'ハイチケット（$99+）のShopify OS2.0とJamstackストアフロントを実際に運用して得た深い実務知見をもとに、広告予算を吸い込む隠れた漏れを潰します。モバイルLPの読み込み遅延、最適化されていないチェックアウトフロー、デジタル上の約束と実物の履行の乖離、そして放置されたポスト購入後のリテンション。',
    },
    attributes: {
      locationLabel: '所在地',
      locationValue: '世界中でリモート',
      locationNote: 'UTC+8 / 米国時間にも対応',
      focusLabel: '主な専門領域',
      focusValue: 'ハイチケットDTC & CRO',
      focusNote: 'Shopify, Meta Ads, Klaviyo',
      metricLabel: 'パフォーマンス指標',
      metricValue: '< 8% クリック損失率',
      metricNote: 'モバイルCWV 100/100',
    },
    stack: {
      eyebrow: '技術 & 運用スタック',
      heading: 'フルファネルDTC 技術スタックレーダー',
      lead:
        'エンタープライズ水準のストアフロント設計、パフォーマンスエンジニアリング、広告アトリビューション、リテンション自動化を組み合わせた、実戦で鍛え上げたスタック。',
      items: [
        {
          title: 'ストアフロント & 速度',
          desc: 'カスタムLiquid、Astro Islands、エッジキャッシュで、クライアントサイドのランタイム肥大化を解消。',
        },
        {
          title: 'トラフィック & CRO',
          desc: 'チェックアウト直行ファネル、ビジュアルディレクション、ハイチケット向けコピーフレームワーク。',
        },
        {
          title: 'アトリビューション & テレメトリ',
          desc: '広告クリックの落ち込みフォレンジック、サーバーサイドアトリビューション、非侵入のテレメトリ。',
        },
        {
          title: 'リテンション & 防衛',
          desc: '自動化された顧客ライフサイクルシーケンスと、異議申立て・チャージバックへの反撃体制。',
        },
      ],
    },
    pillars: {
      eyebrow: '戦略の原則',
      heading: '戦略の4本柱',
      lead:
        'すべてのクライアントブランド、ストアフロントの再構築、グロース施策は、この4つの妥協なき基準にもとづいて設計されています。',
      items: [
        {
          title: 'ストアフロントアーキテクチャ & 速度',
          body: 'Shopify OS2.0、Liquidのリファクタリング、Astro Jamstack、そしてサブ秒のCore Web Vitals。肥大したサードパーティアプリとアセットの重さを削り、モバイル利用者が瞬時に表示されて離脱の摩擦が起きない状態をつくります。',
          result: 'モバイルCWV 100/100 • LCP < 0.8s を保証',
        },
        {
          title: 'コンバージョン率最適化（CRO）',
          body: '6カット構成のビジュアルディレクション（ヒーロー、開封体験、ドレープ、ライフスタイル、宝石マクロ、フラットレイ）、ハイチケット向けコピー（Hook-FAB-Ideal）、そして$99+のプレミアム価格を成立させる摩擦のないチェックアウトファネル。',
          result: 'ハイチケットへの信頼 • 摩擦ゼロのチェックアウト直行',
        },
        {
          title: 'トラフィック & アトリビューション防衛',
          body: 'Meta Graph APIの連携、クリック損失の監査、GA4ファネルのフォレンジック、非侵入のイベントトラッキング。ペイドのアウトバウンドクリックと実際のランディングページビューの15%〜30%の乖離を、監査して塞ぎます。',
          result: '< 8% クリック損失率 • 本当のROASの透明性',
        },
        {
          title: 'オペレーション & ブランド防衛',
          body: 'Klaviyoのライフサイクルジャーニー（ウェルカム、閲覧離脱、VIPのポスト購入後）と、実物の配送フルフィルメント監査の組み合わせ。ストアフロントの約束と梱包の現実を揃え、チャージバックと決済プロセッサの資金留めを防ぎます。',
          result: '自動化フロー売上の15%+ • チャージバックによる留めゼロ',
        },
      ],
    },
    flow: {
      eyebrow: '進め方',
      heading: 'フルファネルDTC実行フロー',
      lead:
        '広告予算の浪費をなくし、ブランドの売上を伸ばすために設計した、予測可能でデータに裏付けられた実行フレームワーク。',
      items: [
        {
          title: 'グロース & 速度監査',
          body: 'MetaのアウトバウンドクリックとGA4のランディングページビュー、モバイルLighthouseのCWV、チェックアウトの落ち込み、フルフィルメントの約束と現実の一致を、深くフォレンジックに監査します。',
          timeline: '2〜3日',
        },
        {
          title: 'CRO & ビジュアル試作',
          body: '6カット構成のビジュアルディレクション、ハイチケット向けHook-FAB-Idealコピー、摩擦のないチェックアウト直行フローをステージング環境で実装します。',
          timeline: '5〜7日',
        },
        {
          title: 'ローンチ & トラフィック切替',
          body: 'ダウンタイムゼロのテーマデプロイ、CDNエッジアクセラレーション、Meta Pixelのイベント重複排除、流入中のリアルタイムチェックアウト監視。',
          timeline: '1〜2週間',
        },
        {
          title: 'リテンション & ヘルス防衛',
          body: 'Klaviyoライフサイクルフローの自動化、多言語パリティチェック、顧客の開封体験監査、チャージバック防止でセラーの健全性を守ります。',
          timeline: '継続モニタリング',
        },
      ],
    },
    cta: {
      badge: '直接的な戦略パートナーシップ',
      heading: 'ハイチケットDTCブランドを、利益の出る形でスケールさせる準備はできていますか？',
      lead:
        '遅いモバイルLPで広告費を溶かしている。高チケットトラフィックの転換で戦っている。自動化Klaviyoリテンションで顧客を引き戻したい。どれでも、利益の出る仕組みを一緒につくりましょう。',
      emailButton: 'メールする：contact@naif.is-a.dev',
    },
  },

  services: {
    meta: {
      title: '契約プランと料金 — DTCアーキテクチャ・CRO・Klaviyo顧問 | Naif',
      description:
        'DTCアーキテクチャ監査、コンバージョンスプリント、グロース・リテイナー、ホワイトラベル案件の明確なレンジ。スコープ固定、書面で見積、時間給なし。',
    },
    header: {
      badge: 'スコープ固定 · 書面で見積 · 時間給なし',
      headingLead: '一緒に',
      headingHighlight: '始める4つの方法',
      lead:
        '目安のレンジを先に公開しているので、話す前に自分で適否を判断できます。すべての契約はスコープ固定・料金固定の書面で見積します。スコープが変わった場合は、先にあなたの承認を得ます。',
    },
    tiers: [
      {
        name: 'アーキテクチャ監査',
        price: '$1,500 – $3,500',
        priceNote: '一回限り、スコープ固定',
        duration: '2〜3日',
        bestFor: '利益が漏れていることに気づいているが、どこで漏れているのかが分からないブランド。',
        includes: [
          'ストアフロント・計測・リテンションスタックのフォレンジックな分解',
          'MetaのアウトバウンドクリックとGA4のランディングページビューの突合',
          'モバイルCWVフィールドデータ監査（LCP / INP / CLS、p75）',
          'Klaviyoのフロー・セグメント・配信到達率の見直し',
          'フルフィルメントの約束と実際の配送の乖離チェック',
          '収益に重みをつけた優先順位つき書面对レポ',
        ],
      },
      {
        name: 'コンバージョンスプリント',
        price: '$5,000 – $12,000',
        priceNote: '一回限り、スコープ固定',
        duration: '4〜6週間',
        bestFor: '文書を受け取るだけでなく、修正をリリースできる状態にあるブランド。',
        includes: [
          'アーキテクチャ監査の全内容を、ライブのベースラインとして再実行',
          '影響の大きい3〜5件の修正を、あなたのテーマ上に実装',
          'Liquid / JS / CSS を記述し、まずステージングへデプロイ',
          '広告LPまたはチェックアウト直行フローの再構築',
          'CVR・セッション当たり収益・CWVのビフォー/アフター測定',
          'Loom解説と書面による引き継ぎドキュメント',
        ],
      },
      {
        name: 'グロース・リテイナー',
        price: '$3,000 – $8,000',
        priceNote: '月額、30日前の通知',
        duration: '継続、四半期ごとのロードマップ',
        bestFor: '毎月、シニアオペレーターの判断を仰ぎたいチーム。',
        includes: [
          '感覚ではなく売上に紐づいた月次テストロードマップ',
          'CROとパフォーマンスの継続的なメンテナンス',
          'Klaviyoフローの拡張とライフサイクルプログラムの担当',
          '広告LPとクリエイティブディレクションの反復改善',
          'トラフィック・ファネル・リテンションの週次レポート',
          '直接アクセス — アカウントマネージャーもチケット待ち行列もなし',
        ],
      },
      {
        name: 'ホワイトラベルパートナーシップ',
        price: '代理店ごとに個別見積',
        priceNote: '代理店向けレート表',
        duration: 'プロジェクト単位または継続',
        bestFor: 'シニアのCRO体制を必要とする代理店と社内チーム。',
        includes: [
          'あなたのブランドと資料で、監査と実装を納品',
          'クライアント対応の窓口は私ではない — 関係はあなたの側が持ちます',
          '人員を増やさずに、シニアCRO・パフォーマンス・Klaviyoの体制を使用',
          'コンフリクトなし、シンプルな月額レート表',
          'クライアントレポートのテンプレートもSLAもそのまま',
        ],
      },
    ],
    footnote:
      'レンジは月間売上$50k〜$2M帯のブランドにおける典型的なスコープを反映しています。最終見積は作業開始前に、スコープ固定の書面で提示します。支払条件：スコープ固定案件は着手時50%、納品時50%。リテイナーは月々の前払い。',
    process: {
      eyebrow: '契約の進め方',
      heading: '予測可能でデータドリブンのプロセス',
      lead: 'すべての契約で同じ4ステージです。単発の監査から、全面支援の顧問契約まで同じ流れで進みます。',
      items: [
        {
          stage: 'ステージ01',
          title: '監査 & ベースライン',
          duration: '2〜3日',
          detail:
            'ストアフロント・広告計測・リテンション・フルフィルメントをフォレンジックに分解します。1行も変更する前にベースラインを一緒に合意します。転換率、セッション当たり収益、p75フィールドCWV、クリック損失率。',
        },
        {
          stage: 'ステージ02',
          title: '優先順位づけされたロードマップ',
          duration: '3〜4日目',
          detail:
            '50枚のスライドではなく、収益への影響と工数の比で採点した修正のリスト。スプリントで何をリリースし、何を後回しにするのかがはっきり見えます。',
        },
        {
          stage: 'ステージ03',
          title: '実装 & トラフィック切替',
          duration: '4〜6週間',
          detail:
            '影響の大きい修正は複製テーマまたはステージング環境に実装し、CWVと転換への影響をレビューしたうえで、ダウンタイムゼロでリリースします。',
        },
        {
          stage: 'ステージ04',
          title: 'リテンション & ヘルス防衛',
          duration: '継続',
          detail:
            'Klaviyoのライフサイクルフロー、フルフィルメントの真実の監査、多言語整合チェックを常時実行し、LTV・評判・決済の健全性を守ります。',
        },
      ],
    },
    notFit: {
      eyebrow: '採用前に',
      headingLead: '私が',
      headingHighlight: '向かない相手',
      lead:
        '私が犯しうる最大のコストは、成立しない案件を受けること。以下のような場合は他の選択肢をご案内します — 最初のご相談でそうお伝えします。',
      items: [
        {
          title: '月間の売上がおよそ$50kを下回っている',
          detail:
            'フィーがマージンの無視できない割合になります。無料でやれる高品質なShopifyテーマと1回の集中CROセッションのほうが、通常は私が請求する金額より安い費用で済みます。',
        },
        {
          title: '単一SKUのドロップシッピングやグレーマーケット転売',
          detail:
            '守るべき長期的顧客関係も、守るべきブランドのプレミアムもありません。この種の仕事の経済性には向きません。',
        },
        {
          title: '転換率の向上を確約してほしい',
          detail:
            '1ヶ月目に成果が出ると主張する人は、季節性を語っています。約束できるのはプロセス、計測、記録されたベースラインです。私が支配できない数字は約束しません。',
        },
        {
          title: '判断をすべて私に任せたい',
          detail:
            'これは顧問兼実装であり、受託部門ではありません。スプリント中に修正を承認できる意思決定者が、あなたの側に必要です。',
        },
      ],
    },
    cta: {
      heading: 'いちばん安い正直な答えからはじめる',
      lead:
        '下の無料診断を実行するか、ストアURLを送ってください。どれが実際に合うかを見極めます。答えが「まだどれも当てはまらない」場合でも正直にお伝えします。',
    },
  },

  faq: {
    meta: {
      title: 'FAQ — DTCアーキテクチャ・CRO・Klaviyo顧問 | Naif',
      description:
        '費用、所要期間、対応プラットフォーム、アクセス要件、NDAの取り扱い、計測基準、そしてこのサービスが本当に誰向けかの率直な回答。',
    },
    header: {
      badgePrefix: 'ご連絡の前に —',
      badgeSuffix: '率直な回答',
      headingLead: 'ご質問に',
      headingHighlight: '明確な回答を',
      headingTail: '先に。',
      lead:
        '費用、期間、アクセス、NDA、計測 — そしてそれ以上に重要な、私が「採用しないで」と伝える状況も。質問がここにない場合は直接送ってください。24時間以内に率直にお答えします。',
    },
    items: [
      {
        q: 'DTCアーキテクチャ支援は実際どのくらい費用がかかりますか？',
        a: '一緒に働く方法は3通り。会う前に自分で適否を判断できるように、目安のレンジを提示します。すべてのスコープは作業開始前に書面で見積します — 時間給も、想定外の請求書もありません。',
        detail: [
          'アーキテクチャ監査 — $1,500〜$3,500。2〜3日でストアフロント・広告計測・リテンションスタックをフォレンジックに分解し、収益に重みをつけた優先順位つきの書面で納品します。',
          'コンバージョンスプリント — $5,000〜$12,000。4〜6週間の実装プログラム。影響の大きい3〜5件の修正をあなたのテーマ上に直接実装し、前後に測定します。',
          'グロース・リテイナー — $3,000〜$8,000/月。継続的なCRO・パフォーマンス・Klaviyo業務。月次ロードマップ、テストサイクル、直接アクセス。',
        ],
      },
      {
        q: 'どのくらいで効果が出ますか？',
        a: '監査は2〜3日で出、最初のスプリントの修正は通常、実装の最初の2週間までにリリースされます。ただし正直に言えば、テストプログラムを「一つの結果」ではなく「プログラム」として読み解くには、およそ90日かかります。1ヶ月目に転換率が上がることを約束する人は、成果ではなく季節性を語っています。',
        detail: [
          '1〜3日目：監査、ベースライン合意、優先順位づけられたロードマップ',
          '1〜2週目：最初の修正バッチをリリースして公開',
          '3〜8週目：テストサイクル、リードアウト、積み上がる収益インパクト',
        ],
      },
      {
        q: 'どのプラットフォームに対応していますか？',
        a: 'Shopifyが本拠地です — OS 2.0とShopify Plus、Liquid、Shopify Functions、カスタムセクション、必要に応じてヘッドレスのHydrogen/Oxygen、そしてJamstack（Astro）ストアフロント。WooCommerceやBigCommerceからShopify Plusへのリプラットフォームも受けます。',
        detail: [
          'ストアフロント：Shopify OS 2.0、Shopify Plus、Hydrogen、Astro/Jamstack',
          'データと計測：GA4、Meta Graph API、Conversions API、GTM、Shopify Web Pixels',
          'リテンション：Klaviyoフロー、SMS、ロイヤルティ・サブスクリプション連携',
        ],
      },
      {
        q: '別のタイムゾーンのチームとも連携できますか？',
        a: 'できます。私はUTC+8で、米国東海岸の夕方、欧州の朝、APACの業務時間に重なっています。スプリントの締め切りやインシデントはタイムゾーンを尊重しないので、記録は非同期で文章として残します — Loom解説、書面のメモ、共有ボード。同時に起きていなくても進められるように。',
        detail: [],
      },
      {
        q: '開始するために必要なアクセスは何ですか？',
        a: '開始には読み取りアクセスだけで十分です：GA4プロパティ、Meta Ads Managerのアカウント、Shopifyの共同作業者アクセス。Metaのパスワードや完全な管理者権限は初日から必要としませんし、求めません。営業を止めずに作業できるよう、ステージングまたは複製テーマを用意しておくと作業が滞りません。',
        detail: [
          'GA4プロパティ（閲覧者）',
          'Meta Ads Manager（広告主の読み取りアクセス）',
          'Shopify共同作業者アクセス、または複製テーマのブランチ',
          'リテンション業務のためのKlaviyoアカウント読み取りアクセス',
        ],
      },
      {
        q: 'NDAのもとで進められますか？',
        a: '常に、既定です。商業的に機密性の高い業務なので、私が担当する契約の多くはNDA下です。数字はそのままに、ブランド名だけ除いた形でケーススタディを公開します — あなたのデータも、指標も、そのまま残ります。',
        detail: [],
      },
      {
        q: '変更が本当に効いたことをどう証明しますか？',
        a: '最初の変更をリリースする前にベースラインを合意し、転換率、セッション当たり収益、p75フィールドCWV（LCP、INP、CLS）、クリック→LP到達ロスの割合、チャージバック率を追跡します。テストに負けたらロールバックします。見せかけの成功も、调子のいい日のスクリーンショットもありません。',
        detail: [],
      },
      {
        q: '転換率の向上は保証できますか？',
        a: 'できません。保証できると考える人は疑ってください。保証できるのはプロセスです。記録されたベースライン、優先順位づけられたロードマップ、あなたのテーマ内に実装された変更、そして各仮説を確かめるか否すかの計測。向上は結果であって、契約条項ではありません。',
        detail: [],
      },
      {
        q: '戦略だけではありませんか？実装もお願いできますか？',
        a: '実装します。社内のチームに渡した戦略は、たいていバックログの中で死にます。修正の中身が Liquid のループ、Meta のイベント、Klaviyo のフローなら尚更です。コードは私が書き、ステージングのテーマにデプロイし、Loom解説と書面のメモで引き継ぎます。その後の運用はあなたのチームです。',
        detail: [],
      },
      {
        q: 'すでにShopifyの代理店に依頼しています。それでも頼めますか？',
        a: 'できます。しかもこれはよく通っている道です。人員を増やさずにシニアCROとパフォーマンスの体制が必要な代理店に対して、ホワイトラベルで仕事をしています — クライアントとの関係はあなたのチームが持ち、監査と実装は私が行い、成果物はすべてあなたのブランドで届けます。これは営業チームを持たずに安定的に仕事を受けるための仕組みでもあります。',
        detail: [],
      },
      {
        q: '小さなストアです。相談する価値はありますか？',
        a: '正直に、しばしば「いいえ」です。月間売上がおよそ$50,000を下回る規模なら、フィーがマージンの無視できない割合になり、安い解決策は通常、作られた無料Shopifyテーマと1回の集中CROセッションのほうが先に効きます。リテイナーを売りつける前に、最初の通話でそれを率直にお伝えします。',
        detail: [],
      },
      {
        q: 'まだペイドトラフィックがありません。手伝えますか？',
        a: 'ストアフロント・速度・CROなら、できます。広告費の効率とクリック損失の回収は、まだ無理です — 突合すべきクリックデータ自体がないからです。まずは監査から始めて、サイトを速く、転換できる状態にして、予算が動くようになったらペイドトラフィックに戻ってきてください。',
        detail: [],
      },
      {
        q: '契約が終わったあとはどうなりますか？',
        a: 'すべて手元に残ります：コード、Liquid、Klaviyoのフロー、GA4のイベント、ドキュメント、計測の設定。リテイナーは便宜であって、囲い込みではありません。仕事が割に合わなくなったら、出ることが難しくない状態にしておくべきです。',
        detail: [],
      },
    ] as { q: string; a: string; detail: string[] }[],
    cta: {
      heading: 'あなたの質問はこのページにありません',
      lead:
        'それはつまり、一番面白い質問だということです。ストアURLと一緒に送ってください。パンフレットではなく、具体的に答えます。',
    },
  },

  contact: {
    meta: {
      title: '私と仕事する | DTCアーキテクチャ & グロース顧問 | Naif',
      description:
        'ハイチケットDTCのShopify/Jamstackストアフロント設計、Meta広告LPのCRO、Klaviyoのリテンションシステム、グロース顧問についてNaifへご連絡ください。',
    },
    eyebrow: 'DTCグロース支援 & 契約',
    heading: '私と仕事する / DTCアーキテクチャ & 顧問',
    lead:
      'ハイチケットDTCブランド、ラグジュアリーECの創業者、スケールする越境ECの事業者と、高転換のストアフロントの構築、広告漏れの解消、セラーの健全性の防衛のためにパートナーシップを結びます。',
    channelsHeading: '直接の連絡先',
    emailLabel: '仕事用メール：',
    githubLabel: 'GitHubプロフィール：',
    availabilityLabel: '空き状況 & タイムゾーン：',
    availability:
      'DTCアーキテクチャ監査、コンバージョンスプリント、グロース顧問契約を受付中。米国・欧州・APACのブランドチームとフレキシブルに時間帯が重なっています。',
    offeringsHeading: '主な支援メニュー',
    offerings: [
      {
        title: 'ハイチケットストアフロント設計',
        body: '6カット構成のビジュアルディレクション付きの、Shopify OS2.0 & Jamstackの専用ビルド。',
      },
      {
        title: 'Meta/Google 広告LPのCRO',
        body: 'モバイルのクリック→LP到達ロスを25%+から8%未満まで削ぎ落とします。',
      },
      {
        title: 'Klaviyo ライフサイクル・リテンション',
        body: '転換率の高いウェルカムシリーズ、閲覧離脱対応、VIPのリテンション。',
      },
      {
        title: 'フルフィルメントの真実 & チャージバックシールド',
        body: 'デジタル上の主張と実物の配送を揃え、PayPal & Stripeの異議申立てを先回りします。',
      },
    ],
  },

  rfq: {
    badge: 'DTCアーキテクチャ & グロース相談',
    heading: 'DTCアーキテクチャ監査または顧問契約のはじまり',
    lead:
      'ハイチケットShopifyの再設計、Meta広告LPの高速化、自動化Klaviyoリテンションフロー。いずれ的需要でも、下のフォームからご連絡ください。24時間以内に直接ご返信します。',
    nameLabel: 'お名前 *',
    companyLabel: 'ブランド / ストアURL / 会社名 *',
    emailLabel: '仕事用メールアドレス *',
    contactLabel: 'Telegram / WhatsApp / 電話',
    scopeLabel: '支援の種類 / スコープ',
    budgetLabel: '希望時期 & 月額予算',
    messageLabel: 'ストアURL、現在の月間GMV、主なボトルネック *',
    namePlaceholder: '例：Alex Morgan',
    companyPlaceholder: '例：Amesha Energy / brand.com',
    emailPlaceholder: 'alex@brand.com',
    contactPlaceholder: '@username または電話番号',
    scopePlaceholder: '例：ハイチケットShopifyストアフロント / Meta広告LPのCRO / Klaviyoフロー',
    budgetPlaceholder: '例：すぐに / $3k-$10kのスプリントまたは顧問リテイナー',
    messagePlaceholder:
      'ブランド、現在の月間GMV、利用中の広告プラットフォーム、主な転換またはリテンションのボトルネックを簡潔に...',
    confidentiality: '厳格なIP & NDAの守秘義務で保護',
    submitting: 'エッジゲートウェイに接続中...',
    success:
      '<strong>お問い合わせを受け付けました。</strong> {name}さん、ありがとうございます。ご依頼を記録しました。24時間以内にメール（{email}）で要件を確認のうえご返信します。',
    failure:
      '<strong>送信中にエラーが発生しました:</strong> {error}。<a href="mailto:dewellsmell@gmail.com" class="underline text-white">dewellsmell@gmail.com</a> へ直接メールを送ってください。',
  },

  products: {
    meta: {
      title: '本番DTCのケーススタディ & グロースシステム | Naif',
      description:
        'Naifによる本番DTCのケーススタディ。ハイチケットのストアフロント設計、Meta広告のクリック損失対策、自動化Klaviyoリテンションエンジン。',
    },
    eyebrow: 'DTCシステム & グロース実績',
    heading: '本番DTCのケーススタディ & ファネル設計',
    lead:
      '厳選された本番アーキテクチャ、CROのケーススタディ、リテンション基盤のソリューション。各プロジェクトでは、現実の転換率向上、トラフィック防衛、測定可能な事業成果を提示します。',
    allSystems: 'すべてのシステム',
  },

  productDetail: {
    stackLabel: '主要技術スタック：',
    benchmarkLabel: 'パフォーマンス基準：',
    targetLabel: 'デプロイ対象：',
    targetValue: 'Shopify & エッジCDN',
    highlightsHeading: '中核のイノベーション & グロース能力',
    inquire: '類似のアーキテクチャについて相談する',
    back: '← すべてのプロジェクトへ',
    specsHeading: 'システムアーキテクチャ & 技術パラメータ',
    walkthroughHeading: 'ケーススタディ解説 & エンジニアリング成果',
    footerNote: 'DTCグロース設計 • ブランド監査と顧問を受付中',
  },

  postDetail: {
    badge: 'アーキテクチャ・ホワイトペーパー',
    crumb: '技術記事',
    authorRole: 'フルスタックソフトウェアエンジニア & サーバーレスアーキテクト',
    authorBio:
      'サブ100msのJamstackプラットフォーム、ゼロJSのIslandsアーキテクチャ、Cloudflare Edgeでのクラウドコスト最適化を専門としています。',
    workWithMe: '私と仕事する →',
    metaTitleSuffix: '技術記事 | Naif',
    metaFallback: 'Naifによる、モダンWebアーキテクチャとシステムエンジニアリングの深掘り。',
  },

  resources: {
    meta: {
      title: '厳選されたDTCエンジニアリング & グローバルトレードのリソース | Naif',
      description:
        '権威ある開発者ツール24選、エッジサーバーレスインフラ、ネットワーク診断スイート、グローバルトレード情報プラットフォームの厳選ディレクトリ。',
    },
    badge: '検証済み技術ツールボックス • 24の厳選ユーティリティ',
    headingLead: '権威あるエンジニアリング &',
    headingHighlight: 'インテリジェンスツール',
    lead:
      '私が日常的に頼っている本番用ユーティリティを厳選しました：サブ秒のCore Web Vitals診断スイートから、グローバル貿易の船荷証券レコード、Anycastエッジクラウド基盤まで。',
    allResources: 'すべてのリソース',
    categories: {
      performance: 'Webパフォーマンス & 監査',
      edge: 'エッジクラウド & サーバーレス',
      diagnostics: 'メール & ネットワーク診断',
      intelligence: 'グローバルトレード & インテリジェンス',
    },
    launch: '開く',
    openInNewTab: '{name} を開く',
    diagnosticCta: {
      heading: 'このツール群を使った専門家監査が必要ですか？',
      body: '診断を回すのは簡単です。そのデータをダウンタイムゼロのエンジニアリングロードマップに変換するのはそうではありません — パフォーマンス、メールの信頼性、クラウド基盤を横断するシステム思考が必要です。',
      button: 'アーキテクチャレビューを予約',
    },
    entries: [
      {
        key: 'psi',
        name: 'Google PageSpeed Insights',
        url: 'https://pagespeed.web.dev/',
        domain: 'pagespeed.web.dev',
        category: 'performance',
        description:
          '実際のChrome User Experience Reportのフィールドデータにもとづく、モバイル／デスクトップのCore Web Vitals（LCP、INP、CLS）における決定的な基準。',
      },
      {
        key: 'wpt',
        name: 'WebPageTest',
        url: 'https://www.webpagetest.org/',
        domain: 'webpagetest.org',
        category: 'performance',
        description:
          '回線スロットリング、CPUスローダウン再現、動画のフィルムストリップ、視覚比較まで備えた、複数拠点に跨るパフォーマンスプロファイリング。',
      },
      {
        key: 'urlscan',
        name: 'URLScan.io',
        url: 'https://urlscan.io/',
        domain: 'urlscan.io',
        category: 'performance',
        description:
          'サンドボックス化されたブラウザスキャナ。すべてのHTTPリクエスト、サードパーティのトラッキングスクリプト、セキュリティヘッダ、DOMの変化を分析・記録します。',
      },
      {
        key: 'gtmetrix',
        name: 'GTmetrix',
        url: 'https://gtmetrix.com/',
        domain: 'gtmetrix.com',
        category: 'performance',
        description:
          'ウォーターフォールの内訳、ページ生成のタイムライン、実行可能な最適化の示唆を提供する、合成的なサイト速度テストのスイート。',
      },
      {
        key: 'yellowlab',
        name: 'Yellow Lab Tools',
        url: 'https://yellowlab.tools/',
        domain: 'yellowlab.tools',
        category: 'performance',
        description:
          '深いDOMツリー、複雑なCSSセレクタ、危険なJavaScriptの書き方、Webフォントの描画ボトルネックを検出するフロントエンドのコード品質監査。',
      },
      {
        key: 'speedvitals',
        name: 'SpeedVitals Global TTFB Test',
        url: 'https://speedvitals.com/ttfb-test',
        domain: 'speedvitals.com',
        category: 'performance',
        description:
          '35以上のグローバルエッジロケーションでTime to First Byte（TTFB）を同時測定し、CDNキャッシュ効率とオリジンのレイテンシを評価します。',
      },
      {
        key: 'cfworkers',
        name: 'Cloudflare Workers & Pages',
        url: 'https://workers.cloudflare.com/',
        domain: 'workers.cloudflare.com',
        category: 'edge',
        description:
          '300以上のAnycast都市にデプロイされるサーバーレス実行環境。軽量なJavaScript/Wasmを実行し、コンテナのコールドスタートはゼロ。',
      },
      {
        key: 'astro',
        name: 'Astro Web Framework',
        url: 'https://astro.build/',
        domain: 'astro.build',
        category: 'edge',
        description:
          'コンテンツ駆動のサイトのために設計されたモダンWebフレームワーク。Islandsアーキテクチャを先駆け、純HTMLと選択的なクライアントハイドレーションで配信します。',
      },
      {
        key: 'resend',
        name: 'Resend',
        url: 'https://resend.com/',
        domain: 'resend.com',
        category: 'edge',
        description:
          '開発者ファーストのトランザクションメールAPI。React Emailのテンプレート、高速なRESTエンドポイント、堅牢な受信箱到達率を備えています。',
      },
      {
        key: 'upstash',
        name: 'Upstash',
        url: 'https://upstash.com/',
        domain: 'upstash.com',
        category: 'edge',
        description:
          'エッジネイティブなデータ基盤。サーバーレスRedis、メッセージキュー（QStash）、Kafka、そしてエッジワーカー向けのステートレスなHTTP/REST APIを提供します。',
      },
      {
        key: 'turso',
        name: 'Turso (libSQL)',
        url: 'https://turso.tech/',
        domain: 'turso.tech',
        category: 'edge',
        description:
          'libSQLで動く分散型データベース。SQLiteのデータを世界中に複製し、エッジの近くに配置してサブミリ秒のローカル読み取りを実現します。',
      },
      {
        key: 'keystatic',
        name: 'Keystatic',
        url: 'https://keystatic.com/',
        domain: 'keystatic.com',
        category: 'edge',
        description:
          'Git連携のヘッドレスCMS。構造化されたJSON、YAML、Markdocファイルを、そのままGitHubリポジトリに書き出します。',
      },
      {
        key: 'mailtester',
        name: 'Mail-Tester',
        url: 'https://www.mail-tester.com/',
        domain: 'mail-tester.com',
        category: 'diagnostics',
        description:
          'SPFレコード、DKIM署名、DMARCのアラインメント、SpamAssassinのルールを確認して、送信メールの到達率を評価します。',
      },
      {
        key: 'mxtoolbox',
        name: 'MxToolbox',
        url: 'https://mxtoolbox.com/',
        domain: 'mxtoolbox.com',
        category: 'diagnostics',
        description:
          'MXレコード検索、DNS伝播、SMTPハンドシェイクのテスト、100以上のグローバルメールブラックリストを備えた総合ネットワーク診断プラットフォーム。',
      },
      {
        key: 'ssllabs',
        name: 'Qualys SSL Labs',
        url: 'https://www.ssllabs.com/ssltest/',
        domain: 'ssllabs.com',
        category: 'diagnostics',
        description:
          '公開されているあらゆるSSL/TLSサーバーを深掘り分析し、証明書チェーン、暗号スイットの強度、フォワードシークレシー、脆弱性の露出を評価します。',
      },
      {
        key: 'securityheaders',
        name: 'SecurityHeaders.com',
        url: 'https://securityheaders.com/',
        domain: 'securityheaders.com',
        category: 'diagnostics',
        description:
          'CSP、HSTS、Permissions-Policy、Referrer-Policyを含むHTTPセキュリティレスポンスヘッダを即座に監査します。',
      },
      {
        key: 'dnsviz',
        name: 'DNSViz',
        url: 'https://dnsviz.net/',
        domain: 'dnsviz.net',
        category: 'diagnostics',
        description:
          'DNSとDNSSECチェーンの健全性、暗号化デリゲーション、権威サーバーの状態を解析するインタラクティブな可視化ツール。',
      },
      {
        key: 'bgpview',
        name: 'BGPView',
        url: 'https://bgpview.io/',
        domain: 'bgpview.io',
        category: 'diagnostics',
        description:
          'ASNの所有状況、プレフィックスのアナウンス、Anycastのピアリング、国際インターネットエクスポージャを明らかにするリアルタイムBGPルーティングインスペクタ。',
      },
      {
        key: 'importyeti',
        name: 'ImportYeti',
        url: 'https://www.importyeti.com/',
        domain: 'importyeti.com',
        category: 'intelligence',
        description:
          '数百万件の米国通関・海上輸送記録を検索できるデータベース。実際の工場サプライヤー、OEMパートナー、競合の物流ルートを暴き出します。',
      },
      {
        key: 'metalib',
        name: 'Meta Ad Library',
        url: 'https://www.facebook.com/ads/library/',
        domain: 'facebook.com/ads/library',
        category: 'intelligence',
        description:
          'Facebook、Instagram、Messenger、Audience Networkで流されているすべての商用広告クリエイティブを検索できるアーカイブ。',
      },
      {
        key: 'adstransparency',
        name: 'Google Ads Transparency Center',
        url: 'https://adstransparency.google.com/',
        domain: 'adstransparency.google.com',
        category: 'intelligence',
        description:
          '世界のGoogleネットワークにおける検索・YouTube・ディスプレイキャンペーンを網羅した、公式の広告主透明性ライブラリ。',
      },
      {
        key: 'wipo',
        name: 'WIPO Global Brand Database',
        url: 'https://branddb.wipo.int/',
        domain: 'branddb.wipo.int',
        category: 'intelligence',
        description:
          'Madrid Systemの国際登録と各地域の国内特許庁をカバーする、グローバル商標検索ポータル。',
      },
      {
        key: 'builtwith',
        name: 'BuiltWith',
        url: 'https://builtwith.com/',
        domain: 'builtwith.com',
        category: 'intelligence',
        description:
          '任意のドメインの裏側にあるCMS、CDN、トラッキングコード、決済ゲートウェイ、広告ピクセルを割り出すWeb技術プロファイラ。',
      },
      {
        key: 'similarweb',
        name: 'Similarweb',
        url: 'https://www.similarweb.com/',
        domain: 'similarweb.com',
        category: 'intelligence',
        description:
          'トラフィックのベンチマーク、流入元、オーディエンスの地域分布、検索インテントの内訳を提供する、デジタル市場情報プラットフォーム。',
      },
    ] as ResourceEntry[],
  },
} as const;

export type PageStrings = typeof pages;
