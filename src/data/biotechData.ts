import type { PipelineCandidate, InnovationPillar, ImpactStat, ResearchPublication, ResearchArticle, TechStackStep } from '../types';

export const PIPELINE_DATA: PipelineCandidate[] = [
  {
    id: 'ax-101',
    code: 'AETH-101',
    name: 'Targeted Pan-KRAS Inhibitor mRNA-LNP',
    target: 'Mutant KRAS (G12D / G12V)',
    indication: 'Refractory Pancreatic & Non-Small Cell Lung Cancer',
    modality: 'mRNA-LNP',
    phase: 'Phase II',
    progressPercentage: 65,
    description: 'First-in-class lipid nanoparticle encapsulating self-amplifying mRNA designed to specifically target mutant KRAS driven tumors without toxicity to wild-type tissue.',
    clinicalTrialId: 'NCT05984120',
    mechanisms: ['Targeted LNP Endocytosis', 'In-Situ Tumor Antigen Translation', 'Immune Cell Recruitment'],
    keyData: {
      bindingAffinity: '0.42 nM (Kd)',
      targetSelectivity: '99.8% Tumor Tropism',
      inVivoHalfLife: '18.4 Hours',
    }
  },
  {
    id: 'ax-204',
    code: 'AETH-204',
    name: 'Blood-Brain Barrier Crossing CRISPR Cas14 Epigenetic Silencer',
    target: 'Tau & SNCA Protein Aggregates',
    indication: 'Early-onset Alzheimer\'s & Parkinson\'s Disease',
    modality: 'CRISPR-Cas14',
    phase: 'Phase I',
    progressPercentage: 40,
    description: 'Ultra-compact Cas14 nuclease delivered via novel receptor-mediated transcytosis LNPs to epigenetically silence hyper-phosphorylated Tau transcription.',
    clinicalTrialId: 'NCT06112940',
    mechanisms: ['BBB Receptor-Mediated Transcytosis', 'Catalytically Dead Cas14 Epigenetic Methylation', 'Synaptic Density Preservation'],
    keyData: {
      bindingAffinity: '0.12 nM (Kd)',
      targetSelectivity: '99.9% CNS Tissue Tropism',
      inVivoHalfLife: '24.1 Days Expression',
    }
  },
  {
    id: 'ax-309',
    code: 'AETH-309',
    name: 'In-Vivo Cardiac Myocyte Regenerative mRNA',
    target: 'Cyclin A2 / CDK2 Activation Path',
    indication: 'Post-Myocardial Infarction Heart Failure',
    modality: 'mRNA-LNP',
    phase: 'Phase III',
    progressPercentage: 88,
    description: 'Transient mRNA therapeutics promoting adult cardiomyocyte proliferation and ischemic zone revascularization, restoring ejection fraction post-infarction.',
    clinicalTrialId: 'NCT05419088',
    mechanisms: ['Ischemia-Directed Homing', 'Transient Cell-Cycle Entry', 'Neovascularization Induction'],
    keyData: {
      bindingAffinity: '0.85 nM (Kd)',
      targetSelectivity: '98.5% Myocardial Homing',
      inVivoHalfLife: '14.2 Hours',
    }
  },
  {
    id: 'ax-412',
    code: 'AETH-412',
    name: 'Vascularized Hepatic Micro-Organoid Matrix',
    target: 'FGF21 / ASGR1 Receptor Complex',
    indication: 'End-Stage Liver Failure & Metabolic NASH',
    modality: 'Synthetic Organoid',
    phase: 'Preclinical',
    progressPercentage: 25,
    description: 'Bio-printed 3D vascularized micro-tissues constructed with patient-derived iPSCs to replace lost hepatic metabolic function without systemic immunosuppression.',
    mechanisms: ['Microfluidic Vascular Integration', 'Autologous Immune Cloaking', 'Metabolic Flux Amplification'],
    keyData: {
      bindingAffinity: 'Native Bio-Integration',
      targetSelectivity: '99.9% Parenchymal Viability',
      inVivoHalfLife: 'Long-term Graft Survival',
    }
  },
  {
    id: 'ax-505',
    code: 'AETH-505',
    name: 'De Novo Designed Multi-Specific Proteate Neutralizer',
    target: 'Interleukin-17 / TNF-alpha Synergistic Node',
    indication: 'Treatment-Resistant Rheumatoid Arthritis & Psoriasis',
    modality: 'Protein Binder',
    phase: 'Discovery',
    progressPercentage: 15,
    description: 'Generative AI designed protein binder with picomolar binding affinity to dual inflammatory cytokine complexes, halting disease progression.',
    mechanisms: ['Bivalent Cytokine Trapping', 'Fc-Fusion Extension', 'Synovial Membrane Accumulation'],
    keyData: {
      bindingAffinity: '0.08 nM (Kd)',
      targetSelectivity: '100% Dual-Cytokine Complex',
      inVivoHalfLife: '21.0 Days',
    }
  }
];

