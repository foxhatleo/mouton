import React from "react";
import WorkPage from "@/components/WorkPage";
import { blue } from "material-colors-ts";
import { Viewport } from "next";

const WorkCMSX: React.ComponentType = () => (
    <WorkPage
        name="CMSX"
        desc={"Cornell's CS department course management website."}
        fieldDate="Jan 2020 - Dec 2020"
        color={blue}
    >
        <p>
            Throughout the course of 2020, I served as a volunteer within the project team
            dedicated to the enhancement of Cornell University’s Course Management System X (CMSX).
            This system is ubiquitously utilized by students and faculty of the Computer and
            Information Science department for academic tasks including assignments, quizzes,
            and surveys. Notably, it facilitates integration with autograders,
            plagiarism detection tools, and course management instruments.
        </p>
        <p>
            However, given that the system had been in operation for over two decades,
            its user interface began to exhibit signs of obsolescence. Both students and
            faculty reported that the aesthetics were outdated, and more importantly,
            the platform was ill-suited for usage on mobile devices due to its original
            design specifications. Consequently, I joined forces with the frontend
            division to undertake a comprehensive redesign of the entire frontend,
            placing particular emphasis on responsive design. To facilitate a swift
            and contemporary development process, we elected to utilize React and Redux.
        </p>
        <p>
            My responsibilities entailed the development of several user interface
            components. Throughout the design process, I rigorously tested each iteration
            on a mobile device to ascertain optimal functionality. Additionally, I
            facilitated usability testing with fellow department members, acquiring
            invaluable feedback to enhance the website’s intuitiveness.
        </p>
        <p>
            Upon completion of the frontend redesign in the fall semester of 2020,
            we began a phased release to the department. We were met with an overwhelming
            positive response, with accolades for the redesigned frontend’s enhanced
            intuitiveness and ease of use. The impact of this project continues to be
            evident to this day.
        </p>
        <p>
            Regrettably, due to the nature of this project, the source code is not available for review.
        </p>
    </WorkPage>
);

export default WorkCMSX;

export const metadata = {
    title: "CMSX — Leo Liang",
    description: "Cornell's CS department course management website.",
};

export const viewport: Viewport = {
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: blue[500] },
        { media: "(prefers-color-scheme: dark)", color: blue[700] },
    ],
};
