/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { projects } from '../data/portfolioData';
import { Project } from '../types';
import ProjectModal from './ProjectModal';
import ProjectCard from './ProjectCard';
import { FolderGit2 } from 'lucide-react';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenProject = (project: Project) => {
    setSelectedProject(project);
    setModalOpen(true);
    // Suppress body scroll
    document.body.style.overflow = 'hidden';
  };

  const handleCloseProject = () => {
    setModalOpen(false);
    setSelectedProject(null);
    // Allow body scroll
    document.body.style.overflow = '';
  };

  return (
    <section
      id="projects"
      className="py-24 bg-slate-950 relative text-left"
    >
      {/* Visual background ambient decorations */}
      <div className="absolute top-12 left-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-12 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 animate-fade-in">
        
        {/* Section Heading */}
        <div className="text-center md:text-left mb-16 space-y-2">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-slate-900 border border-slate-800 text-cyan-400 text-xs rounded-full font-mono uppercase tracking-wider">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Sản phẩm Nghiên cứu & Thực hành</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Các dự án học tập học phần AI & Công nghệ số
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mx-auto md:mx-0"></div>
          <p className="text-slate-400 text-sm max-w-2xl pt-2">
            Tổng hợp 6 chuyên đề rèn luyện học thuật xuyên suốt học kỳ. Nhấn vào từng dự án dưới đây để xem mục tiêu, phương thức thực hiện, kéo thả hình ảnh minh chứng thực tế và chú thích báo cáo sản phẩm cá nhân của bạn.
          </p>
        </div>

        {/* 6-Project Bento/Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj) => (
            <div key={proj.id} className="h-full">
              <ProjectCard proj={proj} onOpen={handleOpenProject} />
            </div>
          ))}
        </div>

      </div>

      {/* Embedded Project details portal */}
      <ProjectModal
        project={selectedProject}
        isOpen={modalOpen}
        onClose={handleCloseProject}
      />
    </section>
  );
}
