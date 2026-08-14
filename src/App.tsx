import { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { InnovationSection } from './components/InnovationSection';
import { TechnologySection } from './components/TechnologySection';
import { CapabilitiesSection } from './components/CapabilitiesSection';
import { ImpactSection } from './components/ImpactSection';
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
    <div className="min-h-screen bg-[var(--bg-canvas)] py-3 sm:py-6 px-2 sm:px-6 relative overflow-x-hidden selection:bg-slate-900 selection:text-white transition-colors duration-500">
      {/* Background Floating Particle Field */}
      <MolecularParticleField particleCount={30} className="z-0 opacity-40 pointer-events-none" />

      {/* Main BioIdea Outer Floating Frame (Matching Dribbble Reference Screenshot Layout) */}
      <div className="max-w-[1440px] mx-auto bg-[var(--bg-surface)] rounded-[28px] sm:rounded-[40px] lg:rounded-[48px] shadow-2xl shadow-slate-900/10 border border-slate-200/80 overflow-hidden relative transition-colors duration-500">
        
        {/* Navigation Header */}
        <Navbar onOpenPartnerModal={handleOpenPartnerModal} />

        {/* Main Content Layout - 6 Required Sections */}
        <main className="relative z-10">
          {/* 1. Hero Section */}
          <HeroSection
            onOpenPartnerModal={handleOpenPartnerModal}
            onOpenWhitepaperModal={handleOpenWhitepaperModal}
          />

          {/* 2. About / Innovation Section */}
          <InnovationSection />

          {/* 3. Technology & Research Section (Includes Bio-Workbench Simulator) */}
          <TechnologySection />

          {/* 4. Capabilities / Therapeutics Pipeline Section */}
          <CapabilitiesSection onOpenPartnerModal={handleOpenPartnerModal} />

          {/* 5. Statistics / Impact & Publications Section */}
          <ImpactSection />

          {/* 6. Final Closing Call-to-Action Section */}
          <FinalCTASection onOpenPartnerModal={handleOpenPartnerModal} />
        </main>

        {/* Footer */}
        <Footer />
      </div>

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
