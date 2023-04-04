import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
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
