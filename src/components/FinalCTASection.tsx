import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck, Dna } from 'lucide-react';

interface FinalCTAProps {
  onOpenPartnerModal: () => void;
}

export const FinalCTASection: React.FC<FinalCTAProps> = ({ onOpenPartnerModal }) => {
  return (
    <section id="contact" className="relative py-24 bg-[var(--bg-dark)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="p-10 lg:p-16 rounded-3xl bg-slate-950/90 border border-[var(--primary-color)]/40 text-center space-y-8 shadow-2xl backdrop-blur-2xl relative overflow-hidden hud-corner-box">
          
          {/* Subtle DNA background watermark */}
          <div className="absolute -right-20 -bottom-20 opacity-10 pointer-events-none">
            <Dna className="w-96 h-96 text-[var(--primary-color)]" />
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-950/80 border border-[var(--badge-border)] text-[var(--badge-text)] text-xs font-mono tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[var(--primary-color)]" />
            05 / Accelerate Your Clinical Pipeline
          </div>

          <h2 className="font-outfit text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight max-w-4xl mx-auto leading-tight">
            Architect Tomorrow’s <span className="text-gradient-cyan">Cures Today</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-xl max-w-2xl mx-auto leading-relaxed">
            Join leading biopharmaceutical pioneers, venture funds, and clinical researchers in deploying Aetheria's quantum biology engine to conquer previously undruggable diseases.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={onOpenPartnerModal}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] text-slate-950 font-extrabold text-xs uppercase tracking-wider hover:shadow-2xl hover:shadow-[var(--glow-primary)] transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 group"
            >
              Partner With Us
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="#pipeline"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-900 border border-white/15 text-slate-200 hover:text-white hover:border-[var(--primary-color)] transition-all flex items-center justify-center gap-2 text-xs font-mono tracking-wider uppercase"
            >
              Explore Pipeline Candidates
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
              <ShieldCheck className="w-4 h-4 text-[var(--primary-color)]" />
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
