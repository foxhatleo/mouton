import type React from "react";
import WorkPage from "@/components/WorkPage";
import { yellow } from "material-colors-ts";
import type { Viewport } from "next";
import { getTranslations } from "next-intl/server";

const WorkCircolo: React.ComponentType = () => {
	return <WorkPage color={yellow} part={"Xi"} />;
};

export default WorkCircolo;

// biome-ignore lint/suspicious/noExplicitAny:
export async function generateMetadata(ctx: any) {
	const locale = ctx.params.locale as string;
	const t = await getTranslations({ locale, namespace: "Xi" });

	return {
		title: `${t("title")} - Leo Liang`,
		description: t("tagline"),
	};
}

export const viewport: Viewport = {
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: yellow[500] },
		{ media: "(prefers-color-scheme: dark)", color: yellow[700] },
	],
};
