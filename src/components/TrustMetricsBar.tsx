import React, { useState, useEffect } from 'react';
import { IMPACT_STATS } from '../data/biotechData';

export const TrustMetricsBar: React.FC = () => {
  const [counts, setCounts] = useState<{ [key: string]: number }>({
    molecules: 0,
    trials: 0,
    accuracy: 0,
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
        molecules: Math.floor(32 * Math.min(1, progress)),
        trials: Math.floor(15 * Math.min(1, progress)),
        accuracy: parseFloat((98.7 * Math.min(1, progress)).toFixed(1)),
        funding: Math.floor(12 * Math.min(1, progress)),
      });

      if (stepCount >= steps) clearInterval(timer);
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-10 z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {IMPACT_STATS.map((stat) => {
            const currentValue = counts[stat.id] !== undefined ? counts[stat.id] : stat.value;
            return (
              <div
                key={stat.id}
                className="p-6 rounded-[24px] glass-panel glass-panel-hover border border-cyan-500/20 text-center space-y-2 relative group overflow-hidden"
              >
                <div className="font-outfit text-4xl lg:text-5xl font-extrabold text-cyan-400 group-hover:scale-105 transition-transform duration-300">
                  {stat.prefix}
                  {currentValue}
                  {stat.suffix}
                </div>
                <div className="font-mono text-xs text-slate-300 uppercase tracking-widest font-semibold">{stat.label}</div>
                <p className="text-slate-400 text-xs leading-relaxed">{stat.description}</p>
                <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
