/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      exo: ["Exo", "sans-serif"],
      rubik: ["Rubik", "sans-serif"],
      mulish: ["Mulish", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#04334D",
        subtitle: "#C80D17",
        paragraph: "#075073",
      },
      fontSize: {
        h1: "60px",
        h2: "40px",
      },
    },
  },
  plugins: [],
};
