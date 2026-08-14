import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck, Dna } from 'lucide-react';

interface FinalCTAProps {
  onOpenPartnerModal: () => void;
}

export const FinalCTASection: React.FC<FinalCTAProps> = ({ onOpenPartnerModal }) => {
  return (
    <section id="contact" className="relative py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="p-10 lg:p-16 rounded-[36px] bg-slate-950 text-white text-center space-y-8 shadow-2xl relative overflow-hidden">
          
          {/* Subtle DNA background watermark */}
          <div className="absolute -right-20 -bottom-20 opacity-10 pointer-events-none">
            <Dna className="w-96 h-96 text-blue-500" />
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 text-xs font-mono tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            05 / Accelerate Your Clinical Pipeline
          </div>

          <h2 className="font-outfit text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight max-w-4xl mx-auto leading-tight">
            Architect Tomorrow’s <span className="text-cyan-400">Cures Today</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-xl max-w-2xl mx-auto leading-relaxed">
            Join leading biopharmaceutical pioneers, venture funds, and clinical researchers in deploying Aetheria's quantum biology engine to conquer previously undruggable diseases.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={onOpenPartnerModal}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-slate-950 font-extrabold text-xs uppercase tracking-wider hover:bg-slate-100 transition-all shadow-xl active:scale-95 flex items-center justify-center gap-2 group"
            >
              Start Now
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onOpenPartnerModal}
              className="w-full sm:w-auto px-8 py-4 rounded-full border border-slate-700 text-white hover:bg-slate-900 transition-all flex items-center justify-center gap-2 text-xs font-mono tracking-wider uppercase"
            >
              Contact Advisory Board
            </button>
          </div>

          {/* Compliance & Regulatory Strip */}
          <div className="pt-8 border-t border-slate-800 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-mono">
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
