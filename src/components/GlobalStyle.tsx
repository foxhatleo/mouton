"use client";

import React from "react";
import Responsive from "@/components/Responsive";
import {blue, orange, purple} from "material-colors-ts";

const GlobalStyle: React.ComponentType = () => <>
    <link rel={"preconnect"} href={"https://fonts.googleapis.com"}/>
    <link rel={"preconnect"} href={"https://fonts.gstatic.com"} crossOrigin={"anonymous"}/>
    <link href={"https://fonts.googleapis.com/css2?family=Oxygen&family=Vollkorn:wght@600&display=swap"}
        rel={"stylesheet"}/>
    <style jsx global>{`
        html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym,
        address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var,
        b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead,
        tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav,
        output, ruby, section, summary, time, mark, audio, video, input, form, button {
            margin: 0;
            padding: 0;
            border: 0;
            font-size: 100%;
            vertical-align: baseline;
            box-sizing: border-box;
            position: relative;
        }

        aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
            display: block;
        }

        main {
            line-height: 1.5;
            overflow-x: hidden;
            opacity: 0;
            font-family: Oxygen, "SF Pro Text", Roboto, "Helvetica Neue", Helvetica, Arial,
            "PingFang SC", STHeiti, "华文黑体", "黑体", "微软雅黑", sans-serif;
        }

        ol, ul {
            list-style: none;
        }

        blockquote, q {
            quotes: none;
        }

        blockquote:before, blockquote:after,
        q:before, q:after {
            content: '';
            content: none;
        }

        table {
            border-collapse: collapse;
            border-spacing: 0;
        }

        h1, h2, h3, h4, h5, h6 {
            font-family: Vollkorn, "Times New Roman", Times,
            "Songti SC", STSong, "华文宋体", "宋体", serif;
            font-weight: 600;
        }

        code {
            font-family: "Fira Code", Dina, Hack, "Anonymous Pro", "Courier New", sans-serif;
        }

        .glow {
            text-shadow: 0 0 1em white;
        }

        h1 {
            font-size: 2.8em;
        }

        h2 {
            font-size: 2.2em;
        }

        h3 {
            font-size: 1.6em;
        }

        h4 {
            font-size: 1.2em;
        }

        h5 {
            font-size: 1.1em;
        }

        h6 {
            font-size: 1em;
        }

        article {
            display: flex;
            flex-direction: column;
            gap: 1.5em;
        }

        .v-layout {
            display: flex;
            flex-direction: column;
            gap: 1em;
            width: 100%;
        }

        .fill-layout {
            height: 100%;
            justify-content: center;
        }

        .center {
            text-align: center;
        }

        .container {
            padding: 3.5em 2.5em;
            width: 100%;
            max-width: 1000px;
            margin: 0 auto;
        }

        .container.alt {
            padding: 2.5em;
        }

        body {
            font-size: 20px;
        }

        a {
            color: ${blue["500"]};
            transition: .1s ease-in-out color;
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        }

        body.has-hover a:hover {
            color: ${orange["500"]};
        }

        a:active {
            color: ${purple["500"]};
        }

        @media (min-width: ${Responsive.SIZE_L}px) and (max-width: ${Responsive.SIZE_XL - 1}px) {
            .container {
                padding: 3.2em 2.2em;
            }

            .container.alt {
                padding: 2.2em;
            }

            body {
                font-size: 19px;
            }
        }

        @media (min-width: ${Responsive.SIZE_M}px) and (max-width: ${Responsive.SIZE_L - 1}px) {
            .container {
                padding: 3em 1.8em;
            }

            .container.alt {
                padding: 1.8em;
            }

            body {
                font-size: 18px;
            }
        }

        @media (min-width: ${Responsive.SIZE_S}px) and (max-width: ${Responsive.SIZE_M - 1}px) {
            .container {
                padding: 2.8em 1.6em;
            }

            .container.alt {
                padding: 1.6em;
            }

            body {
                font-size: 16px;
            }
        }

        @media (max-width: ${Responsive.SIZE_S - 1}px) {
            .container {
                padding: 2.4em 1.5em;
            }

            .container.alt {
                padding: 1.5em;
            }

            body {
                font-size: 14px;
            }
        }

        @media (prefers-color-scheme: dark) {
            body {
                background: black;
                color: #ccc;
            }

            h1, h2, h3, h4, h5, h6 {
                color: white;
            }
        }
    `}</style>
</>;

export default GlobalStyle;
