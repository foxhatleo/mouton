/* eslint-disable no-console */

module.exports = function getReleaseIdentifier() {
    const info = [];

    if (typeof process !== "undefined" || typeof process.env !== "undefined") {
        if (typeof process.env["HEROKU_APP_NAME"] === "string") {
            info.push(process.env["HEROKU_APP_NAME"]);
        }
        if (typeof process.env["HEROKU_RELEASE_VERSION"] === "string") {
            info.push(process.env["HEROKU_RELEASE_VERSION"]);
        }
    }

    if (info.length === 0) {
        info.push("unknown");
    }

    return info.join("-");
};
