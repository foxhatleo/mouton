"use client";

import React, {useEffect, useRef, useState} from "react";
import NavItem from "@/components/header/NavItem";
import Responsive from "@/components/Responsive";
import gsap from "gsap";
import {useTranslations} from "use-intl";

const Nav: React.ComponentType = () => {
    const [ showing, setShowing ] = useState(false);
    const desktopNav = useRef<HTMLDivElement>(null);

    const show = () => {
        document.body.style.overflow = "hidden";
        desktopNav.current!.style.opacity = "0";
        desktopNav.current!.style.display = "flex";
        gsap.to(desktopNav.current!, {opacity: 1, duration: .15});
        desktopNav.current!.querySelectorAll("span").forEach((item, i) => {
            gsap.killTweensOf(item);
            gsap.fromTo(item,
                {opacity: 0, translateY: -20},
                {opacity: 1, translateY: 0, delay: i * .05, duration: .15});
        });
    };

    const hide = (immediate: boolean) => {
        document.body.style.overflow = "";
        if (immediate) {
            gsap.killTweensOf(desktopNav.current!);
            desktopNav.current!.removeAttribute("style");
            desktopNav.current!.querySelectorAll("span").forEach((item) => {
                gsap.killTweensOf(item);
                item.removeAttribute("style");
            });
            return;
        }
        desktopNav.current!.querySelectorAll("span").forEach((item, i) => {
            gsap.killTweensOf(item);
            gsap.to(item, {opacity: 0, translateY: -20, delay: i * .05, duration: .15});
        });
        gsap.to(desktopNav.current!, {
            opacity: 0, duration: .15, delay: .2, onComplete: () => {
                desktopNav.current!.style.display = "none";
            },
        });
    };

    const mobileToggleHandler = (evt?: { preventDefault: () => void; }) => {
        if (evt) {
            evt.preventDefault();
        }
        setShowing((v) => {
            if (v) {
                hide(false);
            } else {
                show();
            }
            return !v;
        });
    };

    const resizeHandler = () => {
        const viewportWidth = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
        if (viewportWidth > Responsive.SIZE_M) {
            hide(true);
        }
    };

    useEffect(() => {
        window.addEventListener("resize", resizeHandler);
        return () => {
            window.removeEventListener("resize", resizeHandler);
        };
    }, []);

    const t = useTranslations("Header");

    return (
        <>
            <nav className={"mobile nav"}>
                <span className={"glow"}/>
                <a href={"#"} className={"mobile-button"} onClick={mobileToggleHandler}>
                    <div className={"line"}/>
                    <div className={"line"}/>
                    <div className={"line"}/>
                    <div className={"line"}/>
                </a>
            </nav>
            <nav className={"desktop nav"} ref={desktopNav}>
                <NavItem label={"✕"} href={"/"} onclick={mobileToggleHandler}/>
                <NavItem label={t("about")} href={"/#about"} onclick={() => hide(true)}/>
                <NavItem label={t("works")} href={"/#works"} onclick={() => hide(true)}/>
                <NavItem label={t("resume")} href={"/resources/Resume-Wenhao-Leo-Liang.pdf"}
                    onclick={() => hide(true)}/>
                <NavItem label={t("linkedin")} href={"https://www.linkedin.com/in/wenhao-leo-liang/"}
                    onclick={() => hide(true)}/>
                <NavItem label={t("instagram")} href={"https://www.instagram.com/foxhatleo"}
                    onclick={() => hide(true)}/>
            </nav>
            <style jsx>{`
                nav {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    gap: 1.5em;
                }

                .glow {
                    display: block;
                    position: absolute;
                    width: 20px;
                    height: 25px;
                    filter: blur(1.5em);
                    border-radius: 1.5em;
                    background: white;
                }

                .mobile.nav {
                    display: none;
                }

                .mobile-button {
                    width: 20px;
                    height: 25px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                }

                .line {
                    width: 100%;
                    height: 10%;
                    background: black;
                    border-radius: 5px;
                }

                .desktop.nav :global(span:first-child) {
                    display: none;
                }

                @media (max-width: ${Responsive.SIZE_M - 1}px) {
                    .mobile.nav {
                        display: flex;
                    }

                    .desktop.nav {
                        position: fixed;
                        display: none;
                        top: 0;
                        bottom: 0;
                        height: 100vh;
                        right: 0;
                        width: 100vw;
                        background: rgba(255, 255, 255, .7);
                        backdrop-filter: blur(10px);
                        flex-direction: column;
                        align-items: flex-end;
                        padding: 2em;
                    }

                    .desktop.nav :global(span:first-child) {
                        display: block;
                    }
                }

                @media (max-width: ${Responsive.SIZE_M - 1}px) and (prefers-color-scheme: dark) {
                    .desktop.nav {
                        background: rgba(0, 0, 0, .7);
                    }
                }

                @media (min-width: ${Responsive.SIZE_L}px) and (max-width: ${Responsive.SIZE_XL - 1}px) {
                    nav {
                        gap: 1.4em;
                    }
                }

                @media (min-width: ${Responsive.SIZE_M}px) and (max-width: ${Responsive.SIZE_L - 1}px) {
                    nav {
                        gap: 1.2em;
                    }
                }
            `}</style>
        </>
    );
};

export default Nav;
