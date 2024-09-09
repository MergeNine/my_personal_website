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
        primary_wave_dark: "#2d3944", //#2d3944
        primary_icon_dark: "#bfdbfe", //#bfdbfe
        primary_hover_dark: "#59c9a7",//#59c9a7
        primary_card_dark: "#9fb0bd",//#9fb0bd


        primary_text_light: "#332d28", // #332d28
        primary_light: "#F3F5F6", //#F3F5F6
        primary_wave_light: "#adbfcc", //#adbfcc
        primary_icon_light: "#1d4ed8", //#1d4ed8
        primary_hover_light: "#7c864c", //#7c864c
        primary_card_light: "#668aa2", //#668aa2

      },
    },
  },
  plugins: [],
  darkMode: "class",
};
