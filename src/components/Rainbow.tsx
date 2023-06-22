"use client";

import React from "react";
import {blue, green, orange, purple, red, yellow} from "material-colors-ts";

const Rainbow: React.ComponentType<{ footer?: boolean; }> = (p) => (
    <div className={"root" + (p.footer ? " footer" : "")}>
        <div className={"stretcher"}>
            <div className={"bubble b2"}/>
            <div className={"bubble b4"}/>
            <div className={"bubble b6"}/>
            <div className={"bubble b1"}/>
            <div className={"bubble b3"}/>
            <div className={"bubble b5"}/>
        </div>
        <style jsx>{`
            .root {
                position: absolute;
                z-index: -10;
                width: 100%;
                height: 100%;
                overflow: hidden visible;
                left: 0;
                right: 0;
            }

            @media (max-aspect-ratio: 1/1) {
                .root:not(.footer) .stretcher {
                    transform: scaleY(2);
                }
            }

            @media (max-aspect-ratio: 2/3) {
                .root:not(.footer) .stretcher {
                    transform: scaleY(3.5);
                }
            }

            .root.footer .stretcher {
                transform: scaleY(.6);
            }

            .bubble {
                position: absolute;
                width: 25vw;
                height: 25vw;
                margin-left: -12vw;
                margin-top: ${p.footer ? "140vh" : "-6vw"};
                filter: blur(10vw);
                transform-origin: 15vw 15vw;
                border-radius: 12vw;
                top: 0;
                left: 0;
                -webkit-backface-visibility: hidden;
                -moz-backface-visibility: hidden;
                -webkit-transform: translate3d(0, 0, 0);
                -moz-transform: translate3d(0, 0, 0);
                //will-change: filter, transform;
                animation-name: rainbow-circle;
                animation-iteration-count: infinite;
            }

            @keyframes rainbow-circle {
                from {
                    transform: rotate(0turn);
                }
                to {
                    transform: rotate(1turn);
                }
            }

            .b1 {
                background: ${red["500"]};
                animation-duration: 15s;
                animation-direction: normal;
            }

            .b2 {
                background: ${orange["500"]};
                animation-duration: 9s;
                animation-direction: reverse;
                left: 20%;
            }

            .b3 {
                background: ${yellow["500"]};
                animation-duration: 7s;
                animation-direction: normal;
                left: 40%;
            }

            .b4 {
                background: ${green["500"]};
                animation-duration: 11s;
                animation-direction: reverse;
                left: 60%;
            }

            .b5 {
                background: ${blue["500"]};
                animation-duration: 8s;
                animation-direction: normal;
                left: 80%;
            }

            .b6 {
                background: ${purple["500"]};
                animation-duration: 10s;
                animation-direction: reverse;
                left: 100%;
            }
        `}</style>
    </div>
);

export default Rainbow;
