export interface WorkCategory {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  items: WorkItem[];
}

export interface WorkItem {
  id: string;
  title: string;
  imageUrl: string;
  description: string;
}

export interface PriceItem {
  id: string;
  service: string;
  description: string;
  basePrice: string;
  notes?: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}