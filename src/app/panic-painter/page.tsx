import React from "react";
import WorkPage from "@/components/WorkPage";
import {green} from "material-colors-ts";

const WorkPanicPainter: React.ComponentType = () => (
    <WorkPage
        name={"Panic Painter"}
        desc={"A cross-platform mobile game written in C++."}
        fieldDate={"Jan 2020 - May 2020"}
        color={green}>
        <p>
            This page is coming soon.
        </p>
    </WorkPage>
);

export default WorkPanicPainter;
