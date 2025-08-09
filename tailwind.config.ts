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
        'color-1': 'rgba(156, 53, 109, 1)',
        'color-2': 'rgba(252, 214, 139, 1)',
        'color-3': 'rgba(249, 120, 76, 1)',
        'dark': 'rgba(23, 23, 23, 1)',
        'light': 'rgba(254, 250, 238, 1)',
        'app-border': 'rgba(229, 231, 235, 1)',
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      fontSize: {
        'hero-xl': ['clamp(3.5rem, 8vw, 5.9375rem)', { lineHeight: '100%', letterSpacing: '-1.9px' }],
        'hero-lg': ['clamp(2.5rem, 6vw, 4rem)', { lineHeight: '100%', letterSpacing: '-1.9px' }],
        'headline-2': ['clamp(2rem, 5vw, 3rem)', { lineHeight: '100%', letterSpacing: '-0.96px' }],
        'tagline': ['clamp(1rem, 2.5vw, 1.25rem)', { lineHeight: '1.2', letterSpacing: '0.4px' }],
        'paragraph': ['clamp(1rem, 2vw, 1.125rem)', { lineHeight: '140%', letterSpacing: '0.36px' }],
        'button': ['0.875rem', { lineHeight: 'normal', letterSpacing: '0px' }],
      },
      screens: {
        'xs': '480px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'gradient': 'gradient 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
}
export default config