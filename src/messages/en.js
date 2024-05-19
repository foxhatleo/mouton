import cmsx from "./cmsx/en";
import circolo from "./circolo/en";
import egos2000 from "./egos-2000-extension/en";
import xic from "./xi-compiler/en";
import fallenFlame from "./fallen-flame/en";
import panicPainter from "./panic-painter/en";
import remy from "./remy/en";

const EN = {
	Header: {
		about: "About",
		works: "Works",
		resume: "Résumé",
		linkedin: "LinkedIn",
		instagram: "Instagram",
	},
	Home: {
		title: "Leo Liang",
		desc: "Personal website of Leo Liang, an aspiring software engineer whose passion is to create useful & delightful experience with the power of technology.",
		hero: "My passion is to\ncreate useful &\ndelightful experience\nwith the power of\ntechnology.",
		"scroll-down": "Scroll down to learn more",
		"about-me": "About Me",
		"about-me-text": `
Welcome! I’m Leo, an ambitious software engineer and recent Master’s graduate in Computer Science from Cornell
University. I’m eager to contribute my skills and expertise to a dynamic team, with a firm belief in using technology
to improve and enrich lives.

Born in China and fluent in Mandarin, Cantonese, and English, I revel in embracing diverse cultures. I’m currently on
an exciting journey learning Japanese and French, further extending my linguistic capabilities.

When I’m not immersed in coding or languages, I find solace in playing the piano and exploring the world. Thank you
for visiting my website — enjoy discovering more about my passions and pursuits.
`,
		"play-prompt": "Click or tap to play.",
		works: "Works",
		circolo: {
			title: "Circolo.us",
			tagline:
				"Complete website overhaul using React with e-commerce functionalities.",
		},
		"egos-2000": {
			title: "EGOS-2000 Extension",
			tagline: "Extension to incorporate C standard library in a minimal OS.",
		},
		xic: {
			title: "Xi Compiler",
			tagline: "A fully functional compiler written from scratch.",
		},
		"panic-painter": {
			title: "Panic Painter",
			tagline: "A cross-platform mobile game written in C++.",
		},
		cmsx: {
			title: "CMSX",
			tagline: "Cornell's CS department course management website.",
		},
		"fallen-flame": {
			title: "Fallen Flame",
			tagline: "A cross-platform desktop game written in Java.",
		},
		remy: {
			title: "Remy Hospitality Platform",
			tagline:
				"An AI-powered platform bringing interactive experience to hospitality industries.",
		},
	},
	Footer: {
		l1: "Built by Wenhao “Leo” Liang using React.",
		l21: "Source available at ",
		l22: ".",
	},
	WorkPage: {
		website: "Website",
		github: "GitHub repo",
		macos: "macOS build",
		windows: "Windows build",
		android: "Android build",
		pdf: "Report",
	},
	Circolo: circolo,
	CMSX: cmsx,
	EGOS2000: egos2000,
	FallenFlame: fallenFlame,
	PanicPainter: panicPainter,
	Remy: remy,
	Xi: xic,
};

export default EN;
