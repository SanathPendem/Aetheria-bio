import React, { useState, useEffect } from 'react';
import { Dna, Menu, X, ArrowRight, Palette, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme, type ThemeMode } from '../context/ThemeContext';

interface NavbarProps {
  onOpenPartnerModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenPartnerModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [themeDropdownOpen, setThemeDropdownOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const sections = ['hero', 'innovation', 'technology', 'pipeline', 'impact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 250 && rect.bottom >= 250) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Innovation', href: '#innovation', id: 'innovation' },
    { label: 'Technology', href: '#technology', id: 'technology' },
    { label: 'Therapeutics Matrix', href: '#pipeline', id: 'pipeline' },
    { label: 'Clinical Validation', href: '#impact', id: 'impact' },
  ];

  const themes: { id: ThemeMode; label: string; icon: string }[] = [
    { id: 'quantum', label: 'Quantum Obsidian', icon: '🧬' },
    { id: 'aurora', label: 'Aurora Emerald', icon: '🧪' },
    { id: 'infrared', label: 'Hyper Infrared', icon: '🔥' },
    { id: 'bioidea', label: 'BioIdea Light Bento', icon: '☀️' },
  ];

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pointer-events-none">
      <div className="max-w-7xl mx-auto pointer-events-auto">
        <div
          className={`flex items-center justify-between px-4 sm:px-6 py-3 rounded-[24px] transition-all duration-300 ${
            scrolled
              ? 'bg-[#050B16]/90 backdrop-blur-2xl border border-cyan-500/30 shadow-2xl shadow-cyan-950/40'
              : 'bg-[#07121D]/80 backdrop-blur-xl border border-cyan-500/20 shadow-xl'
          }`}
        >
          {/* Left: Brand Logo & Subtitle */}
          <a href="#hero" className="flex items-center gap-3 group focus:outline-none shrink-0">
            <div className="relative w-10 h-10 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/40 flex items-center justify-center group-hover:border-cyan-400 transition-colors shadow-lg shadow-cyan-500/10">
              <Dna className="w-6 h-6 text-cyan-400 group-hover:rotate-45 transition-transform duration-500" />
              <div className="absolute inset-0 bg-cyan-400/20 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div>
              <span className="font-outfit text-xl font-extrabold tracking-tight text-white flex items-center gap-1.5 leading-none">
                AETHERIA <span className="text-cyan-400">BIO</span>
              </span>
              <span className="block text-[9px] uppercase tracking-widest text-slate-400 font-mono mt-0.5">
                SUB-ATOMIC BIO-ENGINEERING
              </span>
            </div>
          </a>

          {/* Center: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 px-3 py-1 rounded-full bg-slate-950/60 border border-cyan-500/20 backdrop-blur-md">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                  activeSection === item.id
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Action & Status Indicators */}
          <div className="hidden md:flex items-center gap-3">
            
            {/* Quantum Obsidian Theme Indicator Dropdown */}
            <div className="relative">
              <button
                onClick={() => setThemeDropdownOpen(!themeDropdownOpen)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-950/80 border border-cyan-500/30 text-slate-200 hover:text-white text-xs font-mono backdrop-blur-md transition-all hover:border-cyan-400"
                title="Switch Visual Theme"
              >
                <Palette className="w-3.5 h-3.5 text-cyan-400" />
                <span className="capitalize">{themes.find((t) => t.id === theme)?.label || 'Quantum Obsidian'}</span>
                <ChevronDown className="w-3 h-3 text-slate-400" />
              </button>

              <AnimatePresence>
                {themeDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.95 }}
                    className="absolute right-0 mt-2 w-48 rounded-2xl bg-slate-950 border border-cyan-500/40 shadow-2xl p-2 z-50 backdrop-blur-2xl space-y-1"
                  >
                    <div className="text-[10px] font-mono text-slate-400 px-3 py-1 uppercase tracking-wider">
                      Visual Preset
                    </div>
                    {themes.map((t) => (
                      <button
                        key={t.id}
                        onClick={() => {
                          setTheme(t.id);
                          setThemeDropdownOpen(false);
                        }}
                        className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium transition-all text-left ${
                          theme === t.id
                            ? 'bg-cyan-500/20 text-white border border-cyan-500/40'
                            : 'text-slate-300 hover:bg-slate-900 hover:text-white'
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          <span>{t.icon}</span>
                          <span>{t.label}</span>
                        </span>
                        {theme === t.id && <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Live System Nodes Telemetry Pill */}
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/50 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Nodes Active</span>
            </div>

            {/* CTA Button */}
            <button
              onClick={onOpenPartnerModal}
              className="px-6 py-2.5 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-600 text-slate-950 font-extrabold text-xs uppercase tracking-wider hover:shadow-xl hover:shadow-cyan-500/30 transition-all active:scale-95 flex items-center gap-1.5 shrink-0"
            >
              <span>PARTNER WITH US</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={onOpenPartnerModal}
              className="px-4 py-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-bold text-xs uppercase"
            >
              Partner
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-900 border border-white/10 text-slate-200 hover:text-white"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden mt-2 max-w-7xl mx-auto pointer-events-auto bg-[#07121D]/95 border border-cyan-500/30 rounded-3xl backdrop-blur-2xl overflow-hidden shadow-2xl"
          >
            <div className="px-6 py-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400">Theme Engine:</span>
                <div className="flex items-center gap-2">
                  {themes.map((t) => (
                    <button
                      key={t.id}
                      onClick={() => setTheme(t.id)}
                      className={`px-3 py-1 rounded-full text-xs ${
                        theme === t.id ? 'bg-cyan-500 text-black font-bold' : 'bg-slate-900 text-slate-300'
                      }`}
                    >
                      {t.icon}
                    </button>
                  ))}
                </div>
              </div>

              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2 text-base font-medium text-slate-200 hover:text-cyan-400 border-b border-white/5"
                >
                  {item.label}
                </a>
              ))}
              
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenPartnerModal();
                }}
                className="w-full py-3 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-600 text-slate-950 font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20"
              >
                PARTNER WITH US
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
