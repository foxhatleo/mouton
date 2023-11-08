"use client";

import React, { PropsWithChildren, useState } from "react";
import Footer from "@/components/Footer";
import usePageTransition from "@/hooks/usePageTransition";
import Header from "@/components/header/Header";
import { Color } from "@/components/Color";
import Rainbow from "@/components/Rainbow";
import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons/faCalendarDays";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons/faFilePdf";
import { faGlobe } from "@fortawesome/free-solid-svg-icons/faGlobe";
import { faCode } from "@fortawesome/free-solid-svg-icons/faCode";
import useScroll from "@/hooks/useScroll";
import NewPageLink from "@/components/NewPageLink";
import { faAndroid } from "@fortawesome/free-brands-svg-icons/faAndroid";
import { faApple } from "@fortawesome/free-brands-svg-icons/faApple";
import { faMicrosoft } from "@fortawesome/free-brands-svg-icons/faMicrosoft";
import useHover from "@/hooks/useHover";
import useConsole from "@/hooks/useConsole";

function canUseWebP() {
    if (typeof document === "undefined") {
        return true;
    }
    const elem = document.createElement("canvas");
    if (elem.getContext && elem.getContext("2d")) {
        return elem.toDataURL("image/webp").indexOf("data:image/webp") === 0;
    }
    return false;
}

const WorkPage: React.ComponentType<PropsWithChildren<{
    name: string;
    desc: string;
    fieldDate?: string;
    fieldWebsite?: string;
    fieldGitHub?: string;
    fieldWindows?: string;
    fieldMacOS?: string;
    fieldAndroid?: string;
    fieldPdf?: string;
    fieldPdfName?: string;
    color: Color;
}>> = ({
    name,
    desc,
    fieldDate,
    fieldWebsite,
    fieldGitHub,
    fieldWindows,
    fieldMacOS,
    fieldAndroid,
    fieldPdf,
    fieldPdfName,
    color,
    children,
}) => {
    usePageTransition();
    useHover();
    useConsole();
    const [scrollDown, setScrollDown] = useState(true);

    const scrollHandler = () => {
        if (window.scrollY >= 120) {
            setScrollDown(false);
        }
    };

    useScroll(scrollHandler);

    const mainClassNames = [];
    if (canUseWebP()) {
        mainClassNames.push("webp");
    }
    if (scrollDown) {
        mainClassNames.push("scroll-down");
    }

    return (
        <main className={mainClassNames.join(" ")}>
            <Head>
                <title>
                    {name}
                    {" "}
                    - Leo Liang
                </title>
            </Head>
            <Rainbow color={color} />
            <Header absolute />
            <div className="content container v-layout">
                <h1 className="entry-transition">{name}</h1>
                <p className="entry-transition">{desc}</p>
                <ul className="entry-transition-children">
                    {fieldDate ? (
                        <li>
                            <p>
                                <span className="icon"><FontAwesomeIcon icon={faCalendarDays} /></span>
                                {fieldDate}
                            </p>
                        </li>
                    ) : ""}
                    {fieldWebsite ? (
                        <li>
                            <p>
                                <span className="icon"><FontAwesomeIcon icon={faGlobe} /></span>
                                <NewPageLink href={fieldWebsite}>Website</NewPageLink>
                            </p>
                        </li>
                    ) : ""}
                    {fieldGitHub ? (
                        <li>
                            <p>
                                <span className="icon"><FontAwesomeIcon icon={faCode} /></span>
                                <NewPageLink href={`https://github.com/${fieldGitHub}`}>
                                    GitHub repo
                                </NewPageLink>
                            </p>
                        </li>
                    ) : ""}
                    {fieldWindows ? (
                        <li>
                            <p>
                                <span className="icon"><FontAwesomeIcon icon={faMicrosoft} /></span>
                                <NewPageLink href={fieldWindows}>Windows build</NewPageLink>
                            </p>
                        </li>
                    ) : ""}
                    {fieldMacOS ? (
                        <li>
                            <p>
                                <span className="icon"><FontAwesomeIcon icon={faApple} /></span>
                                <NewPageLink href={fieldMacOS}>macOS build</NewPageLink>
                            </p>
                        </li>
                    ) : ""}
                    {fieldAndroid ? (
                        <li>
                            <p>
                                <span className="icon"><FontAwesomeIcon icon={faAndroid} /></span>
                                <NewPageLink href={fieldAndroid}>Android build</NewPageLink>
                            </p>
                        </li>
                    ) : ""}
                    {fieldPdf ? (
                        <li>
                            <p>
                                <span className="icon"><FontAwesomeIcon icon={faFilePdf} /></span>
                                <NewPageLink href={fieldPdf}>{fieldPdfName ?? "Report"}</NewPageLink>
                            </p>
                        </li>
                    ) : ""}
                </ul>
            </div>
            <div className="scroll-down">
                Scroll down to learn more
            </div>
            <article className="container entry-transition-group entry-transition-children">
                {children}
            </article>
            <Footer />
            <style jsx>
                {`
                    main .content {
                        width: 100vw;
                        height: 80vh;
                        min-height: 30em;
                        justify-content: center;
                    }

                    main .icon {
                        width: 1.5em;
                        margin-right: .5em;
                        display: inline-block;
                        opacity: .5;
                        text-align: center;
                    }

                    main .scroll-down {
                        position: relative;
                        width: 100%;
                        text-align: center;
                        opacity: .5;
                        transition: .3s ease-in-out opacity, .3s ease-in-out margin-top;
                    }

                    main:not(.scroll-down) .scroll-down {
                        opacity: 0;
                        margin-top: -1em;
                    }
                `}
            </style>
        </main>
    );
};

export default WorkPage;
