import React from "react";
import WorkPage from "@/components/WorkPage";
import {blue} from "material-colors-ts";

const WorkCMSX: React.ComponentType = () => (
    <WorkPage
        name={"CMSX"}
        desc={"Cornell's CS department course management website."}
        fieldDate={"Jan 2020 - Dec 2020"}
        color={blue}>
        <p>
            This page is coming soon.
        </p>
    </WorkPage>
);

export default WorkCMSX;
