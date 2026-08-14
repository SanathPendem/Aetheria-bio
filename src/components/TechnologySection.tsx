import React from 'react';
import { Cpu, Dna, FlaskConical, ShieldCheck } from 'lucide-react';
import { BioWorkbenchSimulator } from './BioWorkbenchSimulator';

export const TechnologySection: React.FC = () => {
  const workflowSteps = [
    {
      step: '01',
      icon: <Cpu className="w-5 h-5 text-blue-600" />,
      title: 'Target Genomics & In-Silico Folding',
      desc: 'Generative AI predicts multi-body protein folding and identifies cryptic druggable binding pockets.'
    },
    {
      step: '02',
      icon: <Dna className="w-5 h-5 text-emerald-600" />,
      title: 'LNP Nanocarrier Assembly',
      desc: 'Formulation of organ-tropic lipid nanoparticle matrices decorated with cell-homing ligands.'
    },
    {
      step: '03',
      icon: <FlaskConical className="w-5 h-5 text-purple-600" />,
      title: '3D Organoid Validation',
      desc: 'High-throughput microfluidic screening on human tissue-chips to validate pharmacokinetic profiles.'
    },
    {
      step: '04',
      icon: <ShieldCheck className="w-5 h-5 text-pink-600" />,
      title: 'Clinical Accelerated Translation',
      desc: 'Rapid transition into Phase I/II clinical trials backed by comprehensive IND-enabling packages.'
    }
  ];

  return (
    <section id="technology" className="relative py-20 bio-grid-pattern overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-200/80 text-slate-900 text-xs font-semibold uppercase tracking-wider">
            02 / Technology & Simulation Platform
          </div>
          <h2 className="font-outfit text-3xl sm:text-5xl font-extrabold text-[var(--text-main)] tracking-tight">
            Simulate the Sub-Atomic Frontier in <span className="text-gradient-cyan">Real-Time</span>
          </h2>
          <p className="text-[var(--text-muted)] text-base sm:text-lg">
            Our modular R&D architecture merges quantum computational biology with microfluidic human tissue validation to compress therapeutic development cycles from years to weeks.
          </p>
        </div>

        {/* Workflow Steps Bento Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {workflowSteps.map((s, idx) => (
            <div key={idx} className="p-6 rounded-[28px] bento-card-light glass-panel-hover border border-slate-200 space-y-4 relative group">
              <div className="flex items-center justify-between">
                <span className="font-mono text-2xl font-extrabold text-slate-400 group-hover:text-blue-600 transition-colors">{s.step}</span>
                <div className="p-2.5 rounded-2xl bg-slate-100 text-slate-900">{s.icon}</div>
              </div>
              <h3 className="font-outfit text-lg font-extrabold text-slate-950">{s.title}</h3>
              <p className="text-slate-600 text-xs leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Live Interactive Bio-Workbench Simulator Container */}
        <div>
          <BioWorkbenchSimulator />
        </div>

      </div>
    </section>
  );
};
