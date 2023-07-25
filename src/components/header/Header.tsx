"use client";

import React from "react";
import Logo from "@/components/header/Logo";
import Nav from "@/components/header/Nav";
import Link from "next/link";

export interface HeaderProps {
    absolute?: boolean;
}

const Header: React.ComponentType<HeaderProps> = (p) => (
    <header className={"entry-transition container alt"}>
        <Link href={"/"}>
            <Logo/>
        </Link>
        <Nav/>
        <style jsx>{`
            header {
                position: ${p.absolute ? "absolute" : "relative"};
                display: flex;
                width: 100vw;
                top: 0;
                left: 0;
                right: 0;
                justify-content: space-between;
                z-index: 1;
            }
        `}</style>
    </header>
);

export default Header;
