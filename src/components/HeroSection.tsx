import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Dna, Activity, Play } from 'lucide-react';
import { InteractiveHelixCanvas } from './canvas/InteractiveHelixCanvas';

interface HeroSectionProps {
  onOpenPartnerModal: () => void;
  onOpenWhitepaperModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = () => {
  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center overflow-hidden bio-grid-pattern">
      {/* Bioluminescent Background Aura */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-[var(--primary-color)]/10 rounded-full blur-[140px] pointer-events-none transition-colors duration-500" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[var(--secondary-color)]/10 rounded-full blur-[130px] pointer-events-none transition-colors duration-500" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Text & CTA Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Tagline */}
            <div className="inline-flex items-center gap-2.5 text-[var(--primary-color)] text-xs sm:text-sm font-mono tracking-widest uppercase">
              <Sparkles className="w-4 h-4 text-[var(--primary-color)] animate-pulse" />
              <span>AI-Driven Cellular Engineering & Quantum Docking</span>
            </div>

            {/* Main Visionary Headline */}
            <h1 className="font-outfit text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
              Synthesizing the Future of{' '}
              <span className="text-gradient-cyan">Cellular Therapeutics</span>
            </h1>

            {/* Subtitle */}
            <p className="text-slate-300 text-base sm:text-xl font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Beyond traditional gene therapy: Aetheria Bio leverages quantum-accelerated protein design and organ-targeted mRNA lipid nanoparticles to engineer curative, cell-precise modalities for previously undruggable genomes.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#pipeline"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] text-slate-950 font-extrabold text-xs uppercase tracking-widest hover:shadow-xl hover:shadow-[var(--glow-primary)] transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 group"
              >
                Explore Drug Pipeline
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#technology"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-950/80 border border-[var(--border-color)] text-slate-200 hover:text-white hover:border-[var(--primary-color)] hover:bg-slate-900/90 transition-all flex items-center justify-center gap-2.5 backdrop-blur-md group text-xs font-mono tracking-wider uppercase"
              >
                <Play className="w-4 h-4 text-[var(--primary-color)] group-hover:scale-110 transition-transform fill-[var(--primary-color)]/20" />
                Launch Bio-Workbench
              </a>
            </div>

            {/* Key Trust & Validation Badges */}
            <div className="pt-6 border-t border-[var(--border-color)] grid grid-cols-3 gap-4 max-w-xl mx-auto lg:mx-0 text-left">
              <div className="p-3 rounded-xl bg-slate-950/60 border border-[var(--border-color)]">
                <div className="font-outfit text-2xl lg:text-3xl font-extrabold text-[var(--primary-color)]">99.98%</div>
                <div className="text-[10px] text-slate-400 font-mono uppercase tracking-wider mt-0.5">Sub-Cellular Precision</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-950/60 border border-[var(--border-color)]">
                <div className="font-outfit text-2xl lg:text-3xl font-extrabold text-[var(--secondary-color)]">0.45 Å</div>
                <div className="text-[10px] text-slate-400 font-mono uppercase tracking-wider mt-0.5">Atomic Resolution</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-950/60 border border-[var(--border-color)]">
                <div className="font-outfit text-2xl lg:text-3xl font-extrabold text-[var(--accent-color)]">Phase II</div>
                <div className="text-[10px] text-slate-400 font-mono uppercase tracking-wider mt-0.5">Lead mRNA Program</div>
              </div>
            </div>
          </motion.div>

          {/* Right Interactive Visual - 3D DNA Canvas Helix */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative w-full h-[460px] lg:h-[560px] rounded-3xl glass-panel border border-[var(--primary-color)]/40 overflow-hidden shadow-2xl hud-corner-box">
              {/* Top Floating Badge */}
              <div className="absolute top-4 left-4 z-20 flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-950/90 border border-[var(--border-color)] text-xs font-mono text-[var(--badge-text)] backdrop-blur-md shadow-lg">
                <Dna className="w-4 h-4 text-[var(--primary-color)] animate-spin-slow" />
                <span>3D Atomic Helix Renderer v4.2</span>
              </div>

              <div className="absolute bottom-4 right-4 z-20 flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-950/90 border border-[var(--border-color)] text-[11px] font-mono text-slate-300 backdrop-blur-md">
                <Activity className="w-3.5 h-3.5 text-[var(--primary-color)]" />
                <span>Drag cursor to orbit molecular geometry</span>
              </div>

              {/* 3D Canvas Helix */}
              <InteractiveHelixCanvas interactive={true} speedMultiplier={1.2} className="w-full h-full" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
