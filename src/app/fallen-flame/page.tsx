"use client";

import React from "react";
import WorkPage from "@/components/WorkPage";
import {green} from "material-colors-ts";

const WorkFallenFlame: React.ComponentType = () => (
    <WorkPage
        name={"FallenFlame"}
        desc={"A cross-platform desktop game written in Java."}
        fieldDate={"Jan 2019 - May 2019"}
        color={green}>
        <p>
            This page is coming soon.
        </p>
    </WorkPage>
);

export default WorkFallenFlame;
