import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";
import { LOCALES, type Locale } from "@/constants/locales";

export default getRequestConfig(async ({ locale }) => {
	if (!LOCALES.includes(locale as Locale)) {
		notFound();
	}

	return {
		messages: (await import(`../messages/${locale}.js`)).default,
	};
});
