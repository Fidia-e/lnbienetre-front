import React, { FunctionComponent } from "react";

export interface FacebookProps {
  width: number;
  height: number;
  className?: string;
  color?: string;
}

const Facebook: FunctionComponent<FacebookProps> = ({ className, color, width, height }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={width}
			zoomAndPan="magnify"
			viewBox="0 0 52.5 52.499999"
			height={height}
			preserveAspectRatio="xMidYMid meet"
			version="1.0"
			className={className}
		>
			<defs>
				<clipPath id="7ff91830c8">
					<path d="M 0 0 L 52.003906 0 L 52.003906 52.003906 L 0 52.003906 Z M 0 0 " clipRule="nonzero" />
				</clipPath>
				<clipPath id="5eee3d0643">
					<path
						d="M 18.679688 10.507812 L 33.539062 10.507812 L 33.539062 41.710938 L 18.679688 41.710938 Z M 18.679688 10.507812 "
						clipRule="nonzero"
					/>
				</clipPath>
			</defs>
			<g clipPath="url(#7ff91830c8)">
				<path
					fill={color}
					d="M 26.003906 0 C 11.636719 0 0 11.648438 0 26.003906 C 0 40.355469 11.636719 52.003906 26.003906 52.003906 C 40.367188 52.003906 52.003906 40.355469 52.003906 26.003906 C 52.003906 11.648438 40.367188 0 26.003906 0 Z M 26.003906 50.359375 C 12.550781 50.359375 1.644531 39.453125 1.644531 26.003906 C 1.644531 12.550781 12.550781 1.644531 26.003906 1.644531 C 39.453125 1.644531 50.359375 12.550781 50.359375 26.003906 C 50.359375 39.453125 39.453125 50.359375 26.003906 50.359375 Z M 26.003906 50.359375 "
					fillOpacity="1"
					fillRule="nonzero"
				/>
			</g>
			<g clipPath="url(#5eee3d0643)">
				<path
					fill={color}
					d="M 29.941406 15.648438 L 33.320312 15.648438 L 33.320312 10.554688 L 29.007812 10.554688 L 29.007812 10.574219 C 23.339844 10.785156 22.167969 13.960938 22.070312 17.316406 L 22.058594 17.316406 L 22.058594 20.851562 L 18.679688 20.851562 L 18.679688 25.949219 L 22.058594 25.949219 L 22.058594 41.441406 L 28.117188 41.441406 L 28.117188 25.949219 L 32.460938 25.949219 L 33.320312 20.851562 L 28.117188 20.851562 L 28.117188 17.6875 C 28.117188 16.5625 28.871094 15.648438 29.941406 15.648438 Z M 29.941406 15.648438 "
					fillOpacity="1"
					fillRule="nonzero"
				/>
			</g>
		</svg>
	);
};

export default Facebook;
