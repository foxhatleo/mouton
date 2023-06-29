import GlobalStyle from "@/components/GlobalStyle";
import React from "react";
import Script from "next/script";
import {Analytics} from "@vercel/analytics/react";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
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
                {children}
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
