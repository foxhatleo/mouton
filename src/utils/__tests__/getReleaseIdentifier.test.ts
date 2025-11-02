import { describe, it, expect } from "vitest";
import getReleaseIdentifier from "../getReleaseIdentifier";

describe("getReleaseIdentifier", () => {
	it("should return a string", () => {
		const identifier = getReleaseIdentifier();
		expect(typeof identifier).toBe("string");
	});

	it("should return a non-empty string", () => {
		const identifier = getReleaseIdentifier();
		expect(identifier.length).toBeGreaterThan(0);
	});

	it("should return consistent values for the same build", () => {
		// Note: In a real scenario, this might be environment-dependent
		const identifier1 = getReleaseIdentifier();
		const identifier2 = getReleaseIdentifier();
		expect(identifier1).toBe(identifier2);
	});
});

