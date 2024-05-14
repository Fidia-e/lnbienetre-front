import React, { FunctionComponent, useState, useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";

import ClientsReviews from "utils/reviews";
import Stars from "assets/images/WEBP/stars.webp";
import C from "assets/images/avatars/c.png";
import E from "assets/images/avatars/e.png";
import N from "assets/images/avatars/n.png";
import T from "assets/images/avatars/t.png";
import J from "assets/images/avatars/j.png";
import R from "assets/images/avatars/r.png";
import Y from "assets/images/avatars/y.png";

import MemberModal from "components/ModalReview";

interface ReviewProps {
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean) => void;
}

const ReviewsCarousel: FunctionComponent<ReviewProps> = ({ isModalOpen, setIsModalOpen }) => {
	const widthScreen = window.innerWidth;
	const avatars: string[] = [C, E, N, T, J, R, Y];
	const [modalId, setModalId] = useState<number>(0);

	const addReview =
    "https://www.google.com/search?hl=fr-FR&gl=fr&q=H%C3%A9l%C3%A8ne+Bien-Etre+-+Maderotherapie,+drainage+post-operatoire+et+Renata,+ice+madero,+Interphone+:+Sant%C3%A9+MK,+9+Bd+Pierre+Mend%C3%A8s+France,+77600+Bussy-Saint-Georges&ludocid=11575298314709147568&lsig=AB86z5XLuS5GNTVz9BCWgZe-4Tdq#lrd=0x47e61ba215a66fa1:0xa0a3b87d196a9fb0,3";

	const handleClick = (id: number) => {
		if (!!isModalOpen !== false) {
			setModalId(0);
			return;
		}

		setModalId(id);
		setIsModalOpen && setIsModalOpen(!isModalOpen);
	};

	// bloquer et réactiver le scroll à l'ouverture et fermeture de la modal
	useEffect(() => {
		if (document) {
			document.body.style.overflow = isModalOpen ? "hidden" : "auto";
		}
	}, [isModalOpen]);

	return (
		<>
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
							<p className="number">40 avis</p>
						</div>
					</div>

					<div className="button-container">
						<a href={addReview} target="_blank" rel="noreferrer">
							<button className="button-google">Laisser un avis</button>
						</a>
					</div>
				</div>

				<div className="carousel-container">
					<Splide
						options={{
							perPage: widthScreen < 599 ? 1 : widthScreen <= 899 ? 2 : widthScreen <= 1399 ? 3 : 4,
							perMove: 1,
						}}
					>
						{ClientsReviews.map((review, index) => (
							<SplideSlide key={review.id} className="carrousel-item" onClick={() => handleClick(review.id)}>
								<div className="content">
									<div className="client-infos">
										<img key={index} className="avatar" src={avatars[index]} alt={review.alt} width={45} height={45} />
										<h4 className="name">{review.name}</h4>
									</div>
									<img className="review-starts" src={Stars} alt="étoiles de la note" width={100} />
									<p className="review-text" style={{ whiteSpace: "pre-wrap" }}>
										{review.review}
									</p>
									<button className="read-more" onClick={() => handleClick(review.id)}>
                    Lire la suite
									</button>
								</div>
							</SplideSlide>
						))}
					</Splide>
				</div>
			</div>

			{ClientsReviews.map(
				(review, index) =>
					modalId === index + 1 &&
          isModalOpen && (
						<MemberModal
							key={review.id}
							classNameTextMore="moretext"
							setIsModalOpen={setIsModalOpen}
							text={review.more}
							nameMember={review.name}
						/>
					)
			)}
		</>
	);
};

export default ReviewsCarousel;
