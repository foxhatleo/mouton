import GlobalStyle from "@/components/GlobalStyle";
import React from "react";
import Script from "next/script";
import {Analytics} from "@vercel/analytics/react";
import {NextIntlClientProvider} from "next-intl";
import {notFound} from "next/navigation";
import deepmerge from "deepmerge";

export function generateStaticParams() {
    return [ {locale: "en"}, {locale: "zh-CN"} ];
}

export default async function RootLayout({
    children, params: {locale},
}: {
    children: React.ReactNode,
    params: { locale: string },
}) {
    let localeMessages, defaultMessages;
    try {
        localeMessages = (await import(`../../messages/${locale}.js`)).default;
        defaultMessages = (await import("../../messages/en.js")).default;
    } catch (error) {
        notFound();
    }
    const messages = deepmerge(defaultMessages, localeMessages);

    return (
        <html lang="en">
            <Script async={true} src="https://www.googletagmanager.com/gtag/js?id=G-X3FWFTFPGE"/>
            <Script id={"google-analytics"}>
                {"window.dataLayer=window.dataLayer||[];" +
                "function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-X3FWFTFPGE');"}
            </Script>
            <body>
                <style>{"main {opacity:0;}@media (prefers-color-scheme:dark) {body {background:black;}}"}</style>
                <noscript>JavaScript is required for this website.</noscript>
                <NextIntlClientProvider locale={locale} messages={messages}>
                    {children}
                </NextIntlClientProvider>
                <GlobalStyle/>
                <Analytics/>
            </body>
        </html>
    );
}

export const metadata = {
    authors: {name: "Leo Liang"},
    manifest: "/site.webmanifest",
    themeColor: [
        {media: "(prefers-color-scheme: light)", color: "white"},
        {media: "(prefers-color-scheme: dark)", color: "black"},
    ],
};