"use client";

import React, {useState} from "react";
import Header from "@/components/header/Header";
import Rainbow from "@/components/Rainbow";
import usePageTransition from "@/hooks/usePageTransition";
import Link from "next/link";
import Footer from "@/components/Footer";
import {blue, green, orange, purple, red, yellow} from "material-colors-ts";
import Avatar from "@/components/Avatar";
import Responsive from "@/components/Responsive";
import {Color} from "@/components/Color";
import useScroll from "@/hooks/useScroll";
import useHover from "@/hooks/useHover";

const WORKS: { name: string; desc: string; link: string; color: Color; }[] = [
    {
        name: "Circolo.us",
        desc: "Complete website overhaul using React with e-commerce functionalities.",
        link: "/circolo/",
        color: red,
    },
    {
        name: "EGOS-2000 Extension",
        desc: "Extension to incorporate C standard library in a minimal OS.",
        link: "/egos-2000-extension/",
        color: orange,
    },
    {
        name: "Xi Compiler",
        desc: "A fully functional compiler written from scratch.",
        link: "/xi-compiler/",
        color: yellow,
    },
    {
        name: "Panic Painter",
        desc: "A cross-platform mobile game written in C++.",
        link: "/panic-painter/",
        color: green,
    },
    {
        name: "CMSX",
        desc: "Cornell's CS department course management website.",
        link: "/cmsx/",
        color: blue,
    },
    {
        name: "Fallen Flame",
        desc: "A cross-platform desktop game written in Java.",
        link: "/fallen-flame/",
        color: purple,
    },
];

const HomePage: React.ComponentType = () => {
    usePageTransition();
    useHover();
    const [ scrollDown, setScrollDown ] = useState(true);

    const scrollHandler = () => {
        if (window.scrollY >= 120) {
            setScrollDown(false);
        }
    };

    useScroll(scrollHandler);

    return (
        <main>
            <Rainbow/>
            <section className={"section1" + (scrollDown ? " scroll-down" : "")}>
                <Header absolute={true}/>
                <div className={"content container v-layout"}>
                    <h1 className={"entry-transition"}>
                        My passion is to<br/>
                        create useful &<br/>
                        delightful experience<br/>
                        with the power of<br/>
                        technology.
                    </h1>
                </div>
                <div className={"scroll-down"}>
                    Scroll down to learn more
                </div>
            </section>
            <section id={"about"} className={"section2 container entry-transition-group"}>
                <div className={"v-layout"}>
                    <h2 className={"entry-transition center"}>About Me</h2>
                    <div className={"content"}>
                        <article className={"text-container container alt"}>
                            <p className={"entry-transition"}>
                                Welcome! I’m Leo, an ambitious software engineer and recent Master’s graduate in
                                Computer Science from Cornell University. I’m eager to contribute my skills and
                                expertise to a dynamic team, with a firm belief in using technology to improve and
                                enrich lives.
                            </p>
                            <p className={"entry-transition"}>
                                Born in China and fluent in Mandarin, Cantonese, and English, I revel in embracing
                                diverse cultures. I’m currently on an exciting journey learning Japanese and Swedish,
                                further extending my linguistic capabilities.
                            </p>
                            <p className={"entry-transition"}>
                                When I’m not immersed in coding or languages, I find solace in playing the piano and
                                exploring the world. Thank you for visiting my website — enjoy discovering more about my
                                passions and pursuits.
                            </p>
                        </article>
                        <div className={"avatar-container"}>
                            <Avatar/>
                        </div>
                    </div>
                </div>
            </section>
            <section id={"works"} className={"section3 container entry-transition-group"}>
                <div className={"v-layout center"}>
                    <h2 className={"entry-transition"}>Works</h2>
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
                                        <h3>{data.name}</h3>
                                        <div className={"desc"}>{data.desc}</div>
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
