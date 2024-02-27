import React, { useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Lightbox from "react-18-image-lightbox";

const CarrouselGallery = () => {
	const widthScreen = window.innerWidth;

	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="carrousel-gallery">
			<Splide
				options={{
					perPage: widthScreen < 599 ? 1 : widthScreen < 1199 ? 3 : 5,
					perMove: 1,
				}}
			>
				<SplideSlide
					className="carrousel-item"
					onClick={() => {
						setIsOpen(true);
					}}
				>
					<div className="image-container">
						<img className="" src="" alt="" />
					</div>
				</SplideSlide>
			</Splide>
			{isOpen && (
				<Lightbox
					mainSrc=""
					nextSrc=""
					prevSrc=""
					onCloseRequest={() => setIsOpen(false)}
					// onMovePrevRequest
					// onMoveNextRequest={}
				/>
			)}
		</div>
	);
};

export default CarrouselGallery;
