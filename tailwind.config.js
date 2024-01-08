/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["League Spartan", "sans-serif"],
      },
      colors: {
        DarkGray: "hsl(0, 0%, 63%)",
        Black: "hsl(0, 0%, 0%)",
        White: "hsl(0, 0%, 100%)",
        VeryDarkGray: "hsl(0, 0%, 27%)",
      },
    },
  },
  plugins: [],
};
