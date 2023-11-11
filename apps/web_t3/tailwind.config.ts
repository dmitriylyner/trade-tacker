import { type Config } from "tailwindcss";

export default {
  mode: 'jit',
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "apps/web_t3/src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    container: {
         // default breakpoints but with 40px removed
         screens: {
          sm: '600px',
          md: '728px',
          lg: '984px',
          xl: '1240px',
          '2xl': '1496px',
        },
    },
    extend: {
      colors: {
        'color-100': '#D5FDF5',
        'color-200': '#98FAE7',
        'color-250': '#CBE9D5',
        'color-300': '#0FEBC3',
        'main-color-400': '#06BD9A',
        'color-500': '#119B81',
        'color-600': '#186E5F',
        'color-700': '#164B4C',
        'light-150': '#D0FbFC',
        'blackA5' : 'hsla(0, 100%, 0%, 35%)'
      },
      animation: {
        overlayShow: 'overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        contentShow: 'contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
      },
      backgroundImage: {
        'main-pattern': "url('/images/main-pattern.jpg')",
        'pattern-2': "url('/images/pattern-2.jpg')",
        'dashboard-pattern': "url('/images/dashboard-nav-pattern.jpg')"
      }
    },
  },
  plugins: [],
} satisfies Config;
