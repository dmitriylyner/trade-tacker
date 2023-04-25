import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
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
        'color-300': '#0FEBC3',
        'main-color-400': '#06BD9A',
        'color-500': '#119B81',
        'color-600': '#186E5F',
        'color-700': '#164B4C'
      },
      backgroundImage: {
        'main-pattern': "url('/images/main-pattern.jpg')",
        'pattern-2': "url('/images/pattern-2.jpg')",
      }
    },
  },
  plugins: [],
} satisfies Config;
