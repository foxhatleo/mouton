import createMiddleware from "next-intl/middleware";
import type { NextRequest } from "next/server";

export default function middleware(request: NextRequest) {
	const hostname = request.headers.get("host") || "";
	const isProduction =
		hostname === "leoliang.com" || hostname === "leoliang.cn";

	if (isProduction) {
		// Production: domain-based routing
		return createMiddleware({
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
		})(request);
	}

	// Development/other environments: path-based routing
	return createMiddleware({
		locales: ["en", "zh-cn"],
		defaultLocale: "en",
		localePrefix: "as-needed",
		localeDetection: false,
	})(request);
}

export const config = {
	// Skip all paths that should not be internationalized. This example skips the
	// folders "api", "_next" and all files with an extension (e.g. favicon.ico)
	matcher: ["/((?!api|_next|assets|resources|.*\\..*).*)"],
};
