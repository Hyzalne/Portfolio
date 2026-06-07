/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Sparkles, Menu, X, GraduationCap, Github } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  activeSection: string;
  scrollToSection: (id: string) => void;
}

export default function Navbar({ activeSection, scrollToSection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const navItems = [
    { id: 'home', label: 'Trang chủ' },
    { id: 'about', label: 'Giới thiệu' },
    { id: 'projects', label: 'Dự án' },
    { id: 'summary', label: 'Tổng kết' },
    { id: 'contact', label: 'Liên hệ' }
  ];

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800/60 py-3 shadow-lg'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div
            onClick={() => scrollToSection('home')}
            className="flex items-center space-x-2 cursor-pointer group"
          >
            <div className="p-2 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold tracking-tight text-lg leading-tight">
                Đức Huy
              </span>
              <span className="text-[10px] text-cyan-400 font-mono tracking-wider uppercase">
                Bio-Tech & AI
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  scrollToSection(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeSection === item.id
                    ? 'text-white bg-slate-800/80 border border-slate-700/50 shadow-inner'
                    : 'text-slate-400 hover:text-cyan-400 hover:bg-slate-900/40'
                }`}
              >
                {item.label}
              </button>
            ))}
            
            {/* CTA Portal Link */}
            <a
              href="https://uet.vnu.edu.vn"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 flex items-center space-x-1.5 px-4 py-1.5 rounded-full text-xs font-mono text-cyan-400 hover:text-cyan-300 border border-cyan-400/20 bg-cyan-950/20 hover:bg-cyan-950/40 transition-all"
            >
              <GraduationCap className="w-3.5 h-3.5" />
              <span>UET - VNU</span>
            </a>

            {/* GitHub Repo Link */}
            <a
              href="https://github.com/Hyzalne/Python-in-class"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 flex items-center space-x-1.5 px-4 py-1.5 rounded-full text-xs font-mono text-purple-400 hover:text-purple-300 border border-purple-400/20 bg-purple-950/25 hover:bg-purple-950/40 transition-all"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-400 hover:text-cyan-400 focus:outline-none w-11 h-11 flex items-center justify-center rounded-lg hover:bg-slate-900/40 border border-slate-800/40 hover:border-cyan-500/30 transition-all active:scale-90 cursor-pointer"
            >
              <motion.div
                key={mobileMenuOpen ? "open" : "closed"}
                initial={{ rotate: -90, scale: 0.8, opacity: 0 }}
                animate={{ rotate: 0, scale: 1, opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="flex items-center justify-center w-6 h-6"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </motion.div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden bg-slate-950/95 backdrop-blur-md border-b border-slate-800/80 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1 sm:px-6">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 1, x: -16 }}
                  transition={{ delay: index * 0.04, duration: 0.2 }}
                >
                  <button
                    onClick={() => {
                      scrollToSection(item.id);
                      setMobileMenuOpen(false);
                    }}
                    className={`block w-full text-left px-4 py-3.5 rounded-xl text-base font-medium transition-all active:scale-[0.98] active:bg-slate-900 ${
                      activeSection === item.id
                        ? 'bg-gradient-to-r from-slate-900 to-slate-850 text-cyan-400 border-l-4 border-cyan-500 pl-3 font-semibold shadow-inner'
                        : 'text-slate-400 hover:bg-slate-900/60 hover:text-white active:bg-slate-900/40'
                    }`}
                  >
                    {item.label}
                  </button>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 1, y: 10 }}
                transition={{ delay: navItems.length * 0.04, duration: 0.2 }}
                className="pt-4 px-4 border-t border-slate-800/65 mt-3 flex flex-col space-y-3"
              >
                <a
                  href="https://uet.vnu.edu.vn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-4 py-3.5 rounded-xl text-sm font-mono text-cyan-400 border border-cyan-400/20 bg-cyan-950/20 hover:bg-cyan-950/40 hover:text-cyan-300 transition-all active:scale-[0.98] active:bg-cyan-950/45"
                >
                  <div className="flex items-center space-x-2">
                    <GraduationCap className="w-4 h-4" />
                    <span>UET - VNU</span>
                  </div>
                  <span className="text-[10px] text-cyan-500 bg-cyan-500/10 px-2 py-0.5 rounded-full">Portal</span>
                </a>
                <a
                  href="https://github.com/Hyzalne/Python-in-class"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-4 py-3.5 rounded-xl text-sm font-mono text-slate-300 border border-slate-800/50 hover:text-cyan-400 hover:border-cyan-500/20 hover:bg-slate-900/40 hover:text-white transition-all active:scale-[0.98] active:bg-slate-900/60"
                >
                  <div className="flex items-center space-x-2">
                    <Github className="w-4 h-4 text-purple-400" />
                    <span>GitHub Repository</span>
                  </div>
                  <span className="text-xs">→</span>
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
