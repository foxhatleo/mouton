import GlobalStyle from "@/components/GlobalStyle";
import type React from "react";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import deepmerge from "deepmerge";
import getReleaseIdentifier from "@/utils/getReleaseIdentifier";
import type { Viewport } from "next";
import { unstable_setRequestLocale } from "next-intl/server";

export default async function RootLayout({
	children,
	params: { locale },
}: {
	children: React.ReactNode;
	params: { locale: string };
}) {
	unstable_setRequestLocale(locale);

	// biome-ignore lint/suspicious/noExplicitAny:
	let localeMessages: any;
	// biome-ignore lint/suspicious/noExplicitAny:
	let defaultMessages: any;
	try {
		localeMessages = (await import(`../../messages/${locale}.js`)).default;
		defaultMessages = (await import("../../messages/en.js")).default;
	} catch (_error) {
		notFound();
	}
	// biome-ignore lint/suspicious/noExplicitAny:
	const messages: any = deepmerge(defaultMessages, localeMessages);

	return (
		<html lang="en" data-release-identifier={getReleaseIdentifier()}>
			<Script
				async={true}
				src="https://www.googletagmanager.com/gtag/js?id=G-X3FWFTFPGE"
			/>
			<Script id="google-analytics">
				{"window.dataLayer=window.dataLayer||[];" +
					"function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-X3FWFTFPGE');"}
			</Script>
			<body>
				<style>
					{
						"main {opacity:0;}@media (prefers-color-scheme:dark){body{background:black;}}"
					}
				</style>
				<noscript>JavaScript is required for this website.</noscript>
				<NextIntlClientProvider locale={locale} messages={messages}>
					{children}
				</NextIntlClientProvider>
				<GlobalStyle />
				<Analytics />
			</body>
		</html>
	);
}

const locales = ["en", "zh-cn"];

export function generateStaticParams() {
	return locales.map((locale) => ({ locale }));
}

export const metadata = {
	authors: { name: "Leo Liang" },
	manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
	],
};
