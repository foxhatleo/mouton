import type React from "react";
import WorkPage from "@/components/WorkPage";
import { blue } from "material-colors-ts";
import type { Viewport } from "next";
import { getTranslations } from "next-intl/server";

const WorkCMSX: React.ComponentType = () => (
	<WorkPage part={"CMSX"} color={blue} />
);

export default WorkCMSX;

// biome-ignore lint/suspicious/noExplicitAny:
export async function generateMetadata(ctx: any) {
	const locale = ctx.params.locale as string;
	const t = await getTranslations({ locale, namespace: "CMSX" });
	const t2 = await getTranslations({ locale, namespace: "Home" });

	return {
		title: `${t("title")} - ${t2("title")}`,
		description: t("tagline"),
	};
}

export const viewport: Viewport = {
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: blue[500] },
		{ media: "(prefers-color-scheme: dark)", color: blue[700] },
	],
};
