import { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { TrustMetricsBar } from './components/TrustMetricsBar';
import { InnovationSection } from './components/InnovationSection';
import { CapabilitiesSection } from './components/CapabilitiesSection';
import { DrugPipelineSection } from './components/DrugPipelineSection';
import { ImpactSection } from './components/ImpactSection';
import { BioWorkbenchSimulator } from './components/BioWorkbenchSimulator';
import { TechStackSection } from './components/TechStackSection';
import { ResearchBlogSection } from './components/ResearchBlogSection';
import { FinalCTASection } from './components/FinalCTASection';
import { Footer } from './components/Footer';
import { PartnerModal } from './components/PartnerModal';
import { MolecularParticleField } from './components/canvas/MolecularParticleField';

export function AppContent() {
  const [isPartnerModalOpen, setIsPartnerModalOpen] = useState(false);

  const handleOpenPartnerModal = () => {
    setIsPartnerModalOpen(true);
  };

  const handleClosePartnerModal = () => {
    setIsPartnerModalOpen(false);
  };

  const handleOpenWhitepaperModal = () => {
    setIsPartnerModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#020711] text-slate-100 relative overflow-x-hidden selection:bg-[#00F2FE] selection:text-black transition-colors duration-500">
      {/* Background Floating Particle Field */}
      <MolecularParticleField particleCount={45} className="z-0 opacity-60 pointer-events-none" />

      {/* Navigation Header */}
      <Navbar onOpenPartnerModal={handleOpenPartnerModal} />

      {/* Main Content Layout */}
      <main className="relative z-10">
        {/* 1. Hero Section (Two-Column + 3D Helix Visual + Floating Glass Cards) */}
        <HeroSection
          onOpenPartnerModal={handleOpenPartnerModal}
          onOpenWhitepaperModal={handleOpenWhitepaperModal}
        />

        {/* 2. Trust Metrics Section (Horizontal Glass Cards) */}
        <TrustMetricsBar />

        {/* 3. Innovation Section ("The Intelligence Behind the Biology") */}
        <InnovationSection />

        {/* 4. Therapeutics Matrix Section */}
        <CapabilitiesSection onOpenPartnerModal={handleOpenPartnerModal} />

        {/* 5. Drug Pipeline Horizontal Visualization */}
        <DrugPipelineSection onOpenPartnerModal={handleOpenPartnerModal} />

        {/* 6. Clinical Validation Dashboard Section */}
        <ImpactSection />

        {/* 7. Bio-Workbench Interactive SaaS Feature */}
        <section id="technology" className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 text-cyan-400 text-xs font-mono tracking-widest uppercase">
                ✦ Interactive Computational Platform
              </div>
              <h2 className="font-outfit text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
                Bio-Workbench <span className="text-gradient-cyan">Simulation Suite</span>
              </h2>
              <p className="text-slate-400 text-base sm:text-lg">
                Explore real-time biophysical target docking, binding free energy (ΔG), and cellular tropism calculations in our interactive workbench.
              </p>
            </div>
            <BioWorkbenchSimulator />
          </div>
        </section>

        {/* 8. Our Technology Stack Flow Section */}
        <TechStackSection />

        {/* 9. Research Insights & Editorial Blog */}
        <ResearchBlogSection />

        {/* 10. Final Closing Call-to-Action Section */}
        <FinalCTASection onOpenPartnerModal={handleOpenPartnerModal} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <PartnerModal
        isOpen={isPartnerModalOpen}
        onClose={handleClosePartnerModal}
      />
    </div>
  );
}

export function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
