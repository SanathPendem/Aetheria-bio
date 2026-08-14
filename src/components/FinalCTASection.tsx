import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck, Dna, Play } from 'lucide-react';

interface FinalCTAProps {
  onOpenPartnerModal: () => void;
}

export const FinalCTASection: React.FC<FinalCTAProps> = ({ onOpenPartnerModal }) => {
  return (
    <section id="contact" className="relative py-24 bg-[#020711] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="p-10 lg:p-16 rounded-[32px] glass-panel border border-cyan-500/40 text-center space-y-8 shadow-2xl backdrop-blur-2xl relative overflow-hidden">
          
          {/* Subtle DNA background watermark */}
          <div className="absolute -right-20 -bottom-20 opacity-10 pointer-events-none">
            <Dna className="w-96 h-96 text-cyan-400" />
          </div>

          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-950/80 border border-cyan-500/30 text-cyan-300 text-xs sm:text-sm font-mono shadow-lg shadow-cyan-500/10 backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
            <span className="uppercase tracking-widest">✦ [ QUANTUM BIOLOGY + AI PROTEIN DOCKING ]</span>
          </div>

          <h2 className="font-outfit text-4xl sm:text-6xl font-extrabold text-white tracking-tight max-w-4xl mx-auto leading-tight">
            Architect Tomorrow’s <span className="text-gradient-cyan">Cures Today</span>
          </h2>

          <p className="text-[#AAB8C8] text-base sm:text-xl max-w-2xl mx-auto leading-relaxed">
            Join leading biopharmaceutical pioneers, venture funds, and clinical researchers in deploying Aetheria's quantum biology engine to conquer previously undruggable diseases.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={onOpenPartnerModal}
              className="w-full sm:w-auto px-8 py-4 rounded-full btn-gradient-primary text-slate-950 font-extrabold text-xs uppercase tracking-widest hover:shadow-2xl hover:shadow-cyan-500/40 transition-all flex items-center justify-center gap-2 group"
            >
              PARTNER WITH US
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="#technology"
              className="w-full sm:w-auto px-8 py-4 rounded-full btn-secondary-glass text-slate-200 hover:text-white transition-all flex items-center justify-center gap-2.5 backdrop-blur-md group text-xs font-mono tracking-wider uppercase"
            >
              <Play className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform fill-cyan-400/20" />
              ▷ LAUNCH BIO-WORKBENCH
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
