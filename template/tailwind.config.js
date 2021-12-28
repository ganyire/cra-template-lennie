module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "slight-rotate": {
          "0%, 100%": { transform: "rotate(-20deg)" },
          "50%": { transform: "rotate(20deg)" },
        },
      },
      animation: {
        "slight-rotate": "slight-rotate 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
