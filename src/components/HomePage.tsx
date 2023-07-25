"use client";

import React, { useState } from "react";
import Header from "@/components/header/Header";
import Rainbow from "@/components/Rainbow";
import usePageTransition from "@/hooks/usePageTransition";
import Link from "next/link";
import Footer from "@/components/Footer";
import { blue, green, orange, purple, red, yellow } from "material-colors-ts";
import Avatar from "@/components/Avatar";
import Responsive from "@/components/Responsive";
import { Color } from "@/components/Color";
import useScroll from "@/hooks/useScroll";
import useHover from "@/hooks/useHover";
import useConsole from "@/hooks/useConsole";
import { useTranslations } from "use-intl";
import { newLineAsBr, paragraph } from "@/utils/Format";

const HomePage: React.ComponentType = () => {
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

    const t = useTranslations("Home");
    const WORKS: { t: string; link: string; color: Color; }[] = [
        {
            t: "circolo",
            link: "/circolo/",
            color: red,
        },
        {
            t: "egos-2000",
            link: "/egos-2000-extension/",
            color: orange,
        },
        {
            t: "xic",
            link: "/xi-compiler/",
            color: yellow,
        },
        {
            t: "panic-painter",
            link: "/panic-painter/",
            color: green,
        },
        {
            t: "cmsx",
            link: "/cmsx/",
            color: blue,
        },
        {
            t: "fallen-flame",
            link: "/fallen-flame/",
            color: purple,
        },
    ];

    return (
        <main>
            <Rainbow/>
            <section className={"section1" + (scrollDown ? " scroll-down" : "")}>
                <Header absolute={true}/>
                <div className={"content container v-layout"}>
                    <h1 className={"entry-transition"}>
                        {newLineAsBr(t("hero"))}
                    </h1>
                </div>
                <div className={"scroll-down"}>
                    {t("scroll-down")}
                </div>
            </section>
            <section id={"about"} className={"section2 container entry-transition-group"}>
                <div className={"v-layout"}>
                    <h2 className={"entry-transition center"}>{paragraph(t("about-me"))}</h2>
                    <div className={"content"}>
                        <article className={"text-container entry-transition-children container alt"}>
                            {paragraph(t("about-me-text"))}
                        </article>
                        <div className={"avatar-container"}>
                            <Avatar/>
                        </div>
                    </div>
                </div>
            </section>
            <section id={"works"} className={"section3 container entry-transition-group"}>
                <div className={"v-layout center"}>
                    <h2 className={"entry-transition"}>{paragraph(t("works"))}</h2>
                    <ul className={"v-layout"}>
                        {WORKS.map((data, ind) => (
                            <li key={ind} className={"entry-transition"}
                                style={{
                                    "--item-color-200": data.color["200"],
                                    "--item-color-500": data.color["500"],
                                    "--item-color-700": data.color["700"],
                                    "--item-color-900": data.color["900"],
                                } as React.CSSProperties}>
                                <Link href={data.link}>
                                    <div className={"ind-container"}>
                                        <div className={"ind"}>{`0${ind + 1}`.slice(-2)}</div>
                                    </div>
                                    <div className={"portfolio-link"}>
                                        <h3>{t(`${data.t}.title`)}</h3>
                                        <div className={"desc"}>{t(`${data.t}.tagline`)}</div>
                                    </div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
            <Footer/>
            <style jsx>{`
                .section1 .content {
                    width: 100vw;
                    height: 100vh;
                    min-height: 40em;
                    justify-content: center;
                    padding-bottom: 3em;
                }

                .section1 .scroll-down {
                    position: absolute;
                    bottom: 4em;
                    width: 100%;
                    text-align: center;
                    opacity: .5;
                    transition: .3s ease-in-out opacity, .3s ease-in-out bottom;
                }

                .section1:not(.scroll-down) .scroll-down {
                    opacity: 0;
                    bottom: 4em;
                }

                @media (max-width: 350px) {
                    .section1 .content h1 {
                        font-size: 2.5em;
                    }
                }

                .section2 .content {
                    display: flex;
                    flex-direction: row;
                    justify-content: stretch;
                    align-items: center;
                    gap: 1em;
                }

                .section2 .content div {
                    flex-grow: 1;
                }

                .section2 .content .text-container {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                }

                .section2 .content .avatar-container {
                    width: 300px;
                    height: 300px;
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    flex-grow: 0;
                }

                @media (max-width: ${Responsive.SIZE_L - 1}px) {
                    .section2 .content {
                        flex-direction: column-reverse;
                    }

                    .section2 .content .avatar-container {
                        width: 100%;
                    }

                    .section2 .content .text-container {
                        width: 100%;
                    }
                }

                .section3 ul li :global(a) {
                    text-decoration: none;
                    color: inherit;
                    display: block;
                }

                .section3 ul li :global(a) .ind-container {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                .section3 ul li :global(a) .ind-container .ind {
                    transition: .1s ease-in-out color, .1s ease-in-out opacity;
                    font-size: 7em;
                    margin-left: 2.6em;
                    text-align: left;
                    width: 2em;
                    color: var(--item-color-500);
                    opacity: .2;
                }

                .section3 ul li:nth-child(even) :global(a) .ind-container .ind {
                    margin-left: -1.8em;
                }

                @media (max-width: ${Responsive.SIZE_S - 1}px) {
                    .section3 ul li :global(a) .ind-container .ind {
                        margin-left: 1.6em;
                    }

                    .section3 ul li:nth-child(even) :global(a) .ind-container .ind {
                        margin-left: -1.2em;
                    }
                }

                .section3 ul li :global(a) .portfolio-link {
                    display: flex;
                    flex-direction: column;
                    gap: .5em;
                    align-items: stretch;
                    padding: 1em 0;
                    transition: .1s ease-in-out transform;
                    transform: scale(.95);
                }

                .section3 ul li :global(a) .portfolio-link h3 {
                    transition: .1s ease-in-out color;
                    color: var(--item-color-900);
                }

                :global(body.has-hover) .section3 ul li :global(a):hover .ind-container .ind,
                .section3 ul li :global(a):active .ind-container .ind {
                    opacity: .4;
                }

                :global(body.has-hover) .section3 ul li :global(a):hover .portfolio-link,
                .section3 ul li :global(a):active .portfolio-link {
                    transform: scale(1);
                }

                :global(body.has-hover) .section3 ul li :global(a):hover .portfolio-link h3,
                .section3 ul li :global(a):active .portfolio-link h3 {
                    color: var(--item-color-700);
                }

                @media (prefers-color-scheme: dark) {
                    .section3 ul li :global(a) .portfolio-link h3 {
                        color: var(--item-color-500);
                    }

                    :global(body.has-hover) .section3 ul li :global(a):hover .portfolio-link h3,
                    .section3 ul li :global(a):active .portfolio-link h3 {
                        color: var(--item-color-200);
                    }
                }
            `}</style>
        </main>
    );
};

export default HomePage;
