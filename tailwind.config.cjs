/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

const customBrown = {
  100: "#f3e9e1",
  200: "#f3e9e1",
  300: "#dabea4",
  400: "#cea985",
  500: "#c29367",
  600: "#9b7652",
  700: "#74583e",
  800: "#4e3b29",
  900: "#271d15",
};

const customYellow = {
  50: "#ffd893",
  100: "#ffce89",
  200: "#ffc47f",
  300: "#ffba75",
  400: "#fbb06b",
  500: "#f1a661",
  600: "#e79c57",
  700: "#dd924d",
  800: "#d38843",
  900: "#c97e39",
};

const customBlue = {
  50: "#8fd9ff",
  100: "#85cfff",
  200: "#7bc5f9",
  300: "#71bbef",
  400: "#67b1e5",
  500: "#5da7db",
  600: "#539dd1",
  700: "#4993c7",
  800: "#3f89bd",
  900: "#357fb3",
};

const main = {
  50: "#fff7e1",
  100: "#f9edd7",
  200: "#efe3cd",
  300: "#e5d9c3",
  400: "#dbcfb9",
  500: "#d1c5af",
  600: "#c7bba5",
  700: "#bdb19b",
  800: "#b3a791",
  900: "#bdb19b",
  // 900: "#a99d87",
};

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: main,
      },
      fontFamily: {
        sans: ["Quicksand", ...defaultTheme.fontFamily.sans],
        serif: ["Roboto Slab", ...defaultTheme.fontFamily.sans],
        cursive: ["Tangerine", "Dancing Script", "Parisienne"],
      },
    },
  },
  plugins: [],
};
