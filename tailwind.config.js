module.exports = {
	mode: "jit",
	purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				tan: "#FFFEEF",
			},
			fontFamily: {
				serif: ["Cormorant", "serif"],
				sc: ["Cormorant SC", "serif"],
				script: ["Great Vibes", "cursive"],
			},
			transitionProperty: {
				maxHeight: "max-height",
			},
		},
		container: {
			center: true,
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
