export type GoalTag =
  | "Tạo content"
  | "Tăng view"
  | "Kiếm tiền"
  | "Storytelling"
  | "Affiliate"
  | "Sức khỏe"
  | "Giáo dục"
  | "Miễn phí";

export type PlatformTag = "TikTok" | "YouTube" | "Facebook" | "Website" | "Affiliate";
export type PriceTag = "Miễn phí" | "Dưới 100K" | "100K-300K" | "Trên 300K";

export interface Tool {
  id: string;
  slug: string;
  name: string;
  category: string;
  goal: GoalTag[];
  platform: PlatformTag[];
  price: PriceTag;
  isFree: boolean;
  isFeatured: boolean;
  isNew?: boolean;
  shortDescription: string;
  longDescription: string;
  suitableFor: string[];
  outputs: string[];
  demo: string;
  productUrl?: string;
  faqs: { question: string; answer: string }[];
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  author: string;
  content: string[];
  faq: { question: string; answer: string }[];
  relatedToolSlugs: string[];
}
