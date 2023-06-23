import React from "react";
import Rainbow from "@/components/Rainbow";

const Footer: React.ComponentType = () => (
    <>
        <div className={"rainbow"}>
            <Rainbow footer={true}/>
        </div>
        <footer className={"container"}>
            Built by Wenhao “Leo” Liang using React.<br/>
            Source available at <a href={"https://github.com/foxhatleo/mouton"}>GitHub</a>.
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
        `}</style>
    </>
);

export default Footer;
