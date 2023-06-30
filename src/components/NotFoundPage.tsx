"use client";

import React from "react";
import Header from "@/components/header/Header";
import Rainbow from "@/components/Rainbow";
import usePageTransition from "@/hooks/usePageTransition";
import Footer from "@/components/Footer";
import {blueGrey} from "material-colors-ts";

const ErrorPage: React.ComponentType = () => {
    usePageTransition();

    return (
        <main>
            <Rainbow color={blueGrey}/>
            <section className={"section1"}>
                <Header absolute={true}/>
                <div className={"content container v-layout entry-transition-children"}>
                    <h1>
                        404.
                    </h1>
                    <p>This page cannot be found. Verify the address and try again.</p>
                </div>
            </section>
            <Footer/>
            <style jsx>{`
                .section1 .content {
                    width: 100vw;
                    height: 100vh;
                    min-height: 40em;
                    justify-content: center;
                    padding-bottom: 3em;
                }

                @media (max-width: 350px) {
                    .section1 .content h1 {
                        font-size: 2.5em;
                    }
                }
            `}</style>
        </main>
    );
};

export default ErrorPage;
