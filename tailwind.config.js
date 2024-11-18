/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderWidth: { 3: "3px" },
      borderColor: {
        "dark-green": "rgb(131 230 131)", 
      },
      backgroundImage: {
        "gradient-black-green": "linear-gradient(to right, darkgreen, wheat)",
      },
    },
  },
  plugins: [],
};
