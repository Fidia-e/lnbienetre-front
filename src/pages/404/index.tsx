import React, { FunctionComponent, useEffect } from "react";
import { Link } from "react-router-dom";

const NotFound: FunctionComponent = () => {
	useEffect(() => {
		document.title = "Mentions Légales - Hélène Bien-Être";

		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	}, []);

	return (
		<div className="notfound-container">
			<h1 className="title">Oups ...</h1>
			<p className="text">Il semble que vous soyez perdu ! :)</p>
			<button className="button">
				<Link className="home-link" to="/">
					<p className="text-button">Aller à la page d&apos;accueil</p>
				</Link>
			</button>
		</div>
	);
};

export default NotFound;
