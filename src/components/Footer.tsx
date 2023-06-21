import React from "react";
import Rainbow from "@/components/Rainbow";

const Footer: React.ComponentType = () => (
    <>
        <div className={"rainbow"}>
            <Rainbow footer={true}/>
        </div>
        <footer className={"container"}>
            Built by Wenhao “Leo” Liang using React.<br/>
            Source available at GitHub.
        </footer>
        <style jsx>{`
            .rainbow {
                position: absolute;
                bottom: 0;
                width: 100vw;
                height: 50vh;
                z-index: -10;
            }

            footer {
                overflow: hidden;
                text-align: center;
                font-size: .8em;
                color: black;
            }
        `}</style>
    </>
);

export default Footer;
