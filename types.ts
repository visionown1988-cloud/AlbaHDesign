
export interface Skill {
  name: string;
  percentage: number;
}

export interface ExperienceItem {
  id: string;
  period: string;
  company: string;
  role: string;
  description: string[];
}

export interface PortfolioItem {
  id: string;
  category: PortfolioCategory;
  title: string;
  subtitle?: string;
  imageUrl: string;
}

export enum PortfolioCategory {
  ALL = 'ALL',
  BRAND = 'BRAND DESIGN',
  LAYOUT = 'LAYOUT DESIGN',
  VISUAL = 'VISUAL DESIGN',
  DIGITAL = 'DIGITAL DESIGN',
  PRODUCT = 'PRODUCT DESIGN'
}
