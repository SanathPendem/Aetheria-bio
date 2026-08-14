import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, TrendingUp, Sparkles, CheckCircle2, Clock } from 'lucide-react';
import { InteractiveHelixCanvas } from './canvas/InteractiveHelixCanvas';

interface HeroSectionProps {
  onOpenPartnerModal: () => void;
  onOpenWhitepaperModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenPartnerModal }) => {
  return (
    <section id="hero" className="relative pt-8 pb-16 lg:pt-12 lg:pb-20 overflow-hidden bio-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Top Hero Text Header & Tagline */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-200/70 border border-slate-300 text-slate-900 text-xs font-semibold uppercase tracking-wider backdrop-blur-md"
          >
            <Sparkles className="w-3.5 h-3.5 text-blue-600 animate-pulse" />
            <span>AI-Driven Cellular Engineering & Quantum Docking</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-outfit text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[var(--text-main)] leading-[1.08]"
          >
            Synthesizing the Future of{' '}
            <span className="text-gradient-cyan">Cellular Therapeutics</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[var(--text-muted)] text-base sm:text-xl font-normal leading-relaxed max-w-3xl mx-auto"
          >
            Beyond traditional gene therapy: Aetheria Bio leverages quantum-accelerated protein design and organ-targeted mRNA lipid nanoparticles to engineer curative, cell-precise modalities.
          </motion.p>

          {/* Action Pill Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2"
          >
            <button
              onClick={onOpenPartnerModal}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-slate-950 text-white font-bold text-xs uppercase tracking-wider hover:bg-slate-800 transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2 group"
            >
              Start Now
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onOpenPartnerModal}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-slate-900 text-slate-900 font-bold text-xs uppercase tracking-wider hover:bg-slate-100 transition-all flex items-center justify-center gap-2"
            >
              Contact Advisory Board
            </button>
          </motion.div>
        </div>

        {/* Hero Modern Rounded Bento Grid (Matching User Screenshot Layout) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-12 gap-5 items-stretch"
        >
          {/* Left Column: 2 Pitch-Black Metric Bento Cards */}
          <div className="md:col-span-4 flex flex-col gap-5 justify-between">
            
            {/* Top Left Dark Bento Card (320+ Bio-assets analyzed) */}
            <div className="bento-card-dark p-6 flex flex-col justify-between h-[200px] relative overflow-hidden group">
              <div className="flex items-start justify-between">
                <div>
                  <div className="font-outfit text-4xl sm:text-5xl font-extrabold text-white flex items-center gap-1">
                    <span>320+</span>
                    <TrendingUp className="w-6 h-6 text-blue-400" />
                  </div>
                  <span className="text-xs text-slate-400 font-medium block mt-1">
                    Bio-assets analyzed & mapped
                  </span>
                </div>
                <div className="p-2.5 rounded-full bg-slate-800/80 text-blue-400 border border-slate-700">
                  <Sparkles className="w-5 h-5" />
                </div>
              </div>

              {/* Sparkline Visual Simulation */}
              <div className="w-full h-8 flex items-end gap-1.5 pt-2">
                {[40, 65, 55, 80, 70, 95, 85, 100].map((h, idx) => (
                  <div
                    key={idx}
                    className="flex-1 bg-gradient-to-t from-blue-600 to-cyan-400 rounded-t-sm transition-all duration-300 group-hover:brightness-125"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>

            {/* Bottom Left Dark Bento Card (12+ Biotech solutions available) */}
            <div className="bento-card-dark p-6 flex items-center justify-between h-[150px] relative overflow-hidden group">
              <div className="space-y-1">
                <div className="font-outfit text-3xl sm:text-4xl font-extrabold text-white">
                  12+
                </div>
                <span className="text-xs text-slate-400 font-medium block max-w-[180px]">
                  Biotech solutions & pipeline assets available
                </span>
              </div>

              <a
                href="#pipeline"
                className="w-12 h-12 rounded-full bg-slate-800 hover:bg-blue-600 text-white flex items-center justify-center transition-all shadow-md group-hover:scale-110 shrink-0"
              >
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>

          </div>

          {/* Middle Bento Card: Video & Insights Preview (Watch Video - 4m 36s) */}
          <div className="md:col-span-3 bento-card-light p-5 flex flex-col justify-between h-[370px] relative overflow-hidden group border border-slate-200">
            {/* Top Pill Badge */}
            <div className="flex items-center justify-between z-10">
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-slate-900 text-white text-[11px] font-mono">
                <Clock className="w-3 h-3 text-cyan-400" />
                4m 36s
              </span>
              <span className="text-[11px] font-mono text-slate-500 font-bold uppercase">PREVIEW</span>
            </div>

            {/* Middle Play Action Sphere */}
            <div className="my-auto text-center space-y-3 z-10">
              <a
                href="#technology"
                className="w-16 h-16 rounded-full bg-slate-950 text-white border-4 border-white shadow-xl flex items-center justify-center mx-auto hover:scale-110 transition-transform group"
              >
                <Play className="w-7 h-7 text-cyan-400 fill-cyan-400 ml-1" />
              </a>
              <div>
                <h4 className="font-outfit text-base font-bold text-slate-950">Watch video</h4>
                <p className="text-xs text-slate-500 font-medium">Watch Biotech Insights & Simulator</p>
              </div>
            </div>

            {/* Ambient Graphic Background */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-200/80 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Right Column: 3D Microscopic Visual Bento Frame (Matching Reference Screenshot Visual) */}
          <div className="md:col-span-5 bento-card-dark p-2 h-[370px] relative overflow-hidden shadow-2xl group border border-slate-800">
            <div className="relative w-full h-full rounded-[24px] overflow-hidden bg-slate-950">
              {/* Floating Status Pill */}
              <div className="absolute top-4 left-4 z-20 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs font-mono text-white backdrop-blur-md">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>3D Microscopic Cell Visualizer</span>
              </div>

              {/* Live 3D Interactive Helix / Cell Visual */}
              <InteractiveHelixCanvas interactive={true} speedMultiplier={1.3} className="w-full h-full" />
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
};
