import React, { useState } from 'react';
import { Cpu, Target, Dna, Activity, CheckCircle2, Zap } from 'lucide-react';
import { INNOVATION_PILLARS } from '../data/biotechData';
import type { InnovationPillar } from '../types';

export const InnovationSection: React.FC = () => {
  const [selectedPillar, setSelectedPillar] = useState<InnovationPillar>(INNOVATION_PILLARS[0]);
  const [comparisonTab, setComparisonTab] = useState<'aetheria' | 'traditional'>('aetheria');

  const getPillarIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-cyan-400" />;
      case 'Target':
        return <Target className="w-6 h-6 text-blue-400" />;
      case 'Dna':
        return <Dna className="w-6 h-6 text-violet-400" />;
      case 'Activity':
        return <Activity className="w-6 h-6 text-emerald-400" />;
      default:
        return <Zap className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section id="innovation" className="relative py-24 bio-dots-pattern overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 text-cyan-300 text-xs font-mono tracking-widest uppercase">
            ✦ Core Platform Capabilities
          </div>
          <h2 className="font-outfit text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
            The Intelligence <br />
            <span className="text-gradient-cyan">Behind the Biology</span>
          </h2>
          <p className="text-[#AAB8C8] text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Aetheria Bio combines artificial intelligence, quantum-inspired computation, protein engineering, and precision delivery into a unified therapeutic design platform.
          </p>
        </div>

        {/* 4 Deeptech Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {INNOVATION_PILLARS.map((pillar) => {
            const isSelected = selectedPillar.id === pillar.id;
            return (
              <div
                key={pillar.id}
                onClick={() => setSelectedPillar(pillar)}
                className={`p-6 rounded-[28px] glass-panel glass-panel-hover border transition-all cursor-pointer space-y-4 flex flex-col justify-between ${
                  isSelected
                    ? 'border-cyan-500/60 bg-slate-900/90 shadow-xl shadow-cyan-950/40'
                    : 'border-cyan-500/20 hover:border-cyan-500/40'
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-2xl bg-slate-950 border border-cyan-500/30">
                      {getPillarIcon(pillar.iconName)}
                    </div>
                    <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest">{pillar.subtitle}</span>
                  </div>
                  <h3 className="font-outfit text-xl font-bold text-white">{pillar.title}</h3>
                  <p className="text-[#AAB8C8] text-xs leading-relaxed">{pillar.description}</p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-cyan-300 font-bold">
                    {pillar.metrics[0].label}: {pillar.metrics[0].value}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Deep Dive Selected Feature Panel */}
        <div className="p-8 rounded-[32px] glass-panel border border-cyan-500/30 space-y-6 shadow-2xl relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-b border-white/10 pb-6">
            <div>
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">Platform Deep-Dive</span>
              <h3 className="font-outfit text-2xl lg:text-3xl font-extrabold text-white mt-1">
                {selectedPillar.title} — Technical Architecture
              </h3>
            </div>
            <div className="flex items-center gap-3">
              {selectedPillar.metrics.map((m, idx) => (
                <div key={idx} className="px-4 py-2 rounded-2xl bg-slate-950 border border-cyan-500/30 text-center">
                  <div className="font-outfit text-lg font-extrabold text-cyan-400">{m.value}</div>
                  <div className="text-[10px] text-slate-400 font-mono uppercase">{m.label}</div>
                </div>
              ))}
            </div>
          </div>

          <p className="text-[#AAB8C8] leading-relaxed text-base">
            {selectedPillar.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            {selectedPillar.bullets.map((bullet, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-slate-950/80 border border-white/10 flex items-start gap-3 text-xs text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>{bullet}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Platform Benchmark Comparison Bar */}
        <div className="p-8 rounded-[32px] bg-slate-950 border border-cyan-500/30 shadow-2xl space-y-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-white/10 pb-6">
            <div>
              <h3 className="font-outfit text-xl font-bold text-white">Platform Benchmark Matrix</h3>
              <p className="text-slate-400 text-xs">Comparing Aetheria Quantum-AI Platform vs. Legacy Wet-Lab Discovery</p>
            </div>
            <div className="flex items-center p-1 rounded-full bg-slate-900 border border-cyan-500/30">
              <button
                onClick={() => setComparisonTab('aetheria')}
                className={`px-5 py-2 rounded-full text-xs font-bold uppercase transition-all ${
                  comparisonTab === 'aetheria'
                    ? 'btn-gradient-primary text-slate-950 shadow-md font-extrabold'
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
            <div className="p-4 rounded-2xl bg-slate-900/80 border border-white/10">
              <span className="text-xs font-mono text-slate-400 uppercase">Target Discovery Time</span>
              <div className="font-outfit text-2xl font-bold text-cyan-400 mt-1">
                {comparisonTab === 'aetheria' ? '3 Weeks' : '2.5 Years'}
              </div>
              <span className="text-xs text-slate-400 mt-1 block">In-silico quantum screening vs wet-lab assays</span>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900/80 border border-white/10">
              <span className="text-xs font-mono text-slate-400 uppercase">Target Selectivity</span>
              <div className="font-outfit text-2xl font-bold text-cyan-400 mt-1">
                {comparisonTab === 'aetheria' ? '99.8%' : '65.0%'}
              </div>
              <span className="text-xs text-slate-400 mt-1 block">Zero off-target cellular toxicity</span>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900/80 border border-white/10">
              <span className="text-xs font-mono text-slate-400 uppercase">Preclinical Cost</span>
              <div className="font-outfit text-2xl font-bold text-cyan-400 mt-1">
                {comparisonTab === 'aetheria' ? '$1.2M / Lead' : '$18M / Lead'}
              </div>
              <span className="text-xs text-slate-400 mt-1 block">Organ-on-a-chip human predictability</span>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900/80 border border-white/10">
              <span className="text-xs font-mono text-slate-400 uppercase">Delivery Vehicle</span>
              <div className="font-outfit text-2xl font-bold text-cyan-400 mt-1">
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
