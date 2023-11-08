import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { blue } from "material-colors-ts";
import useScroll from "@/hooks/useScroll";
import { useTranslations } from "use-intl";

const TIMESTAMPS = [
    [0, 2],
    [2, 3.5],
    [4, 7],
    [8, 13],
    [13, 19],
    [20, 24],
    [24, 29],
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
    const animation = useRef<gsap.core.Timeline | null>(null);
    const [lowPower, setLowPower] = useState<boolean>(false);

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
        video1Ref.current.pause();
        if (nextEmote === 0) {
            video1Ref.current.currentTime = TIMESTAMPS[1][0];
            video1Ref.current.style.opacity = "1";
            video1Ref.current!.play().catch(() => {
                setLowPower(true);
            });
        } else {
            video2Ref.current.currentTime = TIMESTAMPS[nextEmote + 1][0];
            video2Ref.current.pause();
            video1Ref.current.style.opacity = "0.99";
            const tl = gsap.timeline({
                onComplete: () => {
                    video1Ref.current!.style.opacity = "1";
                    video2Ref.current!.style.opacity = "0";
                    video1Ref.current!.play().catch(() => {
                        setLowPower(true);
                    });
                },
            });
            tl.fromTo(video2Ref.current, { opacity: 0 }, {
                opacity: 1,
                duration: 1,
                onComplete: () => {
                    video1Ref.current!.currentTime = TIMESTAMPS[nextEmote + 1][0];
                    video1Ref.current!.pause();
                },
            });
            tl.fromTo(video1Ref.current, { opacity: 0.99 }, { opacity: 0, duration: 1 }, ">-.1");
            tl.play();
            animation.current = tl;
        }
    };

    const startVideo = () => {
        if (video1Ref.current!.currentTime >= 0.5) {
            return;
        }
        state.current = 1;
        video1Ref.current!.style.opacity = "0";
        video2Ref.current!.style.opacity = "0";
        video1Ref.current!.currentTime = 0.3;
        video1Ref.current!.play().then(() => {
            const tl = gsap.timeline();
            tl.fromTo(video1Ref.current, { opacity: 0 }, { duration: 0.3, opacity: 1 });
            tl.fromTo(
                video1Ref.current,
                { scale: 0.01 },
                { scale: 1, duration: 3.5, ease: "elastic.out(1.2, 0.75)" },
            );
            tl.play();
            animation.current = tl;
            setLowPower(false);
        }).catch(() => {
            state.current = 0;
            setLowPower(true);
        });
        video2Ref.current!.play().catch(() => {
            setLowPower(true);
        });
    };

    const timeUpdateHandler = () => {
        if (!video1Ref.current || state.current === 0 || state.current === 2) {
            return;
        }
        const endTime = TIMESTAMPS[state.current < 3 ? 0 : (state.current - 2)][1];
        if (video1Ref.current.currentTime >= endTime && video1Ref.current!.style.opacity === "1") {
            state.current = 2;
            video1Ref.current.currentTime = endTime;
            video1Ref.current.pause();
            timeout.current = setTimeout(doEmote, 1000 + Math.random() * 500);
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
        return () => {
            if (animation.current) {
                animation.current.kill();
            }
            if (timeout.current) {
                clearTimeout(timeout.current);
            }
        };
    }, []);

    useScroll(scrollHandler);

    const t = useTranslations("Home");

    return (
        <a
            href="#"
            onMouseEnter={doEmote}
            onTouchEnd={doEmote}
            onClick={(evt) => {
                evt.preventDefault();
                startVideo();
                doEmote();
            }}
            className={`avatar-container${lowPower ? " low-power" : ""}`}
        >
            <div className="background" />
            <div className="video-container">
                <div className="videos">
                    <video
                        preload="all"
                        className="v1"
                        muted
                        autoPlay={false}
                        playsInline
                        controls={false}
                        ref={video1Ref}
                        onTimeUpdate={timeUpdateHandler}
                    >
                        <source src="/assets/memoji/memoji.mov" type="video/mp4; codecs=hvc1" />
                        <source src="/assets/memoji/memoji.webm" type="video/webm" />
                    </video>
                    <video
                        preload="all"
                        className="v2"
                        muted
                        autoPlay={false}
                        playsInline
                        controls={false}
                        ref={video2Ref}
                        onTimeUpdate={timeUpdateHandler}
                    >
                        <source src="/assets/memoji/memoji.mov" type="video/mp4; codecs=hvc1" />
                        <source src="/assets/memoji/memoji.webm" type="video/webm" />
                    </video>
                </div>
                <picture>
                    <source type="image/webp" srcSet="/assets/memoji/memoji.webp" />
                    <source type="image/jpeg" srcSet="/assets/memoji/memoji.png" />
                    <img alt="Leo Liang Animoji" loading="lazy" />
                </picture>
            </div>
            <div className="low-power-prompt">
                {t("play-prompt")}
            </div>
            <style jsx>
                {`
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
                        background: linear-gradient(90deg,
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
                        rgba(255, 0, 0, 1) 100%);
                        filter: blur(35px);
                        opacity: .5;
                        animation-name: rainbow-circle;
                        animation-duration: 30s;
                        animation-iteration-count: infinite;
                    }

                    @keyframes rainbow-circle {
                        from {
                            transform: rotate(0turn);
                        }
                        to {
                            transform: rotate(1turn);
                        }
                    }

                    .video-container {
                        transform: translateX(5px) translateY(10px) scale(.8);
                    }

                    .avatar-container.low-power .videos {
                        display: none;
                    }

                    video {
                        opacity: 0;
                        //will-change: opacity, transform;
                    }

                    .v1, .v2 {
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

                    .avatar-container.low-power video {
                        opacity: 0 !important;
                    }
                `}
            </style>
        </a>
    );
};

export default Avatar;
