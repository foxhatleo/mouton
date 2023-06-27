"use client";

import React from "react";
import WorkPage from "@/components/WorkPage";
import {orange} from "material-colors-ts";
import NewPageLink from "@/components/NewPageLink";

const WorkEGOS2000: React.ComponentType = () => (
    <WorkPage
        name={"EGOS-2000 Extension"}
        desc={"Extension to incorporate C standard library in a minimal OS."}
        fieldDate={"Jan 2023 - May 2023"}
        fieldPdf={"/EGOS-2000-Extension.pdf"}
        color={orange}>
        <p>
            In the context of my Master of Engineering thesis, I developed a sophisticated
            extension
            to <NewPageLink href={"https://github.com/yhzhang0128/egos-2000"}>EGOS-2000</NewPageLink>,
            a minimalistic operating system crafted by Cornell
            University’s Ph.D.
            candidate, <NewPageLink href={"https://dolobyte.net"}>Yunhao Zhang</NewPageLink>.
            This operating system, constructed
            from only 2000 lines of code, is designed specifically for deployment on FPGA
            development boards. Despite its minimalistic approach, EGOS-2000 is an entirely
            functional OS that incorporates all fundamental functionalities of an operating
            system, encompassing but not restricted to file systems, preemptive process
            switching, and user management.
        </p>
        <p>
            Nonetheless, a significant limitation emerges in the deliberate effort to
            conserve the number of code lines, manifesting as a lack of support for a broad
            spectrum of standard C libraries. Instead, the system is equipped with a limited
            array of proprietary functions offered as system calls, thereby substantially
            narrowing the scope of the project and imposing challenges in writing or porting
            applications to the OS. My thesis aimed to mitigate this issue by integrating
            select C standard libraries into the OS,
            namely <code>math.h</code>
            , <code>stdlib.h</code>
            , <code>stdio.h</code>
            , <code>ctype.h</code>,
            and <code>string.h</code>.
            This incorporation allowed the operating system to support these fundamental
            library functions, thereby simplifying the process for developers to design
            applications for EGOS-2000.
        </p>
        <p>
            I undertook several experimental solutions, including attempts to link compilers’
            C library implementations to user applications. However, such solutions proved
            unfeasible due to the constraints of FPGA development boards, particularly the
            restricted RAM. This signaled that many contemporary solutions to this problem
            would be incompatible. I thus devised a solution that categorizes the entire C
            standard library into two distinct divisions: OS-dependent and OS-independent.
            The former includes functions such as file operations that necessitate OS
            support, while the latter contains functions like mathematical operations that
            operate independently of OS support.
        </p>
        <p>
            Moreover, I executed a recompilation of the kernel with C library functions,
            leveraging the kernel’s significantly more liberal allowance on code size. By
            offering an interface that connects to these functions, user applications are
            empowered to utilize the C standard library as they would on any contemporary
            operating system. The OS-dependent operations were restructured to enable
            communication with server processes and satisfy pertinent requests.
        </p>
        <p>
            This project was conducted under the esteemed supervision
            of <NewPageLink href={"https://www.cs.cornell.edu/home/rvr/"}>Dr. Robert van Renesse</NewPageLink>,
            Professor and Director of Graduate Studies at
            Cornell’s Computer Science department, and received high commendation, being
            awarded an A+ grade.
        </p>
    </WorkPage>
);

export default WorkEGOS2000;
