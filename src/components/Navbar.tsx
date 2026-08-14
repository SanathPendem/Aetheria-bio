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
    { label: 'About Us', href: '#innovation', id: 'innovation' },
    { label: 'Technology', href: '#technology', id: 'technology' },
    { label: 'Pipeline', href: '#pipeline', id: 'pipeline' },
    { label: 'Clinical Impact', href: '#impact', id: 'impact' },
  ];

  const themes: { id: ThemeMode; label: string; icon: string }[] = [
    { id: 'bioidea', label: 'BioIdea Light Bento', icon: '☀️' },
    { id: 'quantum', label: 'Quantum Obsidian', icon: '🧬' },
    { id: 'aurora', label: 'Aurora Emerald', icon: '🧪' },
    { id: 'infrared', label: 'Hyper Infrared', icon: '🔥' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 bg-[var(--bg-surface)]/95 backdrop-blur-xl border-b border-slate-200/80 transition-all duration-300 ${
        scrolled ? 'py-3.5 shadow-sm' : 'py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Left: Brand Logo & Quick Header Micro Stats */}
          <div className="flex items-center gap-6">
            <a href="#hero" className="flex items-center gap-2.5 group focus:outline-none">
              <div className="w-9 h-9 rounded-2xl bg-slate-950 flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
                <Dna className="w-5 h-5 text-white" />
              </div>
              <span className="font-outfit text-2xl font-extrabold tracking-tight text-[var(--text-main)]">
                BioIdea <span className="text-blue-600 text-xs font-mono align-super font-bold">BIO</span>
              </span>
            </a>

            {/* Header Micro-Stats callout (from BioIdea screenshot) */}
            <div className="hidden xl:flex items-center gap-5 pl-6 border-l border-slate-200 text-xs font-sans">
              <div>
                <span className="font-extrabold text-[var(--text-main)] text-sm">32k+</span>
                <span className="block text-[11px] text-[var(--text-muted)] leading-none">Active Researchers</span>
              </div>
              <div>
                <span className="font-extrabold text-[var(--text-main)] text-sm">15+</span>
                <span className="block text-[11px] text-[var(--text-muted)] leading-none">Leading Research Projects</span>
              </div>
            </div>
          </div>

          {/* Center: Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className={`transition-colors py-1 ${
                  activeSection === item.id
                    ? 'text-blue-600 font-bold border-b-2 border-blue-600'
                    : 'text-[var(--text-muted)] hover:text-[var(--text-main)]'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Action & Theme Switcher */}
          <div className="hidden lg:flex items-center gap-3">
            
            {/* Dynamic Theme Switcher Dropdown */}
            <div className="relative">
              <button
                onClick={() => setThemeDropdownOpen(!themeDropdownOpen)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-[var(--text-main)] text-xs font-semibold transition-all border border-slate-200"
                title="Switch Visual Theme"
              >
                <Palette className="w-3.5 h-3.5 text-blue-600" />
                <span className="capitalize">{themes.find((t) => t.id === theme)?.label}</span>
                <ChevronDown className="w-3 h-3 text-slate-500" />
              </button>

              <AnimatePresence>
                {themeDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.95 }}
                    className="absolute right-0 mt-2 w-48 rounded-2xl bg-white border border-slate-200 shadow-xl p-2 z-50 space-y-1"
                  >
                    <div className="text-[10px] font-mono text-slate-400 px-3 py-1 uppercase tracking-wider">
                      Select UI Theme
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
                            ? 'bg-slate-900 text-white font-bold'
                            : 'text-slate-700 hover:bg-slate-100'
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          <span>{t.icon}</span>
                          <span>{t.label}</span>
                        </span>
                        {theme === t.id && <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Contact Outline Pill Button */}
            <button
              onClick={onOpenPartnerModal}
              className="px-5 py-2 rounded-full border border-slate-900 text-slate-900 font-semibold text-xs hover:bg-slate-100 transition-colors"
            >
              Contact
            </button>

            {/* Start Now Solid Black Pill Button */}
            <button
              onClick={onOpenPartnerModal}
              className="px-6 py-2.5 rounded-full bg-slate-950 text-white font-bold text-xs hover:bg-slate-800 transition-all shadow-md active:scale-95 flex items-center gap-1.5"
            >
              <span>Start Now</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={onOpenPartnerModal}
              className="px-4 py-2 rounded-full bg-slate-950 text-white text-xs font-semibold"
            >
              Start Now
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-100 text-slate-900"
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
            className="md:hidden bg-white border-b border-slate-200 overflow-hidden"
          >
            <div className="px-6 py-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-slate-500">Theme Mode:</span>
                <div className="flex items-center gap-2">
                  {themes.map((t) => (
                    <button
                      key={t.id}
                      onClick={() => setTheme(t.id)}
                      className={`px-3 py-1 rounded-full text-xs ${
                        theme === t.id ? 'bg-slate-950 text-white font-bold' : 'bg-slate-100 text-slate-700'
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
                  className="block py-2 text-base font-medium text-slate-800 hover:text-blue-600 border-b border-slate-100"
                >
                  {item.label}
                </a>
              ))}
              
              <div className="flex gap-3 pt-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenPartnerModal();
                  }}
                  className="w-full py-3 rounded-full border border-slate-900 text-slate-900 font-bold text-xs uppercase text-center"
                >
                  Contact
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenPartnerModal();
                  }}
                  className="w-full py-3 rounded-full bg-slate-950 text-white font-bold text-xs uppercase text-center shadow-md"
                >
                  Start Now
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
