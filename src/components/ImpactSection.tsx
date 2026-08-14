import React from 'react';
import { Globe, BookOpen, ExternalLink, CheckCircle2 } from 'lucide-react';
import { PUBLICATIONS_DATA } from '../data/biotechData';

export const ImpactSection: React.FC = () => {
  const validationMetrics = [
    { label: 'TARGET VALIDATION', value: '98.2%', desc: 'Validated binding pocket affinity across wild-type & mutant variants' },
    { label: 'PROTEIN BINDING', value: '94.8%', desc: 'Sub-nanomolar binding Kd equilibrium affinity' },
    { label: 'CELLULAR UPTAKE', value: '91.6%', desc: 'Organ-tropic LNP cellular endocytosis rate' },
    { label: 'MODEL ACCURACY', value: '96.4%', desc: 'Generative AI protein folding structural prediction fidelity' },
  ];

  const researchHubs = [
    { city: 'Boston HQ', role: 'Generative AI & Quantum Computing Center', status: 'Primary Hub', LatLng: '42.3601° N, 71.0589° W' },
    { city: 'Zurich', role: 'LNP Nanocarrier & Transcytosis Lab', status: 'Active Node', LatLng: '47.3769° N, 8.5417° E' },
    { city: 'Tokyo', role: 'Organoid & Tissue-Chip Microfluidics', status: 'Active Node', LatLng: '35.6762° N, 139.6503° E' },
    { city: 'Singapore', role: 'Phase I/II Clinical Trial Management', status: 'Active Node', LatLng: '1.3521° N, 103.8198° E' },
  ];

  return (
    <section id="impact" className="relative py-24 bio-grid-pattern overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center justify-center gap-2 text-cyan-400 text-xs sm:text-sm font-mono tracking-widest uppercase">
            ✦ EMPIRICAL PHYSICS & SCIENTIFIC RIGOR
          </div>
          <h2 className="font-outfit text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Clinical & Biophysical <span className="text-gradient-cyan">Validation</span>
          </h2>
          <p className="text-[#AAB8C8] text-base sm:text-lg">
            Empirical validation driving world-class outcomes across peer-reviewed journals, global patents, and clinical trial milestones.
          </p>
        </div>

        {/* Validation Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {validationMetrics.map((m, idx) => (
            <div
              key={idx}
              className="p-6 rounded-[28px] glass-panel glass-panel-hover border border-cyan-500/20 text-center space-y-3 relative group overflow-hidden"
            >
              <div className="flex items-center justify-between text-[10px] font-mono text-cyan-400 uppercase tracking-widest">
                <span>{m.label}</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              </div>
              <div className="font-outfit text-4xl lg:text-5xl font-extrabold text-white group-hover:scale-105 transition-transform duration-300">
                {m.value}
              </div>
              <p className="text-slate-400 text-xs leading-relaxed">{m.desc}</p>
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>

        {/* Global Clinical Hubs Interactive Grid */}
        <div className="p-8 rounded-[32px] glass-panel border border-cyan-500/30 space-y-8 shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
            <div className="flex items-center gap-3">
              <Globe className="w-6 h-6 text-cyan-400" />
              <h3 className="font-outfit text-2xl font-bold text-white">Global Research & Clinical Infrastructure Network</h3>
            </div>
            <span className="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              4 International Nodes Synchronized
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {researchHubs.map((hub, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-slate-950/90 border border-white/10 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-outfit font-bold text-white text-base">{hub.city}</span>
                  <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-slate-900 border border-cyan-500/30 text-cyan-300">
                    {hub.status}
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-snug">{hub.role}</p>
                <span className="text-[10px] font-mono text-slate-400 block pt-1">{hub.LatLng}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Peer-Reviewed Publications Showcase */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-outfit text-2xl font-bold text-white flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-cyan-400" />
                Featured Peer-Reviewed Publications
              </h3>
              <p className="text-slate-400 text-sm">Published in premier high-impact scientific journals</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PUBLICATIONS_DATA.map((pub) => (
              <div key={pub.id} className="p-6 rounded-[28px] glass-panel border border-white/10 space-y-4 flex flex-col justify-between hover:border-cyan-500/40 transition-colors">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono text-cyan-400">
                    <span>{pub.journal} ({pub.year})</span>
                    <span className="px-2 py-0.5 rounded bg-slate-950 border border-cyan-500/30 text-[10px]">IF: {pub.impactFactor}</span>
                  </div>
                  <h4 className="font-outfit text-base font-bold text-white leading-snug">{pub.title}</h4>
                  <p className="text-xs text-slate-400">{pub.authors}</p>
                </div>
                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>DOI: {pub.doi}</span>
                  <a
                    href={`https://doi.org/${pub.doi}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-white flex items-center gap-1"
                  >
                    View <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
