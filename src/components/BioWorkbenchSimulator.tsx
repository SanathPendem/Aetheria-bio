import React, { useState, useMemo } from 'react';
import { Sliders, CheckCircle, AlertTriangle } from 'lucide-react';
import type { WorkbenchParams, SimulationResult } from '../types';
import { ProteinStructureCanvas } from './canvas/ProteinStructureCanvas';

export const BioWorkbenchSimulator: React.FC = () => {
  const [params, setParams] = useState<WorkbenchParams>({
    bindingAffinity: 85,
    cellularTropism: 92,
    halfLifeDays: 18,
    nanoparticleCharge: +15,
    targetDisease: 'Oncology',
  });

  // Calculate live simulation output math based on inputs
  const simulationResult: SimulationResult = useMemo(() => {
    const affinityFactor = params.bindingAffinity / 100;
    const tropismFactor = params.cellularTropism / 100;
    const chargeOptimalPenalty = Math.abs(params.nanoparticleCharge - 12) * 0.4; // Optimal around +12mV

    const rawEfficacy = (affinityFactor * 0.5 + tropismFactor * 0.5) * 100 - chargeOptimalPenalty * 0.5;
    const efficacyScore = Math.max(10, Math.min(99.9, Math.round(rawEfficacy * 10) / 10));

    const rawOffTarget = (1 - tropismFactor) * 45 + chargeOptimalPenalty * 0.8;
    const offTargetRisk = Math.max(0.1, Math.min(35, Math.round(rawOffTarget * 10) / 10));

    const bioAvailability = Math.min(99.5, Math.round((affinityFactor * 0.6 + (params.halfLifeDays / 30) * 0.4) * 100));

    let predictedSurvivalIncrease = '+14.2 Months';
    if (efficacyScore > 90) predictedSurvivalIncrease = '+28.5 Months (Regression)';
    else if (efficacyScore > 75) predictedSurvivalIncrease = '+18.2 Months';
    else predictedSurvivalIncrease = '+8.4 Months';

    let status: 'OPTIMAL' | 'MODERATE' | 'SUGGEST_TUNING' = 'SUGGEST_TUNING';
    if (efficacyScore >= 85 && offTargetRisk <= 5) status = 'OPTIMAL';
    else if (efficacyScore >= 70) status = 'MODERATE';

    return {
      efficacyScore,
      offTargetRisk,
      bioAvailability,
      predictedSurvivalIncrease,
      status,
    };
  }, [params]);

  const handlePreset = (preset: 'oncology' | 'cns' | 'cardio') => {
    if (preset === 'oncology') {
      setParams({
        bindingAffinity: 96,
        cellularTropism: 98,
        halfLifeDays: 14,
        nanoparticleCharge: 12,
        targetDisease: 'Oncology',
      });
    } else if (preset === 'cns') {
      setParams({
        bindingAffinity: 92,
        cellularTropism: 99,
        halfLifeDays: 24,
        nanoparticleCharge: 5,
        targetDisease: 'Neurodegeneration',
      });
    } else {
      setParams({
        bindingAffinity: 88,
        cellularTropism: 95,
        halfLifeDays: 10,
        nanoparticleCharge: 18,
        targetDisease: 'Cardiovascular',
      });
    }
  };

  return (
    <div className="rounded-3xl glass-panel border border-cyan-500/30 p-6 lg:p-8 shadow-2xl space-y-8">
      {/* Workbench Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <div className="flex items-center gap-2">
            <Sliders className="w-5 h-5 text-cyan-400" />
            <h3 className="font-outfit text-2xl font-bold text-white">Interactive Bio-Workbench Simulator</h3>
          </div>
          <p className="text-slate-400 text-sm mt-1">
            Adjust molecular parameters to simulate binding energy, cellular tropism, and therapeutic efficacy in real time.
          </p>
        </div>

        {/* Presets */}
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-xs font-mono text-slate-400 mr-1">PRESETS:</span>
          <button
            onClick={() => handlePreset('oncology')}
            className="px-3 py-1.5 rounded-lg bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono hover:bg-cyan-900/50"
          >
            Onco-Lead
          </button>
          <button
            onClick={() => handlePreset('cns')}
            className="px-3 py-1.5 rounded-lg bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-mono hover:bg-purple-900/50"
          >
            Neuro-Lead
          </button>
          <button
            onClick={() => handlePreset('cardio')}
            className="px-3 py-1.5 rounded-lg bg-pink-950/60 border border-pink-500/30 text-pink-300 text-xs font-mono hover:bg-pink-900/50"
          >
            Cardio-Lead
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: Parameter Sliders */}
        <div className="lg:col-span-6 space-y-6">
          
          {/* Target Disease Selector */}
          <div className="space-y-2">
            <label className="text-xs font-mono uppercase text-slate-400 flex items-center justify-between">
              <span>Target Therapeutic Indication</span>
              <span className="text-cyan-400 font-bold">{params.targetDisease}</span>
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {(['Oncology', 'Neurodegeneration', 'Cardiovascular', 'Rare Genetic'] as const).map((disease) => (
                <button
                  key={disease}
                  onClick={() => setParams((prev) => ({ ...prev, targetDisease: disease }))}
                  className={`py-2 px-2 text-center rounded-xl text-xs font-medium transition-all border ${
                    params.targetDisease === disease
                      ? 'bg-cyan-500/20 border-cyan-500 text-cyan-300 shadow-md'
                      : 'bg-slate-900 border-white/10 text-slate-400 hover:text-white'
                  }`}
                >
                  {disease}
                </button>
              ))}
            </div>
          </div>

          {/* Slider 1: Binding Affinity */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-slate-300">Target Binding Affinity (Kd Score)</span>
              <span className="text-cyan-400 font-bold">{params.bindingAffinity}% (0.12 nM)</span>
            </div>
            <input
              type="range"
              min="20"
              max="99"
              value={params.bindingAffinity}
              onChange={(e) => setParams((prev) => ({ ...prev, bindingAffinity: Number(e.target.value) }))}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
            />
          </div>

          {/* Slider 2: Cellular Tropism */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-slate-300">Organ Cell Tropism / Homing</span>
              <span className="text-emerald-400 font-bold">{params.cellularTropism}% Specificity</span>
            </div>
            <input
              type="range"
              min="40"
              max="99"
              value={params.cellularTropism}
              onChange={(e) => setParams((prev) => ({ ...prev, cellularTropism: Number(e.target.value) }))}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
            />
          </div>

          {/* Slider 3: In Vivo Half Life */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-slate-300">In-Vivo Expression Half-Life</span>
              <span className="text-purple-400 font-bold">{params.halfLifeDays} Days</span>
            </div>
            <input
              type="range"
              min="2"
              max="30"
              value={params.halfLifeDays}
              onChange={(e) => setParams((prev) => ({ ...prev, halfLifeDays: Number(e.target.value) }))}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-purple-400"
            />
          </div>

          {/* Slider 4: Nanoparticle Zeta Potential Charge */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-slate-300">LNP Surface Zeta Potential</span>
              <span className="text-pink-400 font-bold">{params.nanoparticleCharge > 0 ? `+${params.nanoparticleCharge}` : params.nanoparticleCharge} mV</span>
            </div>
            <input
              type="range"
              min="-30"
              max="40"
              value={params.nanoparticleCharge}
              onChange={(e) => setParams((prev) => ({ ...prev, nanoparticleCharge: Number(e.target.value) }))}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-pink-400"
            />
          </div>

        </div>

        {/* Right Column: Dynamic 3D Protein Canvas & Real-time Output Calculations */}
        <div className="lg:col-span-6 space-y-6">
          {/* Canvas Render Box */}
          <div className="relative w-full h-[280px] sm:h-[320px] rounded-2xl bg-slate-950/90 border border-cyan-500/20 overflow-hidden shadow-inner">
            <ProteinStructureCanvas params={params} className="w-full h-full" />

            {/* Status Floating Pill */}
            <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-mono font-bold flex items-center gap-1.5 border shadow-lg backdrop-blur-md">
              {simulationResult.status === 'OPTIMAL' ? (
                <div className="flex items-center gap-1.5 text-emerald-400 bg-emerald-950/80 border-emerald-500/40 px-2 py-0.5 rounded-full">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>OPTIMAL CANDIDATE</span>
                </div>
              ) : (
                <div className="flex items-center gap-1.5 text-amber-400 bg-amber-950/80 border-amber-500/40 px-2 py-0.5 rounded-full">
                  <AlertTriangle className="w-3.5 h-3.5" />
                  <span>MODERATE SPECIFICITY</span>
                </div>
              )}
            </div>
          </div>

          {/* Real-time Calculation Data Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-left">
            <div className="p-3.5 rounded-xl bg-slate-900/60 border border-white/5">
              <span className="text-[10px] font-mono text-slate-400 uppercase">Efficacy Score</span>
              <div className="font-outfit text-xl font-extrabold text-cyan-400 mt-1">
                {simulationResult.efficacyScore}%
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900/60 border border-white/5">
              <span className="text-[10px] font-mono text-slate-400 uppercase">Off-Target Risk</span>
              <div className="font-outfit text-xl font-extrabold text-emerald-400 mt-1">
                {simulationResult.offTargetRisk}%
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900/60 border border-white/5">
              <span className="text-[10px] font-mono text-slate-400 uppercase">Bioavailability</span>
              <div className="font-outfit text-xl font-extrabold text-purple-400 mt-1">
                {simulationResult.bioAvailability}%
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900/60 border border-white/5">
              <span className="text-[10px] font-mono text-slate-400 uppercase">Surv. Increase</span>
              <div className="font-outfit text-sm font-bold text-pink-400 mt-1 leading-tight">
                {simulationResult.predictedSurvivalIncrease}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
