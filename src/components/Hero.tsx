/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { ArrowRight, BookOpen, Terminal, Sparkles } from 'lucide-react';

interface HeroProps {
  scrollToSection: (id: string) => void;
}

export default function Hero({ scrollToSection }: HeroProps) {
  const [typedText, setTypedText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const phrases = [
    "Nhập môn Công nghệ số và Ứng dụng Trí tuệ nhân tạo (AI)",
    "Ứng dụng AI trong Y sinh",
    "Phương pháp Prompt Engineering",
    "Sáng tạo nội dung trí tuệ nhân tạo",
    "Liêm chính học thuật thế hệ mới"
  ];

  const typingSpeed = 100;
  const deletingSpeed = 50;
  const pauseTime = 2000;

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
      timer = setTimeout(() => {
        setTypedText(currentPhrase.substring(0, typedText.length - 1));
      }, deletingSpeed);
    } else {
      timer = setTimeout(() => {
        setTypedText(currentPhrase.substring(0, typedText.length + 1));
      }, typingSpeed);
    }

    if (!isDeleting && typedText === currentPhrase) {
      timer = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && typedText === '') {
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
    }

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, phraseIndex]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-slate-950 pt-20 overflow-hidden"
    >
      {/* Decorative dynamic particles background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s' }}></div>
        
        {/* Abstract grids of nodes & connections */}
        <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          
          {/* Animated decorative lines */}
          <line x1="20%" y1="10%" x2="50%" y2="40%" stroke="rgba(6, 182, 212, 0.2)" strokeWidth="1.5" strokeDasharray="5,5" />
          <line x1="80%" y1="20%" x2="60%" y2="70%" stroke="rgba(59, 130, 246, 0.15)" strokeWidth="2" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
            <div className="inline-flex items-center space-x-2 bg-cyan-950/40 border border-cyan-500/20 px-3.5 py-1.5 rounded-full w-fit">
              <Sparkles className="w-4 h-4 text-cyan-400 animate-spin" style={{ animationDuration: '4s' }} />
              <span className="text-xs font-mono font-medium text-cyan-400 uppercase tracking-widest animate-pulse">
                Môn: Nhập môn Công nghệ số và Ứng dụng Trí tuệ nhân tạo (AI)
              </span>
            </div>

            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                <span className="block text-slate-350 text-2xl sm:text-3xl font-medium mb-1">
                  Hồ Sơ Học Tập & Sáng Tạo
                </span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500">
                  Nguyễn Đức Huy
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl text-slate-300 font-medium">
                Sinh viên Công nghệ Sinh học
                <span className="block text-sm text-cyan-400/90 font-mono font-semibold mt-1">
                  Đại học Công nghệ – Đại học Quốc gia Hà Nội (UET-VNU)
                </span>
              </p>
            </div>

            {/* Typewriter text line */}
            <div className="h-10 flex items-center space-x-2 text-slate-400 bg-slate-900/50 px-4 py-2 rounded-lg border border-slate-800/80 w-full max-w-md">
              <Terminal className="w-4 h-4 text-cyan-400 shrink-0" />
              <span className="text-sm font-mono text-cyan-300">
                {typedText}
                <span className="animate-pulse bg-cyan-400 text-cyan-400 ml-0.5">|</span>
              </span>
            </div>

            <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-xl">
              Chào mừng bạn đến với không gian lưu trữ và phản ánh học trình số. Đây là nơi đúc kết 6 dự án thực chiến, minh chứng cho tầm nhìn phối hợp giữa công nghệ dữ liệu, kỹ nghệ ra lệnh AI và liêm chính nghiên cứu của thế hệ nhà công nghệ sinh học trẻ.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => scrollToSection('about')}
                className="inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-sm transition-all duration-300 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-400/30 hover:-translate-y-0.5 active:scale-[0.97] cursor-pointer"
              >
                <span>Khám phá Portfolio</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              
              <button
                onClick={() => scrollToSection('projects')}
                className="inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-850 text-slate-200 hover:text-white border border-slate-800 hover:border-slate-700 font-semibold text-sm transition-all duration-300 active:scale-[0.97] cursor-pointer"
              >
                <BookOpen className="w-4 h-4" />
                <span>Xem 6 dự án học tập</span>
              </button>
            </div>
          </div>

          {/* Hero Right Content (Biotech illustration) */}
          <div className="lg:col-span-5 h-full flex items-center justify-center relative">
            <div className="relative w-full max-w-md lg:max-w-none aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-slate-800 bg-slate-900">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10"></div>
              
              <img
                src="/src/assets/images/biotech_ai_hero_1780818923699.png"
                alt="Biotechnology and AI integration concept"
                className="w-full h-full object-cover select-none scale-102 hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              
              {/* Overlay Glassmorphic Badge */}
              <div className="absolute bottom-6 left-6 right-6 z-20 p-4 rounded-2xl bg-slate-900/70 border border-white/5 backdrop-blur-md flex items-center space-x-3">
                <div className="flex-shrink-0 p-2 bg-cyan-500/10 rounded-xl">
                  <div className="w-3 h-3 bg-cyan-400 rounded-full animate-ping"></div>
                </div>
                <div>
                  <h4 className="text-white text-xs font-bold leading-none">UET K70G-BE Digital Portal</h4>
                  <span className="text-[10px] text-slate-400 font-mono">Status: Connected to cloud node</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
