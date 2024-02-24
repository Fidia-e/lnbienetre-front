import React, { FunctionComponent } from "react";

export interface FacebookProps {
	className?: string;
	color?: string;
	width?: number;
	height?: number;
}

const Facebook: FunctionComponent<FacebookProps> = ({ className, color, width, height }: FacebookProps) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={width}
			zoomAndPan="magnify"
			viewBox="0 0 67.5 44.999999"
			height={height}
			preserveAspectRatio="xMidYMid meet"
			version="1.0"
			className={className}
		>
			<defs>
				<clipPath id="e27898e033">
					<path
						d="M 11.167969 0.164062 L 55.835938 0.164062 L 55.835938 44.832031 L 11.167969 44.832031 Z M 11.167969 0.164062 "
						clipRule="nonzero"
					/>
				</clipPath>
			</defs>
			<path
				fill={color}
				d="M 35.648438 15.800781 L 35.648438 19.433594 L 40.21875 19.433594 L 39.578125 24.402344 L 35.648438 24.402344 L 35.648438 35.785156 L 30.660156 35.785156 L 30.660156 24.402344 L 26.390625 24.402344 L 26.390625 19.433594 L 30.660156 19.433594 L 30.660156 15.800781 C 30.660156 11.867188 33.839844 9.214844 37.773438 9.214844 C 39.503906 9.214844 40.59375 9.480469 40.59375 9.480469 L 40.59375 13.675781 L 37.773438 13.675781 C 36.605469 13.675781 35.648438 14.636719 35.648438 15.800781 Z M 35.648438 15.800781 "
				fillOpacity="1"
				fillRule="nonzero"
			/>
			<g clipPath="url(#e27898e033)">
				<path
					fill={color}
					d="M 33.5 44.835938 C 21.195312 44.835938 11.167969 34.824219 11.167969 22.5 C 11.167969 10.175781 21.195312 0.164062 33.5 0.164062 C 45.828125 0.164062 55.835938 10.195312 55.835938 22.5 C 55.835938 34.804688 45.828125 44.835938 33.5 44.835938 Z M 33.5 1.386719 C 21.855469 1.386719 12.390625 10.851562 12.390625 22.5 C 12.390625 34.148438 21.855469 43.613281 33.5 43.613281 C 45.148438 43.613281 54.613281 34.148438 54.613281 22.5 C 54.613281 10.851562 45.148438 1.386719 33.5 1.386719 Z M 33.5 1.386719 "
					fillOpacity="1"
					fillRule="nonzero"
				/>
			</g>
		</svg>
	);
};

export default Facebook;
