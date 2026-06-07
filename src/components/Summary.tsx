/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { skills, highPoints, challengesMet, futureApplication } from '../data/portfolioData';
import { Award, Code2, GraduationCap, Cpu, GitFork, Image, ShieldCheck, Heart, AlertTriangle, Lightbulb, Compass } from 'lucide-react';

// Maps dynamic mock icons for skills
function SkillIcon({ name, className }: { name: string; className?: string }) {
  const cn = className || "w-5 h-5";
  switch (name) {
    case 'SearchCode':
      return <Code2 className={cn} />;
    case 'GraduationCap':
      return <GraduationCap className={cn} />;
    case 'Cpu':
      return <Cpu className={cn} />;
    case 'Workflow':
      return <GitFork className={cn} />;
    case 'Image':
      return <Image className={cn} />;
    case 'ShieldCheck':
      return <ShieldCheck className={cn} />;
    default:
      return <Award className={cn} />;
  }
}

export default function Summary() {
  return (
    <section
      id="summary"
      className="py-24 bg-slate-900 relative text-left overflow-hidden"
    >
      {/* Decorative ambient visual lights */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-600/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-indigo-600/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 animate-fade-in">
        
        {/* Section Heading */}
        <div className="text-center md:text-left mb-16 space-y-2">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-slate-850 text-cyan-400 text-xs rounded-full font-mono uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5" />
            <span>Đón Đầu Xu Thế</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Tổng kết hành trình số hóa học lý chuyên sâu
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mx-auto md:mx-0"></div>
          <p className="text-slate-400 text-sm max-w-2xl pt-2">
            Đánh giá khách quan mức độ làm chủ các năng lực công nghệ, nhận diện các khó khăn thực chứng và sơ đồ hóa mục tiêu ứng dụng tương lai cho ngành khoa học sự sống.
          </p>
        </div>

        {/* 1. NHỮNG KỸ NĂNG ĐẠT ĐƯỢC (Progress card structure) */}
        <div className="mb-20">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-8 flex items-center space-x-2.5">
            <span className="w-1.5 h-6 bg-cyan-400 rounded-full"></span>
            <span>Những kỹ năng cốt lõi đạt được</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((sk, idx) => (
              <div
                key={idx}
                className="p-6 bg-slate-950 border border-slate-800/80 hover:border-slate-700/55 rounded-2xl shadow-xl transition-all hover:bg-slate-950/80"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 bg-slate-900 border border-slate-800 text-cyan-400 rounded-xl">
                    <SkillIcon name={sk.icon} className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-950/50 border border-cyan-500/20 px-2 py-1 rounded-lg">
                    Làm chủ: {sk.level}%
                  </span>
                </div>
                
                <h4 className="text-white font-bold text-sm sm:text-base tracking-tight mb-2">
                  {sk.name}
                </h4>
                
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-4">
                  {sk.desc}
                </p>

                {/* Progress bar */}
                <div className="w-full bg-slate-900 rounded-full h-1.5 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-cyan-400 to-blue-500 h-1.5 rounded-full"
                    style={{ width: `${sk.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. ĐIỂM TÂM ĐẮC (Bento Card Highlight) */}
        <div className="mb-20">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-8 flex items-center space-x-2.5">
            <span className="w-1.5 h-6 bg-blue-500 rounded-full"></span>
            <span>Điểm tâm đắc nhất</span>
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {highPoints.map((pt, idx) => (
              <div
                key={idx}
                className="relative p-6 rounded-2xl bg-gradient-to-br from-slate-950/80 to-slate-900 border border-slate-800 hover:border-slate-750 transition-all shadow-xl flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-900 text-cyan-400 text-xs font-mono font-bold border border-slate-800">
                    0{idx + 1}
                  </div>
                  <h4 className="text-slate-200 font-extrabold text-base tracking-tight pt-1">
                    {pt.title}
                  </h4>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                    {pt.desc}
                  </p>
                </div>
                <div className="pt-4 flex justify-end">
                  <Heart className="w-3.5 h-3.5 text-rose-500/60" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. THÁCH THỨC ĐÀ GẶP (Infographic Look Compare Layout) */}
        <div className="mb-20">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-8 flex items-center space-x-2.5">
            <span className="w-1.5 h-6 bg-indigo-500 rounded-full"></span>
            <span>Thách thức & Giải pháp thực tế</span>
          </h3>

          <div className="space-y-6">
            {challengesMet.map((ch, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 md:grid-cols-12 gap-6 bg-slate-950 p-6 rounded-2xl border border-slate-800 hover:border-slate-700 transition-all shadow-lg"
              >
                {/* Challenge descriptor (Left column) */}
                <div className="md:col-span-5 space-y-2 text-left">
                  <div className="inline-flex items-center space-x-1.5 bg-amber-950/40 border border-amber-500/20 px-2.5 py-1 rounded-full">
                    <AlertTriangle className="w-3.5 h-3.5 text-amber-500" />
                    <span className="text-[10px] font-mono font-bold text-amber-400 uppercase tracking-widest">
                      Thách thức 0{idx + 1}
                    </span>
                  </div>
                  <h4 className="text-white font-bold text-sm sm:text-base leading-snug">
                    {ch.title}
                  </h4>
                </div>

                {/* Arrow sign centered on desktop */}
                <div className="hidden md:flex md:col-span-1 items-center justify-center">
                  <span className="text-slate-600 font-mono text-xl">→</span>
                </div>

                {/* Solution descriptor (Right column) */}
                <div className="md:col-span-6 space-y-2 text-left justify-center flex flex-col">
                  <div className="inline-flex items-center space-x-1.5 bg-emerald-950/40 border border-emerald-500/20 px-2.5 py-1 rounded-full w-fit">
                    <Lightbulb className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-widest">
                      Giải pháp áp dụng
                    </span>
                  </div>
                  <p className="text-slate-350 text-xs sm:text-sm leading-relaxed">
                    {ch.solution}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. ĐỊNH HƯỚNG TƯƠNG LAI (Scientific commitment paper layout) */}
        <div className="p-8 sm:p-10 bg-slate-950 border border-slate-800 rounded-3xl relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-cyan-500/20 to-transparent rounded-bl-3xl"></div>
          
          <div className="relative z-10 max-w-4xl space-y-6">
            <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-950/40 border border-cyan-500/10 px-3 py-1.5 rounded-full uppercase tracking-widest">
              Định hướng tương lai & Cam kết liêm chính
            </span>
            
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Bệ phóng số hóa thúc đẩy nghiên cứu Công nghệ sinh học
            </h3>
            
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed italic text-justify pl-4 border-l-4 border-cyan-500/60">
              "{futureApplication}"
            </p>
            
            <div className="pt-4 flex items-center space-x-4">
              <div className="p-2 bg-slate-905 border border-slate-800 rounded-xl">
                <span className="text-xs font-mono font-bold text-white uppercase block">Student Signature</span>
                <span className="text-[11px] text-cyan-400 font-serif tracking-widest block pt-0.5 select-all">Nguyễn Đức Huy</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
