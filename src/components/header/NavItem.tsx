"use client";

import React from "react";
import Link from "next/link";
import Responsive from "@/components/Responsive";

export type NavItemProps = {
    label: string;
    onclick?: (evt?: React.MouseEvent<HTMLAnchorElement>) => void;
    href: string;
    newWindow?: boolean;
};

const NavItem: React.ComponentType<NavItemProps> = (p) => (
    <span className={"link glow"}>
        <Link href={p.href}
            target={p.newWindow ? "_blank" : ""} rel={p.newWindow ? "noopener noreferrer" : ""}
            onClick={p.onclick}>
            {p.label}
        </Link>
        <style jsx>{`
            .link :global(a) {
                text-decoration: none;
                color: inherit;
            }
            .link :global(a)::before {
                content: "";
                position: absolute;
                width: 100%;
                left: 0;
                right: 0;
                bottom: 0;
                opacity: 0;
                height: .12em;
                border-radius: .12em;
                background: black;
                transition: .3s ease-in-out bottom, .3s ease-in-out opacity;
                will-change: opacity;
            }
            .link :global(a):hover::before, .link :global(a):active::before {
                bottom: -.1em;
                opacity: 1;
            }
            @media (prefers-color-scheme: dark) {
                .link :global(a) {
                    color: black;
                }
            }
            @media (max-width: ${Responsive.SIZE_M - 1}px) and (prefers-color-scheme: dark) {
                .link :global(a) {
                    color: white;
                }
                .link :global(a)::before {
                    background: white;
                }
            }
        `}</style>
    </span>
);

export default NavItem;
