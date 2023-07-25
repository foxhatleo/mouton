"use client";

import React from "react";
import Rainbow from "@/components/Rainbow";
import { useTranslations } from "use-intl";
import NewPageLink from "@/components/NewPageLink";

const Footer: React.ComponentType = () => {
    const t = useTranslations("Footer");

    return (
        <>
            <div className={"rainbow"}>
                <Rainbow footer={true}/>
            </div>
            <footer className={"container glow"}>
                {t("l1")}<br/>
                {t("l21")}<NewPageLink href={"https://github.com/foxhatleo/mouton"}>GitHub</NewPageLink>{t("l22")}
            </footer>
            <style jsx>{`
                .rainbow {
                    position: absolute;
                    bottom: 0;
                    width: 100vw;
                    height: 100vh;
                    z-index: -10;
                }

                footer {
                    overflow: hidden;
                    text-align: center;
                    font-size: .8em;
                    color: black;
                    margin-top: 3em;
                }
                
                footer :global(a) {
                    color: black;
                } 
            `}</style>
        </>
    );
};

export default Footer;
