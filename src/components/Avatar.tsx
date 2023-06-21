import React, {useEffect, useRef, useState} from "react";
import gsap from "gsap";
import {blue} from "material-colors-ts";
// @ts-ignore
import Timeline = gsap.core.Timeline;

const TIMESTAMPS = [
    [ 0, 2 ],
    [ 2, 3.5 ],
    [ 4, 7 ],
    [ 8, 13 ],
    [ 13, 19 ],
    [ 20, 24 ],
    [ 24, 29 ],
];

const Avatar: React.ComponentType = () => {
    const video1Ref: React.Ref<HTMLVideoElement> = useRef(null);
    const video2Ref: React.Ref<HTMLVideoElement> = useRef(null);
    // 0: not started
    // 1: to entering
    // 2: idle
    // 3-8: emotes
    const state = useRef<number>(0);
    const timeout = useRef<any>(null);
    const animation = useRef<Timeline | null>(null);
    const [ lowPower, setLowPower ] = useState<boolean>(false);

    const doEmote = (evt?: any) => {
        if (!video1Ref.current || !video2Ref.current || state.current !== 2) {
            return;
        }
        clearTimeout(timeout.current);
        timeout.current = null;
        let nextEmote = -1;
        while (nextEmote < 0 || (evt && nextEmote === 0)) {
            nextEmote = Math.max(0, Math.floor(Math.random() * (TIMESTAMPS.length + 15)) - 16);
        }
        state.current = nextEmote + 3;
        if (video1Ref.current.currentTime <= TIMESTAMPS[1][1] + .3 && nextEmote === 0) {
            video1Ref.current.currentTime = TIMESTAMPS[1][0];
            video1Ref.current.playbackRate = 1;
            video1Ref.current.style.opacity = "1";
        } else {
            video2Ref.current.currentTime = TIMESTAMPS[nextEmote + 1][0];
            video1Ref.current.style.opacity = "0.99";
            const tl = gsap.timeline({
                onComplete: () => {
                    video1Ref.current!.style.opacity = "1";
                    video2Ref.current!.style.opacity = "0";
                    video1Ref.current!.playbackRate = 1;
                },
            });
            tl.fromTo(video2Ref.current, {opacity: 0}, {
                opacity: 1, duration: 1, onComplete: () => {
                    video1Ref.current!.currentTime = TIMESTAMPS[nextEmote + 1][0];
                },
            });
            tl.fromTo(video1Ref.current, {opacity: .99}, {opacity: 0, duration: 1}, ">-.2 ");
            tl.play();
            animation.current = tl;
        }
    };

    const startVideo = () => {
        if (!video1Ref.current!.paused) {
            return;
        }
        video1Ref.current!.currentTime = .3;
        video1Ref.current!.play().then(() => {
            const tl = gsap.timeline();
            tl.to(video1Ref.current, {duration: .3, opacity: 1});
            tl.fromTo(video1Ref.current,
                {scale: .01}, {scale: 1, duration: 3.5, ease: "elastic.out(1.2, 0.75)"});
            tl.play();
            animation.current = tl;
            setLowPower(false);
        }).catch(() => {
            setLowPower(true);
        });
        video2Ref.current!.play().catch(() => {
        });
    };

    const timeUpdateHandler = () => {
        if (!video1Ref.current || state.current === 0 || state.current === 2) {
            return;
        }
        const endTime = TIMESTAMPS[state.current < 3 ? 0 : (state.current - 2)][1];
        if (video1Ref.current.currentTime >= endTime && video1Ref.current!.style.opacity == "1") {
            state.current = 2;
            video1Ref.current.currentTime = endTime;
            video1Ref.current.playbackRate = 0.001;
            timeout.current = setTimeout(doEmote, 2000 + Math.random() * 1500);
        }
    };

    const scrollHandler = () => {
        if (!video1Ref.current || state.current > 0) {
            return;
        }
        const viewportHeight = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
        const videoTop = video1Ref.current.getBoundingClientRect().top;

        if (videoTop < viewportHeight * 0.6) {
            state.current = 1;
            window.removeEventListener("scroll", scrollHandler);
            startVideo();
        }
    };

    useEffect(() => {
        video1Ref.current!.setAttribute("style", "");
        video2Ref.current!.setAttribute("style", "");
        video2Ref.current!.playbackRate = 0.001;
        if (state.current === 0) {
            window.addEventListener("scroll", scrollHandler);
        }
        return () => {
            if (animation.current) {
                animation.current.kill();
            }
            window.removeEventListener("scroll", scrollHandler);
            if (timeout.current) {
                clearTimeout(timeout.current);
            }
        };
    }, []);

    return (
        <a href={"#"} onMouseEnter={doEmote} onTouchEnd={doEmote} onClick={(evt) => {
            evt.preventDefault();
            startVideo();
            doEmote();
        }} className={"avatar-container" + (lowPower ? " low-power" : "")}>
            <div className={"background"}/>
            <div className={"video-container"}>
                <video preload="all" className={"v1"}
                    muted={true} autoPlay={false} playsInline={true} controls={false}
                    ref={video1Ref} onTimeUpdate={timeUpdateHandler}>
                    <source src={"/memoji.mov"} type={"video/mp4; codecs=hvc1"}/>
                    <source src={"/memoji.webm"} type={"video/webm"}/>
                </video>
                <video preload="all" className={"v2"}
                    muted={true} autoPlay={false} playsInline={true} controls={false}
                    ref={video2Ref} onTimeUpdate={timeUpdateHandler}>
                    <source src={"/memoji.mov"} type={"video/mp4; codecs=hvc1"}/>
                    <source src={"/memoji.webm"} type={"video/webm"}/>
                </video>
                <img src={"/memoji.png"}/>
            </div>
            <div className={"low-power-prompt"}>
                Click or tap to play.
            </div>
            <style jsx>{`
                .avatar-container {
                    display: flex;
                    width: 300px;
                    height: 300px;
                    flex-direction: column;
                    text-decoration: none;
                    cursor: default;
                }
                .background {
                    position: absolute;
                    z-index: -1;
                    width: 250px;
                    height: 250px;
                    border-radius: 125px;
                    margin: 25px;
                    background: linear-gradient(
                        90deg,
                        rgba(255, 0, 0, 1) 0%,
                        rgba(255, 154, 0, 1) 10%,
                        rgba(208, 222, 33, 1) 20%,
                        rgba(79, 220, 74, 1) 30%,
                        rgba(63, 218, 216, 1) 40%,
                        rgba(47, 201, 226, 1) 50%,
                        rgba(28, 127, 238, 1) 60%,
                        rgba(95, 21, 242, 1) 70%,
                        rgba(186, 12, 248, 1) 80%,
                        rgba(251, 7, 217, 1) 90%,
                        rgba(255, 0, 0, 1) 100%
                    );
                    filter: blur(35px);
                    opacity: .5;
                    animation-name: rainbow-circle;
                    animation-duration: 30s;
                    animation-iteration-count: infinite;
                }
                @keyframes rainbow-circle {
                    from { transform: rotate(0turn); }
                    to { transform: rotate(1turn); }
                }
                .video-container {
                    transform: translateX(5px) translateY(10px) scale(.8);
                }
                video {
                    opacity: 0;
                    will-change: opacity, transform;
                }
                .v2, img {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                }
                .low-power-prompt {
                    text-align: center;
                    text-decoration: none;
                    transform: translateY(-1em);
                    color: ${blue["700"]};
                    opacity: 0;
                    pointer-events: none;
                    transition: .2s ease-in-out opacity;
                }
                .avatar-container img {
                    opacity: 0;
                    transition: .2s ease-in-out opacity;
                }
                .avatar-container.low-power {
                    cursor: pointer;
                }
                .avatar-container.low-power img {
                    opacity: 1;
                }
                .avatar-container.low-power .low-power-prompt {
                    opacity: 1;
                }
            `}</style>
        </a>
    );
};

export default Avatar;