import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mont: ["var(--font-montserrat)"],
        raleway: ["var(--font-raleway)"],
      },
    },
  },
  plugins: [],
};

export default config;