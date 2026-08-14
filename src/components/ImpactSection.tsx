import React, { useState, useEffect } from 'react';
import { Globe, BookOpen, ExternalLink } from 'lucide-react';
import { IMPACT_STATS, PUBLICATIONS_DATA } from '../data/biotechData';

export const ImpactSection: React.FC = () => {
  const [counts, setCounts] = useState<{ [key: string]: number }>({
    molecules: 0,
    accuracy: 0,
    trials: 0,
    funding: 0,
  });

  useEffect(() => {
    const duration = 1800;
    const steps = 40;
    const intervalTime = duration / steps;
    let stepCount = 0;

    const timer = setInterval(() => {
      stepCount++;
      const progress = stepCount / steps;

      setCounts({
        molecules: Math.floor(450 * Math.min(1, progress)),
        accuracy: parseFloat((99.98 * Math.min(1, progress)).toFixed(2)),
        trials: Math.floor(5 * Math.min(1, progress)),
        funding: Math.floor(128 * Math.min(1, progress)),
      });

      if (stepCount >= steps) clearInterval(timer);
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  const researchHubs = [
    { city: 'Boston HQ', role: 'Generative AI & Quantum Computing Center', status: 'Primary Hub', LatLng: '42.3601° N, 71.0589° W' },
    { city: 'Zurich', role: 'LNP Nanocarrier & Transcytosis Lab', status: 'Active Node', LatLng: '47.3769° N, 8.5417° E' },
    { city: 'Tokyo', role: 'Organoid & Tissue-Chip Microfluidics', status: 'Active Node', LatLng: '35.6762° N, 139.6503° E' },
    { city: 'Singapore', role: 'Phase I/II Clinical Trial Management', status: 'Active Node', LatLng: '1.3521° N, 103.8198° E' },
  ];

  return (
    <section id="impact" className="relative py-20 bio-grid-pattern overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-200/80 text-slate-900 text-xs font-semibold uppercase tracking-wider">
            04 / Empirical Benchmarks & Clinical Validation
          </div>
          <h2 className="font-outfit text-3xl sm:text-5xl font-extrabold text-[var(--text-main)] tracking-tight">
            Quantifiable Physics-Driven <span className="text-gradient-cyan">Bio-Breakthroughs</span>
          </h2>
          <p className="text-[var(--text-muted)] text-base sm:text-lg">
            Empirical validation driving world-class outcomes across peer-reviewed journals, global patents, and clinical trial milestones.
          </p>
        </div>

        {/* Dynamic Animated Pitch-Black Bento Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {IMPACT_STATS.map((stat) => {
            const currentValue = counts[stat.id] !== undefined ? counts[stat.id] : stat.value;
            return (
              <div
                key={stat.id}
                className="bento-card-dark p-8 text-center space-y-3 relative group overflow-hidden"
              >
                <div className="font-outfit text-4xl lg:text-5xl font-extrabold text-cyan-400 group-hover:scale-105 transition-transform duration-300">
                  {stat.prefix}
                  {currentValue}
                  {stat.suffix}
                </div>
                <div className="font-outfit text-sm font-bold text-white uppercase tracking-wider">{stat.label}</div>
                <p className="text-slate-400 text-xs leading-relaxed">{stat.description}</p>
              </div>
            );
          })}
        </div>

        {/* Global Clinical Hubs Bento Grid */}
        <div className="p-8 rounded-[32px] glass-panel space-y-8 shadow-xl border border-slate-200">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-6">
            <div className="flex items-center gap-3">
              <Globe className="w-6 h-6 text-blue-600" />
              <h3 className="font-outfit text-2xl font-bold text-slate-950">Global Research & Clinical Infrastructure Network</h3>
            </div>
            <span className="text-xs font-mono text-emerald-600 font-bold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              4 International Nodes Active
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {researchHubs.map((hub, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-slate-100 border border-slate-200 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-outfit font-bold text-slate-950 text-base">{hub.city}</span>
                  <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-slate-950 text-white">
                    {hub.status}
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-snug">{hub.role}</p>
                <span className="text-[10px] font-mono text-slate-400 block pt-1">{hub.LatLng}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Peer-Reviewed Publications Showcase */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-outfit text-2xl font-bold text-slate-950 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-blue-600" />
                Featured Peer-Reviewed Publications
              </h3>
              <p className="text-slate-500 text-sm">Published in premier high-impact scientific journals</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PUBLICATIONS_DATA.map((pub) => (
              <div key={pub.id} className="p-6 rounded-[28px] bento-card-light space-y-4 flex flex-col justify-between hover:border-blue-500 transition-colors">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono text-blue-600 font-bold">
                    <span>{pub.journal} ({pub.year})</span>
                    <span className="px-2 py-0.5 rounded-full bg-slate-200 text-slate-900 text-[10px]">IF: {pub.impactFactor}</span>
                  </div>
                  <h4 className="font-outfit text-base font-bold text-slate-950 leading-snug">{pub.title}</h4>
                  <p className="text-xs text-slate-500">{pub.authors}</p>
                </div>
                <div className="pt-4 border-t border-slate-200 flex items-center justify-between text-xs font-mono text-slate-500">
                  <span>DOI: {pub.doi}</span>
                  <a
                    href={`https://doi.org/${pub.doi}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 font-bold flex items-center gap-1"
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
