module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "tea-primary": {
          50: "#f5f9f7",
          100: "#e6f1ea",
          200: "#c5e1d3",
          300: "#94c5ac",
          400: "#5ea983",
          500: "#3c8b65",
          600: "#2d6b4d",
          700: "#25563f",
          800: "#1f4533",
          900: "#1a392b",
        },
      },
    },
  },
  plugins: [],
};
