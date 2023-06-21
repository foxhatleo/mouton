"use client";

import React from "react";
import gsap from "gsap";

export default function usePageTransition() {
    React.useEffect(() => {
        if (typeof document === "undefined") {
            return;
        }
        const containers = Array.from(document.body.querySelectorAll(".entry-transition-container"));
        const pageTransitions = Array.from(document.body.querySelectorAll(".entry-transition")).filter((n) => {
            let parent: HTMLElement | Element | null = n;
            gsap.set(n, {translateY: "-50px", opacity: 0});
            while (parent) {
                if (parent.classList.contains("entry-transition-container")) {
                    return false;
                }
                parent = parent.parentElement;
            }
            return true;
        });
        gsap.fromTo(pageTransitions,
            {translateY: "-50px", opacity: 0},
            {translateY: 0, opacity: 1, duration: .3, ease: "sine", stagger: .15});
        const scrollHandler = () => {
            const viewportHeight = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
            for (let i = 0, j = containers.length; i < j; i++) {
                const c = containers[i];
                const ctop = c.getBoundingClientRect().top;
                if (ctop < viewportHeight * 0.6) {
                    gsap.fromTo(c.querySelectorAll(".entry-transition"),
                        {translateY: "-50px", opacity: 0},
                        {translateY: 0, opacity: 1, duration: .3, ease: "sine", stagger: .15});
                    containers.splice(i, 1);
                    i--;
                    j--;
                }
            }
        };
        window.addEventListener("scroll", scrollHandler);
        return () => {
            window.removeEventListener("scroll", scrollHandler);
        };
    }, []);
}