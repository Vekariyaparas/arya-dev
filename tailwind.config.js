/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#303030",
        brandColor: "#11813A",
        limeGreen: "#7AB13A",
      },
      fontFamily: {
        Monoglyphic: ["Monoglyphic", "sans-serif"],
        MonoglyphicSemiBold: ["Monoglyphic-semibold", "sans-serif"],
        MonoglyphicRegular: ["Monoglyphic-regular", "sans-serif"],
        MonoglyphicThin: ["Monoglyphic-thin", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        poppinsBold: ["PoppinsBold", "sans-serif"],
        brodaers: ["Brodaers", "sans-serif"],
      },
      fontWeight: {
        regular: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
      },
      boxShadow: {
        heroShadow: "5px 5px 0px 0px rgba(16, 24, 40, 1)",
        heroHoverShadow: "0px 0px 0px 0px rgba(16, 24, 40, 1)",
        principleActive: "8px 8px 0px 0px #7AB13A",
        principleHover: "0 12px 24px rgba(48, 48, 48, 0.12)",
      },
      screens: {
        xs: "430px",
        xxs: "220px",
      },
      keyframes: {
        zoomRotate: {
          "0%": { transform: "scale(1) rotate(0deg)" },
          "50%": { transform: "scale(0.75) rotate(45deg)" },
          "100%": { transform: "scale(0.5) rotate(90deg)" },
        },
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        zoomRotate: "zoomRotate 1s linear infinite",
        shimmer: "shimmer 1.5s infinite",
      },
    },
  },
  plugins: [],
};
