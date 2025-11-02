export const LOCALES = ["en", "zh-cn"] as const;

export type Locale = (typeof LOCALES)[number];

export function isLocale(locale: string): locale is Locale {
	return LOCALES.includes(locale as Locale);
}
