/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { Project } from '../types';
import { FolderGit2, Search, Terminal, Users, Sparkles, ShieldAlert, ArrowUpRight, FolderHeart } from 'lucide-react';

interface ProjectCardProps {
  proj: Project;
  onOpen: (proj: Project) => void;
}

// Helper to resolve project icons dynamically
function ProjectIcon({ name, className }: { name: string; className?: string }) {
  const cn = className || "w-5 h-5";
  switch (name) {
    case 'FolderGit2':
      return <FolderGit2 className={cn} />;
    case 'Search':
      return <Search className={cn} />;
    case 'Terminal':
      return <Terminal className={cn} />;
    case 'Users':
      return <Users className={cn} />;
    case 'Sparkles':
      return <Sparkles className={cn} />;
    case 'ShieldAlert':
      return <ShieldAlert className={cn} />;
    default:
      return <FolderHeart className={cn} />;
  }
}

export default function ProjectCard({ proj, onOpen }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Calculate cursor position relative to the element's bounding rect
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Normalize coordinates to percentage around center (-0.5 to 0.5)
    const xPct = (mouseX / width) - 0.5;
    const yPct = (mouseY / height) - 0.5;

    setCoords({ x: xPct, y: yPct });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setCoords({ x: 0, y: 0 });
  };

  // Convert normalized percentages to rotation degree
  // Dynamic rotation values with subtle clamping (max 8 degrees tilt)
  const tiltX = isHovered ? -coords.y * 10 : 0;
  const tiltY = isHovered ? coords.x * 10 : 0;

  // Convert center-relative percent back to 0-100 range for CSS spotlight mask
  const spotlightX = (coords.x + 0.5) * 100;
  const spotlightY = (coords.y + 0.5) * 100;

  return (
    <div
      id={`project-card-container-${proj.id}`}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: '1000px',
      }}
      className="relative rounded-2xl h-full select-none"
    >
      <motion.div
        animate={{
          rotateX: tiltX,
          rotateY: tiltY,
          scale: isHovered ? 1.015 : 1,
        }}
        transition={{ type: 'spring', stiffness: 220, damping: 20 }}
        style={{ transformStyle: 'preserve-3d' }}
        className="relative flex flex-col justify-between bg-slate-900/60 border border-slate-800/80 rounded-2xl p-5 shadow-xl transition-shadow duration-300 hover:shadow-cyan-500/10 h-full overflow-hidden group"
      >
        {/* Subtle background dynamic spotlight glow */}
        <div
          className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"
          style={{
            background: `radial-gradient(280px circle at ${spotlightX}% ${spotlightY}%, rgba(6, 182, 212, 0.06), transparent 80%)`,
          }}
        />

        {/* Dynamic Glowing Border reveal mask */}
        <div
          className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
          style={{
            padding: '1px',
            background: `radial-gradient(220px circle at ${spotlightX}% ${spotlightY}%, rgba(6, 182, 212, 0.45), transparent 75%)`,
            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'xor',
            maskComposite: 'exclude',
          }}
        />

        {/* Card elements stacked cleanly (preserve-3d depth elements) */}
        <div className="space-y-4 relative z-10" style={{ transform: 'translateZ(15px)' }}>
          
          {/* Thumbnail banner with aspect ratio */}
          <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden border border-slate-800 bg-slate-950">
            <img
              src={proj.image}
              alt={proj.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
            
            {/* Floating index flag top right */}
            <span className="absolute top-3 right-3 text-[10px] font-mono font-bold tracking-widest text-cyan-400 px-2 py-1.5 bg-slate-950/80 border border-slate-850 backdrop-blur-md rounded-lg uppercase shadow-lg">
              Bài số {proj.id}
            </span>
          </div>

          {/* Card Title & Icon with depth */}
          <div className="flex items-start space-x-3 text-left" style={{ transform: 'translateZ(10px)' }}>
            <div className="p-2.5 bg-slate-950 border border-slate-800 text-cyan-400 group-hover:text-white group-hover:bg-cyan-500 group-hover:border-cyan-400 rounded-xl transition-all shadow-md shrink-0">
              <ProjectIcon name={proj.iconName} className="w-5 h-5" />
            </div>
            <div className="space-y-1 text-left">
              <h3 className="text-white font-bold text-base sm:text-lg tracking-tight group-hover:text-cyan-300 transition-colors line-clamp-1">
                {proj.title}
              </h3>
              <p className="text-xs text-slate-400 leading-snug line-clamp-2">
                {proj.shortDesc}
              </p>
            </div>
          </div>

          {/* Goals review block */}
          <div className="bg-slate-950/40 p-3.5 rounded-xl border border-slate-850 text-left" style={{ transform: 'translateZ(5px)' }}>
            <span className="text-[10px] font-mono font-bold uppercase text-slate-500 block mb-1">
              Mục tiêu chính
            </span>
            <p className="text-[13px] text-slate-300 leading-relaxed line-clamp-3">
              {proj.objective}
            </p>
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-5 mt-auto relative z-10" style={{ transform: 'translateZ(10px)' }}>
          <button
            id={`open-project-btn-${proj.id}`}
            onClick={() => onOpen(proj)}
            className="w-full inline-flex items-center justify-center space-x-2 py-3.5 px-4 rounded-xl bg-slate-950 hover:bg-slate-850 text-slate-350 hover:text-white border border-slate-800 hover:border-slate-700 font-semibold text-sm transition-all duration-200 active:scale-[0.97] cursor-pointer"
          >
            <span>Xem chi tiết nội dung</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </motion.div>
    </div>
  );
}
