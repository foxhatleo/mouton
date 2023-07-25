"use client";

import { useEffect } from "react";

export default function useHover() {
    useEffect(() => {
        // lastTouchTime is used for ignoring emulated mousemove events
        let lastTouchTime = 0;

        function enableHover() {
            if (new Date().getTime() - lastTouchTime < 500) {
                return;
            }
            document.body.classList.add("has-hover");
        }

        function disableHover() {
            document.body.classList.remove("has-hover");
        }

        function updateLastTouchTime() {
            lastTouchTime = new Date().getTime();
        }

        document.addEventListener("touchstart", updateLastTouchTime, true);
        document.addEventListener("touchstart", disableHover, true);
        document.addEventListener("mousemove", enableHover, true);

        enableHover();

        return () => {
            document.removeEventListener("touchstart", updateLastTouchTime, true);
            document.removeEventListener("touchstart", disableHover, true);
            document.removeEventListener("mousemove", enableHover, true);
        };
    });
}
