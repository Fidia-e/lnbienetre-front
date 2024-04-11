import React, { useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";

import Stars from "assets/images/starts.webp";

const ReviewsCarousel = () => {
	const widthScreen = window.innerWidth;

	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="carousel-reviews">
			<div className="head">
				<div className="title-content">
					<h3 className="title-google">
						<span className="blue">G</span> <span className="red">o</span> <span className="yellow">o</span>{" "}
						<span className="blue">g</span> <span className="green">l</span> <span className="red">e</span>&nbsp;
            Évaluation
					</h3>
					<div className="score-container">
						<p className="score">5.0</p>
						<img className="stars-image" src={Stars} alt="étoiles Google" width={130} />
						<p className="number">39 avis</p>
					</div>
				</div>

				<div className="button-container">
					<a
						href="https://www.google.com/search?hl=fr-FR&gl=fr&q=H%C3%A9l%C3%A8ne+Bien-Etre+-+Maderotherapie,+drainage+post-operatoire+et+Renata,+ice+madero,+Interphone+:+Sant%C3%A9+MK,+9+Bd+Pierre+Mend%C3%A8s+France,+77600+Bussy-Saint-Georges&ludocid=11575298314709147568&lsig=AB86z5XLuS5GNTVz9BCWgZe-4Tdq#lrd=0x47e61ba215a66fa1:0xa0a3b87d196a9fb0,3"
						target="_blank"
						rel="noreferrer"
					>
						<button className="button-google">Laisser un avis</button>
					</a>
				</div>
			</div>

			<div className="carousel-container">
				<Splide
					options={{
						perPage: widthScreen < 599 ? 1 : widthScreen <= 899 ? 2 : widthScreen <= 1199 ? 3 : 4,
						perMove: 1,
					}}
				>
					<SplideSlide key="" className="carrousel-item">
						<div className="content">
							<div className="client-infos">
								<img className="avatar" src="" alt="" />
                &nbsp;
								<h4 className="name">Pierre</h4>
							</div>
							<img className="review-starts" src={Stars} alt="" width={100} />
							<p className="review-text">
                Cochonnerie de bâtard de viarge de viande à chien de sacristi de maudit de mangeux d&apos;marde
                d&apos;esprit de bout d&apos;crisse de batèche de mosus.
							</p>
							<button className="read-more">Lire la suite</button>
						</div>
					</SplideSlide>

					<SplideSlide key="" className="carrousel-item">
						<div className="content">
							<div className="client-infos">
								<img className="avatar" src="" alt="" />
                &nbsp;
								<h4 className="name">Paul</h4>
							</div>
							<img className="review-starts" src={Stars} alt="" width={100} />
							<p className="review-text">
                Cochonnerie de bâtard de viarge de viande à chien de sacristi de maudit de mangeux d&apos;marde
                d&apos;esprit de bout d&apos;crisse de batèche de mosus.
							</p>
							<button className="read-more">Lire la suite</button>
						</div>
					</SplideSlide>

					<SplideSlide key="" className="carrousel-item">
						<div className="content">
							<div className="client-infos">
								<img className="avatar" src="" alt="" />
                &nbsp;
								<h4 className="name">Jacques</h4>
							</div>
							<img className="review-starts" src={Stars} alt="" width={100} />
							<p className="review-text">
                Cochonnerie de bâtard de viarge de viande à chien de sacristi de maudit de mangeux d&apos;marde
                d&apos;esprit de bout d&apos;crisse de batèche de mosus.
							</p>
							<button className="read-more">Lire la suite</button>
						</div>
					</SplideSlide>

					<SplideSlide key="" className="carrousel-item">
						<div className="content">
							<div className="client-infos">
								<img className="avatar" src="" alt="" />
                &nbsp;
								<h4 className="name">Jacques</h4>
							</div>
							<img className="review-starts" src={Stars} alt="" width={100} />
							<p className="review-text">
                Cochonnerie de bâtard de viarge de viande à chien de sacristi de maudit de mangeux d&apos;marde
                d&apos;esprit de bout d&apos;crisse de batèche de mosus.
							</p>
							<button className="read-more">Lire la suite</button>
						</div>
					</SplideSlide>

					<SplideSlide key="" className="carrousel-item">
						<div className="content">
							<div className="client-infos">
								<img className="avatar" src="" alt="" />
                &nbsp;
								<h4 className="name">Jacques</h4>
							</div>
							<img className="review-starts" src={Stars} alt="" width={100} />
							<p className="review-text">
                Cochonnerie de bâtard de viarge de viande à chien de sacristi de maudit de mangeux d&apos;marde
                d&apos;esprit de bout d&apos;crisse de batèche de mosus.
							</p>
							<button className="read-more">Lire la suite</button>
						</div>
					</SplideSlide>
				</Splide>
			</div>
		</div>
	);
};

export default ReviewsCarousel;
