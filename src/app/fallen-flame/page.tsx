import React from "react";
import WorkPage from "@/components/WorkPage";
import {purple} from "material-colors-ts";

const WorkFallenFlame: React.ComponentType = () => (
    <WorkPage
        name={"Fallen Flame"}
        desc={"A cross-platform desktop game written in Java."}
        fieldDate={"Jan 2019 - May 2019"}
        color={purple}>
        <p>
            This page is coming soon.
        </p>
    </WorkPage>
);

export default WorkFallenFlame;
