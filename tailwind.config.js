/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Outfit', 'sans-serif'],
      },
      colors: {
        brand: {
          deep: '#0B1F33',
          accent: '#1E3A8A', // indigo-blue
          soft: '#2563EB', // clean blue
        },
        sage: {
          navy: '#020617',
          blue: '#0f172a',
          light: '#e0f2fe',
          softer: '#f1f5f9',
          obsidian: '#020408',
          charcoal: '#0F1115',
        },
      },
      boxShadow: {
        'soft-lg': '0 18px 45px rgba(15, 23, 42, 0.12)',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
        'glow': '0 0 20px rgba(59, 130, 246, 0.5)',
      },
      backgroundImage: {
        'hero-gradient':
          'radial-gradient(circle at top left, rgba(59,130,246,0.16), transparent 55%), radial-gradient(circle at bottom right, rgba(148,163,184,0.18), transparent 55%)',
        'alt-gradient':
          'linear-gradient(180deg, rgba(240,247,255,1) 0%, rgba(255,255,255,1) 70%)',
        'panel-gradient':
          'linear-gradient(135deg, rgba(248,250,252,1), rgba(226,232,240,0.9))',
        'cta-gradient':
          'linear-gradient(135deg, #020617, #0f172a)',
        'shimmer': 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      animation: {
        'fade-up': 'fadeUp 700ms ease-out both',
        'shimmer': 'shimmer 8s linear infinite',
        'float': 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

