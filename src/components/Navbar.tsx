import React, { useState, useEffect } from 'react';
import { Dna, Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  onOpenPartnerModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenPartnerModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Track active section
      const sections = ['hero', 'innovation', 'technology', 'pipeline', 'impact', 'contact'];
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
    { label: 'Technology & Simulator', href: '#technology', id: 'technology' },
    { label: 'Therapeutics Pipeline', href: '#pipeline', id: 'pipeline' },
    { label: 'Clinical Impact', href: '#impact', id: 'impact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#070A11]/85 backdrop-blur-xl border-b border-white/10 py-3 shadow-2xl shadow-cyan-950/20'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#hero" className="flex items-center gap-3 group focus:outline-none">
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 border border-cyan-500/40 flex items-center justify-center group-hover:border-cyan-400 transition-colors shadow-lg shadow-cyan-500/10">
              <Dna className="w-6 h-6 text-cyan-400 group-hover:rotate-45 transition-transform duration-500" />
              <div className="absolute inset-0 bg-cyan-400/20 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div>
              <span className="font-outfit text-xl font-bold tracking-tight text-white flex items-center gap-1.5">
                AETHERIA <span className="text-cyan-400 font-extrabold">BIO</span>
              </span>
              <span className="block text-[10px] uppercase tracking-widest text-slate-400 font-mono">
                Cellular Precision
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 px-4 py-1.5 rounded-full bg-slate-900/60 border border-white/10 backdrop-blur-md">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className={`px-4 py-1.5 rounded-full text-xs lg:text-sm font-medium transition-all duration-200 ${
                  activeSection === item.id
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 shadow-sm shadow-cyan-500/20'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Action & Status Badge */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Live System Telemetry Indicator */}
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Platform Online</span>
            </div>

            {/* CTA Button */}
            <button
              onClick={onOpenPartnerModal}
              className="relative group px-5 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 text-black font-semibold text-xs uppercase tracking-wider hover:opacity-95 transition-all shadow-lg shadow-cyan-500/25 active:scale-95 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Partner With Us
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={onOpenPartnerModal}
              className="px-3 py-1.5 rounded-lg bg-cyan-500 text-black text-xs font-semibold"
            >
              Partner
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
            className="md:hidden bg-[#070A11]/95 border-b border-white/10 backdrop-blur-2xl overflow-hidden"
          >
            <div className="px-6 py-6 space-y-4">
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 text-xs font-mono w-fit">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>5 Clinical Programs Active</span>
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
                className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 text-black font-bold text-sm tracking-wider uppercase flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20"
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
