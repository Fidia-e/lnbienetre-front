import React, { FunctionComponent, useState, useEffect } from "react";

import Arrow from "assets/images/SVG/arrow.svg";

const ScrollToTopButton: FunctionComponent = () => {
	const [visible, setVisible] = useState<boolean>(false);

	const toggleVisible = () => {
		const scrolled = window.scrollY;
		if (scrolled > 1300) {
			setVisible(true);
		} else {
			setVisible(false);
		}
	};

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	useEffect(() => {
		window.addEventListener("scroll", toggleVisible);

		return () => {
			window.removeEventListener("scroll", toggleVisible);
		};
	}, []);

	return (
		<div className="scrollToTop-container" style={{ display: visible ? "inline" : "none" }}>
			<button className="scrollToTopBtn" onClick={scrollToTop}>
				<img className="icon" src={Arrow} width={40} height={40} />
			</button>
		</div>
	);
};

export default ScrollToTopButton;
