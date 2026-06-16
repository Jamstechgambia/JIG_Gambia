export interface Property {
  id: string;
  title: string;
  slug: string;
  description: string;
  price: number;
  currency: string;
  location: string;
  region: string;
  size: number;
  sizeUnit: string;
  type: 'sale' | 'rent' | 'mortgage';
  images: string[];
  features: string[];
  isFeatured: boolean;
  coordinates?: {
    lat: number;
    lng: number;
  };
}

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  phone: string;
  image: string;
  recentSales: number;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  image: string;
  rating: number;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Stat {
  label: string;
  value: number;
  suffix?: string;
}

export interface Location {
  id: string;
  name: string;
  count: number;
}
