"use client";

import React, {useRef} from "react";
import ReactSwipe from "react-swipe";

export type ImagesType = {
    urls: string[];
    aspectRatio?: number;
    urlPrefix?: string;
}

const Arrow = () => (
    <svg fill="#ffffff" version="1.1" width="30px" height="30px" viewBox="0 0 123.959 123.959">
        <g>
            <path
                d={"M85.742,1.779l-56,56c-2.3,2.3-2.3,6.1,0,8.401l56,56c3.801,3.8,10.2,1.1,10.2-4.2v-112 " +
                    "C95.942,0.679,89.543-2.021,85.742,1.779z"} />
        </g>
    </svg>
);

const Images: React.ComponentType<ImagesType> = (p) => {
    const swipe = useRef<ReactSwipe>(null);
    const prev = (evt: React.MouseEvent<HTMLAnchorElement>) => {
        evt.preventDefault();
        swipe.current!.prev();
    };
    const next = (evt: React.MouseEvent<HTMLAnchorElement>) => {
        evt.preventDefault();
        swipe.current!.next();
    };

    const rnd = Math.floor(Math.random() * 100000);

    return (
        <div className={"images"}>
            <ReactSwipe
                className="carousel"
                swipeOptions={{auto: 2500}}
                ref={swipe}>
                {p.urls.map((url, ind) => (
                    <div className={"image i-" + (rnd + ind)} key={ind}>
                        <style>{`
                            .i-${rnd + ind} { 
                                background-image: url(${(p.urlPrefix ?? "") + url}.jpg);
                            }
                            .webp .i-${rnd + ind} { 
                                background-image: url(${(p.urlPrefix ?? "") + url}.webp);
                            }
                        `}</style>
                    </div>
                ))}
            </ReactSwipe>
            <a href={"#"} onClick={prev} className={"nav-button left"}>
                <Arrow/>
            </a>
            <a href={"#"} onClick={next} className={"nav-button right"}>
                <Arrow/>
            </a>
            <style jsx>{`
                .image {
                    aspect-ratio: ${p.aspectRatio ?? 1};
                    background-size: contain;
                    background-position: center;
                    background-repeat: no-repeat;
                    background-color: #eee;
                    z-index: -2;
                }

                .images:hover .nav-button {
                    opacity: 1;
                }

                .nav-button {
                    opacity: 0;
                    transition: .3s ease-in-out opacity;
                    position: absolute;
                    display: flex;
                    align-items: center;
                    top: 0;
                    bottom: 0;
                    left: 0;
                    height: 100%;
                    padding: 1em;
                    text-decoration: none;
                    color: white;
                    text-shadow: 0 0 7px #000000;
                    font-size: 1.5em;
                }

                .nav-button::before {
                    content: "";
                    position: absolute;
                    opacity: 0;
                    transition: .3s ease-in-out opacity;
                    z-index: -1;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: linear-gradient(to right,
                    hsla(0, 0%, 0%, 0.5) 0%,
                    hsla(0, 0%, 0%, 0.494) 8.1%,
                    hsla(0, 0%, 0%, 0.476) 15.5%,
                    hsla(0, 0%, 0%, 0.448) 22.5%,
                    hsla(0, 0%, 0%, 0.412) 29%,
                    hsla(0, 0%, 0%, 0.37) 35.3%,
                    hsla(0, 0%, 0%, 0.324) 41.2%,
                    hsla(0, 0%, 0%, 0.275) 47.1%,
                    hsla(0, 0%, 0%, 0.225) 52.9%,
                    hsla(0, 0%, 0%, 0.176) 58.8%,
                    hsla(0, 0%, 0%, 0.13) 64.7%,
                    hsla(0, 0%, 0%, 0.088) 71%,
                    hsla(0, 0%, 0%, 0.052) 77.5%,
                    hsla(0, 0%, 0%, 0.024) 84.5%,
                    hsla(0, 0%, 0%, 0.006) 91.9%,
                    hsla(0, 0%, 0%, 0) 100%);
                }

                .nav-button:hover::before, .nav-button:active::before {
                    opacity: 1;
                }

                .nav-button.right {
                    left: unset;
                    right: 0;
                }

                .nav-button.right :global(svg) {
                    transform: rotate(180deg);
                }

                .nav-button.right::before {
                    background: linear-gradient(to left,
                    hsla(0, 0%, 0%, 0.5) 0%,
                    hsla(0, 0%, 0%, 0.494) 8.1%,
                    hsla(0, 0%, 0%, 0.476) 15.5%,
                    hsla(0, 0%, 0%, 0.448) 22.5%,
                    hsla(0, 0%, 0%, 0.412) 29%,
                    hsla(0, 0%, 0%, 0.37) 35.3%,
                    hsla(0, 0%, 0%, 0.324) 41.2%,
                    hsla(0, 0%, 0%, 0.275) 47.1%,
                    hsla(0, 0%, 0%, 0.225) 52.9%,
                    hsla(0, 0%, 0%, 0.176) 58.8%,
                    hsla(0, 0%, 0%, 0.13) 64.7%,
                    hsla(0, 0%, 0%, 0.088) 71%,
                    hsla(0, 0%, 0%, 0.052) 77.5%,
                    hsla(0, 0%, 0%, 0.024) 84.5%,
                    hsla(0, 0%, 0%, 0.006) 91.9%,
                    hsla(0, 0%, 0%, 0) 100%);
                }

                @media (prefers-color-scheme: dark) {
                    .image {
                        background-color: #222;
                    }
                }
            `}</style>
        </div>
    );
};

export default Images;
