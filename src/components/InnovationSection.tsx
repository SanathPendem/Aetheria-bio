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
        return <Cpu className="w-6 h-6 text-[var(--primary-color)]" />;
      case 'Target':
        return <Target className="w-6 h-6 text-[var(--secondary-color)]" />;
      case 'Dna':
        return <Dna className="w-6 h-6 text-[var(--accent-color)]" />;
      case 'Activity':
        return <Activity className="w-6 h-6 text-[var(--primary-color)]" />;
      default:
        return <Zap className="w-6 h-6 text-[var(--primary-color)]" />;
    }
  };

  return (
    <section id="innovation" className="relative py-24 bg-[var(--bg-dark)] bio-dots-pattern overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-[var(--primary-color)] text-xs font-mono tracking-widest uppercase">
            01 / Molecular Architecture & Vision
          </div>
          <h2 className="font-outfit text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Architecting Molecular Precision at <span className="text-gradient-emerald">Nanometer Scale</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Traditional biopharma relies on blind high-throughput screening. Aetheria Bio unifies quantum energy minimizations with deep tropism learning to synthesize targeted medicines strictly in silico.
          </p>
        </div>

        {/* Core Pillars Interactive Grid & Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-20">
          
          {/* Left Column: Interactive Pillar Cards Navigation */}
          <div className="lg:col-span-5 space-y-3">
            {INNOVATION_PILLARS.map((pillar) => {
              const isSelected = selectedPillar.id === pillar.id;
              return (
                <button
                  key={pillar.id}
                  onClick={() => setSelectedPillar(pillar)}
                  className={`w-full text-left p-5 rounded-2xl transition-all duration-300 border ${
                    isSelected
                      ? 'bg-slate-950/90 border-[var(--primary-color)] shadow-xl shadow-[var(--glow-primary)]'
                      : 'bg-slate-950/40 border-white/5 hover:border-white/20 hover:bg-slate-900/40'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl border ${isSelected ? 'bg-[var(--primary-color)]/10 border-[var(--primary-color)]/40' : 'bg-slate-900 border-white/10'}`}>
                      {getPillarIcon(pillar.iconName)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono text-[var(--badge-text)] uppercase tracking-wider">{pillar.subtitle}</span>
                        {isSelected && <span className="w-2 h-2 rounded-full bg-[var(--primary-color)] animate-ping" />}
                      </div>
                      <h3 className="font-outfit text-lg font-bold text-white mt-1">{pillar.title}</h3>
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
                className="p-8 rounded-3xl glass-panel border border-[var(--primary-color)]/30 space-y-6 shadow-2xl relative overflow-hidden hud-corner-box"
              >
                {/* Header */}
                <div className="flex items-center justify-between border-b border-[var(--border-color)] pb-6">
                  <div>
                    <span className="text-xs font-mono text-[var(--primary-color)] uppercase tracking-widest">Pillar Deep-Dive</span>
                    <h3 className="font-outfit text-2xl lg:text-3xl font-extrabold text-white mt-1">
                      {selectedPillar.title}
                    </h3>
                  </div>
                  <div className="hidden sm:flex gap-3">
                    {selectedPillar.metrics.map((m, idx) => (
                      <div key={idx} className="px-3.5 py-2 rounded-xl bg-slate-950/90 border border-[var(--border-color)] text-center">
                        <div className="font-outfit text-lg font-bold text-[var(--primary-color)]">{m.value}</div>
                        <div className="text-[10px] text-slate-400 font-mono uppercase">{m.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <p className="text-slate-300 leading-relaxed text-base">
                  {selectedPillar.description}
                </p>

                {/* Key Bullet Highlights */}
                <div className="space-y-3 pt-2">
                  <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider">Key Technological Breakthroughs</h4>
                  {selectedPillar.bullets.map((bullet, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-sm text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-[var(--primary-color)] shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* Interactive Comparison Banner: Aetheria vs Traditional Pharma */}
        <div className="mt-12 p-8 rounded-3xl bg-slate-950/90 border border-[var(--border-color)] shadow-2xl hud-corner-box">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-white/10 pb-6 mb-6">
            <div>
              <h3 className="font-outfit text-xl font-bold text-white">Platform Velocity Matrix: In-Silico Engine vs. Legacy Wet-Lab Assays</h3>
              <p className="text-slate-400 text-sm">Empirical speed and accuracy benchmark for therapeutic candidate optimization</p>
            </div>
            <div className="flex items-center p-1 rounded-xl bg-slate-900 border border-white/10">
              <button
                onClick={() => setComparisonTab('aetheria')}
                className={`px-4 py-2 rounded-lg text-xs font-bold uppercase transition-all ${
                  comparisonTab === 'aetheria'
                    ? 'bg-[var(--primary-color)] text-slate-950 shadow-md font-extrabold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Aetheria Platform
              </button>
              <button
                onClick={() => setComparisonTab('traditional')}
                className={`px-4 py-2 rounded-lg text-xs font-bold uppercase transition-all ${
                  comparisonTab === 'traditional'
                    ? 'bg-slate-700 text-white'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Traditional Pharma
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-left">
            <div className="p-4 rounded-xl bg-slate-900/60 border border-white/5">
              <span className="text-xs font-mono text-slate-400 uppercase">Target Discovery Time</span>
              <div className="font-outfit text-2xl font-bold text-white mt-1">
                {comparisonTab === 'aetheria' ? '3 Weeks' : '2.5 Years'}
              </div>
              <span className="text-xs text-slate-400 mt-1 block">In-silico quantum screening vs wet-lab assays</span>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/60 border border-white/5">
              <span className="text-xs font-mono text-slate-400 uppercase">Target Selectivity</span>
              <div className="font-outfit text-2xl font-bold text-white mt-1">
                {comparisonTab === 'aetheria' ? '99.98%' : '65.0%'}
              </div>
              <span className="text-xs text-slate-400 mt-1 block">Zero off-target cellular toxicity</span>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/60 border border-white/5">
              <span className="text-xs font-mono text-slate-400 uppercase">Preclinical Cost</span>
              <div className="font-outfit text-2xl font-bold text-white mt-1">
                {comparisonTab === 'aetheria' ? '$1.2M / Lead' : '$18M / Lead'}
              </div>
              <span className="text-xs text-slate-400 mt-1 block">Organ-on-a-chip human predictability</span>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/60 border border-white/5">
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
