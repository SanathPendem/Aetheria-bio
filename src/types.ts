export interface PipelineCandidate {
  id: string;
  code: string;
  name: string;
  target: string;
  indication: string;
  modality: 'mRNA-LNP' | 'CRISPR-Cas14' | 'Synthetic Organoid' | 'Protein Binder';
  phase: 'Discovery' | 'Preclinical' | 'Phase I' | 'Phase II' | 'Phase III';
  progressPercentage: number;
  description: string;
  clinicalTrialId?: string;
  mechanisms: string[];
  keyData: {
    bindingAffinity: string;
    targetSelectivity: string;
    inVivoHalfLife: string;
  };
}

export interface InnovationPillar {
  id: string;
  iconName: string;
  title: string;
  subtitle: string;
  description: string;
  bullets: string[];
  metrics: { label: string; value: string }[];
  visualType: 'folding' | 'editing' | 'nanoparticle' | 'tissue';
}

export interface WorkbenchParams {
  bindingAffinity: number;
  cellularTropism: number;
  halfLifeDays: number;
  nanoparticleCharge: number;
  targetDisease: 'Oncology' | 'Neurodegeneration' | 'Cardiovascular' | 'Rare Genetic';
}

export interface SimulationResult {
  efficacyScore: number;
  offTargetRisk: number;
  bioAvailability: number;
  predictedSurvivalIncrease: string;
  status: 'OPTIMAL' | 'MODERATE' | 'SUGGEST_TUNING';
}

export interface ImpactStat {
  id: string;
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  description: string;
}

export interface ResearchPublication {
  id: string;
  title: string;
  journal: string;
  year: number;
  doi: string;
  authors: string;
  impactFactor: string;
}

export interface ResearchArticle {
  id: string;
  category: string;
  date: string;
  readTime: string;
  title: string;
  description: string;
  imageUrl?: string;
}

export interface TechStackStep {
  id: string;
  step: string;
  name: string;
  tech: string;
  description: string;
}
