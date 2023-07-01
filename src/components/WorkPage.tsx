"use client";

import React, {PropsWithChildren, useState} from "react";
import Footer from "@/components/Footer";
import usePageTransition from "@/hooks/usePageTransition";
import Header from "@/components/header/Header";
import {Color} from "@/components/Color";
import Rainbow from "@/components/Rainbow";
import Head from "next/head";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendarDays} from "@fortawesome/free-solid-svg-icons/faCalendarDays";
import {faFilePdf} from "@fortawesome/free-solid-svg-icons/faFilePdf";
import {faGlobe} from "@fortawesome/free-solid-svg-icons/faGlobe";
import {faCode} from "@fortawesome/free-solid-svg-icons/faCode";
import useScroll from "@/hooks/useScroll";
import NewPageLink from "@/components/NewPageLink";
import {faAndroid} from "@fortawesome/free-brands-svg-icons/faAndroid";
import {faApple} from "@fortawesome/free-brands-svg-icons/faApple";
import {faMicrosoft} from "@fortawesome/free-brands-svg-icons/faMicrosoft";
import useHover from "@/hooks/useHover";
import useConsole from "@/hooks/useConsole";

function canUseWebP() {
    if (typeof document === "undefined") {
        return true;
    }
    const elem = document.createElement("canvas");
    if (!!(elem.getContext && elem.getContext("2d"))) {
        return elem.toDataURL("image/webp").indexOf("data:image/webp") == 0;
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
}>> = (p) => {
    usePageTransition();
    useHover();
    useConsole();
    const [ scrollDown, setScrollDown ] = useState(true);

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
                <title>{p.name} - Leo Liang</title>
            </Head>
            <Rainbow color={p.color}/>
            <Header absolute={true}/>
            <div className={"content container v-layout"}>
                <h1 className={"entry-transition"}>{p.name}</h1>
                <p className={"entry-transition"}>{p.desc}</p>
                <ul className={"entry-transition-children"}>
                    {p.fieldDate ? <li><p>
                        <span className={"icon"}><FontAwesomeIcon icon={faCalendarDays}/></span>
                        {p.fieldDate}
                    </p></li> : ""}
                    {p.fieldWebsite ? <li><p>
                        <span className={"icon"}><FontAwesomeIcon icon={faGlobe}/></span>
                        <NewPageLink href={p.fieldWebsite}>Website</NewPageLink>
                    </p></li> : ""}
                    {p.fieldGitHub ? <li><p>
                        <span className={"icon"}><FontAwesomeIcon icon={faCode}/></span>
                        <NewPageLink href={`https://github.com/${p.fieldGitHub}`}>
                            GitHub repo
                        </NewPageLink>
                    </p></li> : ""}
                    {p.fieldWindows ? <li><p>
                        <span className={"icon"}><FontAwesomeIcon icon={faMicrosoft}/></span>
                        <NewPageLink href={p.fieldWindows}>Windows build</NewPageLink>
                    </p></li> : ""}
                    {p.fieldMacOS ? <li><p>
                        <span className={"icon"}><FontAwesomeIcon icon={faApple}/></span>
                        <NewPageLink href={p.fieldMacOS}>macOS build</NewPageLink>
                    </p></li> : ""}
                    {p.fieldAndroid ? <li><p>
                        <span className={"icon"}><FontAwesomeIcon icon={faAndroid}/></span>
                        <NewPageLink href={p.fieldAndroid}>Android build</NewPageLink>
                    </p></li> : ""}
                    {p.fieldPdf ? <li><p>
                        <span className={"icon"}><FontAwesomeIcon icon={faFilePdf}/></span>
                        <NewPageLink href={p.fieldPdf}>{p.fieldPdfName ?? "Report"}</NewPageLink>
                    </p></li> : ""}
                </ul>
            </div>
            <div className={"scroll-down"}>
                Scroll down to learn more
            </div>
            <article className={"container entry-transition-group entry-transition-children"}>
                {p.children}
            </article>
            <Footer/>
            <style jsx>{`
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
            `}</style>
        </main>
    );
};

export default WorkPage;
