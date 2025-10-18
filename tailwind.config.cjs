module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        brand: {
          500: "#6A21D5", // main purple used in image
          600: "#5B1EBF",
        },
        subtle: "#F7F7FB",
      },
      boxShadow: {
        card: "0 10px 30px rgba(20,23,28,0.06)",
      },
    },
  },
  plugins: [],
};
