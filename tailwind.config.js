
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],

  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0B0E1A',
          surface: '#0F1628',
          card: '#111827',
        },
      },

      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },

      backgroundImage: {
        'glow-indigo':
          'radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)',
        'glow-teal':
          'radial-gradient(circle, rgba(20,184,166,0.08) 0%, transparent 70%)',
      },

      animation: {
        float: 'float 5s ease-in-out infinite',
        'spin-slow': 'spin 18s linear infinite',
      },

      keyframes: {
        float: {
          '0%, 100%': {
            transform: 'translateY(0px)',
          },
          '50%': {
            transform: 'translateY(-12px)',
          },
        },
      },
    },
  },

  plugins: [],
};

