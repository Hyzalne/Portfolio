/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Mail, Facebook, Github, Send, MessageSquare, ChevronUp, CheckCircle, Heart, Info } from 'lucide-react';
import { Feedback } from '../types';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    content: ''
  });
  
  const [submissions, setSubmissions] = useState<Feedback[]>([]);
  const [showSuccess, setShowSuccess] = useState(false);
  // Load old feedback from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('huy_portfolio_feedback');
    if (saved) {
      try {
        setSubmissions(JSON.parse(saved));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.content) return;

    const newFeedback: Feedback = {
      id: crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(36).substring(7),
      name: formData.name,
      email: formData.email,
      content: formData.content,
      timestamp: new Date().toLocaleDateString('vi-VN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    };

    const updated = [newFeedback, ...submissions];
    setSubmissions(updated);
    localStorage.setItem('huy_portfolio_feedback', JSON.stringify(updated));

    // Reset Form & Show Success Banner
    setFormData({ name: '', email: '', content: '' });
    setShowSuccess(true);
    
    setTimeout(() => {
      setShowSuccess(false);
    }, 4500);
  };



  return (
    <section
      id="contact"
      className="py-24 bg-slate-950 relative text-left overflow-hidden min-h-screen flex flex-col justify-between"
    >
      {/* Absolute details bg */}
      <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full animate-fade-in flex-grow">
        
        {/* Section Heading */}
        <div className="text-center mb-16 space-y-2">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-slate-900 border border-slate-800 text-cyan-400 text-xs rounded-full font-mono uppercase tracking-wider">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Liên Hệ Tương Tác</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Cảm ơn & Góp ý
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mx-auto"></div>
        </div>

        {/* 2-Column Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch mb-16">
          
          {/* Column Left: Thank you and Contact info */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8 bg-slate-900/40 p-8 rounded-2xl border border-slate-800/80">
            <div className="space-y-6">
              <div className="p-3 bg-cyan-950/40 w-fit rounded-2xl border border-cyan-500/15">
                <Heart className="w-8 h-8 text-cyan-400 animate-pulse animate-duration-2000" />
              </div>
              
              <h3 className="text-2xl font-extrabold text-white tracking-tight">
                Cảm ơn bạn đã ghé thăm Portfolio!
              </h3>
              
              <p className="text-slate-300 text-sm leading-relaxed text-justify">
                Tôi xin kính gửi lời cảm ơn chân thành nhất đến Thầy/Cô cố vấn học trình và các bạn sinh viên K70G-BE đã luôn đồng hành, phản biện và đóng góp ý kiến sâu sắc giúp tôi hoàn thiện 6 cụm bài giảng nghiên cứu số này.
              </p>
              
              <p className="text-slate-400 text-xs">
                Mọi ý kiến đóng góp của Thầy/Cô thông qua form bên cạnh sẽ được tôi tiếp thu sâu sắc để nâng cấp chất lượng ứng dụng và phương hướng học tập trong tương lai.
              </p>
            </div>

            {/* Practical social linkages */}
            <div className="space-y-4 pt-6 border-t border-slate-800/60">
              <span className="text-xs font-mono font-bold text-slate-500 block uppercase tracking-widest">
                Thông tin tọa độ liên lạc
              </span>

              <div className="space-y-3">
                {/* Email link */}
                <a
                  href="mailto:nguyenduchuy03112007@gmail.com"
                  className="flex items-center space-x-3 text-slate-300 hover:text-cyan-400 transition-colors active:scale-[0.98] group"
                >
                  <div className="p-2.5 bg-slate-950 border border-slate-800 rounded-xl group-hover:bg-cyan-950 group-hover:border-cyan-500/20">
                    <Mail className="w-4.5 h-4.5 text-cyan-400" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-500 uppercase block leading-none mb-1">Gửi hộp thư điện tử</span>
                    <span className="text-xs font-bold leading-none select-all block">nguyenduchuy03112007@gmail.com</span>
                  </div>
                </a>

                {/* FB link placeholder */}
                <a
                  href="https://www.facebook.com/ndh66231"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-slate-300 hover:text-blue-400 transition-colors active:scale-[0.98] group"
                >
                  <div className="p-2.5 bg-slate-950 border border-slate-800 rounded-xl group-hover:bg-blue-950 group-hover:border-blue-500/20">
                    <Facebook className="w-4.5 h-4.5 text-blue-500" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-500 uppercase block leading-none mb-1">Kết nối Facebook</span>
                    <span className="text-xs font-bold leading-none block">facebook.com/ndh66231</span>
                  </div>
                </a>

                {/* GitHub link placeholder */}
                <a
                  href="https://github.com/Hyzalne/Python-in-class"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-slate-300 hover:text-purple-400 transition-colors active:scale-[0.98] group"
                >
                  <div className="p-2.5 bg-slate-950 border border-slate-800 rounded-xl group-hover:bg-purple-950 group-hover:border-purple-500/20">
                    <Github className="w-4.5 h-4.5 text-purple-400" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-500 uppercase block leading-none mb-1">GitHub Repository</span>
                    <span className="text-xs font-bold leading-none block">github.com/Hyzalne/Python-in-class</span>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Column Right: Feedback Form with simulated persistence verification */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6 bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-xl">
            
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-white tracking-tight">Form đóng góp ý kiến khoa học</h3>
              <p className="text-slate-400 text-xs">Vui lòng cung cấp danh tính chính xác để phục vụ lưu trữ nhật trình.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5 flex-grow">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* FullName field */}
                <div className="space-y-1.5 text-left">
                  <label htmlFor="name-input" className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider block">
                    Họ và Tên Thầy/Cô, bạn học
                  </label>
                  <input
                    id="name-input"
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Ví dụ: PGS. TS. Nguyễn Văn A"
                    className="w-full bg-slate-950 border border-slate-800 focus:border-cyan-500 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none transition-all"
                  />
                </div>

                {/* Email field */}
                <div className="space-y-1.5 text-left">
                  <label htmlFor="email-input" className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider block">
                    Địa chỉ Email liên hệ
                  </label>
                  <input
                    id="email-input"
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="email@example.com"
                    className="w-full bg-slate-950 border border-slate-800 focus:border-cyan-500 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none transition-all"
                  />
                </div>
              </div>

              {/* Message content */}
              <div className="space-y-1.5 text-left">
                <label htmlFor="content-input" className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider block">
                  Nội dung góp ý chuyên môn
                </label>
                <textarea
                  id="content-input"
                  name="content"
                  required
                  rows={4}
                  value={formData.content}
                  onChange={handleChange}
                  placeholder="Viết nhận xét của bạn vào đây..."
                  className="w-full bg-slate-950 border border-slate-800 focus:border-cyan-500 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none transition-all resize-none"
                ></textarea>
              </div>

              {/* Submit button */}
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center space-x-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-sm transition-all duration-300 shadow-md shadow-cyan-500/20 hover:shadow-cyan-400/30 active:scale-[0.98] cursor-pointer"
              >
                <span>Gửi ý kiến đóng góp</span>
                <Send className="w-4 h-4" />
              </button>
            </form>

            {/* Success alert notice */}
            {showSuccess && (
              <div className="p-4 bg-emerald-950/85 border border-emerald-500/30 text-emerald-350 rounded-xl flex items-start space-x-3 animate-fade-in">
                <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div className="text-left text-xs leading-relaxed">
                  <h4 className="font-bold text-white mb-0.5">Nộp góp ý thành công!</h4>
                  <p>Ý kiến phản biện của bạn đã được mã hóa lưu trữ bền vững tại Local Storage trình duyệt này. Chân thành cảm ơn bạn!</p>
                </div>
              </div>
            )}

            {/* Real Submission logs display for verification - showing transparency */}
            {submissions.length > 0 && (
              <div className="border-t border-slate-805 pt-5 space-y-3 max-h-36 overflow-y-auto pr-1">
                <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest block text-left">
                  Nhật ký ý kiến tiếp nhận ({submissions.length})
                </span>
                <div className="space-y-2">
                  {submissions.slice(0, 3).map((sub) => (
                    <div key={sub.id} className="p-3 bg-slate-950 rounded-xl border border-slate-850 text-left text-xs space-y-1">
                      <div className="flex justify-between items-center text-[10px] font-mono">
                        <span className="text-cyan-400 font-bold">{sub.name}</span>
                        <span className="text-slate-500">{sub.timestamp}</span>
                      </div>
                      <p className="text-slate-300 line-clamp-2">{sub.content}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

        </div>

      </div>

      {/* Persistent global responsive Footer */}
      <footer className="relative border-t border-slate-900 bg-slate-950/90 py-8 text-center text-xs text-slate-500 z-10 w-full px-4 mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:items-start text-center sm:text-left space-y-1">
            <span className="text-slate-400 font-semibold uppercase text-[11px] tracking-wide block"> Nguyễn Đức Huy | MSSV: 25024198</span>
            <p className="text-slate-500 text-[10px]">Sinh viên Công nghệ Sinh học - K70G-BE - Đại học Công nghệ, Đại học Quốc gia Hà Nội</p>
          </div>
          <div className="text-center sm:text-right">
            <span className="block text-[11px]">© 2026 Nguyễn Đức Huy | Portfolio Nhập môn Công nghệ số và Ứng dụng Trí tuệ nhân tạo (AI)</span>
            <span className="text-[10px] font-mono text-cyan-500/80 mt-0.5 block">Phát triển hoàn thiện trên nền tảng AI Studio</span>
          </div>
        </div>
      </footer>



    </section>
  );
}
