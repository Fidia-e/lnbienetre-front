import React, { FunctionComponent, useState, useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Lightbox from "react-18-image-lightbox";

import Result1 from "assets/images/WEBP/result-1.webp";
import Result2 from "assets/images/WEBP/result-2.webp";
import Result3 from "assets/images/WEBP/result-3.webp";
import Result4 from "assets/images/WEBP/result-4.webp";
import Result5 from "assets/images/WEBP/result-5.webp";
import Result6 from "assets/images/WEBP/result-6.webp";

const ResultsGallery: FunctionComponent = () => {
	const widthScreen = window.innerWidth;

	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
	const [images] = useState<string[]>([Result1, Result2, Result3, Result4, Result5, Result6]);
	const [imageClicked, setImageClicked] = useState<number>(0);

	// bloquer et réactiver le scroll à l'ouverture et fermeture de la modal
	// et gérer le z-index du header
	useEffect(() => {
		if (document) {
			document.body.style.overflow = isModalOpen ? "hidden" : "auto";
		}

		const header = document.querySelector("header");
		if (header) {
			header.style.zIndex = isModalOpen ? "0" : "99999";
		}
	}, [isModalOpen]);

	return (
		<div className="carrousel-gallery">
			<Splide
				options={{
					perPage: widthScreen < 599 ? 1 : widthScreen < 1024 ? 2 : widthScreen < 1199 ? 3 : 5,
					perMove: 1,
				}}
			>
				{images.map((image, index) => (
					<SplideSlide key={index} className="carrousel-item">
						<img
							className="image"
							src={image}
							alt={`result-${index + 1}`}
							onClick={() => {
								setIsModalOpen(true);
								setImageClicked(index);
							}}
							width={300}
							height={400}
						/>
					</SplideSlide>
				))}
			</Splide>
			{isModalOpen && (
				<Lightbox
					mainSrc={images[imageClicked]}
					nextSrc={images[(imageClicked + 1) % images.length]}
					prevSrc={images[(imageClicked + images.length - 1) % images.length]}
					onCloseRequest={() => setIsModalOpen(false)}
					onMovePrevRequest={() => setImageClicked((imageClicked + images.length - 1) % images.length)}
					onMoveNextRequest={() => setImageClicked((imageClicked + 1) % images.length)}
				/>
			)}
		</div>
	);
};

export default ResultsGallery;
