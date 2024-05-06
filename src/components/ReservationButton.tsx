import React, { FunctionComponent } from "react";

interface ReservationButtonProps {
  text: string;
}

const ReservationButton: FunctionComponent<ReservationButtonProps> = ({ text }) => {
	const PlanityLink = "https://www.planity.com/helene-bien-etre-77600-bussy-saint-georges";

	return (
		<div className="button-container">
			<a href={PlanityLink} target="_blank" rel="noreferrer">
				<button className="button">{text}</button>
			</a>
		</div>
	);
};

export default ReservationButton;
