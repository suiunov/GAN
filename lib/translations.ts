export type Locale = "zh" | "en";

export interface Translation {
  siteName: string;
  siteTagline: string;
  nav: {
    home: string;
    gallery: string;
    pricing: string;
    beforeAfter: string;
    appointment: string;
    payment: string;
    contact: string;
  };
  home: {
    heroTitle: string;
    heroSubtitle: string;
    ctaAppointment: string;
    ctaGallery: string;
    featuredTitle: string;
    processTitle: string;
    step1Title: string;
    step1Desc: string;
    step2Title: string;
    step2Desc: string;
    step3Title: string;
    step3Desc: string;
    step4Title: string;
    step4Desc: string;
  };
  gallery: {
    title: string;
    subtitle: string;
    filterAll: string;
    filterWall: string;
    filterFloor: string;
    filterTable: string;
    filterPortrait: string;
    filterCustom: string;
    size: string;
    material: string;
    duration: string;
    price: string;
  };
  pricing: {
    title: string;
    subtitle: string;
    perSqm: string;
    tierSmallTitle: string;
    tierSmallDesc: string;
    tierSmallPrice: string;
    tierMediumTitle: string;
    tierMediumDesc: string;
    tierMediumPrice: string;
    tierLargeTitle: string;
    tierLargeDesc: string;
    tierLargePrice: string;
    tierCustomTitle: string;
    tierCustomDesc: string;
    tierCustomPrice: string;
    includes: string;
    include1: string;
    include2: string;
    include3: string;
    include4: string;
    notIncludes: string;
    notInclude1: string;
    notInclude2: string;
    requestQuote: string;
  };
  beforeAfter: {
    title: string;
    subtitle: string;
    dragHint: string;
  };
  appointment: {
    title: string;
    subtitle: string;
    noticeTitle: string;
    notice1: string;
    notice2: string;
    notice3: string;
    name: string;
    phone: string;
    lineId: string;
    email: string;
    date: string;
    time: string;
    timeMorning: string;
    timeAfternoon: string;
    timeEvening: string;
    project: string;
    projectPlaceholder: string;
    submit: string;
    submitting: string;
    success: string;
    errorDate: string;
    errorRequired: string;
  };
  payment: {
    title: string;
    subtitle: string;
    bankTitle: string;
    bankName: string;
    bankAccount: string;
    bankHolder: string;
    linePayTitle: string;
    linePayDesc: string;
    walkinTitle: string;
    walkinDesc: string;
    timingTitle: string;
    timing1: string;
    timing2: string;
    timing3: string;
    slipTitle: string;
    slipDesc: string;
    slipName: string;
    slipAmount: string;
    slipFile: string;
    slipSubmit: string;
    slipSuccess: string;
  };
  contact: {
    title: string;
    subtitle: string;
    lineButton: string;
    phone: string;
    phoneValue: string;
    email: string;
    emailValue: string;
    address: string;
    addressValue: string;
    hours: string;
    hoursValue: string;
    walkin: string;
  };
  footer: {
    rights: string;
    builtBy: string;
  };
}

