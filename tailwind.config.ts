import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "tea-primary": {
          50: "#f8faf7",
          100: "#e9f0e8",
          200: "#d3e1d1",
          300: "#aec7ab",
          400: "#82a67e",
          500: "#5d8c58",
          600: "#477043",
          700: "#385a35",
          800: "#2d472c",
          900: "#253a24",
        },
        "tea-accent": {
          100: "#fff5e6",
          200: "#ffe0b3",
          400: "#ffb74d",
          600: "#fb8c00",
        },
      },
      fontFamily: {
        sans: ["var(--font-pretendard)", "sans-serif"],
        serif: ["var(--font-cormorant)", "serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
