/* eslint-disable no-console */

module.exports = function getReleaseIdentifier() {
	const info = [];

	if (typeof process !== "undefined" || typeof process.env !== "undefined") {
		if (typeof process.env.VERCEL_ENV === "string") {
			info.push(process.env.VERCEL_ENV);
		}
		if (typeof process.env.VERCEL_GIT_PREVIOUS_SHA === "string") {
			info.push(process.env.VERCEL_GIT_PREVIOUS_SHA);
		}
	}

	if (info.length === 0) {
		info.push("unknown");
	}

	return info.join("-");
};
