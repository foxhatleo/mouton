import React from "react";
import WorkPage from "@/components/WorkPage";
import { red } from "material-colors-ts";
import { Viewport } from "next";

const WorkRemy: React.ComponentType = () => (
    <WorkPage
        name="Remy Hospitality Platform"
        desc="An AI-powered platform bringing interactive experience to hospitality industries."
        fieldDate="Oct 2023 - current"
        fieldWebsite="https://restaurants.circolo.us/?demo=1"
        color={red}
    >
        <p>
            In my current job at Circolo, I am working on a integrated experience
            to bring interactive menu and promotional display to the hospitality
            industry including restaurants and hotels. Codenamed “Remy”, the project
            I am leading involves several parts including frontend, backend, and AI integration.
        </p>

        <p>
            I built a frontend management system using React and Next.js that allows
            clients to easily control their data on the platform. Things such as adding,
            removing, editing menu items, changing images of menu items, or changing
            design of the menu becomes effortless. The website also utilizes progressive
            web app technology so that users can have a seamless experience on the go on
            their phones and portable devices.
        </p>
        <p>
            For first-time users that are bringing their menus to the platform, I made
            an AI tool that helps automate the process. Users can scan or take a photo
            of their existing physical menu. The input is analyzed using computer vision
            and artificial intelligence, and with little to no manual intervention,
            their menu would be digitized and ready to go on our platform.
        </p>
        <p>
            Finally, Remy introduced an offline-capable renderer system that is used as
            preview on the client-facing management portal as well as our in-house
            interactive display stands. This system makes sure that what the client sees
            as they edit is what they get on the actual device. A major difficulty when
            realizing this system is how to make sure it fully functions without Internet
            connection, as the display stand may not have Internet access in production,
            but I was able to get around these challenges by building a custom caching
            solution that makes sure all dependent images, fonts, and scripts can be
            downloaded by the device in one go.
        </p>
    </WorkPage>
);

export default WorkRemy;

export const metadata = {
    title: "Remy Hospitality Platform — Leo Liang",
    description: "An AI-powered platform bringing interactive experience to hospitality industries.",
};

export const viewport: Viewport = {
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: red[500] },
        { media: "(prefers-color-scheme: dark)", color: red[700] },
    ],
};
