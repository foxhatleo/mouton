import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

// Can be imported from a shared config
const locales = ["en", "zh-cn"];

export default getRequestConfig(async ({ locale }) => {
	// biome-ignore lint/suspicious/noExplicitAny:
	if (!locales.includes(locale as any)) {
		notFound();
	}

	return {
		messages: (await import(`../src/messages/${locale}.js`)).default,
	};
});

