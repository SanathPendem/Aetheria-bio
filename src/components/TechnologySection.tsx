import React from 'react';
import { Cpu, Dna, FlaskConical, ShieldCheck } from 'lucide-react';
import { BioWorkbenchSimulator } from './BioWorkbenchSimulator';

export const TechnologySection: React.FC = () => {
  const workflowSteps = [
    {
      step: '01',
      icon: <Cpu className="w-5 h-5 text-cyan-400" />,
      title: 'Target Genomics & In-Silico Folding',
      desc: 'Generative AI predicts multi-body protein folding and identifies cryptic druggable binding pockets.'
    },
    {
      step: '02',
      icon: <Dna className="w-5 h-5 text-emerald-400" />,
      title: 'LNP Nanocarrier Assembly',
      desc: 'Formulation of organ-tropic lipid nanoparticle matrices decorated with cell-homing ligands.'
    },
    {
      step: '03',
      icon: <FlaskConical className="w-5 h-5 text-purple-400" />,
      title: '3D Organoid Validation',
      desc: 'High-throughput microfluidic screening on human tissue-chips to validate pharmacokinetic profiles.'
    },
    {
      step: '04',
      icon: <ShieldCheck className="w-5 h-5 text-pink-400" />,
      title: 'Clinical Accelerated Translation',
      desc: 'Rapid transition into Phase I/II clinical trials backed by comprehensive IND-enabling packages.'
    }
  ];

  return (
    <section id="technology" className="relative py-24 bg-[#070A11] bio-grid-pattern overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-cyan-300 text-xs font-mono tracking-widest uppercase">
            02 / Technology & Research
          </div>
          <h2 className="font-outfit text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Scientific Pipeline & <span className="text-gradient-cyan">In-Silico Engine</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Our modular R&D architecture merges quantum computational biology with microfluidic human tissue validation to compress therapeutic development cycles from years to months.
          </p>
        </div>

        {/* Workflow Steps Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {workflowSteps.map((s, idx) => (
            <div key={idx} className="p-6 rounded-2xl glass-panel glass-panel-hover border border-white/10 space-y-4 relative group">
              <div className="flex items-center justify-between">
                <span className="font-mono text-2xl font-extrabold text-slate-400 group-hover:text-cyan-400 transition-colors">{s.step}</span>
                <div className="p-2.5 rounded-xl bg-slate-900 border border-white/10">{s.icon}</div>
              </div>
              <h3 className="font-outfit text-lg font-bold text-white">{s.title}</h3>
              <p className="text-slate-400 text-xs leading-relaxed">{s.desc}</p>
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
