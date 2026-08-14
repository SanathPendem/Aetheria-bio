import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle2, Building, Mail, User } from 'lucide-react';
import confetti from 'canvas-confetti';

interface PartnerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PartnerModal: React.FC<PartnerModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    partnershipType: 'Co-Development & Licensing',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 75,
      spread: 60,
      origin: { y: 0.6 },
    });
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      organization: '',
      partnershipType: 'Co-Development & Licensing',
      message: '',
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-xl rounded-3xl bg-slate-950 border border-[var(--primary-color)]/40 p-6 sm:p-8 shadow-2xl shadow-[var(--glow-primary)] overflow-hidden hud-corner-box"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-slate-900 border border-white/10 text-slate-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>

          {!submitted ? (
            <div className="space-y-6">
              <div>
                <span className="text-xs font-mono text-[var(--primary-color)] uppercase tracking-widest block">Executive Inquiry</span>
                <h3 className="font-outfit text-2xl font-bold text-white mt-1">Initiate Strategic Partnership</h3>
                <p className="text-slate-400 text-xs mt-1">
                  Connect with Aetheria Bio’s business development and scientific advisory committee.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-xs font-mono text-slate-300 block mb-1">Full Name *</label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Dr. Evelyn Vance"
                      className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-white text-sm focus:border-[var(--primary-color)] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-mono text-slate-300 block mb-1">Work Email *</label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.vance@pharma.com"
                        className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-white text-sm focus:border-[var(--primary-color)] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-mono text-slate-300 block mb-1">Organization *</label>
                    <div className="relative">
                      <Building className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                      <input
                        type="text"
                        required
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        placeholder="Genomics Institute / Bio-Pharma"
                        className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-white text-sm focus:border-[var(--primary-color)] focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-mono text-slate-300 block mb-1">Partnership Interest</label>
                  <select
                    value={formData.partnershipType}
                    onChange={(e) => setFormData({ ...formData, partnershipType: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-white text-sm focus:border-[var(--primary-color)] focus:outline-none"
                  >
                    <option value="Co-Development & Licensing">Co-Development & Clinical Licensing</option>
                    <option value="AI Engine Target Discovery">AI Protein Engine Target Screening</option>
                    <option value="LNP Delivery Platform Access">LNP Delivery Platform Access</option>
                    <option value="Investor Inquiry">Investor & Venture Capital Relations</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-mono text-slate-300 block mb-1">Message / Scope</label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Briefly describe target indication or program requirements..."
                    className="w-full p-3 rounded-xl bg-slate-900 border border-white/10 text-white text-sm focus:border-[var(--primary-color)] focus:outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] text-slate-950 font-bold text-xs uppercase tracking-wider hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-lg shadow-[var(--glow-primary)]"
                >
                  <Send className="w-4 h-4" />
                  Submit Partnership Request
                </button>
              </form>
            </div>
          ) : (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-[var(--primary-color)]/20 border border-[var(--primary-color)]/40 text-[var(--primary-color)] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-outfit text-2xl font-bold text-white">Inquiry Transmitted</h3>
              <p className="text-slate-300 text-sm max-w-sm mx-auto">
                Thank you, <span className="text-[var(--primary-color)] font-bold">{formData.name}</span>. Our Business Development team will contact you at <span className="text-white font-mono">{formData.email}</span> within 24 hours.
              </p>
              <button
                onClick={handleReset}
                className="px-6 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-slate-200 hover:text-white font-semibold text-xs uppercase"
              >
                Close Window
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
