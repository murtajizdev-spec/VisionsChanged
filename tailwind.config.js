/** @type {import('tailwindcss').Config} */
export default {
  // Tailwind v4 works without content; this is here for editor tooling and v3 fallback
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#1E3A8A', // Deep blue primary
          dark: '#1E40AF',
          light: '#3B82F6',
          soft: '#DBEAFE'
        },
        accent: {
          DEFAULT: '#3B82F6', // Lighter blue for accents
          dark: '#2563EB',
          soft: '#EFF6FF'
        },
        highlight: {
          DEFAULT: '#F59E0B', // Orange for highlights
          dark: '#D97706',
          soft: '#FEF3C7'
        },
        success: {
          DEFAULT: '#10B981',
          soft: '#D1FAE5'
        },
        warning: {
          DEFAULT: '#F59E0B',
          soft: '#FEF3C7'
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'display': ['Poppins', 'system-ui', 'sans-serif']
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'bounce-subtle': 'bounceSubtle 2s infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' }
        }
      }
    }
  },
  plugins: []
}


