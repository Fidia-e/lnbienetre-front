import React, { FunctionComponent } from "react";

export interface FacebookProps {
  width: number;
  height: number;
  className?: string;
  color?: string;
}

const Email: FunctionComponent<FacebookProps> = ({ className, color, width, height }: FacebookProps) => {
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
				<clipPath id="4092fe535d">
					<path d="M 0 0 L 52.003906 0 L 52.003906 52.003906 L 0 52.003906 Z M 0 0 " clipRule="nonzero" />
				</clipPath>
			</defs>
			<g clipPath="url(#4092fe535d)">
				<path
					fill={color}
					d="M 26.003906 0 C 11.664062 0 0 11.664062 0 26.003906 C 0 40.34375 11.664062 52.003906 26.003906 52.003906 C 40.34375 52.003906 52.003906 40.34375 52.003906 26.003906 C 52.003906 11.664062 40.34375 0 26.003906 0 Z M 26.003906 50.179688 C 12.652344 50.179688 1.824219 39.351562 1.824219 26.003906 C 1.824219 12.652344 12.652344 1.824219 26.003906 1.824219 C 39.351562 1.824219 50.179688 12.652344 50.179688 26.003906 C 50.179688 39.351562 39.351562 50.179688 26.003906 50.179688 Z M 26.003906 50.179688 "
					fillOpacity="1"
					fillRule="nonzero"
				/>
			</g>
			<path
				fill={color}
				d="M 39.09375 17.625 L 30.289062 26.003906 L 39.09375 34.378906 C 39.328125 34.058594 39.480469 33.699219 39.546875 33.304688 L 39.546875 18.699219 C 39.480469 18.304688 39.328125 17.949219 39.09375 17.625 Z M 39.09375 17.625 "
				fillOpacity="1"
				fillRule="nonzero"
			/>
			<path
				fill={color}
				d="M 26.003906 30.082031 L 22.378906 26.636719 L 13.582031 35.007812 C 13.996094 35.277344 14.453125 35.414062 14.949219 35.414062 L 37.054688 35.414062 C 37.550781 35.414062 38.007812 35.277344 38.421875 35.007812 L 29.625 26.636719 Z M 26.003906 30.082031 "
				fillOpacity="1"
				fillRule="nonzero"
			/>
			<path
				fill={color}
				d="M 12.910156 17.625 C 12.675781 17.949219 12.523438 18.304688 12.457031 18.699219 L 12.457031 33.304688 C 12.523438 33.699219 12.675781 34.058594 12.910156 34.378906 L 21.714844 26.003906 Z M 12.910156 17.625 "
				fillOpacity="1"
				fillRule="nonzero"
			/>
			<path
				fill={color}
				d="M 22.378906 25.367188 L 26.003906 28.824219 L 38.421875 17 C 38.007812 16.726562 37.550781 16.589844 37.054688 16.589844 L 14.949219 16.589844 C 14.453125 16.589844 13.996094 16.726562 13.582031 17 Z M 22.378906 25.367188 "
				fillOpacity="1"
				fillRule="nonzero"
			/>
		</svg>
	);
};

export default Email;
