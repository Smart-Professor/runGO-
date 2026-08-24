/**
 * Aurora SaaS — 国际化类型定义
 * 新增语言时：
 *   1. 在 SUPPORTED_LOCALES 里注册（形如 "ja" | "ko" | "es-ES"）
 *   2. 新增 lib/i18n/locales/<code>.ts，字典形状必须严格等于 TranslationDict
 *   3. 在 lib/i18n/registry.ts 的 `translations` 里 import 并挂上
 */
export type Locale = "zh" | "en";

export const SUPPORTED_LOCALES: Locale[] = ["zh", "en"];
export const DEFAULT_LOCALE: Locale = "zh";
export const STORAGE_KEY = "aurora-locale";

/**
 * 字典类型：按模块分组（nav / home / generate / gallery / dashboard /
 * recharge / auth / points / common / toasts），
 * t() 调用支持点路径，例如 t("nav.features")
 */
export interface TranslationDict {
  common: {
    loading: string;
    retry: string;
    confirm: string;
    cancel: string;
    save: string;
    close: string;
    search: string;
    filter: string;
    sortBy: string;
    all: string;
    none: string;
    justNow: string;
    ago: string;
    download: string;
    share: string;
    copy: string;
    copied: string;
    delete: string;
    restore: string;
    favorite: string;
    unfavorite: string;
    viewDetail: string;
    back: string;
    viewAll: string;
    more: string;
  };
  nav: {
    logo: string;
    generate: string;
    gallery: string;
    dashboard: string;
    platform: string;
    features: string;
    pricing: string;
    pointsLabel: string;
    signIn: string;
    getStarted: string;
    openUserMenu: string;
    closeUserMenu: string;
    switchLanguage: string;
  };
  userMenu: {
    dashboard: string;
    gallery: string;
    createNew: string;
    recharge: string;
    admin: string;
    signOut: string;
    creatorPlaceholder: string;
  };
  home: {
    heroEyebrow: string;
    heroTitle: string;
    heroTitleAccent: string;
    heroSubtitle: string;
    heroPrimary: string;
    heroSecondary: string;
    trustText: string;
    logosEyebrow: string;
    statsBand: string;
    /** 统计行四个条目：SLA / Events / Latency / Teams */
    stats: string[];
    featuresSection: {
      eyebrow: string;
      title: string;
      subtitle: string;
      items: {
        title: string;
        desc: string;
      }[];
    };
    genCardsSection: {
      eyebrow: string;
      title: string;
      subtitle: string;
      myPoints: string;
      cta: string;
      cards: {
        tag: string;
        title: string;
        desc: string;
        cta: string;
      }[];
    };
    mascot: {
      eyebrow: string;
      title: string;
      desc: string;
      primaryCta: string;
      secondaryCta: string;
    };
    productSections: {
      badge: string;
      title: string;
      desc: string;
      bullets: string[];
    }[];
    pricingSection: {
      eyebrow: string;
      title: string;
      subtitle: string;
      popular: string;
      ctaFree: string;
      cta: string;
      plans: {
        name: string;
        price: string;
        period: string;
        desc: string;
        features: string[];
      }[];
    };
    testimonials: {
      eyebrow: string;
      title: string;
      items: {
        quote: string;
        name: string;
        role: string;
      }[];
    };
    ctaSection: {
      eyebrow: string;
      title: string;
      subtitle: string;
      primary: string;
      secondary: string;
    };
    faq: {
      eyebrow: string;
      title: string;
      q1: { q: string; a: string };
      q2: { q: string; a: string };
      q3: { q: string; a: string };
      q4: { q: string; a: string };
      q5: { q: string; a: string };
      q6: { q: string; a: string };
    };
    footer: {
      rights: string;
      tagline: string;
      status: string;
      cols: {
        h: string;
        items: string[];
      }[];
    };
  };
  generate: {
    title: string;
    subtitle: string;
    promptPlaceholder: string;
    promptLabel: string;
    pointsNow: string;
    aspectLabel: string;
    styleLabel: string;
    qualityLabel: string;
    standard: string;
    hd: string;
    ultra: string;
    costLabel: string;
    templatesLabel: string;
    generateButton: string;
    generating: string;
    creating: string;
    creatingDesc: string;
    notEnoughPoints: string;
    notEnoughPointsDesc: string;
    goRecharge: string;
    preview: string;
    original: string;
    previewPlaceholder: string;
    previewReady: string;
    previewReadyDesc: string;
    qualityBadgeLabel: string;
    aspectBadgeLabel: string;
    styleBadgeLabel: string;
    lastPromptTitle: string;
    tipsTitle: string;
    tip1: string;
    tip2: string;
    tip3: string;
    historyLabel: string;
    historyEmpty: string;
    historyEmptyDesc: string;
    download: string;
    copyPrompt: string;
    noPrompt: string;
  };
  gallery: {
    title: string;
    subtitle: string;
    searchPlaceholder: string;
    filterAll: string;
    filterFavorites: string;
    filterNormal: string;
    filterTrashed: string;
    sortNewest: string;
    sortOldest: string;
    sortExpensive: string;
    tabAll: string;
    tabFavorites: string;
    tabTrashed: string;
    tabCount: string;
    resultCount: string;
    favorite: string;
    unfavorite: string;
    view: string;
    download: string;
    delete: string;
    restore: string;
    empty: string;
    emptyDesc: string;
    emptyCta: string;
    emptyFav: string;
    emptyFavDesc: string;
    emptyTrash: string;
    emptyTrashDesc: string;
  };
  dashboard: {
    welcome: string;
    desc: string;
    primaryCta: string;
    secondaryCta: string;
    cards: {
      pointsTitle: string;
      pointsCta: string;
      generatedTitle: string;
      generatedCta: string;
      favoritesTitle: string;
      favoritesCta: string;
      creditsTitle: string;
      creditsCta: string;
    };
    overview: string;
    overviewDesc: string;
    qualityLabel: string;
    styleLabel: string;
    aspectLabel: string;
    recentWorks: string;
    emptyRecent: string;
    settings: string;
    settingsDesc: string;
    highContrast: string;
    highContrastDesc: string;
    reducedMotion: string;
    reducedMotionDesc: string;
    autoPlay: string;
    autoPlayDesc: string;
    recentTxs: string;
    quickLinks: string;
    totalGeneration: string;
    totalSpent: string;
  };
  recharge: {
    title: string;
    subtitle: string;
    currentBalance: string;
    canGenerateLabel: string;
    standardPiece: string;
    choosePackage: string;
    limitedOffer: string;
    popularLabel: string;
    bonusTag: string;
    perPointHint: string;
    entry: string;
    basic: string;
    pro: string;
    enterprise: string;
    buyNow: string;
    confirmPaymentTitle: string;
    confirmPaymentDesc: string;
    package: string;
    payAmount: string;
    payMethod: string;
    wechat: string;
    alipay: string;
    card: string;
    payNow: string;
    processing: string;
    records: string;
    type: string;
    description: string;
    pointsChange: string;
    amount: string;
    time: string;
    typeRecharge: string;
    typeConsume: string;
    typeBonus: string;
    faq: string;
    faq1Q: string;
    faq1A: string;
    faq2Q: string;
    faq2A: string;
    faq3Q: string;
    faq3A: string;
  };
  points: {
    qualityStandard: string;
    qualityHd: string;
    qualityUltra: string;
    typeBonus: string;
    typeRecharge: string;
    typeConsume: string;
    newUserBonus: string;
    rechargeOrder: string;
    generateImage: string;
  };
  toasts: {
    signOut: string;
    generateSuccess: string;
    generateFail: string;
    notEnoughPoints: string;
    notEnoughPointsDesc: string;
    rechargeSuccess: string;
    rechargeSuccessDesc: string;
    paymentSuccess: string;
    paymentProcessing: string;
    favoriteOn: string;
    favoriteOff: string;
    imageCopied: string;
    download: string;
    downloadFail: string;
    imageDeleted: string;
    imageRestored: string;
    pointsLoaded: string;
    themeLight: string;
    themeDark: string;
    langSwitched: string;
  };
  auth: {
    signInTitle: string;
    signInSubtitle: string;
    signUpTitle: string;
    signUpSubtitle: string;
    email: string;
    emailPlaceholder: string;
    password: string;
    passwordPlaceholder: string;
    name: string;
    namePlaceholder: string;
    confirmPassword: string;
    confirmPasswordPlaceholder: string;
    signInBtn: string;
    signUpBtn: string;
    signingIn: string;
    signingUp: string;
    continueWith: string;
    oauthGoogle: string;
    oauthGithub: string;
    oauthWechat: string;
    divider: string;
    noAccount: string;
    createOne: string;
    hasAccount: string;
    signInInstead: string;
    forgotPassword: string;
    resetEmailSent: string;
    backToSignIn: string;
  };
}
