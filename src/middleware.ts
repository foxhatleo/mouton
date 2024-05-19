import createMiddleware from "next-intl/middleware";

export default createMiddleware({
	locales: ["en", "zh-cn"],
	defaultLocale: "en",
	domains: [
		{
			domain: "leoliang.com",
			defaultLocale: "en",
			locales: ["en"],
		},
		{
			domain: "leoliang.cn",
			defaultLocale: "zh-cn",
			locales: ["zh-cn"],
		},
	],
	localePrefix: "never",
	localeDetection: false,
});

export const config = {
	// Skip all paths that should not be internationalized. This example skips the
	// folders "api", "_next" and all files with an extension (e.g. favicon.ico)
	matcher: ["/((?!api|_next|assets|resources|.*\\..*).*)"],
};
