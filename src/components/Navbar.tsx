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
          if (rect.top <= 200 && rect.bottom >= 200) {
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
    { id: 'infrared', label: 'Hyper Infrared', icon: '⚡' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[var(--bg-dark)]/85 backdrop-blur-xl border-b border-[var(--border-color)] py-3 shadow-2xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#hero" className="flex items-center gap-3 group focus:outline-none">
            <div className="relative w-10 h-10 rounded-xl bg-slate-900 border border-[var(--primary-color)]/40 flex items-center justify-center group-hover:border-[var(--primary-color)] transition-colors shadow-lg shadow-[var(--glow-primary)]">
              <Dna className="w-6 h-6 text-[var(--primary-color)] group-hover:rotate-45 transition-transform duration-500" />
              <div className="absolute inset-0 bg-[var(--primary-color)]/20 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div>
              <span className="font-outfit text-xl font-bold tracking-tight text-white flex items-center gap-1.5">
                AETHERIA <span className="text-[var(--primary-color)] font-extrabold">BIO</span>
              </span>
              <span className="block text-[9px] uppercase tracking-widest text-slate-400 font-mono">
                Sub-Atomic Bio-Engineering
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 px-4 py-1.5 rounded-full bg-slate-950/70 border border-[var(--border-color)] backdrop-blur-md">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className={`px-4 py-1.5 rounded-full text-xs lg:text-sm font-medium transition-all duration-200 ${
                  activeSection === item.id
                    ? 'bg-[var(--primary-color)]/20 text-[var(--badge-text)] border border-[var(--primary-color)]/40 shadow-sm'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Action & Theme Switcher */}
          <div className="hidden lg:flex items-center gap-4">
            
            {/* Dynamic Theme Selector Dropdown */}
            <div className="relative">
              <button
                onClick={() => setThemeDropdownOpen(!themeDropdownOpen)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-[var(--border-color)] text-slate-200 hover:text-white text-xs font-mono backdrop-blur-md transition-all hover:border-[var(--primary-color)]"
                title="Switch Visual Theme"
              >
                <Palette className="w-3.5 h-3.5 text-[var(--primary-color)]" />
                <span className="capitalize">{themes.find((t) => t.id === theme)?.label}</span>
                <ChevronDown className="w-3 h-3 text-slate-400" />
              </button>

              <AnimatePresence>
                {themeDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.95 }}
                    className="absolute right-0 mt-2 w-48 rounded-2xl bg-slate-950/95 border border-[var(--primary-color)]/40 shadow-2xl p-2 z-50 backdrop-blur-2xl space-y-1"
                  >
                    <div className="text-[10px] font-mono text-slate-400 px-3 py-1 uppercase tracking-wider">
                      Select Aesthetic Theme
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
                            ? 'bg-[var(--primary-color)]/20 text-white border border-[var(--primary-color)]/40'
                            : 'text-slate-300 hover:bg-slate-900 hover:text-white'
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          <span>{t.icon}</span>
                          <span>{t.label}</span>
                        </span>
                        {theme === t.id && <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary-color)]" />}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Live System Telemetry Indicator */}
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-950/80 border border-[var(--border-color)] text-[var(--badge-text)] text-xs font-mono">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Nodes Active</span>
            </div>

            {/* CTA Button */}
            <button
              onClick={onOpenPartnerModal}
              className="relative group px-5 py-2 rounded-xl bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] text-slate-950 font-bold text-xs uppercase tracking-wider hover:opacity-95 transition-all shadow-lg shadow-[var(--glow-primary)] active:scale-95 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Partner With Us
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </div>

          {/* Mobile Navigation controls */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setTheme(theme === 'quantum' ? 'aurora' : theme === 'aurora' ? 'infrared' : 'quantum')}
              className="p-2 rounded-lg bg-slate-900 border border-[var(--border-color)] text-[var(--primary-color)]"
              title="Toggle Theme"
            >
              <Palette className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-900 border border-white/10 text-slate-200 hover:text-white"
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
            className="md:hidden bg-slate-950/95 border-b border-[var(--border-color)] backdrop-blur-2xl overflow-hidden"
          >
            <div className="px-6 py-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400">Theme:</span>
                <div className="flex items-center gap-2">
                  {themes.map((t) => (
                    <button
                      key={t.id}
                      onClick={() => setTheme(t.id)}
                      className={`px-3 py-1 rounded-lg text-xs font-mono ${
                        theme === t.id ? 'bg-[var(--primary-color)] text-black font-bold' : 'bg-slate-900 text-slate-400'
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
                  className="block py-2 text-base font-medium text-slate-200 hover:text-[var(--primary-color)] border-b border-white/5"
                >
                  {item.label}
                </a>
              ))}
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenPartnerModal();
                }}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] text-black font-bold text-sm tracking-wider uppercase flex items-center justify-center gap-2 shadow-lg shadow-[var(--glow-primary)]"
              >
                Partner With Us
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
