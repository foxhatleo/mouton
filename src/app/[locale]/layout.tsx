import GlobalStyle from "@/components/GlobalStyle";
import type React from "react";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import deepmerge from "deepmerge";
import getReleaseIdentifier from "@/utils/getReleaseIdentifier";
import type { Viewport, Metadata } from "next";
import { unstable_setRequestLocale } from "next-intl/server";
import type { Messages } from "@/types/messages";
import { LOCALES, type Locale } from "@/constants/locales";

export default async function RootLayout({
	children,
	params,
}: {
	children: React.ReactNode;
	params: Promise<{ locale: string }>;
}) {
	const { locale: localeParam } = await params;
	
	// Validate and type assert locale
	if (!LOCALES.includes(localeParam as Locale)) {
		notFound();
	}
	const locale = localeParam as Locale;
	
	unstable_setRequestLocale(locale);

	let localeMessages: Messages;
	let defaultMessages: Messages;
	try {
		localeMessages = (await import(`../../messages/${locale}.js`))
			.default as Messages;
		defaultMessages = (await import("../../messages/en.js"))
			.default as Messages;
	} catch (error) {
		console.error("Failed to load messages:", {
			locale,
			error: error instanceof Error ? error.message : String(error),
		});
		notFound();
	}
	const messages: Messages = deepmerge(defaultMessages, localeMessages);

	return (
		<html
			lang={locale === "zh-cn" ? "zh-CN" : "en"}
			data-release-identifier={getReleaseIdentifier()}
		>
			<Script
				strategy="afterInteractive"
				src="https://www.googletagmanager.com/gtag/js?id=G-X3FWFTFPGE"
			/>
			<Script id="google-analytics" strategy="afterInteractive">
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

export function generateStaticParams() {
	return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata(): Promise<Metadata> {
	return {
		metadataBase: new URL("https://leoliang.com"),
		authors: [{ name: "Leo Liang" }],
		creator: "Leo Liang",
		manifest: "/site.webmanifest",
		keywords: [
			"Leo Liang",
			"Wenhao Liang",
			"software engineer",
			"web developer",
			"React",
			"Next.js",
			"portfolio",
			"Cornell",
			"computer science",
		],
		openGraph: {
			type: "website",
			locale: "en_US",
			alternateLocale: ["zh_CN"],
			url: "https://leoliang.com",
			siteName: "Leo Liang",
			title: "Leo Liang - Software Engineer",
			description:
				"Personal website of Leo Liang, an aspiring software engineer whose passion is to create useful & delightful experience with the power of technology.",
			images: [
				{
					url: "/android-chrome-512x512.png",
					width: 512,
					height: 512,
					alt: "Leo Liang",
				},
			],
		},
		twitter: {
			card: "summary_large_image",
			title: "Leo Liang - Software Engineer",
			description:
				"Personal website of Leo Liang, an aspiring software engineer whose passion is to create useful & delightful experience with the power of technology.",
			images: ["/android-chrome-512x512.png"],
		},
		robots: {
			index: true,
			follow: true,
			googleBot: {
				index: true,
				follow: true,
				"max-video-preview": -1,
				"max-image-preview": "large",
				"max-snippet": -1,
			},
		},
	};
}

export const viewport: Viewport = {
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
	],
};
