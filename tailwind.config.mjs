import animations from "@midudev/tailwind-animations";
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#FFD9DF",
          100: "#E4BDC3",
          300: "#9A4057",
          500: "#7C2940",
        },
        secondary: {
          100: "#FFDCBC",
          700: "#674525",
        },
        tertiary: {
          100: "#382E2F",
          500: "#43292E",
          900: "#201A1B",
          shadow: "rgb(32, 26, 27)",
        },
      },
    },
  },
  plugins: [animations],
};
