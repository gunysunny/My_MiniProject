import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-out',
        fadeInDelay: 'fadeIn 1.3s ease-out',
        fadeInDelay2: 'fadeIn 1.6s ease-out',
        fadeInDelay3: 'fadeIn 1.9s ease-out',
        fadeInDelay4: 'fadeIn 2.2s ease-out',
      },
    },
  },
  plugins: [],
} satisfies Config