"use client";

import React from "react";
import { blue, green, orange, purple, red, yellow } from "material-colors-ts";
import { Color } from "@/components/Color";

const Rainbow: React.ComponentType<{ footer?: boolean; color?: Color; }> = (p) => (
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

            .root .stretcher {
                transform-origin: center top;
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                width: 100%;
                height: 100%;
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
                transform-origin: center bottom;
                transform: scaleY(.8);
            }

            .bubble {
                position: absolute;
                width: 25vw;
                height: 25vw;
                margin-left: -12vw;
                margin-top: -6vw;
                filter: blur(10vw);
                transform-origin: 15vw 15vw;
                border-radius: 12vw;
                top: 0;
                left: 0;
                -webkit-backface-visibility: hidden;
                -moz-backface-visibility: hidden;
                -webkit-transform: translate3d(0, 0, 0);
                -moz-transform: translate3d(0, 0, 0);
                animation-name: rainbow-circle;
                animation-iteration-count: infinite;
            }

            .root.footer .bubble {
                margin-top: -6em;
                top: 100%;
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
                background: ${p.color ? p.color["500"] : red["500"]};
                animation-duration: 15s;
                animation-direction: normal;
            }

            .b2 {
                background: ${p.color ? p.color["400"] : orange["500"]};
                animation-duration: 9s;
                animation-direction: reverse;
                left: 20%;
            }

            .b3 {
                background: ${p.color ? p.color["700"] : yellow["500"]};
                animation-duration: 7s;
                animation-direction: normal;
                left: 40%;
            }

            .b4 {
                background: ${p.color ? p.color["500"] : green["500"]};
                animation-duration: 11s;
                animation-direction: reverse;
                left: 60%;
            }

            .b5 {
                background: ${p.color ? p.color["300"] : blue["500"]};
                animation-duration: 8s;
                animation-direction: normal;
                left: 80%;
            }

            .b6 {
                background: ${p.color ? p.color["800"] : purple["500"]};
                animation-duration: 10s;
                animation-direction: reverse;
                left: 100%;
            }
        `}</style>
    </div>
);

export default Rainbow;
