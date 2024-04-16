import React, { FunctionComponent, useEffect } from "react";

const LegalesMentions: FunctionComponent = () => {
	useEffect(() => {
		document.title = "Mentions Légales - Hélène Bien-Être";

		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	}, []);

	return (
		<div className="legales-container">
			<h1 className="title">Mentions légales</h1>
			<p className="legales-text">Les mentions légales son en cours de rédaction ! :)</p>
		</div>
	);
};

export default LegalesMentions;
