import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ChevronRight } from 'lucide-react';
import { PIPELINE_DATA } from '../data/biotechData';
import type { PipelineCandidate } from '../types';

interface CapabilitiesProps {
  onOpenPartnerModal: () => void;
}

export const CapabilitiesSection: React.FC<CapabilitiesProps> = ({ onOpenPartnerModal }) => {
  const [filterModality, setFilterModality] = useState<string>('All');
  const [selectedCandidate, setSelectedCandidate] = useState<PipelineCandidate | null>(null);

  const filteredPipeline = PIPELINE_DATA.filter(
    (item) => filterModality === 'All' || item.modality === filterModality
  );

  const modalities = ['All', 'mRNA-LNP', 'CRISPR-Cas14', 'Synthetic Organoid', 'Protein Binder'];

  const getPhaseBadgeColor = (phase: string) => {
    switch (phase) {
      case 'Phase III':
        return 'bg-purple-950/70 border-purple-500/50 text-purple-300';
      case 'Phase II':
        return 'bg-cyan-950/70 border-cyan-500/50 text-cyan-300';
      case 'Phase I':
        return 'bg-emerald-950/70 border-emerald-500/50 text-emerald-300';
      case 'Preclinical':
        return 'bg-blue-950/70 border-blue-500/50 text-blue-300';
      default:
        return 'bg-slate-900 border-white/20 text-slate-300';
    }
  };

  return (
    <section id="pipeline" className="relative py-24 bg-[var(--bg-dark)] bio-dots-pattern overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-[var(--primary-color)] text-xs font-mono tracking-widest uppercase">
            03 / Clinical Modality Matrix & Capabilities
          </div>
          <h2 className="font-outfit text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Curative Modalities Engineered for <span className="text-gradient-purple">Undruggable Genomes</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Our pipeline addresses high unmet medical needs across oncology, neurodegeneration, and cardiovascular disease with proprietary targeted mRNA-LNP delivery systems.
          </p>
        </div>

        {/* Modality Filter Tabs */}
        <div className="flex items-center justify-center gap-2 flex-wrap">
          {modalities.map((mod) => (
            <button
              key={mod}
              onClick={() => setFilterModality(mod)}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase transition-all border ${
                filterModality === mod
                  ? 'bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] text-slate-950 border-transparent shadow-lg shadow-[var(--glow-primary)] font-extrabold'
                  : 'bg-slate-950/80 border-white/10 text-slate-300 hover:text-white hover:border-white/30'
              }`}
            >
              {mod === 'All' ? 'All Modalities' : mod}
            </button>
          ))}
        </div>

        {/* Pipeline Table / Matrix List */}
        <div className="space-y-4">
          {filteredPipeline.map((candidate) => (
            <div
              key={candidate.id}
              onClick={() => setSelectedCandidate(selectedCandidate?.id === candidate.id ? null : candidate)}
              className={`p-6 rounded-2xl glass-panel glass-panel-hover border transition-all duration-300 cursor-pointer ${
                selectedCandidate?.id === candidate.id
                  ? 'border-[var(--primary-color)] bg-slate-900/90 shadow-xl shadow-[var(--glow-primary)]'
                  : 'border-white/10 hover:border-white/20'
              }`}
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                
                {/* Left: Code, Indication & Target */}
                <div className="space-y-1 lg:w-1/3">
                  <div className="flex items-center gap-3">
                    <span className="font-outfit text-lg font-bold text-white">{candidate.code}</span>
                    <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-mono border ${getPhaseBadgeColor(candidate.phase)}`}>
                      {candidate.phase}
                    </span>
                  </div>
                  <div className="text-xs font-mono text-[var(--primary-color)]">{candidate.indication}</div>
                  <div className="text-xs text-slate-400">{candidate.name}</div>
                </div>

                {/* Center: Stage Progress Bar */}
                <div className="lg:w-1/3 space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-400">Clinical Stage Progress</span>
                    <span className="text-slate-200 font-bold">{candidate.progressPercentage}%</span>
                  </div>
                  <div className="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden p-0.5 border border-white/5">
                    <div
                      className="h-full bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] rounded-full transition-all duration-500 shadow-sm shadow-[var(--primary-color)]"
                      style={{ width: `${candidate.progressPercentage}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-[10px] font-mono text-slate-400 uppercase pt-1">
                    <span>Discovery</span>
                    <span>Preclinical</span>
                    <span>Phase I</span>
                    <span>Phase II</span>
                    <span>Phase III</span>
                  </div>
                </div>

                {/* Right: Modality Badge & Expand Button */}
                <div className="flex items-center justify-between lg:justify-end gap-4 lg:w-1/4">
                  <span className="px-3 py-1 rounded-lg bg-slate-950 border border-white/10 text-xs font-mono text-slate-300">
                    {candidate.modality}
                  </span>
                  <button className="p-2 rounded-xl bg-slate-900 border border-white/10 text-slate-300 hover:text-white hover:bg-slate-800">
                    <ChevronRight className={`w-5 h-5 transition-transform duration-300 ${selectedCandidate?.id === candidate.id ? 'rotate-90 text-[var(--primary-color)]' : ''}`} />
                  </button>
                </div>

              </div>

              {/* Expandable Details Drawer */}
              <AnimatePresence>
                {selectedCandidate?.id === candidate.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-6 pt-6 border-t border-white/10 space-y-4"
                  >
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {candidate.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-slate-950/80 p-4 rounded-xl border border-white/5 text-left">
                      <div>
                        <span className="text-[10px] font-mono uppercase text-slate-400 block">Binding Affinity</span>
                        <span className="font-outfit font-bold text-[var(--primary-color)] text-sm">{candidate.keyData.bindingAffinity}</span>
                      </div>
                      <div>
                        <span className="text-[10px] font-mono uppercase text-slate-400 block">Target Tropism</span>
                        <span className="font-outfit font-bold text-[var(--secondary-color)] text-sm">{candidate.keyData.targetSelectivity}</span>
                      </div>
                      <div>
                        <span className="text-[10px] font-mono uppercase text-slate-400 block">In-Vivo Half-Life</span>
                        <span className="font-outfit font-bold text-[var(--accent-color)] text-sm">{candidate.keyData.inVivoHalfLife}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono text-slate-400">Clinical ID:</span>
                        <span className="text-xs font-mono text-[var(--badge-text)]">{candidate.clinicalTrialId || 'IND-Pending'}</span>
                      </div>
                      <button
                        onClick={onOpenPartnerModal}
                        className="px-4 py-2 rounded-xl bg-[var(--primary-color)]/20 border border-[var(--primary-color)]/40 text-[var(--badge-text)] hover:bg-[var(--primary-color)] hover:text-slate-950 font-semibold text-xs transition-colors flex items-center gap-1.5"
                      >
                        Inquire Licensing Opportunities
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Strategic Licensing Capabilities Box */}
        <div className="p-8 rounded-3xl glass-panel border border-[var(--primary-color)]/30 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl hud-corner-box">
          <div className="space-y-2">
            <h3 className="font-outfit text-2xl font-bold text-white">Platform Licensing & Co-Development</h3>
            <p className="text-slate-300 text-sm max-w-2xl">
              We partner with global biopharmaceutical leaders to deploy our generative AI protein engine and LNP delivery platforms against proprietary partner targets.
            </p>
          </div>
          <button
            onClick={onOpenPartnerModal}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] text-slate-950 font-bold text-xs uppercase tracking-wider hover:opacity-90 transition-all shrink-0 shadow-lg shadow-[var(--glow-primary)]"
          >
            Request Partnership Briefing
          </button>
        </div>

      </div>
    </section>
  );
};
