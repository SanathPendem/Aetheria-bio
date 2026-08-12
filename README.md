# Aetheria Bio — Next-Gen Biotechnology Landing Page

Aetheria Bio is an original, high-performance biotechnology landing page engineered as a premium portfolio application. Built with React 18, TypeScript, Tailwind CSS, Framer Motion, and custom HTML5 Canvas 3D rendering engines, it showcases quantum-accelerated protein folding, targeted mRNA lipid nanoparticles, and synthetic organoid therapeutics.

---

## 🌟 Key Features & Included Sections

The landing page implements all 6 required core sections in a seamless, logical flow:

1. **Hero Section**:
   - Compelling headline: *"Decoding Life. Engineering Tomorrow."*
   - Interactive 3D DNA Double Helix Canvas with trackball mouse rotation, glowing nucleotide nodes, and bio-particle physics.
   - Primary ("Explore Drug Pipeline") and secondary ("Launch Bio-Workbench Simulator") CTA buttons.
   - Key bio-metric validation badges (99.8% Selectivity, 0.65 Å Atomic Resolution, Phase II Lead Program).

2. **Innovation & Vision Section**:
   - Establishes company vision: *"Bridging Quantum AI with Nanoscale Cellular Delivery"*.
   - Interactive tab cards for the 4 core pillars: Quantum Protein Engineering, Precision Organ-Targeted LNPs, Ultra-Compact Epigenetic Modulation (CRISPR-Cas14), and 3D Vascularized Organoid Chips.
   - Interactive Platform Benchmark Matrix comparing Aetheria Bio vs. Traditional Biopharma.

3. **Technology & Research Section (Bio-Workbench Simulator)**:
   - Visual scientific workflow steps (Genomics & In-Silico Folding → LNP Nanocarrier Assembly → 3D Organoid Validation → Accelerated Translation).
   - **Interactive Bio-Workbench Simulator**: Live parameter sliders for Target Binding Affinity, Cellular Tropism, In-Vivo Expression Half-Life, and LNP Surface Zeta Potential.
   - Real-time `ProteinStructureCanvas` 3D rendering that dynamically recalculates docking geometry, atomic spin speed, and therapeutic efficacy metrics.
   - One-click lead presets (Onco-Lead, Neuro-Lead, Cardio-Lead).

4. **Therapeutics Pipeline & Capabilities Section**:
   - Interactive Drug Matrix showcasing candidate programs (`AX-101 OncoZen`, `AX-204 NeuroMend`, `AX-309 CardioVita`, `AX-412 SynOrgan`, `AX-505 PolyFold`).
   - Modality filter tabs (`All`, `mRNA-LNP`, `CRISPR-Cas14`, `Synthetic Organoid`, `Protein Binder`).
   - Expandable candidate detail drawers with binding affinity Kd scores, tissue tropism rates, and clinical trial IDs.
   - Strategic Co-Development & Platform Licensing callout.

5. **Statistics & Clinical Impact Section**:
   - Dynamic animated counter statistics (450M+ Molecules Screened, 99.8% Target Accuracy, 5 Active Clinical Programs, 128 Global Patents Issued).
   - Interactive International Research Node Network (Boston HQ, Zurich, Tokyo, Singapore).
   - Peer-reviewed research publications grid (*Nature Biotechnology*, *Cell Research*, *Science Translational Medicine*) with direct DOI links and impact factor badges.

6. **Final CTA & Executive Inquiry Modal**:
   - High-conversion closing banner with bioluminescent radial aura and regulatory compliance strip (GMP/GLP, FDA IND, ISO 27001).
   - Interactive Executive Inquiry Modal (`PartnerModal`) with form validation, confetti feedback animation, and success transmission state.
   - Enterprise footer with live system telemetry status indicator (*"Platform Online — All Bio-Nodes Operational"*).

---

## 🛠️ Technical Stack

- **Framework**: [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) + [Vite 8](https://vitejs.dev/)
- **Styling & Theme**: [Tailwind CSS v4](https://tailwindcss.com/) + Custom Bioluminescent CSS Variables
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/) + [Canvas Confetti](https://github.com/catdad/canvas-confetti)
- **3D Graphics**: Custom HTML5 Canvas 2D/3D Math Engine (`InteractiveHelixCanvas`, `ProteinStructureCanvas`, `MolecularParticleField`)

---

## 🚀 Local Setup & Installation

### Prerequisites
- Node.js `v18.0.0` or higher
- npm `v9.0.0` or higher

### Steps to Run Locally

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/aetheria-bio.git
   cd aetheria-bio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```
   Open your browser at `http://localhost:5173/`

4. **Build for production**:
   ```bash
   npm run build
   ```

5. **Preview production bundle**:
   ```bash
   npm run preview
   ```

---

## 📁 Repository Structure

```
├── public/
├── src/
│   ├── components/
│   │   ├── canvas/
│   │   │   ├── InteractiveHelixCanvas.tsx   # 3D Double Helix DNA engine
│   │   │   ├── MolecularParticleField.tsx    # Ambient background particles
│   │   │   └── ProteinStructureCanvas.tsx   # Live Bio-Workbench 3D renderer
│   │   ├── BioWorkbenchSimulator.tsx        # Interactive laboratory simulator
│   │   ├── CapabilitiesSection.tsx          # Therapeutics pipeline matrix
│   │   ├── FinalCTASection.tsx              # Closing CTA section
│   │   ├── Footer.tsx                       # Enterprise footer
│   │   ├── HeroSection.tsx                  # Hero banner & 3D visual
│   │   ├── ImpactSection.tsx                # Counter stats & research hubs
│   │   ├── InnovationSection.tsx            # Core pillars & comparison
│   │   ├── Navbar.tsx                       # Sticky glassmorphic navbar
│   │   ├── PartnerModal.tsx                 # Interactive inquiry form modal
│   │   └── TechnologySection.tsx            # Scientific workflow wrapper
│   ├── data/
│   │   └── biotechData.ts                   # Therapeutics & research dataset
│   ├── App.tsx                              # Main Application layout
│   ├── main.tsx                             # Entry point
│   ├── types.ts                             # TypeScript interface definitions
│   └── index.css                            # Custom CSS utilities & Tailwind setup
├── DESIGN_APPROACH.md                       # Design & Animation Approach Document
├── index.html
├── package.json
├── vite.config.ts
└── README.md
```

---

## 🌐 Live Deployment & Submission

### Deploy to Vercel
```bash
npx vercel
```

### Deploy to Netlify
```bash
npx netlify deploy --build
```

- **Public GitHub Repository**: [https://github.com/SanathPendem/aetheria-bio](https://github.com/SanathPendem/aetheria-bio)
- **Submission Form**: https://forms.gle/h4cgxChvHhYzzKvZ8
