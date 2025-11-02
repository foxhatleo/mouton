import type React from "react";
import dynamic from "next/dynamic";
import { getTranslations } from "next-intl/server";
import type { GenerateMetadataParams } from "@/types/next-intl";
import type { Metadata } from "next";

const HomePage = dynamic(() => import("@/components/HomePage"), {
	loading: () => <main style={{ opacity: 0 }} />,
});

const Home: React.ComponentType = () => <HomePage />;

export default Home;

export async function generateMetadata(
	ctx: GenerateMetadataParams,
): Promise<Metadata> {
	const { locale } = await ctx.params;
	const t = await getTranslations({ locale, namespace: "Home" });
	const title = t("title");
	const description = t("desc");
	const baseUrl = "https://leoliang.com";

	return {
		title,
		description,
		openGraph: {
			type: "website",
			locale: locale === "zh-cn" ? "zh_CN" : "en_US",
			url: baseUrl,
			siteName: "Leo Liang",
			title,
			description,
			images: [
				{
					url: "/android-chrome-512x512.png",
					width: 512,
					height: 512,
					alt: title,
				},
			],
		},
		twitter: {
			card: "summary_large_image",
			title,
			description,
			images: ["/android-chrome-512x512.png"],
		},
	};
}
