import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				green: "#03A79D",
				greenGradient: "rgb(3, 167, 157, 0.10)",
				blue: "#1C75BC",
				blueGradient: "rgb(28, 117, 188, 0.20)",
				white: "#FFFFFF",
				shadedWhite: "rgb(255, 255, 255, 0.66)",
				black: "#000000",
				shadedBlack: "rgb(0, 0, 0, 0.33)",
				bgBlur: "rgb(17, 17, 17, 0.80)",
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
		},
	},
	plugins: [],
};
export default config;
