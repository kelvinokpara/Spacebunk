/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: "#A259FF",
      },
      fontFamily: {
        spacemono: "Space Mono, monospace",
        worksans: "Work Sans, sans-serif",
      },
      fontSize: {
        fontmd: "22px",
      },
    },
  },
  plugins: [],
};
