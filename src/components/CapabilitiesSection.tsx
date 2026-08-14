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
        return 'bg-purple-950 text-purple-300 border-purple-800';
      case 'Phase II':
        return 'bg-blue-950 text-blue-300 border-blue-800';
      case 'Phase I':
        return 'bg-emerald-950 text-emerald-300 border-emerald-800';
      case 'Preclinical':
        return 'bg-slate-900 text-slate-300 border-slate-700';
      default:
        return 'bg-slate-900 text-slate-300 border-slate-800';
    }
  };

  return (
    <section id="pipeline" className="relative py-20 bio-dots-pattern overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-200/80 text-slate-900 text-xs font-semibold uppercase tracking-wider">
            03 / Clinical Modality Matrix & Capabilities
          </div>
          <h2 className="font-outfit text-3xl sm:text-5xl font-extrabold text-[var(--text-main)] tracking-tight">
            Curative Modalities Engineered for <span className="text-gradient-cyan">Undruggable Genomes</span>
          </h2>
          <p className="text-[var(--text-muted)] text-base sm:text-lg">
            Our pipeline addresses high unmet medical needs across oncology, neurodegeneration, and cardiovascular disease with proprietary targeted mRNA-LNP delivery systems.
          </p>
        </div>

        {/* Modality Filter Tabs */}
        <div className="flex items-center justify-center gap-2 flex-wrap">
          {modalities.map((mod) => (
            <button
              key={mod}
              onClick={() => setFilterModality(mod)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase transition-all border ${
                filterModality === mod
                  ? 'bg-slate-950 text-white border-slate-950 shadow-md font-extrabold'
                  : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'
              }`}
            >
              {mod === 'All' ? 'All Modalities' : mod}
            </button>
          ))}
        </div>

        {/* Pipeline Table / Bento Matrix List */}
        <div className="space-y-4">
          {filteredPipeline.map((candidate) => (
            <div
              key={candidate.id}
              onClick={() => setSelectedCandidate(selectedCandidate?.id === candidate.id ? null : candidate)}
              className={`p-6 rounded-[28px] glass-panel glass-panel-hover border transition-all duration-300 cursor-pointer ${
                selectedCandidate?.id === candidate.id
                  ? 'border-blue-600 shadow-xl bg-white'
                  : 'border-slate-200 hover:border-slate-300'
              }`}
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                
                {/* Left: Code, Indication & Target */}
                <div className="space-y-1 lg:w-1/3">
                  <div className="flex items-center gap-3">
                    <span className="font-outfit text-xl font-bold text-slate-950">{candidate.code}</span>
                    <span className={`px-3 py-0.5 rounded-full text-[11px] font-mono border ${getPhaseBadgeColor(candidate.phase)}`}>
                      {candidate.phase}
                    </span>
                  </div>
                  <div className="text-xs font-mono text-blue-600 font-bold">{candidate.indication}</div>
                  <div className="text-xs text-slate-500">{candidate.name}</div>
                </div>

                {/* Center: Stage Progress Bar */}
                <div className="lg:w-1/3 space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-500">Clinical Stage Progress</span>
                    <span className="text-slate-950 font-bold">{candidate.progressPercentage}%</span>
                  </div>
                  <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden p-0.5 border border-slate-200">
                    <div
                      className="h-full bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full transition-all duration-500 shadow-sm"
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
                  <span className="px-3.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-mono text-slate-800 font-bold">
                    {candidate.modality}
                  </span>
                  <button className="p-2 rounded-full bg-slate-950 text-white hover:bg-slate-800 transition-all">
                    <ChevronRight className={`w-5 h-5 transition-transform duration-300 ${selectedCandidate?.id === candidate.id ? 'rotate-90 text-cyan-400' : ''}`} />
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
                    className="mt-6 pt-6 border-t border-slate-200 space-y-4"
                  >
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {candidate.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-slate-950 text-white p-5 rounded-2xl text-left">
                      <div>
                        <span className="text-[10px] font-mono uppercase text-slate-400 block">Binding Affinity</span>
                        <span className="font-outfit font-bold text-cyan-400 text-sm">{candidate.keyData.bindingAffinity}</span>
                      </div>
                      <div>
                        <span className="text-[10px] font-mono uppercase text-slate-400 block">Target Tropism</span>
                        <span className="font-outfit font-bold text-emerald-400 text-sm">{candidate.keyData.targetSelectivity}</span>
                      </div>
                      <div>
                        <span className="text-[10px] font-mono uppercase text-slate-400 block">In-Vivo Half-Life</span>
                        <span className="font-outfit font-bold text-purple-400 text-sm">{candidate.keyData.inVivoHalfLife}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono text-slate-500">Clinical ID:</span>
                        <span className="text-xs font-mono text-slate-900 font-bold">{candidate.clinicalTrialId || 'IND-Pending'}</span>
                      </div>
                      <button
                        onClick={onOpenPartnerModal}
                        className="px-5 py-2.5 rounded-full bg-slate-950 text-white hover:bg-slate-800 font-bold text-xs transition-colors flex items-center gap-1.5 shadow-md"
                      >
                        Inquire Licensing Opportunities
                        <ArrowUpRight className="w-3.5 h-3.5 text-cyan-400" />
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Strategic Licensing Capabilities Box */}
        <div className="p-8 rounded-[32px] bg-slate-950 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="space-y-2">
            <h3 className="font-outfit text-2xl font-bold text-white">Platform Licensing & Co-Development</h3>
            <p className="text-slate-400 text-sm max-w-2xl">
              We partner with global biopharmaceutical leaders to deploy our generative AI protein engine and LNP delivery platforms against proprietary partner targets.
            </p>
          </div>
          <button
            onClick={onOpenPartnerModal}
            className="px-8 py-3.5 rounded-full bg-white text-slate-950 font-extrabold text-xs uppercase tracking-wider hover:bg-slate-100 transition-all shrink-0 shadow-lg"
          >
            Request Partnership Briefing
          </button>
        </div>

      </div>
    </section>
  );
};
