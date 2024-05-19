"use client";

import type React from "react";
import { useState } from "react";
import Footer from "@/components/Footer";
import usePageTransition from "@/hooks/usePageTransition";
import Header from "@/components/header/Header";
import type { Color } from "@/components/Color";
import Rainbow from "@/components/Rainbow";
import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons/faCalendarDays";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons/faFilePdf";
import { faGlobe } from "@fortawesome/free-solid-svg-icons/faGlobe";
import { faCode } from "@fortawesome/free-solid-svg-icons/faCode";
import useScroll from "@/hooks/useScroll";
import NewPageLink from "@/components/NewPageLink";
import { faAndroid } from "@fortawesome/free-brands-svg-icons/faAndroid";
import { faApple } from "@fortawesome/free-brands-svg-icons/faApple";
import { faMicrosoft } from "@fortawesome/free-brands-svg-icons/faMicrosoft";
import useHover from "@/hooks/useHover";
import useConsole from "@/hooks/useConsole";
import { useTranslations } from "use-intl";
import { paragraph } from "@/utils/format";
import Images from "@/components/Images";

function canUseWebP() {
	if (typeof document === "undefined") {
		return true;
	}
	const elem = document.createElement("canvas");
	if (elem.getContext?.("2d")) {
		return elem.toDataURL("image/webp").indexOf("data:image/webp") === 0;
	}
	return false;
}

const WorkPage: React.ComponentType<{ color: Color; part: string }> = ({
	// name,
	// desc,
	// fieldDate,
	// fieldWebsite,
	// fieldGitHub,
	// fieldWindows,
	// fieldMacOS,
	// fieldAndroid,
	// fieldPdf,
	// fieldPdfName,
	color,
	part,
}) => {
	usePageTransition();
	useHover();
	useConsole();
	const t = useTranslations(part);
	const t2 = useTranslations("WorkPage");
	const name = t("title");
	const desc = t("tagline");
	const fieldDate = t("date");
	const fieldWebsite = t("website");
	const fieldGitHub = t("github");
	const fieldWindows = t("windows");
	const fieldMacOS = t("macos");
	const fieldAndroid = t("android");
	const fieldPdf = t("pdf");
	const fieldPdfName = t("pdfName");
	const content = t("content");
	const image = t("images").split(";");
	const [scrollDown, setScrollDown] = useState(true);

	const scrollHandler = () => {
		if (window.scrollY >= 120) {
			setScrollDown(false);
		}
	};

	useScroll(scrollHandler);

	const mainClassNames = [];
	if (canUseWebP()) {
		mainClassNames.push("webp");
	}
	if (scrollDown) {
		mainClassNames.push("scroll-down");
	}

	return (
		<main className={mainClassNames.join(" ")}>
			<Head>
				<title>{name} - Leo Liang</title>
			</Head>
			<Rainbow color={color} />
			<Header absolute={true} />
			<div className="content container v-layout">
				<h1 className="entry-transition">{name}</h1>
				<p className="entry-transition">{desc}</p>
				<ul className="entry-transition-children">
					{fieldDate ? (
						<li>
							<p>
								<span className="icon">
									<FontAwesomeIcon icon={faCalendarDays} />
								</span>
								{fieldDate}
							</p>
						</li>
					) : (
						""
					)}
					{fieldWebsite ? (
						<li>
							<p>
								<span className="icon">
									<FontAwesomeIcon icon={faGlobe} />
								</span>
								<NewPageLink href={fieldWebsite}>{t2("website")}</NewPageLink>
							</p>
						</li>
					) : (
						""
					)}
					{fieldGitHub ? (
						<li>
							<p>
								<span className="icon">
									<FontAwesomeIcon icon={faCode} />
								</span>
								<NewPageLink href={`https://github.com/${fieldGitHub}`}>
									{t2("github")}
								</NewPageLink>
							</p>
						</li>
					) : (
						""
					)}
					{fieldWindows ? (
						<li>
							<p>
								<span className="icon">
									<FontAwesomeIcon icon={faMicrosoft} />
								</span>
								<NewPageLink href={fieldWindows}>{t2("windows")}</NewPageLink>
							</p>
						</li>
					) : (
						""
					)}
					{fieldMacOS ? (
						<li>
							<p>
								<span className="icon">
									<FontAwesomeIcon icon={faApple} />
								</span>
								<NewPageLink href={fieldMacOS}>{t2("macos")}</NewPageLink>
							</p>
						</li>
					) : (
						""
					)}
					{fieldAndroid ? (
						<li>
							<p>
								<span className="icon">
									<FontAwesomeIcon icon={faAndroid} />
								</span>
								<NewPageLink href={fieldAndroid}>{t2("android")}</NewPageLink>
							</p>
						</li>
					) : (
						""
					)}
					{fieldPdf ? (
						<li>
							<p>
								<span className="icon">
									<FontAwesomeIcon icon={faFilePdf} />
								</span>
								<NewPageLink href={fieldPdf}>
									{fieldPdfName ?? t2("pdf")}
								</NewPageLink>
							</p>
						</li>
					) : (
						""
					)}
				</ul>
			</div>
			<div className="scroll-down">{t2("scroll")}</div>
			<article className="container entry-transition-group entry-transition-children">
				{image[0] && (
					<Images
						urlPrefix={image[0]}
						urls={image[1].split(",")}
						// biome-ignore lint/security/noGlobalEval:
						aspectRatio={eval(image[2]) as number}
					/>
				)}
				{paragraph(content)}
			</article>
			<Footer />
			<style jsx={true}>
				{`
                    main .content {
                        width: 100vw;
                        height: 80vh;
                        min-height: 30em;
                        justify-content: center;
                    }

                    main .icon {
                        width: 1.5em;
                        margin-right: .5em;
                        display: inline-block;
                        opacity: .5;
                        text-align: center;
                    }

                    main .scroll-down {
                        position: relative;
                        width: 100%;
                        text-align: center;
                        opacity: .5;
                        transition: .3s ease-in-out opacity, .3s ease-in-out margin-top;
                    }

                    main:not(.scroll-down) .scroll-down {
                        opacity: 0;
                        margin-top: -1em;
                    }
                `}
			</style>
		</main>
	);
};

export default WorkPage;
