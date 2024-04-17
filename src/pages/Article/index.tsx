import React, { FunctionComponent, useEffect } from "react";
import { useParams } from "react-router-dom";

import Blog1 from "assets/images/blog-1.png";

const Article: FunctionComponent = () => {
	// const { articleLabel } = useParams<{ articleLabel: string }>(); // Définir le type de useParams

	// const article = articles[articleLabel];

	// if (!article) {
	// 	return <div>Cet article n&apos;existe pas</div>;
	// }

	// useEffect(() => {
	// 	document.title = `Article ${article.title} - Hélène Bien-Être`; // Utiliser le titre de l'article dans le titre de la page
	// }, [article]);

	return (
		<div className="article-container">
			{/* <h1 className="title">{article.title}</h1> */}
			<span className="read-time">15 min</span>

			<div className="article-content">
				{/* <p className="text">{article.content}</p> */}
				<img className="image" src={Blog1} alt="" />
			</div>
		</div>
	);
};

export default Article;
