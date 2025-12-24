
export interface ServiceCardProps {
  category: string;
  title: string;
  description: string;
  icon: string;
  services: string[];
  theme: 'dark' | 'light';
}

export interface SubService {
  name: string;
  icon: string;
  desc: string;
  capabilities: string[];
}

export interface ServiceCategory {
  id: string;
  headline: string;
  purpose: string;
  bg: string;
  accent: string;
  image: string;
  services: SubService[];
}

export interface Solution {
  id: string;
  name: string;
  description: string;
  features: string[];
  icon: string;
}

export interface Stat {
  label: string;
  value: string;
  suffix: string;
}

export enum ToolType {
  CODE_ANALYSIS = 'code_analysis',
  VISUAL_REDESIGN = 'visual_redesign',
  LIVE_BRAINSTORM = 'live_brainstorm',
  DEPLOYMENT = 'deployment',
}

export interface AnalysisResult {
  suggestions: string[];
  refactoredCode?: string;
  explanation: string;
}
