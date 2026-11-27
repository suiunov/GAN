import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#fdf7f3",
          100: "#f9ebe0",
          200: "#f1d3bd",
          300: "#e6b08e",
          400: "#d88a5f",
          500: "#c96e3f",
          600: "#b35632",
          700: "#94432a",
          800: "#763728",
          900: "#5f2f24",
        },
        ink: {
          900: "#1a1411",
          800: "#2a221d",
          700: "#3a302a",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
