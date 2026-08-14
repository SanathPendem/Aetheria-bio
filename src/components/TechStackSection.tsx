import React from 'react';
import { TECH_STACK_FLOW } from '../data/biotechData';
import { ChevronRight } from 'lucide-react';

export const TechStackSection: React.FC = () => {
  return (
    <section className="relative py-20 bg-[#050B16] bio-grid-pattern overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center justify-center gap-2 text-cyan-400 text-xs sm:text-sm font-mono tracking-widest uppercase">
            ✦ END-TO-END COMPUTATIONAL STACK
          </div>
          <h2 className="font-outfit text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Our Technology <span className="text-gradient-cyan">Stack</span>
          </h2>
          <p className="text-[#AAB8C8] text-base sm:text-lg">
            A modular 7-stage architectural pipeline connecting generative machine learning to organ-targeted cellular delivery.
          </p>
        </div>

        {/* 7-Stage Flow Visualization Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-3">
          {TECH_STACK_FLOW.map((s, idx) => (
            <div
              key={s.id}
              className="p-4 rounded-2xl glass-panel border border-cyan-500/20 hover:border-cyan-400 transition-all space-y-2 relative group"
            >
              <div className="flex items-center justify-between text-xs font-mono text-cyan-400 font-bold">
                <span>{s.step}</span>
                {idx < 6 && <ChevronRight className="w-3.5 h-3.5 text-slate-600 hidden lg:block" />}
              </div>
              <h4 className="font-outfit text-sm font-bold text-white leading-tight">{s.name}</h4>
              <div className="text-[10px] font-mono text-cyan-300 font-semibold">{s.tech}</div>
              <p className="text-[11px] text-slate-400 leading-tight pt-1">{s.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
