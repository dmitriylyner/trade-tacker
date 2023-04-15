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
        'main-teal': '#06BD9A',
      },
      backgroundImage: {
        'main-pattern': "url('/images/main-pattern.jpg')",
        'pattern-2': "url('/images/pattern-2.jpg')",
      }
    },
  },
  plugins: [],
} satisfies Config;
