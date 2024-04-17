import React, { FunctionComponent } from "react";

export interface FacebookProps {
  width: number;
  height: number;
  className?: string;
  color?: string;
}

const Arrow: FunctionComponent<FacebookProps> = ({ className, color, width, height }: FacebookProps) => {
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
				<clipPath id="2b90dd7961">
					<path
						d="M 1.042969 11.53125 L 50.820312 11.53125 L 50.820312 40.507812 L 1.042969 40.507812 Z M 1.042969 11.53125 "
						clipRule="nonzero"
					/>
				</clipPath>
			</defs>
			<g clipPath="url(#2b90dd7961)">
				<path
					fill={color}
					d="M 50.789062 36.53125 C 50.789062 37.414062 50.449219 38.3125 49.769531 38.992188 C 48.414062 40.351562 46.210938 40.351562 44.855469 38.992188 L 26.183594 20.28125 L 7.347656 39.148438 C 5.988281 40.507812 3.785156 40.507812 2.429688 39.148438 C 1.070312 37.785156 1.070312 35.582031 2.429688 34.222656 L 23.722656 12.894531 C 25.082031 11.53125 27.285156 11.53125 28.640625 12.894531 L 49.769531 34.066406 C 50.449219 34.746094 50.789062 35.632812 50.789062 36.53125 Z M 50.789062 36.53125 "
					fillOpacity="1"
					fillRule="nonzero"
				/>
			</g>
		</svg>
	);
};

export default Arrow;
