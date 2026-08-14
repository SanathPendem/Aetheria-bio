import React from 'react';
import { RESEARCH_ARTICLES } from '../data/biotechData';
import { ArrowRight, Clock } from 'lucide-react';

export const ResearchBlogSection: React.FC = () => {
  return (
    <section className="relative py-24 bio-dots-pattern overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 text-cyan-400 text-xs font-mono tracking-widest uppercase">
            ✦ Editorial & Scientific Dispatches
          </div>
          <h2 className="font-outfit text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Research Insights & <span className="text-gradient-cyan">Publications</span>
          </h2>
          <p className="text-[#AAB8C8] text-base sm:text-lg">
            Technical papers and essays on machine learning, quantum mechanics, and targeted mRNA delivery from the Aetheria Bio research lab.
          </p>
        </div>

        {/* 3 Research Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {RESEARCH_ARTICLES.map((art) => (
            <div
              key={art.id}
              className="p-6 rounded-[28px] glass-panel glass-panel-hover border border-cyan-500/20 space-y-4 flex flex-col justify-between group cursor-pointer"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-[11px] font-mono text-cyan-400">
                  <span className="px-3 py-1 rounded-full bg-slate-950 border border-cyan-500/30 font-bold">
                    {art.category}
                  </span>
                  <div className="flex items-center gap-2 text-slate-400">
                    <Clock className="w-3 h-3 text-cyan-400" />
                    <span>{art.readTime}</span>
                  </div>
                </div>

                <h3 className="font-outfit text-xl font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                  {art.title}
                </h3>

                <p className="text-[#AAB8C8] text-xs leading-relaxed">
                  {art.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-cyan-400 group-hover:translate-x-1 transition-transform">
                <span className="text-slate-500 text-[11px]">{art.date}</span>
                <span className="flex items-center gap-1 font-bold">
                  READ DISPATCH <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
