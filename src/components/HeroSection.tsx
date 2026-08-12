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
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-emerald-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Text & CTA Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Tagline Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-cyan-300 text-xs sm:text-sm font-medium shadow-lg shadow-cyan-500/10 backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
              <span>Next-Gen Synthetic Biology & AI Protein Folding</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-outfit text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
              Decoding Life.{' '}
              <span className="text-gradient-cyan">Engineering Tomorrow.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-slate-300 text-base sm:text-xl font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Aetheria Bio leverages quantum-accelerated AI protein design and organ-targeted mRNA lipid nanoparticles to develop curative, cell-precise therapeutics for previously undruggable targets.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#pipeline"
                className="w-full sm:w-auto px-7 py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-teal-400 to-emerald-500 text-black font-bold text-sm uppercase tracking-wider hover:shadow-xl hover:shadow-cyan-500/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 group"
              >
                Explore Drug Pipeline
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#technology"
                className="w-full sm:w-auto px-7 py-4 rounded-xl bg-slate-900/80 border border-white/15 text-slate-200 hover:text-white hover:border-cyan-500/50 hover:bg-slate-800/80 transition-all flex items-center justify-center gap-2.5 backdrop-blur-md group text-sm font-medium"
              >
                <Play className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform fill-cyan-400/20" />
                Launch Bio-Workbench Simulator
              </a>
            </div>

            {/* Key Trust & Validation Badges */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-3 gap-4 max-w-xl mx-auto lg:mx-0 text-left">
              <div>
                <div className="font-outfit text-2xl lg:text-3xl font-extrabold text-cyan-400">99.8%</div>
                <div className="text-xs text-slate-400 font-mono mt-0.5">Target Selectivity</div>
              </div>
              <div>
                <div className="font-outfit text-2xl lg:text-3xl font-extrabold text-emerald-400">0.65 Å</div>
                <div className="text-xs text-slate-400 font-mono mt-0.5">Atomic Resolution</div>
              </div>
              <div>
                <div className="font-outfit text-2xl lg:text-3xl font-extrabold text-purple-400">Phase II</div>
                <div className="text-xs text-slate-400 font-mono mt-0.5">Lead mRNA Program</div>
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
            <div className="relative w-full h-[450px] lg:h-[550px] rounded-3xl glass-panel border border-cyan-500/30 overflow-hidden shadow-2xl shadow-cyan-950/40">
              {/* Top Floating Badge */}
              <div className="absolute top-4 left-4 z-20 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-950/80 border border-white/10 text-xs font-mono text-cyan-300 backdrop-blur-md shadow-lg">
                <Dna className="w-3.5 h-3.5 text-cyan-400 animate-spin-slow" />
                <span>3D Interactive DNA Double Helix</span>
              </div>

              <div className="absolute bottom-4 right-4 z-20 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-950/80 border border-white/10 text-[11px] font-mono text-slate-400 backdrop-blur-md">
                <Activity className="w-3 h-3 text-emerald-400" />
                <span>Move mouse to rotate ribbon model</span>
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
