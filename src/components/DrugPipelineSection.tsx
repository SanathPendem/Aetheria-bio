import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { PIPELINE_DATA } from '../data/biotechData';
import type { PipelineCandidate } from '../types';

interface DrugPipelineProps {
  onOpenPartnerModal: () => void;
}

export const DrugPipelineSection: React.FC<DrugPipelineProps> = ({ onOpenPartnerModal }) => {
  const [selectedCandidate, setSelectedCandidate] = useState<PipelineCandidate>(PIPELINE_DATA[0]);

  const pipelineStages = [
    { id: 'Discovery', label: '01 / DISCOVERY', desc: 'GenAI target identification & structural pocket mapping' },
    { id: 'AI Design', label: '02 / AI DESIGN', desc: 'De novo sequence optimization & folding simulation' },
    { id: 'Molecular Docking', label: '03 / DOCKING', desc: 'Quantum mechanical free energy ΔG binding prediction' },
    { id: 'In-Vitro', label: '04 / IN-VITRO', desc: 'Microfluidic organ-on-a-chip human tissue validation' },
    { id: 'Preclinical', label: '05 / PRECLINICAL', desc: 'Organ-tropic LNP formulation & IND safety testing' },
    { id: 'Clinical', label: '06 / CLINICAL', desc: 'Phase I/II human clinical trial advancement' },
  ];

  return (
    <section className="relative py-24 bg-[#050B16] bio-grid-pattern overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center justify-center gap-2 text-cyan-400 text-xs sm:text-sm font-mono tracking-widest uppercase">
            ✦ HORIZONTAL PIPELINE FLOW
          </div>
          <h2 className="font-outfit text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Integrated Drug Discovery <span className="text-gradient-cyan">Pipeline</span>
          </h2>
          <p className="text-[#AAB8C8] text-base sm:text-lg">
            Compressing 10+ year traditional development cycles into months through parallel in-silico quantum simulations and microfluidic human organoid validation.
          </p>
        </div>

        {/* Horizontal Pipeline Node Visualization Bar */}
        <div className="p-8 rounded-[32px] glass-panel border border-cyan-500/30 space-y-8 shadow-2xl relative overflow-hidden">
          <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest block font-bold">
            Development Continuum
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 relative z-10">
            {pipelineStages.map((stage, idx) => (
              <div
                key={stage.id}
                className="p-4 rounded-2xl bg-slate-950/90 border border-cyan-500/20 text-left space-y-2 relative group hover:border-cyan-400 transition-all"
              >
                <div className="flex items-center justify-between text-xs font-mono text-cyan-400 font-bold">
                  <span>{stage.label}</span>
                  {idx < 5 && <ChevronRight className="w-3.5 h-3.5 text-slate-500 hidden lg:block" />}
                </div>
                <h4 className="font-outfit text-sm font-bold text-white">{stage.id}</h4>
                <p className="text-[11px] text-slate-400 leading-tight">{stage.desc}</p>
                <div className="w-full h-1 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full mt-2" />
              </div>
            ))}
          </div>

          {/* Interactive Candidate Drawer Tabs */}
          <div className="pt-6 border-t border-white/10 space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-slate-300 uppercase tracking-wider font-bold">Select Active Candidate Program:</span>
              <span className="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                5 Programs Synchronized
              </span>
            </div>

            <div className="flex items-center gap-3 overflow-x-auto pb-2">
              {PIPELINE_DATA.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setSelectedCandidate(c)}
                  className={`px-5 py-2.5 rounded-full text-xs font-mono font-bold transition-all shrink-0 border ${
                    selectedCandidate.id === c.id
                      ? 'btn-gradient-primary text-slate-950 shadow-lg shadow-cyan-500/20'
                      : 'bg-slate-950 border-white/10 text-slate-300 hover:border-cyan-500/40 hover:text-white'
                  }`}
                >
                  {c.code} — {c.modality}
                </button>
              ))}
            </div>

            {/* Selected Candidate Detailed Inspection Drawer */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedCandidate.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="p-6 rounded-2xl bg-slate-950 border border-cyan-500/40 space-y-6"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  <div className="space-y-1">
                    <div className="flex items-center gap-3">
                      <span className="font-outfit text-2xl font-extrabold text-white">{selectedCandidate.code}</span>
                      <span className="px-3 py-1 rounded-full bg-cyan-950 border border-cyan-500/40 text-cyan-300 text-xs font-mono">
                        {selectedCandidate.phase}
                      </span>
                    </div>
                    <div className="text-sm font-mono text-cyan-400">{selectedCandidate.name}</div>
                    <div className="text-xs text-slate-400">Target Indication: {selectedCandidate.indication}</div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <div className="text-xs font-mono text-slate-400">Overall Progress</div>
                      <div className="font-outfit text-2xl font-bold text-cyan-400">{selectedCandidate.progressPercentage}%</div>
                    </div>
                    <button
                      onClick={onOpenPartnerModal}
                      className="px-6 py-3 rounded-full btn-gradient-primary text-slate-950 text-xs font-extrabold uppercase tracking-wider flex items-center gap-1.5 shadow-md"
                    >
                      Inquire Licensing
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {selectedCandidate.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-slate-900/80 p-4 rounded-xl border border-white/5 text-left">
                  <div>
                    <span className="text-[10px] font-mono uppercase text-slate-400 block">Binding Affinity (Kd)</span>
                    <span className="font-outfit font-bold text-cyan-400 text-sm">{selectedCandidate.keyData.bindingAffinity}</span>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-slate-400 block">Target Tropism</span>
                    <span className="font-outfit font-bold text-emerald-400 text-sm">{selectedCandidate.keyData.targetSelectivity}</span>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-slate-400 block">In-Vivo Expression</span>
                    <span className="font-outfit font-bold text-purple-400 text-sm">{selectedCandidate.keyData.inVivoHalfLife}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
};
