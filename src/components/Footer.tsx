import React from 'react';
import { Dna, ArrowUp, Globe, Share2 } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05070D] border-t border-white/10 text-slate-400 text-sm pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center">
                <Dna className="w-5 h-5 text-cyan-400" />
              </div>
              <span className="font-outfit text-xl font-bold tracking-tight text-white">
                AETHERIA <span className="text-cyan-400 font-extrabold">BIO</span>
              </span>
            </div>

            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Aetheria Bio is a biotechnology company pioneering quantum-assisted protein engineering, organ-targeted LNP mRNA delivery, and synthetic tissue-chip platforms.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[11px] font-mono text-emerald-400">System Telemetry: Operational</span>
            </div>
          </div>

          {/* Column 1: Pipeline */}
          <div className="space-y-3">
            <h4 className="font-outfit text-xs font-bold text-white uppercase tracking-wider">Pipeline</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#pipeline" className="hover:text-cyan-400 transition-colors">AX-101 (OncoZen mRNA)</a></li>
              <li><a href="#pipeline" className="hover:text-cyan-400 transition-colors">AX-204 (NeuroMend Cas14)</a></li>
              <li><a href="#pipeline" className="hover:text-cyan-400 transition-colors">AX-309 (CardioVita)</a></li>
              <li><a href="#pipeline" className="hover:text-cyan-400 transition-colors">AX-412 (SynOrgan Tissue)</a></li>
              <li><a href="#pipeline" className="hover:text-cyan-400 transition-colors">AX-505 (PolyFold)</a></li>
            </ul>
          </div>

          {/* Column 2: Platform */}
          <div className="space-y-3">
            <h4 className="font-outfit text-xs font-bold text-white uppercase tracking-wider">Platform</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#technology" className="hover:text-cyan-400 transition-colors">Generative Quantum Folding</a></li>
              <li><a href="#technology" className="hover:text-cyan-400 transition-colors">Organ-Tropic LNPs</a></li>
              <li><a href="#technology" className="hover:text-cyan-400 transition-colors">CRISPR Epigenetics</a></li>
              <li><a href="#technology" className="hover:text-cyan-400 transition-colors">Bio-Workbench Simulator</a></li>
              <li><a href="#impact" className="hover:text-cyan-400 transition-colors">Publications & Research</a></li>
            </ul>
          </div>

          {/* Column 3: Corporate */}
          <div className="space-y-3">
            <h4 className="font-outfit text-xs font-bold text-white uppercase tracking-wider">Corporate & Legal</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#impact" className="hover:text-cyan-400 transition-colors">Research Hubs</a></li>
              <li><a href="#contact" className="hover:text-cyan-400 transition-colors">Investor Relations</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Regulatory Compliance</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Terms of Service</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div>
            © {new Date().getFullYear()} Aetheria Bio Therapeutics Inc. All rights reserved.
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors flex items-center gap-1" aria-label="GitHub Repository">
              <Globe className="w-4 h-4" /> Global Portal
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors flex items-center gap-1" aria-label="LinkedIn Profile">
              <Share2 className="w-4 h-4" /> Network
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-slate-900 border border-white/10 hover:border-cyan-400 hover:text-white transition-colors ml-2"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
