/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { personalInfo, learningGoals, developmentDirections, portfolioObjectives, timelineEvents } from '../data/portfolioData';
import { Award, Compass, Heart, BookOpen, GraduationCap, Calendar, Milestone } from 'lucide-react';

export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-slate-900 relative overflow-hidden text-left"
    >
      {/* Visual background accents */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-10 w-72 h-72 bg-cyan-600/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 animate-fade-in">
        
        {/* Section Heading */}
        <div className="text-center md:text-left mb-16 space-y-2">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-slate-800 text-cyan-400 text-xs rounded-full font-mono uppercase tracking-wider">
            <Milestone className="w-3.5 h-3.5" />
            <span>Học Trình Cá Nhân</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Giới thiệu & Định hướng phát triển
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mx-auto md:mx-0"></div>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Column Left: Avatar & Identity Card */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative group w-full max-w-sm rounded-3xl overflow-hidden shadow-2xl border-2 border-slate-800 bg-slate-950 p-6 transition-all duration-300 hover:border-cyan-500/30">
              
              {/* Outer soft glow border glow */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-cyan-500/10 rounded-bl-full blur-md"></div>
              
              {/* Profile Image Frame */}
              <div className="relative w-64 h-64 mx-auto rounded-2xl overflow-hidden border-2 border-slate-800 bg-slate-900 mb-6 shadow-inner">
                <img
                  src={personalInfo.avatarPlaceholder}
                  alt={personalInfo.fullName}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Administrative Details */}
              <div className="text-center space-y-4">
                <div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">{personalInfo.fullName}</h3>
                  <span className="text-cyan-400 text-xs font-mono font-bold tracking-wider uppercase">
                    MSSV: {personalInfo.studentId}
                  </span>
                </div>

                <div className="border-t border-slate-800/80 pt-4 text-left space-y-2.5 text-sm text-slate-300">
                  <div className="flex justify-between items-center bg-slate-900/60 px-3 py-2 rounded-xl">
                    <span className="text-slate-400 font-medium">Lớp sinh hoạt</span>
                    <span className="font-mono text-white font-semibold">{personalInfo.classId}</span>
                  </div>
                  
                  <div className="flex justify-between items-center bg-slate-900/60 px-3 py-2 rounded-xl">
                    <span className="text-slate-400 font-medium">Chuyên ngành</span>
                    <span className="text-white font-semibold text-right">{personalInfo.major}</span>
                  </div>

                  <div className="bg-slate-900/60 p-3 rounded-xl space-y-1">
                    <span className="text-slate-400 font-medium text-xs block">Trường đào tạo</span>
                    <span className="text-white font-semibold text-xs leading-relaxed block">{personalInfo.university}</span>
                  </div>
                </div>

                <div className="flex items-start bg-slate-900/30 border border-slate-800 p-3 rounded-xl text-left space-x-2">
                  <Heart className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <p className="text-xs text-slate-400 leading-relaxed">
                    <span className="text-slate-300 font-semibold block mb-0.5">Sở thích cá nhân:</span>
                    {personalInfo.hobbies}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Column Right: Scholastic Targets & Roadmap (Bento Grid Style) */}
          <div className="lg:col-span-7 space-y-8">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Learning Goals Card */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-950 to-slate-900 border border-slate-800 hover:border-slate-700 transition-all shadow-xl group">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2.5 bg-cyan-950 border border-cyan-500/20 rounded-xl group-hover:bg-cyan-900/40 transition-colors">
                    <Award className="w-5 h-5 text-cyan-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white">Mục tiêu học tập</h3>
                </div>
                <ul className="space-y-3.5">
                  {learningGoals.map((g, idx) => (
                    <li key={idx} className="flex items-start space-x-2.5 text-slate-300 text-sm">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 shrink-0"></div>
                      <p className="leading-relaxed">{g.content}</p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Development Roadmap Card */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-950 to-slate-900 border border-slate-800 hover:border-slate-700 transition-all shadow-xl group">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2.5 bg-blue-950 border border-blue-500/20 rounded-xl group-hover:bg-blue-900/40 transition-colors">
                    <Compass className="w-5 h-5 text-blue-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white">Định hướng phát triển</h3>
                </div>
                <ul className="space-y-3.5">
                  {developmentDirections.map((dir, idx) => (
                    <li key={idx} className="flex items-start space-x-2.5 text-slate-300 text-sm">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 shrink-0"></div>
                      <p className="leading-relaxed">{dir}</p>
                    </li>
                  ))}
                </ul>
              </div>
              
            </div>

            {/* Portfolio Mission Card (Spans full width) */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border border-slate-800 hover:border-slate-700 transition-all shadow-xl group">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2.5 bg-violet-950 border border-violet-500/20 rounded-xl group-hover:bg-violet-900/40 transition-colors">
                  <BookOpen className="w-5 h-5 text-violet-400" />
                </div>
                <h3 className="text-lg font-bold text-white">Mục tiêu của Portfolio học tập</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                {portfolioObjectives.map((obj, idx) => (
                  <div key={idx} className="bg-slate-900/50 p-4 rounded-xl border border-slate-800 hover:bg-slate-900 transition-colors">
                    <span className="text-xs font-mono font-bold text-violet-400 uppercase tracking-wider block mb-2">0{idx + 1}. Nhiệm vụ</span>
                    <p className="text-slate-300 text-xs leading-relaxed">{obj}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Timeline Section */}
        <div className="mt-24 border-t border-slate-800 pt-16">
          <div className="text-center mb-16 space-y-2">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-slate-800 text-cyan-400 text-xs rounded-full font-mono uppercase tracking-wider">
              <Calendar className="w-3.5 h-3.5" />
              <span>Tiến trình thời gian</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white">Timeline phát triển học tập</h3>
            <p className="text-slate-400 text-sm max-w-xl mx-auto">
              Lộ trình rèn luyện kỹ nghệ số và khoa học sự sống từ cơ bản đến nâng cao của sinh viên Nguyễn Đức Huy tại ĐHQGHN.
            </p>
          </div>

          {/* Timeline Node Chain */}
          <div className="relative max-w-4xl mx-auto pl-6 sm:pl-0">
            {/* Center spine on sm+, left spine otherwise */}
            <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-0.5 bg-slate-800 -translate-x-1/2 z-0"></div>

            <div className="space-y-12">
              {timelineEvents.map((ev, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <div
                    key={idx}
                    className={`relative flex flex-col sm:flex-row items-start sm:items-center justify-between ${
                      isEven ? 'sm:flex-row-reverse' : ''
                    }`}
                  >
                    {/* Circle Node indicator */}
                    <div className="absolute left-6 sm:left-1/2 top-1.5 sm:top-1/2 w-6 h-6 rounded-full bg-slate-950 border-4 border-cyan-500 -translate-x-1/2 -translate-y-1/2 z-10 scale-100 group-hover:scale-110 transition-transform"></div>

                    {/* Timeline Box */}
                    <div className="w-full sm:w-[45%] pl-6 sm:pl-0">
                      <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 text-slate-300 shadow-xl hover:border-slate-700 hover:bg-slate-900/60 transition-all group">
                        <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest block mb-1">
                          {ev.year}
                        </span>
                        <h4 className="text-white text-lg font-bold mb-2 group-hover:text-cyan-300 transition-colors">
                          {ev.title}
                        </h4>
                        <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">{ev.description}</p>
                      </div>
                    </div>

                    {/* Empty balancing spacer for deskop */}
                    <div className="hidden sm:block w-[45%]"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
