import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        '3xl': { max: '1535px' },  // Large desktop
        '2xl': { max: '1279px' },  // Desktop
        xl: { max: '1023px' },     // Small laptop
        lg: { max: '767px' },      // Tablet
        md: { max: '639px' },      // Large phones
        sm: { max: '479px' },      // Small phones
        xs: { max: '319px' },      // Tiny devices
      },
      colors: {
        primary: {
          50: 'var(--primary-50)',
          100: 'var(--primary-100)',
          200: 'var(--primary-200)',
          300: 'var(--primary-300)',
          400: 'var(--primary-400)',
          500: 'var(--primary-500)',
          600: 'var(--primary-600)',
          700: 'var(--primary-700)',
          800: 'var(--primary-800)',
          900: 'var(--primary-900)',
        },
        secondary: {
          50: 'var(--secondary-50)',
          100: 'var(--secondary-100)',
          200: 'var(--secondary-200)',
          300: 'var(--secondary-300)',
          400: 'var(--secondary-400)',
          500: 'var(--secondary-500)',
          600: 'var(--secondary-600)',
          700: 'var(--secondary-700)',
          800: 'var(--secondary-800)',
          900: 'var(--secondary-900)',
        },
        background: 'var(--color-background)',
        foreground: 'var(--color-foreground)',
        gray: {
          50: 'var(--gray-50)',
          100: 'var(--gray-100)',
          200: 'var(--gray-200)',
          300: 'var(--gray-300)',
          400: 'var(--gray-400)',
          450: 'var(--gray-450)',
          500: 'var(--gray-500)',
          600: 'var(--gray-600)',
          700: 'var(--gray-700)',
          750: 'var(--gray-750)',
          800: 'var(--gray-800)',
          900: 'var(--gray-900)',
        },
        whiteCustom: {
          500: 'var(--white-500)',
        }
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide'),],
} satisfies Config;
