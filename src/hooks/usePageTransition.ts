"use client";

import React from "react";
import gsap from "gsap";

export default function usePageTransition() {
    React.useEffect(() => {
        if (typeof document === "undefined") {
            return undefined;
        }
        const mains = document.body.querySelectorAll("main");
        mains.forEach((i) => {
            // eslint-disable-next-line no-param-reassign
            i.style.opacity = "0";
        });
        gsap.to(mains, 0.3, { opacity: 1 });
        const containers = Array.from(document.body.querySelectorAll(".entry-transition-group"));
        const pageTransitions = Array.from(
            document.body.querySelectorAll(".entry-transition, .entry-transition-children > *"),
        )
            .filter((n) => {
                let parent: HTMLElement | Element | null = n;
                gsap.set(n, { translateY: "-50px", opacity: 0 });
                while (parent) {
                    if (parent.classList.contains("entry-transition-group")) {
                        return false;
                    }
                    parent = parent.parentElement;
                }
                return true;
            });
        gsap.fromTo(
            pageTransitions,
            { translateY: "-50px", opacity: 0 },
            {
                translateY: 0, opacity: 1, duration: 0.3, ease: "sine", stagger: 0.15,
            },
        );
        const scrollHandler = () => {
            const viewportHeight = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
            for (let i = 0, j = containers.length; i < j; i += 1) {
                const c = containers[i];
                const ctop = c.getBoundingClientRect().top;
                if (ctop < viewportHeight * 0.6) {
                    const eligibleChildren = Array.from(
                        c.querySelectorAll(".entry-transition, .entry-transition-children > *"),
                    );
                    gsap.fromTo(
                        eligibleChildren,
                        { translateY: "-50px", opacity: 0 },
                        {
                            translateY: 0, opacity: 1, duration: 0.3, ease: "sine", stagger: 0.15,
                        },
                    );
                    containers.splice(i, 1);
                    i -= 1;
                    j -= 1;
                }
            }
        };
        window.addEventListener("scroll", scrollHandler);
        setTimeout(scrollHandler, 500);
        return () => {
            window.removeEventListener("scroll", scrollHandler);
        };
    }, []);
}
