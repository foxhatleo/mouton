import { useEffect } from "react";

const useScroll: (handler: (scrollY: number) => void) => void = (handler) => {
	const actualHandler = () => {
		handler(window.scrollY);
	};
	useEffect(() => {
		window.addEventListener("scroll", actualHandler);
		setTimeout(handler, 500);
		return () => {
			window.removeEventListener("scroll", actualHandler);
		};
	});
};

export default useScroll;
