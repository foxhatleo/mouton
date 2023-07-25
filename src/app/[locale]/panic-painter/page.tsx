import React from "react";
import WorkPage from "@/components/WorkPage";
import { green } from "material-colors-ts";
import NewPageLink from "@/components/NewPageLink";
import Images from "@/components/Images";

const androidLink = "https://github.com/foxhatleo/panic-painter/releases/download/showcase/10524-android.apk";
const macLink = "https://github.com/foxhatleo/panic-painter/releases/download/showcase/10524-mac.zip";
const winLink = "https://github.com/foxhatleo/panic-painter/releases/download/showcase/10524-win-64bit.zip";

const WorkPanicPainter: React.ComponentType = () => (
    <WorkPage
        name={"Panic Painter"}
        desc={"A cross-platform mobile game written in C++."}
        fieldDate={"Jan 2020 - May 2020"}
        fieldGitHub={"foxhatleo/panic-painter"}
        fieldMacOS={macLink}
        fieldWindows={winLink}
        fieldAndroid={androidLink}
        color={green}>
        <Images urlPrefix={"/assets/panic-painter/"} urls={[
            "pp1",
            "pp2",
            "pp3",
            "pp4",
        ]} aspectRatio={1200 / 670}/>
        <p>
            As an integral component of the advanced coursework provided by the Game Design
            Initiative at Cornell University (GDIAC), I collaborated within a team of eight
            to architect a cross-platform mobile game, Panic Painter. Our collective was
            structured into two subteams: programming and arts. As the leader of the
            programming division, my role encompassed assigning tasks to individual members,
            overseeing the management of the codebase structure, and ensuring the diligent
            execution of respective responsibilities by all team members.
        </p>
        <p>
            The game’s construction relied on C++ language, using a tailor-made game engine,
            a creation of the GDIAC, based on the Simple DirectMedia Layer (SDL) library.
            The consequent codebase underwent compilation in Xcode and Android Studio to
            produce the respective iOS and Android builds. Contrary to utilizing a
            pre-existing commercial game engine, like Unity, we handcrafted numerous
            aspects of the project. This included the input handling mechanism, the sound system,
            and the particle system. We even engineered a custom OpenGL shader to realize
            the specific paint effect we sought.
        </p>
        <p>
            The advent of the COVID-19 pandemic presented a formidable challenge to our team.
            The entire university was thrust into a three-week hiatus, necessitating a rapid
            adaptation to a completely virtual workflow. Complicating the scenario further,
            several team members, myself included, had to relocate to our home countries,
            contending with significant time zone differences. This circumstance posed
            substantial challenges to effective collaboration and overall team morale.
            To address this issue, I engaged in dialogue with the team, collectively and
            individually, to understand and accommodate their respective difficulties.
        </p>
        <p>
            Ultimately, we delivered a product that we can genuinely take pride in.
            The final product (available
            on <NewPageLink href={androidLink}>Android</NewPageLink>,
            <NewPageLink href={winLink}>Windows</NewPageLink>,
            and <NewPageLink href={macLink}>macOS</NewPageLink>)
            and the corresponding codebase are accessible
            on <NewPageLink href={"https://github.com/foxhatleo/panic-painter"}>GitHub</NewPageLink>.
            Due to Apple’s restrictions on sideloading,
            the iOS version is not currently available.
            This endeavor was conducted as part of
            my minor degree in Game Design.
        </p>
    </WorkPage>
);

export default WorkPanicPainter;

export const metadata = {
    title: "Panic Painter — Leo Liang",
    description: "A cross-platform mobile game written in C++.",
};
