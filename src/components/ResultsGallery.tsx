import React, { FunctionComponent, useState } from "react";
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

	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [images] = useState<string[]>([Result1, Result2, Result3, Result4, Result5, Result6]);
	const [imageClicked, setImageClicked] = useState<number>(0);

	// bloquer et réactiver le scroll à l'ouverture et fermeture de la modal
	if (isOpen) {
		document.body.style.overflowY = "hidden";
	} else {
		document.body.style.overflowY = "unset";
	}

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
								setIsOpen(true);
								setImageClicked(index);
							}}
							width={300}
							height={400}
						/>
					</SplideSlide>
				))}
			</Splide>
			{isOpen && (
				<Lightbox
					mainSrc={images[imageClicked]}
					nextSrc={images[(imageClicked + 1) % images.length]}
					prevSrc={images[(imageClicked + images.length - 1) % images.length]}
					onCloseRequest={() => setIsOpen(false)}
					onMovePrevRequest={() => setImageClicked((imageClicked + images.length - 1) % images.length)}
					onMoveNextRequest={() => setImageClicked((imageClicked + 1) % images.length)}
				/>
			)}
		</div>
	);
};

export default ResultsGallery;
