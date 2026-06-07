/**
 * @license
 * SPDX-License-Identifier: Apache-2.5
 */

import React, { useState, useEffect, useRef } from 'react';
import { Project } from '../types';
import { X, Target, Workflow, Image, ExternalLink, Upload, ZoomIn } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

interface UploadedProof {
  id: string;
  url: string;
  caption: string;
}

const DEFAULT_PRE_SEEDED_PROOFS: Record<number, UploadedProof[]> = {
  1: [
    {
      id: 'pre-seeded-img-1-1',
      url: '/src/assets/images/explorer_doc_folder_1780851249607.png',
      caption: 'Thao tác tệp tin và thư mục: Thư mục thực hành cấp 1 (Sản phẩm cuối cùng)'
    },
    {
      id: 'pre-seeded-img-1-2',
      url: '/src/assets/images/explorer_inner_folder_1780851264696.png',
      caption: 'Cấu trúc hoàn thiện: Thư mục con TaiLieu và tệp GhiChuQuanTrong.txt bên trong (Sản phẩm cuối cùng)'
    }
  ],
  2: [
    {
      id: 'pre-seeded-img-2-1',
      url: '/src/assets/images/cancer_diagram_1780851755386.png',
      caption: 'Sơ đồ sinh học: Cơ chế hình thành, tiến triển ung thư và ứng dụng công nghệ sinh học (Sản phẩm cuối cùng)'
    }
  ],
  3: [
    {
      id: 'pre-seeded-img-3-1',
      url: '/src/assets/images/entropy_prompt_1780851955205.png',
      caption: 'Kỹ nghệ thiết kế Prompt chuyên sâu: Thiết lập Role-Prompting kết hợp Ma trận đề thi tự luận đánh giá năng lực về Entropy (Sản phẩm cuối cùng)'
    }
  ],
  4: [
    {
      id: 'pre-seeded-img-4-1',
      url: '/src/assets/images/trello_board_agro_1780852049691.png',
      caption: 'Quản trị dự án Agile: Bảng Kanban Trello quản lý định biên tiến độ dự án UET_Project_AgroSmart_Predictor (Sản phẩm cuối cùng)'
    },
    {
      id: 'pre-seeded-img-4-2',
      url: '/src/assets/images/discord_chat_agro_1780852067539.png',
      caption: 'Truyền thông & Đồng hành: Kênh chat kỹ thuật Discord điều phối, cập nhật trạng thái lỗi thư viện và kết nối bot (Sản phẩm cuối cùng)'
    },
    {
      id: 'pre-seeded-img-4-3',
      url: '/src/assets/images/drive_share_agro_1780852084670.png',
      caption: 'Đồng bộ hóa & Chia sẻ Cloud: Quản lý thư mục chứa mã nguồn dốc và thiết lập quyền cộng tác viên Google Drive (Sản phẩm cuối cùng)'
    }
  ],
  5: [
    {
      id: 'pre-seeded-img-5-1',
      url: '/src/assets/images/agrosmart_g_i_v_n_final_1780852156619.png',
      caption: 'Ấn phẩm đồ họa đa phương tiện: Slide gọi vốn dự án AgroSmart Predictor đồng hành cùng Canva AI (Sản phẩm cuối cùng)'
    }
  ],
  6: [
    {
      id: 'pre-seeded-img-6-1',
      url: '/src/assets/images/responsible_ai_academic_vietnamese_infographic_1780852229231.png',
      caption: 'Ấn phẩm truyền thông liêm chính: Infographic hướng dẫn quy tắc sử dụng AI có trách nhiệm trong học thuật và khoa học (Sản phẩm cuối cùng)'
    }
  ]
};

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const [uploadedImages, setUploadedImages] = useState<UploadedProof[]>([]);
  const [dragActive, setDragActive] = useState(false);
  const [zoomedImage, setZoomedImage] = useState<{ url: string; caption?: string } | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Load existing uploaded proofs from localStorage for this specific project
  useEffect(() => {
    if (project) {
      const stored = localStorage.getItem(`portfolio_project_images_${project.id}`);
      if (stored) {
        try {
          const parsed = JSON.parse(stored);
          if (Array.isArray(parsed) && parsed.length > 0) {
            setUploadedImages(parsed);
          } else {
            const defaultImages = DEFAULT_PRE_SEEDED_PROOFS[project.id] || [];
            setUploadedImages(defaultImages);
          }
        } catch (e) {
          console.error("Failed to parse stored images", e);
          const defaultImages = DEFAULT_PRE_SEEDED_PROOFS[project.id] || [];
          setUploadedImages(defaultImages);
        }
      } else {
        const defaultImages = DEFAULT_PRE_SEEDED_PROOFS[project.id] || [];
        setUploadedImages(defaultImages);
      }
    }
  }, [project]);

  if (!isOpen || !project) return null;

  const handleSaveImages = (images: UploadedProof[]) => {
    setUploadedImages(images);
    localStorage.setItem(`portfolio_project_images_${project.id}`, JSON.stringify(images));
  };

  const handleFile = (file: File) => {
    if (!file.type.startsWith('image/')) {
      alert('Vui lòng chỉ tải lên tài liệu là định dạng hình ảnh!');
      return;
    }
    const reader = new FileReader();
    reader.onload = (e) => {
      const url = e.target?.result as string;
      if (url) {
        const newImage: UploadedProof = {
          id: Date.now().toString() + Math.random().toString(36).substr(2, 5),
          url: url,
          caption: ''
        };
        const updated = [...uploadedImages, newImage];
        handleSaveImages(updated);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const fileList = Array.from(e.dataTransfer.files) as File[];
      fileList.forEach(file => {
        handleFile(file);
      });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const fileList = Array.from(e.target.files) as File[];
      fileList.forEach(file => {
        handleFile(file);
      });
    }
  };

  const handleCaptionChange = (id: string, value: string) => {
    const updated = uploadedImages.map(img => {
      if (img.id === id) {
        return { ...img, caption: value };
      }
      return img;
    });
    handleSaveImages(updated);
  };

  const handleRemoveImage = (id: string) => {
    const updated = uploadedImages.filter(img => img.id !== id);
    handleSaveImages(updated);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
      {/* Dark blur backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/85 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Container */}
      <div className="relative bg-slate-900 border border-slate-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl z-10 animate-slide-up select-text">
        
        {/* Header decoration bar */}
        <div className="h-1.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 rounded-t-2xl"></div>

        {/* Top Header sticky action rail */}
        <div className="sticky top-0 bg-slate-900 border-b border-slate-800/80 px-6 py-4 flex items-center justify-between z-20">
          <div className="flex items-center space-x-2.5 text-left">
            <span className="text-xs font-mono font-bold text-cyan-400">
              DỰ ÁN SỐ {project.id}
            </span>
            <span className="text-slate-500">•</span>
            <h3 className="text-base sm:text-lg font-bold text-white tracking-tight line-clamp-1">{project.title}</h3>
          </div>
          
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white w-11 h-11 flex items-center justify-center rounded-xl bg-slate-950/40 border border-slate-800 hover:bg-slate-800 hover:border-slate-705/80 transition-all active:scale-90 cursor-pointer"
            aria-label="Đóng"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body Content */}
        <div className="p-6 sm:p-8 space-y-8 text-left">
          
          {/* Hero Banner inside detail modal */}
          <div 
            onClick={() => setZoomedImage({ url: project.image, caption: project.title })}
            className="relative h-48 sm:h-64 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 cursor-zoom-in group/hero transition-all"
            title="Click để phóng to ảnh bìa"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover opacity-80 group-hover/hero:scale-102 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent group-hover/hero:opacity-90 transition-opacity"></div>
            <div className="absolute bottom-4 left-4 right-4 text-left flex items-end justify-between">
              <h2 className="text-xl sm:text-2xl font-extrabold text-white text-shadow">{project.title}</h2>
              <span className="hidden sm:inline-flex items-center space-x-1 text-xs font-mono text-cyan-400 bg-slate-950/85 px-3 py-1.5 rounded-full border border-slate-800/80 opacity-0 group-hover/hero:opacity-100 transition-opacity duration-300">
                <ZoomIn className="w-3.5 h-3.5" />
                <span>Phóng to</span>
              </span>
            </div>
          </div>

          {/* Section 1: Mục tiêu bài tập */}
          <div className="space-y-3 bg-slate-950/40 p-5 rounded-xl border border-slate-800/80">
            <div className="flex items-center space-x-2 text-cyan-400 font-bold">
              <Target className="w-4 h-4 shrink-0" />
              <h4 className="text-sm uppercase tracking-wider">1. Mục tiêu bài tập</h4>
            </div>
            <p className="text-slate-350 text-sm sm:text-base leading-relaxed pl-6">
              {project.details.objective}
            </p>
          </div>

          {/* Section 2: Yêu cầu thực hiện */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2 text-blue-400 font-bold">
              <Workflow className="w-4 h-4 shrink-0" />
              <h4 className="text-sm uppercase tracking-wider">2. Yêu cầu thực hiện</h4>
            </div>
            <div className="pl-6 space-y-4">
              {project.details.process.map((step, stepIdx) => (
                <div key={stepIdx} className="flex items-start space-x-3 bg-slate-950/10 hover:bg-slate-950/30 p-3 rounded-lg border border-transparent hover:border-slate-850/60 transition-all">
                  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-800 text-cyan-400 font-mono text-xs font-bold shrink-0 mt-0.5">
                    {stepIdx + 1}
                  </div>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3 & 4 combined: Hình ảnh minh chứng & Sản phẩm cuối cùng */}
          <div className="space-y-4 bg-slate-950/40 p-5 sm:p-6 rounded-xl border border-slate-800/80">
            <div className="flex items-center space-x-2 text-cyan-400 font-bold">
              <Upload className="w-4 h-4 shrink-0" />
              <h4 className="text-sm uppercase tracking-wider font-bold">3 & 4. Kết quả minh chứng & Sản phẩm cuối cùng</h4>
            </div>
            
            <div className="pl-6 space-y-4">
              <div className="space-y-2 bg-slate-900/60 p-4 rounded-lg border border-slate-800/55">
                <div>
                  <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider block mb-1">Yêu cầu minh chứng:</span>
                  <p className="text-slate-300 text-sm leading-relaxed">{project.details.evidenceDesc}</p>
                </div>
                <div className="pt-2 border-t border-slate-800/40">
                  <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider block mb-1">Sản phẩm kỳ vọng:</span>
                  <p className="text-slate-200 text-sm font-semibold leading-relaxed">{project.details.finalProduct}</p>
                </div>
              </div>

              {/* Interactive File Dropzone */}
              <div
                onDragEnter={handleDrag}
                onDragOver={handleDrag}
                onDragLeave={handleDrag}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
                className={`relative border-2 border-dashed rounded-xl p-8 flex flex-col items-center justify-center text-center space-y-3 cursor-pointer transition-all duration-300 ${
                  dragActive 
                    ? 'border-cyan-400 bg-cyan-950/20 shadow-[0_0_15px_rgba(34,211,238,0.15)] scale-102' 
                    : 'border-slate-800 hover:border-cyan-500/50 bg-slate-950/50 hover:bg-slate-950/80 active:scale-[0.99] hover:shadow-lg'
                }`}
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleInputChange}
                  className="hidden"
                />
                
                <div className={`p-3 bg-slate-900 border border-slate-800/80 rounded-2xl transition-all duration-300 ${dragActive ? 'rotate-12 scale-110 border-cyan-400 text-cyan-400' : 'text-slate-400 group-hover:text-cyan-400'}`}>
                  <Upload className="w-6 h-6 text-cyan-400" />
                </div>
                
                <div className="max-w-md space-y-1">
                  <p className="text-sm font-semibold text-slate-200">Kéo thả hình ảnh minh chứng vào đây</p>
                  <p className="text-xs text-slate-500">Hoặc <span className="text-cyan-400 font-medium hover:underline">nhấp để chọn tệp tin</span> (Hỗ trợ định dạng ảnh PNG, JPG, GIF, WebP...)</p>
                </div>
              </div>

              {/* Uploaded Files and Captions List */}
              {uploadedImages.length > 0 ? (
                <div className="space-y-4 pt-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest block">
                      Hình ảnh minh chứng đã tải lên ({uploadedImages.length})
                    </span>
                    <button 
                      type="button"
                      onClick={() => {
                        if (confirm("Bạn có chắc chắn muốn xóa toàn bộ ảnh minh chứng của bài thi này?")) {
                          handleSaveImages([]);
                        }
                      }}
                      className="text-[11px] uppercase font-mono tracking-wider font-bold text-rose-400 hover:text-rose-300 bg-rose-500/10 hover:bg-rose-500/20 active:scale-95 px-3.5 py-2 rounded-xl transition-all cursor-pointer"
                    >
                      Xóa tất cả
                    </button>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-5">
                    {uploadedImages.map((img, idx) => (
                      <div 
                        key={img.id} 
                        className="bg-slate-900/40 rounded-xl p-4 border border-slate-800/80 space-y-4 hover:border-slate-800 transition-all flex flex-col md:flex-row md:items-start gap-4 relative group"
                      >
                        {/* Remove single image button */}
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleRemoveImage(img.id);
                          }}
                          className="absolute -top-2 -right-2 md:-top-1.5 md:-right-1.5 bg-rose-500 hover:bg-rose-600 text-white rounded-full w-8 h-8 flex items-center justify-center shadow-md opacity-100 md:opacity-0 group-hover:opacity-100 transition-all duration-250 active:scale-90 z-10 cursor-pointer"
                          title="Xóa ảnh này"
                        >
                          <X className="w-4 h-4" />
                        </button>

                        {/* Image Preview container */}
                        <div 
                          onClick={() => setZoomedImage({ url: img.url, caption: img.caption || `Ảnh minh chứng thực hành #${idx + 1}` })}
                          className="w-full md:w-56 h-36 shrink-0 rounded-lg overflow-hidden border border-slate-800 bg-slate-950 flex items-center justify-center p-1.5 shadow-inner cursor-zoom-in relative group/img"
                          title="Click để phóng to thư mục minh chứng"
                        >
                          <img 
                            src={img.url} 
                            alt={`Minh chứng ${idx + 1}`} 
                            className="max-w-full max-h-full object-contain group-hover/img:scale-102 transition-transform duration-300"
                            referrerPolicy="no-referrer"
                          />
                          <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover/img:opacity-100 flex items-center justify-center transition-opacity duration-200">
                            <ZoomIn className="text-cyan-400 w-6 h-6 drop-shadow" />
                          </div>
                        </div>

                        {/* Interactive Caption input area */}
                        <div className="flex-1 space-y-2 text-left flex flex-col justify-center h-full">
                          <div className="flex items-center justify-between">
                            <span className="text-[11px] font-mono text-cyan-400 font-bold block uppercase tracking-wider">
                              Ảnh minh chứng thực hành #{idx + 1}
                            </span>
                          </div>
                          
                          <input
                            type="text"
                            value={img.caption}
                            onChange={(e) => handleCaptionChange(img.id, e.target.value)}
                            placeholder="Nhập chú thích hoặc giải thích cho bức ảnh minh chứng này..."
                            className="w-full bg-slate-950 border border-slate-800 focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 rounded-lg px-3.5 py-2.5 text-sm text-slate-200 placeholder-slate-650 focus:outline-none transition-all duration-200"
                          />
                          
                          <p className="text-[10px] text-slate-500 font-mono italic">
                            * Dữ liệu ghi chú tự động đồng bộ hóa thời gian thực vào bộ nhớ đệm trình duyệt.
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="text-center py-6 bg-slate-950/20 border border-slate-800/40 rounded-xl text-xs font-mono text-slate-500 italic">
                  Chưa có hình ảnh minh chứng thực tế được đăng tải cho sản phẩm này. Hãy kéo thả ảnh của bạn vào ô trống bên trên.
                </div>
              )}
            </div>
          </div>

          {/* Section 5: Liên kết Google Docs */}
          <div className="pt-4 border-t border-slate-850 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left space-y-1">
              <h5 className="text-white text-xs font-bold uppercase tracking-wider font-mono">Báo cáo khoa học chính thức</h5>
              <p className="text-slate-400 text-xs text-left">Toàn bộ tiểu luận và phụ lục được trình bày chi tiết trên nền tảng đám mây.</p>
            </div>
            
            <a
              href={project.details.googleDocsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2 px-5 py-3.5 rounded-xl bg-cyan-500/10 border border-cyan-400/30 hover:border-cyan-400 hover:bg-cyan-500/20 text-cyan-300 hover:text-white text-sm font-semibold transition-all duration-300 active:scale-[0.98] w-full sm:w-auto text-center"
            >
              <span>Xem tài liệu gốc qua Google Docs</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* Modal Bottom Footer bar for details */}
        <div className="bg-slate-950 px-6 py-4 border-t border-slate-800 text-center flex items-center justify-between text-[11px] text-slate-500">
          <span>Student: Nguyễn Đức Huy (MSSV: 25024198)</span>
          <span className="font-mono">Copyright © 2026</span>
        </div>

      </div>

      {/* High-Fidelity Lightbox Zoom Overlay */}
      {zoomedImage && (
        <div 
          onClick={() => setZoomedImage(null)}
          className="fixed inset-0 z-[100] bg-slate-950/95 backdrop-blur-md flex flex-col items-center justify-center p-4 cursor-zoom-out select-none"
        >
          {/* Close button inside lightbox */}
          <button
            onClick={() => setZoomedImage(null)}
            className="absolute top-4 right-4 bg-slate-900/90 border border-slate-800 text-slate-350 hover:text-white w-11 h-11 flex items-center justify-center rounded-full hover:bg-slate-855 transition-all active:scale-90 cursor-pointer"
            title="Đóng xem ảnh"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Expanded Image layout container */}
          <div className="relative max-w-5xl max-h-[75vh] w-full flex items-center justify-center p-2 mb-4">
            <img
              src={zoomedImage.url}
              alt={zoomedImage.caption || "Hình ảnh phóng to"}
              className="max-w-full max-h-[75vh] object-contain rounded-xl border border-slate-800 shadow-2xl bg-slate-900"
              referrerPolicy="no-referrer"
              onClick={(e) => e.stopPropagation()} // prevent closing when clicking the image itself
            />
          </div>

          {/* Caption drawer indicator */}
          {zoomedImage.caption && (
            <div 
              onClick={(e) => e.stopPropagation()}
              className="bg-slate-900/90 border border-slate-800 rounded-xl px-5 py-3 text-center max-w-2xl shadow-xl"
            >
              <p className="text-sm font-semibold text-cyan-300 tracking-wide text-center">{zoomedImage.caption}</p>
            </div>
          )}

          <span className="text-[10px] text-slate-500 font-mono mt-4 uppercase tracking-widest">
            Nhấp chuột vào vùng trống ngoài ảnh hoặc bấm nút đóng để quay lại
          </span>
        </div>
      )}
    </div>
  );
}
