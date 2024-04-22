/** @type {import('tailwindcss').Config} */

import animations from '@midudev/tailwind-animations'
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	plugins: [animations],
	theme: {
		fontFamily: {
			title: ["Montserrat Alternates", ...defaultTheme.fontFamily.serif],
			subtitle: ["Goudy Bookletter 1911", ...defaultTheme.fontFamily.sans],
			body: ["Kanit", ...defaultTheme.fontFamily.sans],
		},
		extend: {
			spacing: {
				"80ch": "80ch",
				"100ch": "100ch",
			},
			colors: {
				primary: { // forest
					50: "#BDEFBD",
					100: "#A9EAA9",
					200: "#7CDF7C",
					300: "#4BD34B",
					400: "#2DB82D",
					500: "#228B22",
					600: "#1D771D",
					700: "#186218",
					800: "#145214",
					900: "#0F3D0F",
					950: "#0C310C"
				},
				"secondary-1": { // murrey
					50: "#EFBDDA",
					100: "#EAA9CE",
					200: "#DF7CB4",
					300: "#D34B98",
					400: "#B82D7C",
					500: "#8B225D",
					600: "#771D50",
					700: "#621842",
					800: "#521437",
					900: "#3D0F29",
					950: "#310C21"
				},
				"secondary-2": { // tiger's eye
					50: "#F0D6C1",
					100: "#EBC9AD",
					200: "#E2B188",
					300: "#D8955F",
					400: "#CF7D3A",
					500: "#AE662A",
					600: "#945624",
					700: "#77451D",
					800: "#5E3717",
					900: "#422610",
					950: "#351F0D"
				}
			}
		},
	},
}
