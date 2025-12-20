import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const routing = defineRouting({
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
	// When domains are configured, localePrefix applies to non-domain environments
	// In production (on leoliang.com/leoliang.cn), domain-based routing is used
	// In non-production, path-based routing with "as-needed" is used
	localePrefix: "as-needed",
});

export const { Link, redirect, usePathname, useRouter } =
	createNavigation(routing);