export const INNOVATION_PILLARS: InnovationPillar[] = [
  {
    id: 'ai-folding',
    iconName: 'Cpu',
    title: 'AI Protein Design',
    subtitle: 'Generative Molecular Synthesis',
    description: 'Generative AI models simulate sub-angstrom atomic interactions in real time, designing novel therapeutic proteins optimized for specificity, stability, and cellular activity.',
    bullets: [
      'In-silico screening of 100M+ molecular variants in under 48 hours',
      'Quantum mechanical binding energy optimization',
      'Zero-shot target specificity prediction for minimal off-target interaction'
    ],
    metrics: [
      { label: 'Screening Velocity', value: '1,400x' },
      { label: 'Atomic Accuracy', value: '0.45 Å' },
    ],
    visualType: 'folding'
  },
  {
    id: 'quantum-docking',
    iconName: 'Target',
    title: 'Quantum Molecular Docking',
    subtitle: 'Sub-Atomic Energy Minimization',
    description: 'Quantum-accelerated simulations evaluate complex protein-ligand conformational states, calculating free energy changes (ΔG) with sub-picomolar accuracy.',
    bullets: [
      'Quantum mechanical interaction field mapping',
      'Cryptic pocket binding discovery across flexible protein targets',
      'Sub-nanosecond thermodynamic equilibrium predictions'
    ],
    metrics: [
      { label: 'Energy ΔG Accuracy', value: '99.4%' },
      { label: 'Kd Resolution', value: '0.08 nM' },
    ],
    visualType: 'editing'
  },
  {
    id: 'lnp-delivery',
    iconName: 'Dna',
    title: 'Precision mRNA Delivery',
    subtitle: 'Cellular Tropism Engineering',
    description: 'Eliminating off-target tissue accumulation through molecularly decorated lipid nanoparticle matrices engineered for organ-specific cellular delivery.',
    bullets: [
      'Organ-specific receptor ligand functionalization',
      'High mRNA encapsulation payload density (>96%)',
      'Biodegradable lipid backbone with minimal immunogenicity'
    ],
    metrics: [
      { label: 'Target Tropism', value: '99.8%' },
      { label: 'BBB Permeability', value: '18.4%' },
    ],
    visualType: 'nanoparticle'
  },
  {
    id: 'cellular-eng',
    iconName: 'Activity',
    title: 'Cellular Engineering',
    subtitle: 'Programmable Molecular Instructions',
    description: 'Re-engineering cellular behavior with precise genetic and post-translational instructions designed for previously undruggable disease pathways.',
    bullets: [
      'Compact Cas14 non-cleaving gene regulation',
      '3D vascularized microfluidic organoid validation',
      'Transient RNA-encoded cell state reprogramming'
    ],
    metrics: [
      { label: 'Off-Target Toxicity', value: '< 0.01%' },
      { label: 'Human Predictability', value: '96.4%' },
    ],
    visualType: 'tissue'
  }
];

export const IMPACT_STATS: ImpactStat[] = [
  {
    id: 'molecules',
    label: 'Molecular Simulations',
    value: 32,
    prefix: '',
    suffix: 'K+',
    description: 'AI-designed target protein candidates evaluated'
  },
  {
    id: 'trials',
    label: 'Therapeutic Programs',
    value: 15,
    prefix: '',
    suffix: '+',
    description: 'Active programs across Oncology, CNS & Cardiology'
  },
  {
    id: 'accuracy',
    label: 'Docking Confidence',
    value: 98.7,
    prefix: '',
    suffix: '%',
    decimals: 1,
    description: 'Validated in wet-lab biophysical assays'
  },
  {
    id: 'funding',
    label: 'Targeted Cell Types',
    value: 12,
    prefix: '',
    suffix: '',
    description: 'Organ-specific cell populations with proven tropism'
  }
];

