/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        raleway: ["var(--font-raleway)"],
        podkova: ["var(--font-podkova)"],
      },
      colors: {
        accent: "#38bdf8",
        background: "#1B1B1B",
        text: "#FFFFFF",
        halfWhite: "#676767",
      },
    },
  },
  plugins: [],
};
