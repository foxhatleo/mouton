import createMiddleware from "next-intl/middleware";

export default createMiddleware({
    locales: [ "en", "zh-CN" ],
    defaultLocale: "en",
    domains: [
        {
            domain: "leoliang.com",
            defaultLocale: "en",
            locales: [ "en" ],
        },
        {
            domain: "leoliang.cn",
            defaultLocale: "zh-CN",
            locales: [ "zh-CN" ],
        },
    ],
    localeDetection: false,
});

export const config = {
    // Skip all paths that should not be internationalized. This example skips the
    // folders "api", "_next" and all files with an extension (e.g. favicon.ico)
    matcher: [ "/((?!api|_next|assets|resources|.*\\..*).*)" ],
};
