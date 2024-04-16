import React, { FunctionComponent, useEffect } from "react";

import Blog1 from "assets/images/blog-1.png";
import Blog2 from "assets/images/blog-2.png";
import Blog3 from "assets/images/blog-3.png";

const Blog: FunctionComponent = () => {
	useEffect(() => {
		document.title = "Page Blog - Hélène Bien-Être";
	}, []);

	return (
		<div className="blog-container">
			<h1 className="title">Blog</h1>

			<article className="article">
				<div className="article-content">
					<h2 className="article-title">Mon super titre</h2>
					<p className="article-excerpt">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam consectetur ab unde! Numquam, corrupti,
            ullam iure architecto voluptas excepturi sint molestias natus non ea provident nihil, repudiandae nisi
            dolores labore.
					</p>
					<span className="read-time">15 min</span>
					<button className="button">Lire l&apos;article</button>
				</div>

				<div className="image-container">
					<img className="image" src={Blog1} alt="" />
				</div>
			</article>

			<article className="article">
				<div className="article-content">
					<h2 className="article-title">Mon super titre blablablabla</h2>
					<p className="article-excerpt">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam consectetur ab unde! Numquam, corrupti,
            ullam iure architecto voluptas excepturi sint molestias natus non ea provident nihil, repudiandae nisi
            dolores labore.
					</p>
					<span className="read-time">15 min</span>
					<button className="button">Lire l&apos;article</button>
				</div>

				<div className="image-container">
					<img className="image" src={Blog2} alt="" />
				</div>
			</article>

			<article className="article">
				<div className="article-content">
					<h2 className="article-title">Mon super titre</h2>
					<p className="article-excerpt">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam consectetur ab unde! Numquam, corrupti,
            ullam iure architecto voluptas excepturi sint molestias natus non ea provident nihil, repudiandae nisi
            dolores labore.
					</p>
					<span className="read-time">15 min</span>
					<button className="button">Lire l&apos;article</button>
				</div>

				<div className="image-container">
					<img className="image" src={Blog3} alt="" />
				</div>
			</article>
		</div>
	);
};

export default Blog;
