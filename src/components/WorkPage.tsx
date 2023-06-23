"use client";

import React, {PropsWithChildren, useEffect, useState} from "react";
import Footer from "@/components/Footer";
import usePageTransition from "@/hooks/usePageTransition";
import Header from "@/components/header/Header";
import {Color} from "@/components/Color";
import Rainbow from "@/components/Rainbow";
import Head from "next/head";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendarDays} from "@fortawesome/free-solid-svg-icons/faCalendarDays";
import {faFilePdf} from "@fortawesome/free-solid-svg-icons/faFilePdf";
import Link from "next/link";
import {faGlobe} from "@fortawesome/free-solid-svg-icons/faGlobe";
import {faCode} from "@fortawesome/free-solid-svg-icons/faCode";

const WorkPage: React.ComponentType<PropsWithChildren<{
    name: string;
    desc: string;
    fieldDate?: string;
    fieldWebsite?: string;
    fieldGitHub?: string;
    fieldPdf?: string;
    color: Color;
}>> = (p) => {
    usePageTransition();
    const [ scrollDown, setScrollDown ] = useState(true);

    const scrollHandler = () => {
        if (window.scrollY >= 120) {
            setScrollDown(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", scrollHandler);
        return () => {
            window.removeEventListener("scroll", scrollHandler);
        };
    }, []);

    return (
        <main className={scrollDown ? " scroll-down" : ""}>
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
                        <Link href={p.fieldWebsite}>Website</Link>
                    </p></li> : ""}
                    {p.fieldGitHub ? <li><p>
                        <span className={"icon"}><FontAwesomeIcon icon={faCode}/></span>
                        <Link href={p.fieldGitHub}>GitHub repo</Link>
                    </p></li> : ""}
                    {p.fieldPdf ? <li><p>
                        <span className={"icon"}><FontAwesomeIcon icon={faFilePdf}/></span>
                        <Link href={p.fieldPdf}>Report</Link>
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
                    display: inline-block;
                    opacity: .5;
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
