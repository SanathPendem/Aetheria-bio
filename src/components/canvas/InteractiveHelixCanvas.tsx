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
      targetRotationY = (x / width) * Math.PI * 0.5;
      targetRotationX = (y / height) * Math.PI * 0.3;
    };

    window.addEventListener('resize', handleResize);
    if (interactive) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    // Double Helix parameters
    const strandLength = 48; // Number of base pairs
    const radius = Math.min(width, height) * 0.18; // Radius of helix
    const spacing = 14; // Distance along Z/Y axis
    let time = 0;

    // Background floating bio particles
    const particleCount = 45;
    const particles = Array.from({ length: particleCount }, () => ({
      x: (Math.random() - 0.5) * width * 1.2,
      y: (Math.random() - 0.5) * height * 1.2,
      z: Math.random() * 400 - 200,
      size: Math.random() * 2.2 + 0.8,
      speedX: (Math.random() - 0.5) * 0.4,
      speedY: (Math.random() - 0.5) * 0.4,
      alpha: Math.random() * 0.7 + 0.3,
      color: Math.random() > 0.4 ? '#00F2FE' : '#10B981',
    }));

    const render = () => {
      time += 0.015 * speedMultiplier;
      currentRotationY += (targetRotationY - currentRotationY) * 0.05;
      currentRotationX += (targetRotationX - currentRotationX) * 0.05;

      ctx.clearRect(0, 0, width, height);
      const centerX = width / 2;
      const centerY = height / 2;

      // Draw background glow aura
      const radialGlow = ctx.createRadialGradient(
        centerX,
        centerY,
        10,
        centerX,
        centerY,
        radius * 2.5
      );
      radialGlow.addColorStop(0, 'rgba(0, 242, 254, 0.12)');
      radialGlow.addColorStop(0.5, 'rgba(16, 185, 129, 0.04)');
      radialGlow.addColorStop(1, 'rgba(7, 10, 17, 0)');
      ctx.fillStyle = radialGlow;
      ctx.fillRect(0, 0, width, height);

      // Render floating particles
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
        ctx.globalAlpha = p.alpha * 0.6;
        ctx.shadowBlur = 10;
        ctx.shadowColor = p.color;
        ctx.fill();
        ctx.shadowBlur = 0;
        ctx.globalAlpha = 1.0;
      });

      // Render Double Helix Base Pairs
      const nodes: Array<{
        x1: number;
        y1: number;
        z1: number;
        x2: number;
        y2: number;
        z2: number;
        index: number;
      }> = [];

      for (let i = 0; i < strandLength; i++) {
        const offset = i * 0.24 + time;
        const rawY = (i - strandLength / 2) * spacing;

        // Base Strand 1 & Strand 2 coordinates
        const x1 = Math.sin(offset) * radius;
        const z1 = Math.cos(offset) * radius;
        const x2 = Math.sin(offset + Math.PI) * radius;
        const z2 = Math.cos(offset + Math.PI) * radius;

        // Apply mouse rotations
        const cosY = Math.cos(currentRotationY);
        const sinY = Math.sin(currentRotationY);
        const cosX = Math.cos(currentRotationX + 0.2);
        const sinX = Math.sin(currentRotationX + 0.2);

        // Rotate Y axis
        const rx1 = x1 * cosY - z1 * sinY;
        const rz1 = x1 * sinY + z1 * cosY;
        const rx2 = x2 * cosY - z2 * sinY;
        const rz2 = x2 * sinY + z2 * cosY;

        // Rotate X axis
        const ry1 = rawY * cosX - rz1 * sinX;
        const finalZ1 = rawY * sinX + rz1 * cosX;
        const ry2 = rawY * cosX - rz2 * sinX;
        const finalZ2 = rawY * sinX + rz2 * cosX;

        nodes.push({
          x1: centerX + rx1,
          y1: centerY + ry1,
          z1: finalZ1,
          x2: centerX + rx2,
          y2: centerY + ry2,
          z2: finalZ2,
          index: i,
        });
      }

      // Sort by Z to draw back-to-front depth
      nodes.sort((a, b) => Math.min(a.z1, a.z2) - Math.min(b.z1, b.z2));

      nodes.forEach((node) => {
        const depthAlpha1 = Math.max(0.15, (node.z1 + radius * 2) / (radius * 4));
        const depthAlpha2 = Math.max(0.15, (node.z2 + radius * 2) / (radius * 4));
        const avgZ = (node.z1 + node.z2) / 2;
        const lineAlpha = Math.max(0.1, (avgZ + radius * 2) / (radius * 4));

        // Draw Base Pair Hydrogen Connection Line
        const lineGradient = ctx.createLinearGradient(node.x1, node.y1, node.x2, node.y2);
        const colorPair = node.index % 2 === 0 ? ['#00F2FE', '#4FACFE'] : ['#10B981', '#06B6D4'];
        lineGradient.addColorStop(0, colorPair[0]);
        lineGradient.addColorStop(1, colorPair[1]);

        ctx.beginPath();
        ctx.moveTo(node.x1, node.y1);
        ctx.lineTo(node.x2, node.y2);
        ctx.strokeStyle = lineGradient;
        ctx.globalAlpha = lineAlpha * 0.75;
        ctx.lineWidth = Math.max(1, 2.5 * lineAlpha);
        ctx.stroke();

        // Draw Nucleotide Node 1 (Cyan/Blue)
        ctx.beginPath();
        ctx.arc(node.x1, node.y1, Math.max(2, 4.5 * depthAlpha1), 0, Math.PI * 2);
        ctx.fillStyle = colorPair[0];
        ctx.globalAlpha = depthAlpha1;
        ctx.shadowColor = colorPair[0];
        ctx.shadowBlur = 12 * depthAlpha1;
        ctx.fill();

        // Draw Nucleotide Node 2 (Emerald/Teal)
        ctx.beginPath();
        ctx.arc(node.x2, node.y2, Math.max(2, 4.5 * depthAlpha2), 0, Math.PI * 2);
        ctx.fillStyle = colorPair[1];
        ctx.globalAlpha = depthAlpha2;
        ctx.shadowColor = colorPair[1];
        ctx.shadowBlur = 12 * depthAlpha2;
        ctx.fill();

        ctx.shadowBlur = 0;
        ctx.globalAlpha = 1.0;
      });

      // Connect adjacent backbone nodes
      for (let i = 0; i < nodes.length - 1; i++) {
        const curr = nodes[i];
        const next = nodes[i + 1];

        ctx.beginPath();
        ctx.moveTo(curr.x1, curr.y1);
        ctx.lineTo(next.x1, next.y1);
        ctx.strokeStyle = '#00F2FE';
        ctx.globalAlpha = 0.35;
        ctx.lineWidth = 1.2;
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(curr.x2, curr.y2);
        ctx.lineTo(next.x2, next.y2);
        ctx.strokeStyle = '#10B981';
        ctx.globalAlpha = 0.35;
        ctx.lineWidth = 1.2;
        ctx.stroke();
      }

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
