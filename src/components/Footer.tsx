import React from 'react';
import { Dna, ArrowUp, Globe, Share2 } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#020711] border-t border-cyan-500/20 text-slate-400 text-sm pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/40 flex items-center justify-center">
                <Dna className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <span className="font-outfit text-xl font-extrabold tracking-tight text-white block">
                  AETHERIA <span className="text-cyan-400">BIO</span>
                </span>
                <span className="block text-[9px] uppercase tracking-widest text-slate-400 font-mono">
                  SUB-ATOMIC BIO-ENGINEERING
                </span>
              </div>
            </div>

            <p className="text-xs text-[#AAB8C8] max-w-sm leading-relaxed">
              Engineering the next generation of cellular therapeutics through AI, quantum biology, and precision delivery.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[11px] font-mono text-cyan-400">Quantum Obsidian Nodes: Operational</span>
            </div>
          </div>

          {/* Column 1: Platform */}
          <div className="space-y-3">
            <h4 className="font-outfit text-xs font-bold text-white uppercase tracking-wider">Platform</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#innovation" className="hover:text-cyan-400 transition-colors text-slate-400">Innovation Engine</a></li>
              <li><a href="#technology" className="hover:text-cyan-400 transition-colors text-slate-400">Quantum Molecular Docking</a></li>
              <li><a href="#technology" className="hover:text-cyan-400 transition-colors text-slate-400">Bio-Workbench Simulator</a></li>
              <li><a href="#pipeline" className="hover:text-cyan-400 transition-colors text-slate-400">Drug Pipeline Matrix</a></li>
            </ul>
          </div>

          {/* Column 2: Science */}
          <div className="space-y-3">
            <h4 className="font-outfit text-xs font-bold text-white uppercase tracking-wider">Science</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#impact" className="hover:text-cyan-400 transition-colors text-slate-400">Clinical Validation</a></li>
              <li><a href="#impact" className="hover:text-cyan-400 transition-colors text-slate-400">Peer-Reviewed Publications</a></li>
              <li><a href="#impact" className="hover:text-cyan-400 transition-colors text-slate-400">Research Hubs</a></li>
              <li><a href="#technology" className="hover:text-cyan-400 transition-colors text-slate-400">Organ-Tropic LNPs</a></li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="space-y-3">
            <h4 className="font-outfit text-xs font-bold text-white uppercase tracking-wider">Company</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#hero" className="hover:text-cyan-400 transition-colors text-slate-400">About Aetheria Bio</a></li>
              <li><a href="#contact" className="hover:text-cyan-400 transition-colors text-slate-400">Careers & Fellowships</a></li>
              <li><a href="#contact" className="hover:text-cyan-400 transition-colors text-slate-400">Partners & Licensing</a></li>
              <li><a href="#contact" className="hover:text-cyan-400 transition-colors text-slate-400">Investor Relations</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <div className="text-slate-400">
            © {new Date().getFullYear()} Aetheria Bio Therapeutics Inc. All rights reserved.
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <a href="https://github.com/SanathPendem/aetheria-bio" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors flex items-center gap-1" aria-label="GitHub Repository">
              <Globe className="w-4 h-4" /> Repository
            </a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors flex items-center gap-1" aria-label="Contact Network">
              <Share2 className="w-4 h-4" /> Contact Us
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-slate-950 border border-cyan-500/30 hover:border-cyan-400 hover:text-white transition-colors ml-2"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-4 h-4 text-cyan-400" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
