import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'ag-green': '#2D6A4F',
        'ag-light-green': '#40916C',
        'ag-lime': '#95D5B2',
        'ag-dark': '#1B4332',
        'ag-gold': '#D4A574',
        'ag-sky': '#74C0FC',
      },
      backgroundImage: {
        'gradient-ag': 'linear-gradient(135deg, #2D6A4F 0%, #40916C 100%)',
        'gradient-ag-reverse': 'linear-gradient(135deg, #40916C 0%, #2D6A4F 100%)',
        'gradient-farm': 'linear-gradient(135deg, #74C0FC 0%, #40916C 100%)',
      },
      keyframes: {
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-slow': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '.5' },
        },
        'scan': {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '100% 0' },
        },
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse-slow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'scan': 'scan 2s linear infinite',
      },
    },
  },
  plugins: [],
}
export default config
