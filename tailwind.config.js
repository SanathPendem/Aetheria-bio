/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bio: {
          bg: "#070A11",
          card: "#0E1424",
          cardBorder: "#1E293B",
          cyan: "#00F2FE",
          electric: "#4FACFE",
          teal: "#06B6D4",
          emerald: "#10B981",
          purple: "#8B5CF6",
          dark: "#05070D",
          dimText: "#94A3B8",
        }
      },
      fontFamily: {
        sans: ['Inter', 'Outfit', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glowPulse 3s infinite alternate',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        glowPulse: {
          '0%': { boxShadow: '0 0 15px rgba(0, 242, 254, 0.2)' },
          '100%': { boxShadow: '0 0 35px rgba(0, 242, 254, 0.6)' },
        }
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(circle at 50% 20%, rgba(0, 242, 254, 0.15) 0%, rgba(7, 10, 17, 0.95) 70%)',
        'card-gradient': 'linear-gradient(135deg, rgba(14, 20, 36, 0.8) 0%, rgba(7, 10, 17, 0.9) 100%)',
        'biotech-glow': 'linear-gradient(90deg, #00F2FE 0%, #4FACFE 50%, #10B981 100%)',
      }
    },
  },
  plugins: [],
}
