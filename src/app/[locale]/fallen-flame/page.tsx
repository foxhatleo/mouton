import React from "react";
import WorkPage from "@/components/WorkPage";
import { purple } from "material-colors-ts";
import NewPageLink from "@/components/NewPageLink";
import Images from "@/components/Images";

const winLink = "https://github.com/foxhatleo/fallen-flame/releases/download/4.0/FallenFlame-Windows.zip";
const macLink = "https://github.com/foxhatleo/fallen-flame/releases/download/4.0/FallenFlame-Mac.zip";

const WorkFallenFlame: React.ComponentType = () => (
    <WorkPage
        name={"Fallen Flame"}
        desc={"A cross-platform desktop game written in Java."}
        fieldDate={"Jan 2020 - May 2020"}
        fieldGitHub={"foxhatleo/fallen-flame"}
        fieldWindows={winLink}
        fieldAndroid={macLink}
        fieldPdf={"https://github.com/foxhatleo/fallen-flame/releases/download/4.0/FallenFlame-Guide.pdf"}
        fieldPdfName={"Game instructions"}
        color={purple}>
        <Images urlPrefix={"/assets/fallen-flame/"} urls={[
            "ff1",
            "ff2",
            "ff3",
            "ff4",
            "ff5",
        ]} aspectRatio={1200 / 682}/>
        <p>
            As a critical element of the curriculum established by the Game Design Initiative
            at Cornell University (GDIAC), I was part of an eight-member team that developed a
            cross-platform desktop game named Fallen Flame. Our ensemble was bifurcated into
            two specialist subteams: one focused on programming, and the other on art. As a
            constituent of the programming subteam, my responsibilities extended to the
            creation of core game controllers, the implementation of various in-game models,
            and the management of the sound and input subsystems.
        </p>
        <p>
            The game was architected utilizing the Java programming language, supported by
            the LibGDX framework. Contrary to using a ready-made commercial game engine like
            Unity, we opted to meticulously craft multiple aspects of the project. This
            included the design and implementation of an input handling system, a sound system,
            and a particle system. The project bestowed upon me invaluable experience in
            critical components of video game development.
        </p>
        <p>
            Alongside the technical aspects of game implementation, my colleagues and I
            designed the entire framework of our game from the ground up, placing significant
            emphasis on gameplay. This demonstrates that the project was not merely a technical
            venture but also an endeavor of design. Through this process, we gained substantial
            insights into crafting a game that optimizes player enjoyment. Our final product
            manifests the knowledge we acquired.
        </p>
        <p>
            In conclusion, we created a product that is a testament to our dedication and
            hard work. The final output (available
            on <NewPageLink href={winLink}>Windows</NewPageLink>{" "}
            {/* eslint-disable-next-line max-len */" "}
            and <NewPageLink href={macLink}>macOS</NewPageLink>)
            and associated codebase are publicly accessible
            on <NewPageLink href={"https://github.com/foxhatleo/fallen-flame"}>GitHub</NewPageLink>.
            This initiative was undertaken as a component of my minor degree in Game Design.
        </p>
    </WorkPage>
);

export default WorkFallenFlame;

export const metadata = {
    title: "Fallen Flame — Leo Liang",
    description: "A cross-platform desktop game written in Java.",
};
