export enum ProjectCategory {
  MANIM = 'Manim / Math Animation',
  FACELESS = 'Faceless / Documentary',
  EDUCATIONAL = 'Educational Content',
  PROMO = 'Promotional / Ads'
}

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  description: string;
  image: string;
  tags: string[];
  views?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
  features: string[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}