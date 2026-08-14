import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Target, Dna, Activity, CheckCircle2, Zap } from 'lucide-react';
import { INNOVATION_PILLARS } from '../data/biotechData';
import type { InnovationPillar } from '../types';

export const InnovationSection: React.FC = () => {
  const [selectedPillar, setSelectedPillar] = useState<InnovationPillar>(INNOVATION_PILLARS[0]);
  const [comparisonTab, setComparisonTab] = useState<'aetheria' | 'traditional'>('aetheria');

  const getPillarIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-blue-600" />;
      case 'Target':
        return <Target className="w-6 h-6 text-emerald-600" />;
      case 'Dna':
        return <Dna className="w-6 h-6 text-purple-600" />;
      case 'Activity':
        return <Activity className="w-6 h-6 text-pink-600" />;
      default:
        return <Zap className="w-6 h-6 text-blue-600" />;
    }
  };

  return (
    <section id="innovation" className="relative py-20 bio-dots-pattern overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-200/80 text-slate-900 text-xs font-semibold uppercase tracking-wider">
            01 / Innovation & Molecular Architecture
          </div>
          <h2 className="font-outfit text-3xl sm:text-5xl font-extrabold text-[var(--text-main)] tracking-tight">
            Architecting Molecular Precision at <span className="text-gradient-emerald">Nanometer Scale</span>
          </h2>
          <p className="text-[var(--text-muted)] text-base sm:text-lg">
            Traditional biopharma relies on trial-and-error screening. Aetheria Bio unifies generative quantum folding with cellular tropism matrices to synthesize targeted medicines strictly in silico.
          </p>
        </div>

        {/* Core Pillars Interactive Grid & Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Pillar Cards Navigation */}
          <div className="lg:col-span-5 space-y-3">
            {INNOVATION_PILLARS.map((pillar) => {
              const isSelected = selectedPillar.id === pillar.id;
              return (
                <button
                  key={pillar.id}
                  onClick={() => setSelectedPillar(pillar)}
                  className={`w-full text-left p-5 rounded-2xl transition-all duration-300 ${
                    isSelected
                      ? 'bento-card-dark text-white shadow-xl'
                      : 'bento-card-light hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl ${isSelected ? 'bg-slate-800 text-cyan-400' : 'bg-slate-200 text-slate-900'}`}>
                      {getPillarIcon(pillar.iconName)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className={`text-xs font-mono uppercase tracking-wider ${isSelected ? 'text-cyan-400' : 'text-blue-600'}`}>{pillar.subtitle}</span>
                        {isSelected && <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />}
                      </div>
                      <h3 className={`font-outfit text-lg font-bold mt-1 ${isSelected ? 'text-white' : 'text-slate-950'}`}>{pillar.title}</h3>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Detailed Selected Pillar Feature Highlight */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedPillar.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="p-8 rounded-[32px] glass-panel space-y-6 shadow-xl relative overflow-hidden border border-slate-200"
              >
                {/* Header */}
                <div className="flex items-center justify-between border-b border-slate-200 pb-6">
                  <div>
                    <span className="text-xs font-mono text-blue-600 uppercase tracking-widest">Pillar Deep-Dive</span>
                    <h3 className="font-outfit text-2xl lg:text-3xl font-extrabold text-slate-950 mt-1">
                      {selectedPillar.title}
                    </h3>
                  </div>
                  <div className="hidden sm:flex gap-3">
                    {selectedPillar.metrics.map((m, idx) => (
                      <div key={idx} className="px-4 py-2 rounded-2xl bg-slate-950 text-white text-center shadow-md">
                        <div className="font-outfit text-lg font-bold text-cyan-400">{m.value}</div>
                        <div className="text-[10px] text-slate-300 font-mono uppercase">{m.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <p className="text-slate-600 leading-relaxed text-base">
                  {selectedPillar.description}
                </p>

                {/* Key Bullet Highlights */}
                <div className="space-y-3 pt-2">
                  <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider">Key Technological Breakthroughs</h4>
                  {selectedPillar.bullets.map((bullet, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-sm text-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* Interactive Comparison Banner: Aetheria vs Traditional Pharma */}
        <div className="p-8 rounded-[32px] bg-slate-950 text-white shadow-2xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-slate-800 pb-6 mb-6">
            <div>
              <h3 className="font-outfit text-xl font-bold text-white">Platform Velocity Matrix: In-Silico Engine vs. Legacy Wet-Lab Assays</h3>
              <p className="text-slate-400 text-sm">Empirical speed and accuracy benchmark for therapeutic candidate optimization</p>
            </div>
            <div className="flex items-center p-1 rounded-full bg-slate-900 border border-slate-800">
              <button
                onClick={() => setComparisonTab('aetheria')}
                className={`px-5 py-2 rounded-full text-xs font-bold uppercase transition-all ${
                  comparisonTab === 'aetheria'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Aetheria Platform
              </button>
              <button
                onClick={() => setComparisonTab('traditional')}
                className={`px-5 py-2 rounded-full text-xs font-bold uppercase transition-all ${
                  comparisonTab === 'traditional'
                    ? 'bg-slate-800 text-white'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Traditional Pharma
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-left">
            <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800">
              <span className="text-xs font-mono text-slate-400 uppercase">Target Discovery Time</span>
              <div className="font-outfit text-2xl font-bold text-white mt-1">
                {comparisonTab === 'aetheria' ? '3 Weeks' : '2.5 Years'}
              </div>
              <span className="text-xs text-slate-400 mt-1 block">In-silico quantum screening vs wet-lab assays</span>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800">
              <span className="text-xs font-mono text-slate-400 uppercase">Target Selectivity</span>
              <div className="font-outfit text-2xl font-bold text-white mt-1">
                {comparisonTab === 'aetheria' ? '99.98%' : '65.0%'}
              </div>
              <span className="text-xs text-slate-400 mt-1 block">Zero off-target cellular toxicity</span>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800">
              <span className="text-xs font-mono text-slate-400 uppercase">Preclinical Cost</span>
              <div className="font-outfit text-2xl font-bold text-white mt-1">
                {comparisonTab === 'aetheria' ? '$1.2M / Lead' : '$18M / Lead'}
              </div>
              <span className="text-xs text-slate-400 mt-1 block">Organ-on-a-chip human predictability</span>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800">
              <span className="text-xs font-mono text-slate-400 uppercase">Delivery Vehicle</span>
              <div className="font-outfit text-2xl font-bold text-white mt-1">
                {comparisonTab === 'aetheria' ? 'Organ LNP Matrix' : 'Viral AAV / Systemic'}
              </div>
              <span className="text-xs text-slate-400 mt-1 block">Non-immunogenic targeted transcytosis</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
