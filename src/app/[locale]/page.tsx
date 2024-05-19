import type React from "react";
import HomePage from "@/components/HomePage";
import { getTranslations } from "next-intl/server";

const Home: React.ComponentType = () => <HomePage />;

export default Home;

// biome-ignore lint/suspicious/noExplicitAny:
export async function generateMetadata(ctx: any) {
	const locale = ctx.params.locale as string;
	const t = await getTranslations({ locale, namespace: "Home" });

	return {
		title: "Leo Liang",
		description: t("desc"),
	};
}
