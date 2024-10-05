module.exports = {
    content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                moderustic: ["Moderustic", "sans-serif"],
                script: ["Style Script", 'cursive'],
            },
            colors: {
                primary_text_dark: "#d6dde1", //#d6dde1
                primary_dark: "#344450", //#344450
                primary_wave_dark: "#2d3944", //#2d3944
                primary_icon_dark: "#bfdbfe", //#bfdbfe
                primary_hover_dark: "#bfdbfe", //#59c9a7
                primary_card_dark: "#9fb0bd", //#9fb0bd
                primary_icon_bg_dark: "#3b4d5b", //#9fb0bd
                primary_dropdown_dark: "#1f2937", //#9fb0bd
                primary_dropdown_hover_dark: "#496d88", //#9fb0bd
                dark_accent: "#627a8c", //#9fb0bd
                dark_molecule: "#b6c0ce", //#9fb0bd



                primary_text_light: "#332d28", // #332d28
                primary_light: "#F3F5F6", //#F3F5F6
                // primary_wave_light: "#adbfcc", //#adbfcc
                primary_wave_light: "#c2cce0", //#adbfcc
                primary_icon_light: "#436cb7", //#1d4ed8
                // primary_icon_light: "#436cb7", //#1d4ed8
                primary_hover_light: "#436cb7", //#7c864c
                primary_card_light: "#668aa2", //#668aa2
                primary_icon_bg_light: "#ebecee", //#9fb0bd
                primary_icon_bg_hover_light: "#dddee0", //#9fb0bd
                primary_dropdown_light: "#cacfde", //#9fb0bd
                // primary_dropdown_light: "#bdc1da", //#9fb0bd
                primary_dropdown_hover_light: "#1f2937", //#9fb0bd
                light_accent: "#9da4b2", //#9fb0bd
                light_molecule: "#2f2924", //#9fb0bd

            },
            keyframes: {
                slideInLeft: {
                    "0%": {transform: "translateX(-100%)", opacity: "0"},
                    "100%": {transform: "translateX(0)", opacity: "1"},
                },
                slideInRight: {
                    "0%": {transform: "translateX(+100%)", opacity: "0"},
                    "100%": {transform: "translateX(0)", opacity: "1"},
                },
            },
            animation: {
                "slide-in-left": "slideInLeft 1s ease-out forwards",
                "slide-in-right": "slideInRight 1s ease-out forwards",
            },
        },
    },
    plugins: [],
    darkMode: "class",
};
