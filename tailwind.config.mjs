/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      exo: ["Exo", "sans-serif"],
      rubik: ["Rubik", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#05324c",
        title: "#05324c",
        subtitle: "#05324c",
        paragraph: "#0070a8",
        "bg-icon": "#04adef",
      },
      fontSize: {
        h1: "60px",
        h2: "40px",
      },
      screens: {
        sm: "540px",
        md: "720px",
        lg: "960px",
        xl: "1140px",
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
