import type React from "react";
import WorkPage from "@/components/WorkPage";
import { red } from "material-colors-ts";
import type { Viewport } from "next";
import { getTranslations } from "next-intl/server";

const WorkCircolo: React.ComponentType = () => {
	return <WorkPage color={red} part={"Remy"} />;
};

export default WorkCircolo;

// biome-ignore lint/suspicious/noExplicitAny:
export async function generateMetadata(ctx: any) {
	const locale = ctx.params.locale as string;
	const t = await getTranslations({ locale, namespace: "Remy" });

	return {
		title: `${t("title")} - Leo Liang`,
		description: t("tagline"),
	};
}

export const viewport: Viewport = {
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: red[500] },
		{ media: "(prefers-color-scheme: dark)", color: red[700] },
	],
};
