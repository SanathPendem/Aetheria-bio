import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck, Dna } from 'lucide-react';

interface FinalCTAProps {
  onOpenPartnerModal: () => void;
}

export const FinalCTASection: React.FC<FinalCTAProps> = ({ onOpenPartnerModal }) => {
  return (
    <section id="contact" className="relative py-24 bg-[#070A11] overflow-hidden">
      {/* Background Bioluminescent Radial Glow */}
      <div className="absolute inset-0 bg-hero-gradient pointer-events-none opacity-80" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="p-10 lg:p-16 rounded-3xl bg-gradient-to-br from-[#0E1424]/90 via-[#070A11]/95 to-[#0E1424]/90 border border-cyan-500/40 text-center space-y-8 shadow-2xl shadow-cyan-950/50 backdrop-blur-2xl relative overflow-hidden">
          
          {/* Subtle DNA background watermark */}
          <div className="absolute -right-20 -bottom-20 opacity-10 pointer-events-none">
            <Dna className="w-96 h-96 text-cyan-400" />
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 text-xs font-mono tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            05 / Accelerate Your Clinical Pipeline
          </div>

          <h2 className="font-outfit text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight max-w-4xl mx-auto leading-tight">
            Ready to Engineer the Next Era of <span className="text-gradient-cyan">Precision Medicine?</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-xl max-w-2xl mx-auto leading-relaxed">
            Partner with Aetheria Bio to leverage generative quantum protein engineering, organ-targeted LNP matrices, and microfluidic human organoid validation.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={onOpenPartnerModal}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-teal-400 to-emerald-500 text-black font-extrabold text-sm uppercase tracking-wider hover:shadow-2xl hover:shadow-cyan-500/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 group"
            >
              Partner With Us
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="#pipeline"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-900 border border-white/15 text-slate-200 hover:text-white hover:border-cyan-500/40 transition-all flex items-center justify-center gap-2 text-sm font-semibold"
            >
              Explore Drug Candidates
            </a>
          </div>

          {/* Compliance & Regulatory Strip */}
          <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-mono">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              GMP & GLP Compliant Facilities
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              FDA IND Fast-Track Supported
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-purple-400" />
              ISO 27001 Genomic Security
            </span>
          </div>

        </div>
      </div>
    </section>
  );
};
