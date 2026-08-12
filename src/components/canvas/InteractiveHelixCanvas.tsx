import React, { useEffect, useRef } from 'react';

interface HelixCanvasProps {
  interactive?: boolean;
  speedMultiplier?: number;
  className?: string;
}

export const InteractiveHelixCanvas: React.FC<HelixCanvasProps> = ({
  interactive = true,
  speedMultiplier = 1,
  className = '',
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 800);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 600);

    let targetRotationY = 0;
    let currentRotationY = 0;
    let targetRotationX = 0;
    let currentRotationX = 0;

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!interactive || !canvas) return;
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left - width / 2;
      const y = e.clientY - rect.top - height / 2;
      targetRotationY = (x / width) * Math.PI * 0.4;
      targetRotationX = (y / height) * Math.PI * 0.2;
    };

    window.addEventListener('resize', handleResize);
    if (interactive) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    // Double Helix parameters
    const strandLength = 46; // Number of base pairs
    const radius = Math.min(width, height) * 0.18; // Radius of helix
    const spacing = 15; // Distance along Z/Y axis
    let time = 0;

    // Background floating bio particles
    const particleCount = 30;
    const particles = Array.from({ length: particleCount }, () => ({
      x: (Math.random() - 0.5) * width * 1.2,
      y: (Math.random() - 0.5) * height * 1.2,
      size: Math.random() * 1.8 + 0.6,
      speedX: (Math.random() - 0.5) * 0.2,
      speedY: (Math.random() - 0.5) * 0.2,
      alpha: Math.random() * 0.4 + 0.2,
      color: Math.random() > 0.4 ? '#00F2FE' : '#10B981',
    }));

    const render = () => {
      // Smooth continuous time rotation
      time += 0.010 * speedMultiplier;
      currentRotationY += (targetRotationY - currentRotationY) * 0.04;
      currentRotationX += (targetRotationX - currentRotationX) * 0.04;

      ctx.clearRect(0, 0, width, height);
      const centerX = width / 2;
      const centerY = height / 2;

      // Subtle background radial glow aura
      const radialGlow = ctx.createRadialGradient(
        centerX,
        centerY,
        10,
        centerX,
        centerY,
        radius * 2.2
      );
      radialGlow.addColorStop(0, 'rgba(0, 242, 254, 0.05)');
      radialGlow.addColorStop(0.5, 'rgba(16, 185, 129, 0.01)');
      radialGlow.addColorStop(1, 'rgba(7, 10, 17, 0)');
      ctx.fillStyle = radialGlow;
      ctx.fillRect(0, 0, width, height);

      // Render floating bio particles
      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < -width / 2) p.x = width / 2;
        if (p.x > width / 2) p.x = -width / 2;
        if (p.y < -height / 2) p.y = height / 2;
        if (p.y > height / 2) p.y = -height / 2;

        const screenX = centerX + p.x;
        const screenY = centerY + p.y;

        ctx.beginPath();
        ctx.arc(screenX, screenY, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha * 0.35;
        ctx.fill();
        ctx.globalAlpha = 1.0;
      });

      // Compute raw sequential 3D node coordinates
      const rawNodes: Array<{
        x1: number;
        y1: number;
        z1: number;
        x2: number;
        y2: number;
        z2: number;
        index: number;
      }> = [];

      for (let i = 0; i < strandLength; i++) {
        const offset = i * 0.25 + time;
        const rawY = (i - strandLength / 2) * spacing;

        const x1 = Math.sin(offset) * radius;
        const z1 = Math.cos(offset) * radius;
        const x2 = Math.sin(offset + Math.PI) * radius;
        const z2 = Math.cos(offset + Math.PI) * radius;

        const cosY = Math.cos(currentRotationY);
        const sinY = Math.sin(currentRotationY);
        const cosX = Math.cos(currentRotationX + 0.12);
        const sinX = Math.sin(currentRotationX + 0.12);

        const rx1 = x1 * cosY - z1 * sinY;
        const rz1 = x1 * sinY + z1 * cosY;
        const rx2 = x2 * cosY - z2 * sinY;
        const rz2 = x2 * sinY + z2 * cosY;

        const ry1 = rawY * cosX - rz1 * sinX;
        const finalZ1 = rawY * sinX + rz1 * cosX;
        const ry2 = rawY * cosX - rz2 * sinX;
        const finalZ2 = rawY * sinX + rz2 * cosX;

        rawNodes.push({
          x1: centerX + rx1,
          y1: centerY + ry1,
          z1: finalZ1,
          x2: centerX + rx2,
          y2: centerY + ry2,
          z2: finalZ2,
          index: i,
        });
      }

      // STEP 1: Render smooth BACKBONE strands with minimal subtle line opacities
      ctx.beginPath();
      for (let i = 0; i < rawNodes.length - 1; i++) {
        const curr = rawNodes[i];
        const next = rawNodes[i + 1];

        // Draw Strand 1 segment (Cyan) - Very subtle line opacity
        ctx.beginPath();
        ctx.moveTo(curr.x1, curr.y1);
        ctx.lineTo(next.x1, next.y1);
        const avgZ1 = (curr.z1 + next.z1) / 2;
        const alpha1 = Math.max(0.12, Math.min(0.6, (avgZ1 + radius * 1.8) / (radius * 3.6)));
        ctx.strokeStyle = '#00F2FE';
        ctx.globalAlpha = alpha1 * 0.35; // Minimal line glow
        ctx.lineWidth = 1.2;
        ctx.stroke();

        // Draw Strand 2 segment (Emerald) - Very subtle line opacity
        ctx.beginPath();
        ctx.moveTo(curr.x2, curr.y2);
        ctx.lineTo(next.x2, next.y2);
        const avgZ2 = (curr.z2 + next.z2) / 2;
        const alpha2 = Math.max(0.12, Math.min(0.6, (avgZ2 + radius * 1.8) / (radius * 3.6)));
        ctx.strokeStyle = '#10B981';
        ctx.globalAlpha = alpha2 * 0.35; // Minimal line glow
        ctx.lineWidth = 1.2;
        ctx.stroke();
      }

      // STEP 2: Depth-sort base pair rungs with subtle line opacities
      const sortedNodes = [...rawNodes].sort((a, b) => Math.min(a.z1, a.z2) - Math.min(b.z1, b.z2));

      sortedNodes.forEach((node) => {
        const depthAlpha1 = Math.max(0.18, Math.min(1.0, (node.z1 + radius * 1.8) / (radius * 3.6)));
        const depthAlpha2 = Math.max(0.18, Math.min(1.0, (node.z2 + radius * 1.8) / (radius * 3.6)));
        const avgZ = (node.z1 + node.z2) / 2;
        const lineAlpha = Math.max(0.12, Math.min(1.0, (avgZ + radius * 1.8) / (radius * 3.6)));

        // Base Pair Connection Line - Subtle & sleek stroke
        const lineGradient = ctx.createLinearGradient(node.x1, node.y1, node.x2, node.y2);
        const colorPair = node.index % 2 === 0 ? ['#00F2FE', '#4FACFE'] : ['#10B981', '#06B6D4'];
        lineGradient.addColorStop(0, colorPair[0]);
        lineGradient.addColorStop(1, colorPair[1]);

        ctx.beginPath();
        ctx.moveTo(node.x1, node.y1);
        ctx.lineTo(node.x2, node.y2);
        ctx.strokeStyle = lineGradient;
        ctx.globalAlpha = lineAlpha * 0.35; // Very subtle line opacity
        ctx.lineWidth = Math.max(0.8, 1.2 * lineAlpha);
        ctx.stroke();

        // --- Refined Nucleotide Node 1 ---
        const r1 = Math.max(2.0, 3.8 * depthAlpha1);
        ctx.beginPath();
        ctx.arc(node.x1, node.y1, r1, 0, Math.PI * 2);
        ctx.fillStyle = colorPair[0];
        ctx.globalAlpha = depthAlpha1 * 0.85;
        ctx.shadowColor = colorPair[0];
        ctx.shadowBlur = 3 * depthAlpha1; // Very subtle node glow
        ctx.fill();
        ctx.shadowBlur = 0;

        // Inner Core Spot Node 1
        ctx.beginPath();
        ctx.arc(node.x1, node.y1, r1 * 0.35, 0, Math.PI * 2);
        ctx.fillStyle = '#FFFFFF';
        ctx.globalAlpha = depthAlpha1 * 0.7;
        ctx.fill();

        // --- Refined Nucleotide Node 2 ---
        const r2 = Math.max(2.0, 3.8 * depthAlpha2);
        ctx.beginPath();
        ctx.arc(node.x2, node.y2, r2, 0, Math.PI * 2);
        ctx.fillStyle = colorPair[1];
        ctx.globalAlpha = depthAlpha2 * 0.85;
        ctx.shadowColor = colorPair[1];
        ctx.shadowBlur = 3 * depthAlpha2; // Very subtle node glow
        ctx.fill();
        ctx.shadowBlur = 0;

        // Inner Core Spot Node 2
        ctx.beginPath();
        ctx.arc(node.x2, node.y2, r2 * 0.35, 0, Math.PI * 2);
        ctx.fillStyle = '#FFFFFF';
        ctx.globalAlpha = depthAlpha2 * 0.7;
        ctx.fill();

        ctx.globalAlpha = 1.0;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      if (interactive) {
        window.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, [interactive, speedMultiplier]);

  return (
    <div className={`relative w-full h-full min-h-[350px] overflow-hidden ${className}`}>
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
};
