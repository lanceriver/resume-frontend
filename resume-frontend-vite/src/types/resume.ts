export interface ContactInfo {
  name: string;
  location: string;
  residency: string;
  phone: string;
  email: string;
  linkedin: string;
  github: string;
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  highlights: string[];
  /** true = entry carried forward from the previous site, not in the current resume */
  legacy?: boolean;
}

export interface Education {
  degree: string;
  institution: string;
  startDate: string;
  endDate: string;
  coursework?: string[];
  details?: string;
}

export type SkillCategoryLabel =
  | 'Programming Languages'
  | 'Technologies'
  | 'Developer Tools';

export interface SkillCategory {
  label: SkillCategoryLabel;
  items: string[];
}

export interface Project {
  name: string;
  url: string;
  summary: string;
  highlights: string[];
  tech?: string[];
}

export interface Extracurricular {
  role: string;
  organization: string;
  location: string;
  startDate: string;
  endDate: string;
  highlights: string[];
}
