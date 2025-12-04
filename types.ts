export enum RiskLevel {
  LOW = 'Low Risk',
  MODERATE = 'Moderate Risk',
  HIGH = 'High Risk'
}

export interface Question {
  id: number;
  text: string;
}

export interface Option {
  label: string;
  score: number;
}

export interface ScreeningResult {
  score: number;
  level: RiskLevel;
  description: string;
}

export interface AiAnalysisResponse {
  advice: string;
  copingStrategies: string[];
}
