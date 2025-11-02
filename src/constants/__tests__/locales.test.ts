import { describe, it, expect } from "vitest";
import { LOCALES, isLocale, type Locale } from "../locales";

describe("locales", () => {
	it("should have valid locales", () => {
		expect(LOCALES).toContain("en");
		expect(LOCALES).toContain("zh-cn");
	});

	it("isLocale should validate correct locales", () => {
		expect(isLocale("en")).toBe(true);
		expect(isLocale("zh-cn")).toBe(true);
	});

	it("isLocale should reject invalid locales", () => {
		expect(isLocale("invalid")).toBe(false);
		expect(isLocale("")).toBe(false);
		expect(isLocale("EN")).toBe(false);
	});

	it("should have Locale type that matches LOCALES", () => {
		const testLocale: Locale = "en";
		expect(LOCALES.includes(testLocale)).toBe(true);
	});
});