export const translations: Record<Locale, Translation> = {
  zh: {
    siteName: "馬賽克工藝坊",
    siteTagline: "手工馬賽克藝術 · 客製訂做",
    nav: {
      home: "首頁",
      gallery: "作品集",
      pricing: "價目表",
      beforeAfter: "改造前後",
      appointment: "預約",
      payment: "付款",
      contact: "聯絡我們",
    },
    home: {
      heroTitle: "用馬賽克說故事",
      heroSubtitle: "每一片碎瓷，拼出獨一無二的藝術",
      ctaAppointment: "立即預約",
      ctaGallery: "看作品集",
      featuredTitle: "精選作品",
      processTitle: "製作流程",
      step1Title: "1. 討論需求",
      step1Desc: "透過 LINE 或預約面談，告訴我們您的想法、空間和喜好。",
      step2Title: "2. 設計提案",
      step2Desc: "我們會繪製草圖、選擇材料，並提供完整報價。",
      step3Title: "3. 手工製作",
      step3Desc: "純手工切片、拼貼，每一片都經過細心安排。",
      step4Title: "4. 安裝交付",
      step4Desc: "完成後送達或現場安裝，永久保存的藝術品。",
    },
    gallery: {
      title: "作品集",
      subtitle: "瀏覽我們過去的手工馬賽克作品",
      filterAll: "全部",
      filterWall: "壁畫",
      filterFloor: "地板",
      filterTable: "桌面",
      filterPortrait: "肖像",
      filterCustom: "客製",
      size: "尺寸",
      material: "材料",
      duration: "工時",
      price: "價格",
    },
    pricing: {
      title: "價目表",
      subtitle: "透明定價，依尺寸與複雜度計算",
      perSqm: "每平方公尺",
      tierSmallTitle: "小型作品",
      tierSmallDesc: "30×30 公分以內，例如：杯墊、小型裝飾",
      tierSmallPrice: "NT$ 1,500 起",
      tierMediumTitle: "中型作品",
      tierMediumDesc: "30×30 到 100×100 公分，例如：桌面、小型壁飾",
      tierMediumPrice: "NT$ 8,000 起",
      tierLargeTitle: "大型作品",
      tierLargeDesc: "100×100 公分以上，例如：整面牆、地板",
      tierLargePrice: "NT$ 25,000 起",
      tierCustomTitle: "客製訂做",
      tierCustomDesc: "肖像、特殊形狀、特殊材料",
      tierCustomPrice: "另議",
      includes: "費用包含",
      include1: "材料費（瓷片、玻璃、黏著劑）",
      include2: "設計與草圖",
      include3: "純手工製作",
      include4: "大台北地區免費送達",
      notIncludes: "費用不含",
      notInclude1: "現場安裝（依距離報價）",
      notInclude2: "特殊進口材料",
      requestQuote: "索取客製報價",
    },
    beforeAfter: {
      title: "改造前後",
      subtitle: "拖動滑桿，看看馬賽克如何改變空間",
      dragHint: "← 拖動比較 →",
    },
    appointment: {
      title: "預約諮詢",
      subtitle: "請至少提前一天預約，方便我們安排行程",
      noticeTitle: "預約須知",
      notice1: "預約須至少提前 1 天（隔日以後）",
      notice2: "若有人在工作室，歡迎現場參觀（僅接受刷卡轉帳付款）",
      notice3: "確認預約後將透過 LINE 或電話聯絡您",
      name: "姓名",
      phone: "電話",
      lineId: "LINE ID",
      email: "電子信箱",
      date: "預約日期",
      time: "預約時段",
      timeMorning: "上午 (10:00 – 12:00)",
      timeAfternoon: "下午 (14:00 – 17:00)",
      timeEvening: "傍晚 (17:00 – 19:00)",
      project: "想討論的內容",
      projectPlaceholder: "請簡單描述您想做的作品、尺寸、預算等",
      submit: "送出預約",
      submitting: "送出中…",
      success: "預約已送出！我們會盡快透過 LINE 或電話與您確認。",
      errorDate: "預約日期須至少為明天",
      errorRequired: "請填寫必填欄位",
    },
    payment: {
      title: "付款方式",
      subtitle: "我們接受銀行轉帳與 LINE Pay",
      bankTitle: "銀行轉帳",
      bankName: "銀行：台灣銀行（004）",
      bankAccount: "帳號：123-456-789-012",
      bankHolder: "戶名：馬賽克工藝坊",
      linePayTitle: "LINE Pay",
      linePayDesc: "掃描 QR Code 即可付款",
      walkinTitle: "現場付款",
      walkinDesc: "若有人在工作室，歡迎直接到場，僅接受刷卡或轉帳",
      timingTitle: "轉帳到帳時間",
      timing1: "國內銀行轉帳：即時到帳（24 小時皆可）",
      timing2: "LINE Pay：即時到帳",
      timing3: "信用卡：客戶端即時，商家入帳約 1–3 個工作天",
      slipTitle: "上傳轉帳收據",
      slipDesc: "完成轉帳後，請上傳收據以便我們確認",
      slipName: "您的姓名",
      slipAmount: "金額（NT$）",
      slipFile: "收據截圖",
      slipSubmit: "送出收據",
      slipSuccess: "收據已收到，我們會盡快確認！",
    },
    contact: {
      title: "聯絡我們",
      subtitle: "歡迎透過 LINE 直接聯絡",
      lineButton: "用 LINE 聯絡",
      phone: "電話",
      phoneValue: "+886 912 345 678",
      email: "電子信箱",
      emailValue: "hello@mosaic-tw.example",
      address: "工作室地址",
      addressValue: "台北市大安區範例路 123 號",
      hours: "營業時間",
      hoursValue: "週二至週日 10:00 – 19:00（週一公休）",
      walkin: "現場參觀：若工作室有人，歡迎直接到場",
    },
    footer: {
      rights: "版權所有",
      builtBy: "純手工製作 · 用心拼貼",
    },
  },
  en: {
    siteName: "Mosaic Atelier",
    siteTagline: "Handmade Mosaic Art · Custom Commissions",
    nav: {
      home: "Home",
      gallery: "Gallery",
      pricing: "Pricing",
      beforeAfter: "Before & After",
      appointment: "Book",
      payment: "Payment",
      contact: "Contact",
    },
    home: {
      heroTitle: "Stories Told in Mosaic",
      heroSubtitle: "Every fragment of tile becomes a one-of-a-kind work of art",
      ctaAppointment: "Book a Consultation",
      ctaGallery: "View Gallery",
      featuredTitle: "Featured Works",
      processTitle: "Our Process",
      step1Title: "1. Discuss",
      step1Desc: "Tell us your idea via LINE or in a consultation — your space, style, and vision.",
      step2Title: "2. Design",
      step2Desc: "We sketch concepts, pick materials, and send a transparent quote.",
      step3Title: "3. Handcraft",
      step3Desc: "Every piece is cut and placed by hand — no shortcuts, no machines.",
      step4Title: "4. Install",
      step4Desc: "Delivery or on-site installation — built to last a lifetime.",
    },
    gallery: {
      title: "Gallery",
      subtitle: "Browse our past handmade mosaic works",
      filterAll: "All",
      filterWall: "Walls",
      filterFloor: "Floors",
      filterTable: "Tables",
      filterPortrait: "Portraits",
      filterCustom: "Custom",
      size: "Size",
      material: "Material",
      duration: "Time",
      price: "Price",
    },
    pricing: {
      title: "Price List",
      subtitle: "Transparent pricing based on size and complexity",
      perSqm: "per m²",
      tierSmallTitle: "Small",
      tierSmallDesc: "Up to 30×30 cm — coasters, small decor",
      tierSmallPrice: "from NT$ 1,500",
      tierMediumTitle: "Medium",
      tierMediumDesc: "30×30 to 100×100 cm — tabletops, small wall pieces",
      tierMediumPrice: "from NT$ 8,000",
      tierLargeTitle: "Large",
      tierLargeDesc: "Over 100×100 cm — full walls, floors",
      tierLargePrice: "from NT$ 25,000",
      tierCustomTitle: "Custom",
      tierCustomDesc: "Portraits, unusual shapes, special materials",
      tierCustomPrice: "Quote on request",
      includes: "Price includes",
      include1: "Materials (tile, glass, adhesive)",
      include2: "Design and sketches",
      include3: "100% handmade craftsmanship",
      include4: "Free delivery within Greater Taipei",
      notIncludes: "Not included",
      notInclude1: "On-site installation (quoted by distance)",
      notInclude2: "Special imported materials",
      requestQuote: "Request Custom Quote",
    },
    beforeAfter: {
      title: "Before & After",
      subtitle: "Drag the slider to see how mosaic transforms a space",
      dragHint: "← drag to compare →",
    },
    appointment: {
      title: "Book a Consultation",
      subtitle: "Please book at least 1 day in advance so we can plan our schedule",
      noticeTitle: "Booking Notes",
      notice1: "Bookings must be at least 1 day in advance (tomorrow or later)",
      notice2: "If someone is at the studio, walk-ins are welcome (card transfer payment only)",
      notice3: "We'll confirm via LINE or phone after you submit",
      name: "Name",
      phone: "Phone",
      lineId: "LINE ID",
      email: "Email",
      date: "Date",
      time: "Time",
      timeMorning: "Morning (10:00 – 12:00)",
      timeAfternoon: "Afternoon (14:00 – 17:00)",
      timeEvening: "Evening (17:00 – 19:00)",
      project: "What would you like to discuss?",
      projectPlaceholder: "Briefly describe the piece you want, size, budget, etc.",
      submit: "Submit Booking",
      submitting: "Submitting…",
      success: "Booking received! We'll contact you via LINE or phone soon.",
      errorDate: "Booking must be at least 1 day in advance",
      errorRequired: "Please fill in all required fields",
    },
    payment: {
      title: "Payment Methods",
      subtitle: "We accept bank transfer and LINE Pay",
      bankTitle: "Bank Transfer",
      bankName: "Bank: Bank of Taiwan (004)",
      bankAccount: "Account: 123-456-789-012",
      bankHolder: "Holder: Mosaic Atelier",
      linePayTitle: "LINE Pay",
      linePayDesc: "Scan the QR code to pay",
      walkinTitle: "Pay In-Person",
      walkinDesc: "If someone is at the studio, walk in any time — card transfer only",
      timingTitle: "Transfer Timing",
      timing1: "Domestic bank transfer: instant (24/7)",
      timing2: "LINE Pay: instant",
      timing3: "Credit card: instant for you, merchant receives funds in 1–3 business days",
      slipTitle: "Upload Payment Slip",
      slipDesc: "After transferring, upload your receipt so we can confirm",
      slipName: "Your name",
      slipAmount: "Amount (NT$)",
      slipFile: "Receipt screenshot",
      slipSubmit: "Submit Receipt",
      slipSuccess: "Receipt received — we'll confirm shortly!",
    },
    contact: {
      title: "Contact Us",
      subtitle: "The fastest way to reach us is LINE",
      lineButton: "Contact via LINE",
      phone: "Phone",
      phoneValue: "+886 912 345 678",
      email: "Email",
      emailValue: "hello@mosaic-tw.example",
      address: "Studio Address",
      addressValue: "No. 123, Example Road, Da'an District, Taipei",
      hours: "Hours",
      hoursValue: "Tue–Sun 10:00 – 19:00 (closed Mondays)",
      walkin: "Walk-ins welcome whenever the studio is open",
    },
    footer: {
      rights: "All rights reserved",
      builtBy: "Handmade with care · piece by piece",
    },
  },
};
