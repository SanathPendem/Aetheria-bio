import { useState } from 'react';
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

export function App() {
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
    <div className="min-h-screen bg-[#070A11] text-slate-100 relative overflow-x-hidden selection:bg-cyan-500 selection:text-black">
      {/* Background Floating Particle Field */}
      <MolecularParticleField particleCount={40} className="z-0" />

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

      {/* Modals */}
      <PartnerModal
        isOpen={isPartnerModalOpen}
        onClose={handleClosePartnerModal}
      />
    </div>
  );
}

export default App;
