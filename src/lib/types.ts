import type { LucideIcon } from 'lucide-react';

export type Service = {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  heroImage: string;
  icon: LucideIcon;
  process: {
    step: number;
    title: string;
    description: string;
  }[];
  gallery: string[];
};

export type DigitalProductCategory = 'Presets' | 'LUTs' | 'Templates';

export type DigitalProduct = {
  id: string;
  slug: string;
  name: string;
  category: DigitalProductCategory;
  price: number;
  description: string;
  styleAndMood: string;
  compatibility: string;
  installation: string;
  coverImage: string;
  beforeImage?: string;
  afterImage?: string;
  mockupImages?: string[];
};

export type Order = {
  id: string;
  customerName: string;
  customerEmail: string;
  productName: string;
  price: number;
  date: string;
  status: 'Paid' | 'Pending' | 'Failed';
};

export type Lead = {
  id:string;
  name: string;
  email: string;
  service: string;
  date: string;
  status: 'New' | 'Contacted' | 'Closed';
};

export type AdminNavLink = {
  href: string;
  label: string;
  icon: LucideIcon;
};

export type Testimonial = {
  quote: string;
  name: string;
  title: string;
  avatar: string;
};
