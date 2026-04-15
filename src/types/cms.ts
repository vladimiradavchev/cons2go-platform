// TypeScript interfaces matching Sanity schemas
export interface Consultant {
  _id?: string;
  name: string;
  title: string;
  category: string;
  rating: number;
  reviews: number;
  price: number;
  location: string;
  available: boolean;
  expertise: string[];
  avatar: string;
  badge: string;
  clients: number;
  responseRate: string;
  avgResponse: string;
  languages: string[];
  bio: string;
  completedProjects: number;
  specialization: string;
}

export interface Problem {
  _id?: string;
  title: string;
  category: string;
  budget: string;
  proposals: number;
  status: string;
  desc: string;
  author: string;
  companyName: string;
  timeAgo: string;
  tags: string[];
}

export interface BlogPost {
  _id?: string;
  slug?: { current: string };
  category: string;
  title: string;
  excerpt: string;
  author: string;
  avatar: string;
  date: string;
  readTime: string;
}

export interface JobPosting {
  _id?: string;
  title: string;
  dept: string;
  location: string;
  type: string;
  salary: string;
  stack: string;
}

export interface TeamMember {
  _id?: string;
  name: string;
  role: string;
  bio: string;
  avatar: string;
}

export interface Feature {
  icon?: string;
  title: string;
  desc: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  avatar: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  desc: string;
  features: string[];
  cta: string;
  highlighted: boolean;
}

export interface FAQ {
  q: string;
  a: string;
}

export interface Milestone {
  year: string;
  event: string;
  desc: string;
}

export interface Benefit {
  icon: string;
  title: string;
  desc: string;
}

export interface ComparisonRow {
  feature: string;
  starter: string;
  professional: string;
  enterprise: string;
}

export interface HomepageContent {
  heroTitle?: string;
  heroDesc?: string;
  features?: Feature[];
  testimonials?: Testimonial[];
  stats?: { value: string; label: string }[];
  ctaTitle?: string;
  ctaDesc?: string;
  ctaButtonText?: string;
  ctaHref?: string;
}

export interface SiteContent {
  homepage?: HomepageContent;
  pricingPlans?: PricingPlan[];
  comparisonRows?: ComparisonRow[];
  faqs?: FAQ[];
  aboutHeroTitle?: string;
  aboutHeroDesc?: string;
  aboutStory?: string[];
  aboutValues?: Feature[];
  aboutMilestones?: Milestone[];
  careersHeroTitle?: string;
  careersHeroDesc?: string;
  careerBenefits?: Benefit[];
}
