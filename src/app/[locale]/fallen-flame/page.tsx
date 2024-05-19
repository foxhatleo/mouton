import type React from "react";
import WorkPage from "@/components/WorkPage";
import { green } from "material-colors-ts";
import type { Viewport } from "next";
import { getTranslations } from "next-intl/server";

const WorkCircolo: React.ComponentType = () => {
	return <WorkPage color={green} part={"FallenFlame"} />;
};

export default WorkCircolo;

// biome-ignore lint/suspicious/noExplicitAny:
export async function generateMetadata(ctx: any) {
	const locale = ctx.params.locale as string;
	const t = await getTranslations({ locale, namespace: "FallenFlame" });

	return {
		title: `${t("title")} - Leo Liang`,
		description: t("tagline"),
	};
}

export const viewport: Viewport = {
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: green[500] },
		{ media: "(prefers-color-scheme: dark)", color: green[700] },
	],
};
