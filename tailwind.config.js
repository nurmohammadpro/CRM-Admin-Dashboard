/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "900px",
      lg: "1280",
      xl: "1440px",
    },
    colors: {
      primary: "#f1f5f9",
      secondary: "#e2e8f0",
      txtpr: "#030712",
      txtsec: "#475569",
      xtraCo: "#e11d48",
    },
    extend: {},
  },
  plugins: [],
};
