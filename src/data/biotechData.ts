import type { PipelineCandidate, InnovationPillar, ImpactStat, ResearchPublication } from '../types';

export const PIPELINE_DATA: PipelineCandidate[] = [
  {
    id: 'ax-101',
    code: 'AX-101 (OncoZen)',
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
    code: 'AX-204 (NeuroMend)',
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
    code: 'AX-309 (CardioVita)',
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
    code: 'AX-412 (SynOrgan)',
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
    code: 'AX-505 (PolyFold)',
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
    title: 'Quantum-Accelerated Protein Engineering',
    subtitle: 'De Novo Molecular Design',
    description: 'Our proprietary generative AI engine simulates sub-angstrom atomic interactions in real time, predicting protein folding dynamics and binding energies with 99.4% bench validation accuracy.',
    bullets: [
      'In-silico screening of 100M+ molecular variants in under 48 hours',
      'Quantum mechanical binding energy optimization',
      'Zero-shot target specificity prediction for minimal off-target interaction'
    ],
    metrics: [
      { label: 'Screening Speedup', value: '1,400x' },
      { label: 'Atomic Resolution', value: '0.65 Å' },
    ],
    visualType: 'folding'
  },
  {
    id: 'lnp-delivery',
    iconName: 'Target',
    title: 'Precision Organ-Targeted LNPs',
    subtitle: 'Cellular Tropism Engineering',
    description: 'Eliminating off-target liver accumulation through molecularly decorated lipid nanoparticle matrices engineered to cross difficult biological barriers like the Blood-Brain Barrier.',
    bullets: [
      'Organ-specific receptor ligand functionalization',
      'High mRNA encapsulation payload density (>96%)',
      'Biodegradable lipid backbone with minimal immunogenicity'
    ],
    metrics: [
      { label: 'Target Homing', value: '99.8%' },
      { label: 'BBB Permeability', value: '18.4%' },
    ],
    visualType: 'nanoparticle'
  },
  {
    id: 'crispr-cas14',
    iconName: 'Dna',
    title: 'Ultra-Compact Epigenetic Modulation',
    subtitle: 'Non-Cleaving Gene Regulation',
    description: 'Utilizing miniaturized Cas14 nucleases paired with chromatin remodeling enzymes to permanently silence pathogenic genes or activate protective pathways without genomic double-strand breaks.',
    bullets: [
      'Zero double-strand DNA breaks (eliminating translocation risks)',
      'Sub-20kb genetic payload size fits standard AAV and LNP delivery',
      'Reversible and inheritable transcriptional silencing'
    ],
    metrics: [
      { label: 'Off-Target Rate', value: '< 0.01%' },
      { label: 'Silencing Half-life', value: '> 18 Mos' },
    ],
    visualType: 'editing'
  },
  {
    id: 'bio-tissue',
    iconName: 'Activity',
    title: '3D Vascularized Organoid Chips',
    subtitle: 'High-Throughput In-Human Testing',
    description: 'Microfluidic patient-derived organ-on-a-chip platforms that replicate real physiological microenvironments, accelerating preclinical human data generation prior to Phase I clinical trials.',
    bullets: [
      'Perfused micro-vascular channels for nutrient and drug clearance dynamics',
      'Integrated optical and electrochemical biosensors',
      'Reduces preclinical animal reliance by over 80%'
    ],
    metrics: [
      { label: 'Clinical Predictability', value: '94.2%' },
      { label: 'Lead Time Reduction', value: '18 Months' },
    ],
    visualType: 'tissue'
  }
];

export const IMPACT_STATS: ImpactStat[] = [
  {
    id: 'molecules',
    label: 'Molecules Screened In-Silico',
    value: 450,
    suffix: 'M+',
    description: 'AI-generated target protein candidates evaluated'
  },
  {
    id: 'accuracy',
    label: 'Target Binding Accuracy',
    value: 99.8,
    suffix: '%',
    decimals: 1,
    description: 'Validated in wet-lab biophysical assays'
  },
  {
    id: 'trials',
    label: 'Active Clinical Programs',
    value: 5,
    suffix: ' Candidates',
    description: 'Therapeutic programs across Oncology, CNS & Cardiology'
  },
  {
    id: 'funding',
    label: 'Global Patent Portfolio',
    value: 128,
    suffix: ' Issued',
    description: 'Protected delivery vehicles & novel molecular structures'
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
