/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}" // Scan all React component files for Tailwind classes
  ],
  theme: {
    extend: {
      colors: {
        linkedinBlue: "#0A66C2",
        linkedinGray: "#F3F2EF",
      },
      spacing: {
        18: "4.5rem",
      },
      fontFamily: {
        sans: ["Segoe UI", "Tahoma", "Geneva", "Verdana", "sans-serif"],
      },
    },
  },
  plugins: [],
};





