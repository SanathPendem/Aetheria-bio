import React, { useEffect, useRef } from 'react';
import type { WorkbenchParams } from '../../types';

interface ProteinCanvasProps {
  params: WorkbenchParams;
  className?: string;
}

export const ProteinStructureCanvas: React.FC<ProteinCanvasProps> = ({ params, className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 500);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 400);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize);

    const baseNodeCount = 28;
    let rotX = 0;
    let rotY = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;
      const radius = Math.min(width, height) * 0.28;

      rotY += 0.008 + (params.bindingAffinity / 100) * 0.015;
      rotX += 0.004;

      let primaryColor = '#00F2FE';
      let secondaryColor = '#10B981';
      if (params.targetDisease === 'Oncology') {
        primaryColor = '#00F2FE';
        secondaryColor = '#3B82F6';
      } else if (params.targetDisease === 'Neurodegeneration') {
        primaryColor = '#8B5CF6';
        secondaryColor = '#06B6D4';
      } else if (params.targetDisease === 'Cardiovascular') {
        primaryColor = '#EC4899';
        secondaryColor = '#F43F5E';
      } else {
        primaryColor = '#10B981';
        secondaryColor = '#F59E0B';
      }

      const dockingPulse = Math.sin(rotY * 3) * 6;
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius + dockingPulse, 0, Math.PI * 2);
      ctx.strokeStyle = primaryColor;
      ctx.lineWidth = 1;
      ctx.globalAlpha = 0.18 + (params.cellularTropism / 100) * 0.2;
      ctx.stroke();

      const points: Array<{ x: number; y: number; z: number; size: number }> = [];
      const totalNodes = baseNodeCount + Math.floor(params.halfLifeDays / 2);

      for (let i = 0; i < totalNodes; i++) {
        const phi = Math.acos(-1 + (2 * i) / totalNodes);
        const theta = Math.sqrt(totalNodes * Math.PI) * phi + rotY;

        const foldOffset = Math.sin(i * 0.5 + rotY * 2) * (radius * 0.3);
        const r = radius + foldOffset;

        const x = r * Math.sin(phi) * Math.cos(theta);
        const y = r * Math.sin(phi) * Math.sin(theta);
        const z = r * Math.cos(phi);

        const cosY = Math.cos(rotY);
        const sinY = Math.sin(rotY);
        const rx = x * cosY - z * sinY;
        const rz = x * sinY + z * cosY;

        const cosX = Math.cos(rotX);
        const sinX = Math.sin(rotX);
        const ry = y * cosX - rz * sinX;
        const finalZ = y * sinX + rz * cosX;

        points.push({
          x: centerX + rx,
          y: centerY + ry,
          z: finalZ,
          size: Math.max(2, 5.5 * ((finalZ + radius * 1.5) / (radius * 3))),
        });
      }

      ctx.beginPath();
      for (let i = 0; i < points.length - 1; i++) {
        const p1 = points[i];
        if (i === 0) ctx.moveTo(p1.x, p1.y);
        else ctx.lineTo(p1.x, p1.y);
      }
      ctx.strokeStyle = primaryColor;
      ctx.lineWidth = 2.5;
      ctx.globalAlpha = 0.65;
      ctx.stroke();

      for (let i = 0; i < points.length - 4; i += 3) {
        const p1 = points[i];
        const p2 = points[i + 4];
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.strokeStyle = secondaryColor;
        ctx.lineWidth = 1;
        ctx.globalAlpha = 0.3;
        ctx.stroke();
      }

      points.forEach((p, idx) => {
        const isBindingSite = idx % 7 === 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, isBindingSite ? p.size * 1.8 : p.size, 0, Math.PI * 2);
        ctx.fillStyle = isBindingSite ? primaryColor : secondaryColor;
        ctx.globalAlpha = Math.max(0.2, (p.z + radius * 1.5) / (radius * 3));

        if (isBindingSite) {
          ctx.shadowBlur = 15;
          ctx.shadowColor = primaryColor;
        }
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      const chargeText = params.nanoparticleCharge > 0 ? `+${params.nanoparticleCharge} mV` : `${params.nanoparticleCharge} mV`;
      ctx.fillStyle = '#94A3B8';
      ctx.font = '12px "JetBrains Mono", monospace';
      ctx.globalAlpha = 0.8;
      ctx.fillText(`TARGET: ${params.targetDisease.toUpperCase()}`, 20, 30);
      ctx.fillText(`BINDING: ${params.bindingAffinity}% (Kd: ${(1 - params.bindingAffinity / 120).toFixed(2)} nM)`, 20, 50);
      ctx.fillText(`CHARGE: ${chargeText}`, 20, 70);

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [params]);

  return (
    <div className={`relative w-full h-full min-h-[300px] overflow-hidden ${className}`}>
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
};
