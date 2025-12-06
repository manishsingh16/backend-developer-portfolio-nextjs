import { ReactNode } from 'react';

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
  tech: string[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  tech: string[];
  image: string;
  link?: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
  icon: ReactNode;
}

export interface NavItem {
  label: string;
  path: string;
}