export const PUBLICATIONS_DATA: ResearchPublication[] = [
  {
    id: 'pub-1',
    title: 'Sub-nanometer precision in de novo mRNA-LNP cell tropism engineering',
    journal: 'Nature Biotechnology',
    year: 2025,
    doi: '10.1038/s41587-025-01988-x',
    authors: 'Dr. V. Vance, Dr. E. Rostova, Dr. K. Nakamura et al.',
    impactFactor: '46.9'
  },
  {
    id: 'pub-2',
    title: 'Epigenetic silencing of Tau protein hyper-phosphorylation via compact Cas14 in primate models',
    journal: 'Cell Research',
    year: 2025,
    doi: '10.1016/j.cell.2025.04.012',
    authors: 'Dr. M. Chen, Dr. V. Vance et al.',
    impactFactor: '44.1'
  },
  {
    id: 'pub-3',
    title: 'Self-assembling vascularized myocardial organoids for ischemic tissue repair',
    journal: 'Science Translational Medicine',
    year: 2024,
    doi: '10.1126/scitranslmed.adf8841',
    authors: 'Dr. S. Al-Mansoor, Dr. A. Gupta et al.',
    impactFactor: '17.1'
  }
];

export const RESEARCH_ARTICLES: ResearchArticle[] = [
  {
    id: 'art-1',
    category: 'AI PROTEIN DESIGN',
    date: 'AUG 12, 2026',
    readTime: '6 MIN READ',
    title: 'How Generative Models Are Changing De Novo Drug Discovery',
    description: 'Exploring how sub-angstrom transformer models accurately predict multi-state protein interactions without trial-and-error wet-lab screening.'
  },
  {
    id: 'art-2',
    category: 'QUANTUM BIOLOGY',
    date: 'JUL 28, 2026',
    readTime: '8 MIN READ',
    title: 'The Computational Future of Molecular Simulation & Free Energy States',
    description: 'How quantum mechanical interaction fields calculate binding ΔG energy with sub-picomolar fidelity in complex cellular environments.'
  },
  {
    id: 'art-3',
    category: 'mRNA DELIVERY',
    date: 'JUL 14, 2026',
    readTime: '5 MIN READ',
    title: 'Engineering Precision Organ-Tropic Lipid Nanoparticle Carriers',
    description: 'Overcoming the liver accumulation bottleneck: ligand functionalization methods for receptor-mediated transcytosis across the BBB.'
  }
];

export const TECH_STACK_FLOW: TechStackStep[] = [
  { id: '1', step: '01', name: 'GenAI Engine', tech: 'AlphaFold3 & ESMFold Fine-Tuned Model', description: 'De novo generative sequences predicting initial binding target scaffolds.' },
  { id: '2', step: '02', name: 'Protein Design', tech: 'Sub-Angstrom Backbone Refinement', description: 'Optimizing side-chain conformational stability and surface charge.' },
  { id: '3', step: '03', name: 'Quantum Simulation', tech: 'Quantum Interaction Fields (ΔG)', description: 'Simulating thermodynamic binding free energy in real time.' },
  { id: '4', step: '04', name: 'Molecular Docking', tech: 'Cryptic Pocket Affinity Screening', description: 'Identifying hidden druggable allosteric sites with 98.7% confidence.' },
  { id: '5', step: '05', name: 'LNP Engineering', tech: 'Organ-Tropic Ligand Formulation', description: 'Functionalizing nanocarriers for targeted transcytosis and cell uptake.' },
  { id: '6', step: '06', name: 'Cellular Delivery', tech: 'Microfluidic Tissue-Chip Validation', description: 'Assessing organoid clearance, tropism, and pharmacokinetics.' },
  { id: '7', step: '07', name: 'Therapeutic Candidate', tech: 'Phase-Ready Clinical IND Package', description: 'Curative candidate transition into Phase I/II accelerated trials.' }
];
