import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Dna, Activity, Play, Zap, ShieldCheck, Database } from 'lucide-react';
import { InteractiveHelixCanvas } from './canvas/InteractiveHelixCanvas';

interface HeroSectionProps {
  onOpenPartnerModal: () => void;
  onOpenWhitepaperModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenPartnerModal }) => {
  return (
    <section id="hero" className="relative min-h-screen pt-36 pb-20 lg:pt-44 lg:pb-28 flex items-center overflow-hidden bio-grid-pattern">
      {/* Background Bioluminescent Radial Glows */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[550px] h-[550px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Text & CTA Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-7 text-center lg:text-left"
          >
            {/* Eyebrow Tagline */}
            <div className="inline-flex items-center justify-center lg:justify-start gap-2 text-cyan-400 text-xs sm:text-sm font-mono tracking-widest uppercase">
              <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
              <span>QUANTUM BIOLOGY + AI PROTEIN DOCKING</span>
            </div>

            {/* Main Visionary Headline */}
            <h1 className="font-outfit text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-tight text-white leading-[1.05]">
              Synthesizing the <br className="hidden sm:block" />
              Future of <br className="hidden sm:block" />
              <span className="text-gradient-cyan">Cellular Therapeutics</span>
            </h1>

            {/* Subtitle */}
            <p className="text-[#AAB8C8] text-base sm:text-xl font-normal leading-relaxed max-w-[650px] mx-auto lg:mx-0">
              Beyond traditional gene therapy: Aetheria Bio leverages quantum-accelerated protein design and organ-targeted mRNA lipid nanoparticles to engineer curative, cell-precise modalities for previously undruggable genomes.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onOpenPartnerModal}
                className="w-full sm:w-auto px-8 py-4 rounded-full btn-gradient-primary text-slate-950 font-extrabold text-xs uppercase tracking-widest hover:shadow-2xl hover:shadow-cyan-500/40 transition-all flex items-center justify-center gap-2 group"
              >
                EXPLORE DRUG PIPELINE
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
          </motion.div>

          {/* Right Column: 3D Interactive Scientific Visualization Panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* Main Visual Glass Frame */}
            <div className="relative w-full h-[520px] lg:h-[620px] rounded-[32px] glass-panel border border-cyan-500/30 overflow-hidden shadow-2xl shadow-cyan-950/40">
              
              {/* Floating Header Label */}
              <div className="absolute top-4 left-4 z-20 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-950/90 border border-cyan-500/30 text-xs font-mono text-cyan-300 backdrop-blur-md shadow-lg">
                <Dna className="w-4 h-4 text-cyan-400 animate-spin-slow" />
                <span>✦ 3D ATOMIC HELIX RENDERER v4.2</span>
              </div>

              {/* Bottom Telemetry Label */}
              <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-950/80 border border-white/10 text-[11px] font-mono text-slate-400 backdrop-blur-md">
                <Activity className="w-3.5 h-3.5 text-emerald-400" />
                <span>Sub-Atomic Molecular Docking Context</span>
              </div>

              {/* 3D Interactive Helix Canvas */}
              <InteractiveHelixCanvas interactive={true} speedMultiplier={1.2} className="w-full h-full" />
            </div>

            {/* 4 Floating Glass Cards around the visualization */}
            <div className="hidden sm:block">
              {/* Floating Card 1: Top Right */}
              <div className="absolute -top-4 -right-4 z-30 p-3.5 rounded-2xl glass-panel border border-cyan-500/40 text-left shadow-xl animate-float backdrop-blur-xl">
                <div className="flex items-center gap-2 text-[10px] font-mono text-slate-400 uppercase">
                  <Zap className="w-3.5 h-3.5 text-cyan-400" />
                  <span>PROTEIN DOCKING</span>
                </div>
                <div className="font-outfit text-base font-extrabold text-white mt-0.5">
                  98.7% <span className="text-cyan-400 text-xs font-normal">CONFIDENCE</span>
                </div>
              </div>

              {/* Floating Card 2: Top Left Offset */}
              <div className="absolute top-28 -left-6 z-30 p-3.5 rounded-2xl glass-panel border border-blue-500/40 text-left shadow-xl animate-float-reverse backdrop-blur-xl">
                <div className="flex items-center gap-2 text-[10px] font-mono text-slate-400 uppercase">
                  <Activity className="w-3.5 h-3.5 text-blue-400" />
                  <span>MOLECULAR ENERGY</span>
                </div>
                <div className="font-outfit text-base font-extrabold text-white mt-0.5">
                  −12.84 <span className="text-blue-400 text-xs font-normal">kcal/mol</span>
                </div>
              </div>

              {/* Floating Card 3: Bottom Left */}
              <div className="absolute bottom-16 -left-6 z-30 p-3.5 rounded-2xl glass-panel border border-emerald-500/40 text-left shadow-xl animate-float backdrop-blur-xl">
                <div className="flex items-center gap-2 text-[10px] font-mono text-slate-400 uppercase">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>AI DESIGN</span>
                </div>
                <div className="font-outfit text-sm font-extrabold text-emerald-400 mt-0.5 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  ACTIVE MODEL v3
                </div>
              </div>

              {/* Floating Card 4: Bottom Right */}
              <div className="absolute -bottom-4 -right-4 z-30 p-3.5 rounded-2xl glass-panel border border-purple-500/40 text-left shadow-xl animate-float-reverse backdrop-blur-xl">
                <div className="flex items-center gap-2 text-[10px] font-mono text-slate-400 uppercase">
                  <Database className="w-3.5 h-3.5 text-purple-400" />
                  <span>TARGET CELL</span>
                </div>
                <div className="font-outfit text-sm font-extrabold text-purple-300 mt-0.5">
                  HEPATOCYTE LNP
                </div>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
