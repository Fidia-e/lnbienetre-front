import React, { FunctionComponent } from "react";

export interface FacebookProps {
  width: number;
  height: number;
  className?: string;
  color?: string;
}

const Facebook: FunctionComponent<FacebookProps> = ({ className, color, width, height }: FacebookProps) => {
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
				<clipPath id="8a7fa29178">
					<path
						d="M 0.359375 0.359375 L 51.621094 0.359375 L 51.621094 51.621094 L 0.359375 51.621094 Z M 0.359375 0.359375 "
						clipRule="nonzero"
					/>
				</clipPath>
			</defs>
			<path
				fill={color}
				d="M 28.453125 18.304688 L 28.453125 22.472656 L 33.699219 22.472656 L 32.964844 28.171875 L 28.453125 28.171875 L 28.453125 41.234375 L 22.730469 41.234375 L 22.730469 28.171875 L 17.828125 28.171875 L 17.828125 22.472656 L 22.730469 22.472656 L 22.730469 18.304688 C 22.730469 13.792969 26.378906 10.746094 30.894531 10.746094 C 32.878906 10.746094 34.132812 11.046875 34.132812 11.046875 L 34.132812 15.863281 L 30.894531 15.863281 C 29.554688 15.863281 28.453125 16.964844 28.453125 18.304688 Z M 28.453125 18.304688 "
				fillOpacity="1"
				fillRule="nonzero"
			/>
			<g clipPath="url(#8a7fa29178)">
				<path
					fill={color}
					d="M 25.992188 51.621094 C 11.871094 51.621094 0.359375 40.132812 0.359375 25.992188 C 0.359375 11.847656 11.871094 0.359375 25.992188 0.359375 C 40.132812 0.359375 51.621094 11.871094 51.621094 25.992188 C 51.621094 40.113281 40.132812 51.621094 25.992188 51.621094 Z M 25.992188 1.765625 C 12.625 1.765625 1.765625 12.625 1.765625 25.992188 C 1.765625 39.355469 12.625 50.21875 25.992188 50.21875 C 39.355469 50.21875 50.21875 39.355469 50.21875 25.992188 C 50.21875 12.625 39.355469 1.765625 25.992188 1.765625 Z M 25.992188 1.765625 "
					fillOpacity="1"
					fillRule="nonzero"
				/>
			</g>
		</svg>
	);
};

export default Facebook;
