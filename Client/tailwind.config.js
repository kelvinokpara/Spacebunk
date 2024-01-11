/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: "#A259FF",
        blackhue: "#2B2B2B",
        textGrey: "#858584",
        bgGrey2: "#2B2B2B",
        bgGrey1: "#3B3B3B",
      },
      fontFamily: {
        spacemono: "Space Mono, monospace",
        worksans: "Work Sans, sans-serif",
      },
      fontSize: {
        fontmd: "22px",
        fontmd2: "28px",
      },
    },
  },
  plugins: [],
};
