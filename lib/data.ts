export type GalleryCategory = "wall" | "floor" | "table" | "portrait" | "custom";

export interface GalleryItem {
  id: string;
  category: GalleryCategory;
  titleZh: string;
  titleEn: string;
  image: string;
  sizeZh: string;
  sizeEn: string;
  materialZh: string;
  materialEn: string;
  durationZh: string;
  durationEn: string;
  price: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: "g1",
    category: "wall",
    titleZh: "藍色海洋壁畫",
    titleEn: "Ocean Blue Mural",
    image: "https://images.unsplash.com/photo-1604147706283-d7119b5b822c?w=800&q=80",
    sizeZh: "200 × 150 公分",
    sizeEn: "200 × 150 cm",
    materialZh: "義大利玻璃馬賽克",
    materialEn: "Italian glass mosaic",
    durationZh: "約 6 週",
    durationEn: "~6 weeks",
    price: "NT$ 85,000",
  },
  {
    id: "g2",
    category: "floor",
    titleZh: "幾何圖案地板",
    titleEn: "Geometric Floor",
    image: "https://images.unsplash.com/photo-1615876234886-fd9a39fda97f?w=800&q=80",
    sizeZh: "3 × 3 公尺",
    sizeEn: "3 × 3 m",
    materialZh: "瓷磚 + 大理石",
    materialEn: "Ceramic + marble",
    durationZh: "約 10 週",
    durationEn: "~10 weeks",
    price: "NT$ 180,000",
  },
  {
    id: "g3",
    category: "table",
    titleZh: "圓形花卉桌面",
    titleEn: "Floral Round Tabletop",
    image: "https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=800&q=80",
    sizeZh: "直徑 80 公分",
    sizeEn: "80 cm diameter",
    materialZh: "彩色玻璃",
    materialEn: "Stained glass",
    durationZh: "約 3 週",
    durationEn: "~3 weeks",
    price: "NT$ 22,000",
  },
  {
    id: "g4",
    category: "portrait",
    titleZh: "客製人像",
    titleEn: "Custom Portrait",
    image: "https://images.unsplash.com/photo-1582408921715-18e7806365c1?w=800&q=80",
    sizeZh: "60 × 80 公分",
    sizeEn: "60 × 80 cm",
    materialZh: "微型瓷片",
    materialEn: "Micro ceramic tiles",
    durationZh: "約 8 週",
    durationEn: "~8 weeks",
    price: "NT$ 65,000",
  },
  {
    id: "g5",
    category: "wall",
    titleZh: "山水意境壁畫",
    titleEn: "Mountain Landscape",
    image: "https://images.unsplash.com/photo-1604147495798-57beb5d6af73?w=800&q=80",
    sizeZh: "180 × 90 公分",
    sizeEn: "180 × 90 cm",
    materialZh: "陶瓷 + 金屬箔",
    materialEn: "Ceramic + metal leaf",
    durationZh: "約 7 週",
    durationEn: "~7 weeks",
    price: "NT$ 72,000",
  },
  {
    id: "g6",
    category: "table",
    titleZh: "咖啡桌方形拼貼",
    titleEn: "Square Coffee Table",
    image: "https://images.unsplash.com/photo-1567016526105-22da7c13161a?w=800&q=80",
    sizeZh: "60 × 60 公分",
    sizeEn: "60 × 60 cm",
    materialZh: "玻璃 + 貝殼",
    materialEn: "Glass + shell",
    durationZh: "約 4 週",
    durationEn: "~4 weeks",
    price: "NT$ 18,000",
  },
  {
    id: "g7",
    category: "custom",
    titleZh: "店面招牌",
    titleEn: "Shop Signage",
    image: "https://images.unsplash.com/photo-1618221941644-7d7f5fbe3b1f?w=800&q=80",
    sizeZh: "120 × 60 公分",
    sizeEn: "120 × 60 cm",
    materialZh: "玻璃馬賽克",
    materialEn: "Glass mosaic",
    durationZh: "約 4 週",
    durationEn: "~4 weeks",
    price: "NT$ 28,000",
  },
  {
    id: "g8",
    category: "floor",
    titleZh: "玄關地板",
    titleEn: "Entryway Floor",
    image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=800&q=80",
    sizeZh: "150 × 100 公分",
    sizeEn: "150 × 100 cm",
    materialZh: "石材馬賽克",
    materialEn: "Stone mosaic",
    durationZh: "約 5 週",
    durationEn: "~5 weeks",
    price: "NT$ 45,000",
  },
];

export interface BeforeAfterItem {
  id: string;
  before: string;
  after: string;
  titleZh: string;
  titleEn: string;
  descZh: string;
  descEn: string;
}

export const beforeAfterItems: BeforeAfterItem[] = [
  {
    id: "ba1",
    before: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80",
    after: "https://images.unsplash.com/photo-1615876234886-fd9a39fda97f?w=1200&q=80",
    titleZh: "玄關地板改造",
    titleEn: "Entryway Floor Transformation",
    descZh: "從平凡的磁磚到藝術地板",
    descEn: "From plain tile to art floor",
  },
  {
    id: "ba2",
    before: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1200&q=80",
    after: "https://images.unsplash.com/photo-1604147706283-d7119b5b822c?w=1200&q=80",
    titleZh: "客廳主牆",
    titleEn: "Living Room Feature Wall",
    descZh: "空白牆面變成藝術焦點",
    descEn: "Blank wall becomes the focal point",
  },
  {
    id: "ba3",
    before: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=1200&q=80",
    after: "https://images.unsplash.com/photo-1567016526105-22da7c13161a?w=1200&q=80",
    titleZh: "舊桌翻新",
    titleEn: "Old Table Restored",
    descZh: "舊家具煥然一新",
    descEn: "Old furniture brought back to life",
  },
];
