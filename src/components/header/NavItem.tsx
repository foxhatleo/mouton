"use client";

import type React from "react";
import Link from "next/link";
import Responsive from "@/components/Responsive";

export interface NavItemProps {
	label: string;
	onclick?: (evt?: React.MouseEvent<HTMLAnchorElement>) => void;
	href: string;
	newWindow?: boolean;
}

const NavItem: React.ComponentType<NavItemProps> = ({
	label,
	onclick,
	href,
	newWindow,
}) => (
	<span className="link glow">
		<Link
			href={href}
			target={newWindow ? "_blank" : ""}
			rel={newWindow ? "noopener noreferrer" : ""}
			onClick={onclick}
		>
			{label}
		</Link>
		<style jsx={true}>
			{`
                .link :global(a), .link :global(a):hover, .link :global(a):active {
                    text-decoration: none;
                    color: black;
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
                    //will-change: opacity;
                }

                :global(body.has-hover) .link :global(a):hover::before, .link :global(a):active::before {
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
            `}
		</style>
	</span>
);

export default NavItem;
