module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'moderustic': ['Moderustic', 'sans-serif'],
      },
      colors: {
        primary_text_dark: "#d6dde1", //#d6dde1
        primary_dark: "#344450", //#344450
        primary_icon_dark: "#bfdbfe", //#bfdbfe
        primary_hover_dark: "#59c9a7",//#59c9a7

        primary_text_light: "#332d28", // #936a40
        primary_light: "#F3F5F6", //#F3F5F6
        primary_icon_light: "#1d4ed8", //#1d4ed8
        primary_hover_light: "#bbc438", //#8972F6FF

      },
    },
  },
  plugins: [],
  darkMode: "class",
};
