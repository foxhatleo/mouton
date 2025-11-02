import type { Locale } from "@/constants/locales";

export interface GenerateMetadataParams {
	params: Promise<{
		locale: Locale;
	}>;
}
