"use client";

import React from "react";

const Logo: React.ComponentType = () => (
    <div className="root">
        <span className="glow" />
        <span className="b1" />
        <span className="b2" />
        <style jsx>
            {`
            .root {
                width: 2em;
                height: 2em;
                overflow: visible visible;
            }

            .glow {
                display: block;
                width: 2em;
                height: 2em;
                filter: blur(1.5em);
                border-radius: 1.5em;
                background: white;
            }

            .b1, .b2 {
                display: inline-block;
                position: absolute;
                width: 1.5em;
                height: 1.5em;
                border-radius: .15em;
                border-bottom: .2em solid black;
                border-left: .2em solid black;
            }

            .b1 {
                bottom: 0;
                left: 0;
            }

            .b2 {
                top: 0;
                right: 0;
            }
        `}
        </style>
    </div>
);

export default Logo;
