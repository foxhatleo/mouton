import type React from "react";
import dynamic from "next/dynamic";
import { pink } from "material-colors-ts";
import type { Viewport } from "next";
import { getTranslations } from "next-intl/server";
import type { GenerateMetadataParams } from "@/types/next-intl";

const WorkPage = dynamic(() => import("@/components/WorkPage"), {
	loading: () => <main style={{ opacity: 0 }} />,
});

const WorkCircolo: React.ComponentType = () => {
	return <WorkPage color={pink} part={"Remy"} />;
};

export default WorkCircolo;

export async function generateMetadata(ctx: GenerateMetadataParams) {
	const { locale } = await ctx.params;
	const t = await getTranslations({ locale, namespace: "Remy" });
	const t2 = await getTranslations({ locale, namespace: "Home" });

	return {
		title: `${t("title")} - ${t2("title")}`,
		description: t("tagline"),
	};
}

export const viewport: Viewport = {
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: pink[500] },
		{ media: "(prefers-color-scheme: dark)", color: pink[700] },
	],
};
