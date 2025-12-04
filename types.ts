export interface NavItem {
  label: string;
  path: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  mrr: string;
  timeframe: string;
  avatarUrl: string;
  videoThumbnail: string;
}

export interface Partner {
  name: string;
  logoUrl: string;
}

export interface RoadmapStep {
  title: string;
  description: string;
  icon: string;
  topics: string[];
  outcomes: string[];
}
