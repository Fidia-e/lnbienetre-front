import React, { FunctionComponent } from "react";

interface FacebookProps {
  width: number;
  height: number;
  className?: string;
  color?: string;
}

const Instagram: FunctionComponent<FacebookProps> = ({ className, color, width, height }: FacebookProps) => {
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
			<path
				fill={color}
				d="M 7.746094 44.253906 C -2.332031 34.160156 -2.34375 17.832031 7.746094 7.753906 C 17.839844 -2.328125 34.167969 -2.339844 44.246094 7.753906 C 54.328125 17.84375 54.335938 34.171875 44.246094 44.253906 C 34.15625 54.332031 17.839844 54.332031 7.746094 44.253906 Z M 26.003906 1.960938 C 12.753906 1.960938 1.964844 12.75 1.964844 25.996094 C 1.964844 39.246094 12.753906 50.035156 26.003906 50.035156 C 39.25 50.035156 50.039062 39.246094 50.039062 25.996094 C 50.039062 12.75 39.25 1.960938 26.003906 1.960938 Z M 26.003906 1.960938 "
				fillOpacity="1"
				fillRule="nonzero"
			/>
			<path
				fill={color}
				d="M 34.519531 18.363281 C 32.890625 18.042969 32.890625 15.730469 34.519531 15.375 C 36.003906 15.074219 36.957031 16.914062 35.894531 17.945312 C 35.539062 18.296875 35.019531 18.464844 34.519531 18.363281 Z M 34.519531 18.363281 "
				fillOpacity="1"
				fillRule="nonzero"
			/>
			<path
				fill={color}
				d="M 34.519531 41.296875 L 17.484375 41.296875 C 13.738281 41.296875 10.714844 38.257812 10.703125 34.515625 L 10.703125 17.480469 C 10.703125 13.734375 13.738281 10.710938 17.484375 10.699219 L 34.519531 10.699219 C 38.265625 10.699219 41.289062 13.734375 41.300781 17.480469 L 41.300781 34.515625 C 41.289062 38.257812 38.265625 41.285156 34.519531 41.296875 Z M 17.484375 12.472656 C 14.726562 12.472656 12.476562 14.710938 12.476562 17.480469 L 12.476562 34.515625 C 12.476562 37.273438 14.714844 39.523438 17.484375 39.523438 L 34.519531 39.523438 C 37.277344 39.523438 39.527344 37.285156 39.527344 34.515625 L 39.527344 17.480469 C 39.527344 14.71875 37.289062 12.472656 34.519531 12.472656 Z M 17.484375 12.472656 "
				fillOpacity="1"
				fillRule="nonzero"
			/>
			<path
				fill={color}
				d="M 26.003906 34.171875 C 21.484375 34.171875 17.828125 30.503906 17.828125 25.996094 C 17.828125 21.488281 21.492188 17.820312 26.003906 17.820312 C 30.511719 17.820312 34.175781 21.488281 34.175781 25.996094 C 34.175781 30.515625 30.523438 34.171875 26.003906 34.171875 Z M 26.003906 19.59375 C 22.46875 19.59375 19.597656 22.464844 19.597656 25.996094 C 19.597656 29.53125 22.46875 32.398438 26.003906 32.398438 C 29.535156 32.398438 32.40625 29.53125 32.40625 25.996094 C 32.40625 22.464844 29.535156 19.59375 26.003906 19.59375 Z M 26.003906 19.59375 "
				fillOpacity="1"
				fillRule="nonzero"
			/>
		</svg>
	);
};

export default Instagram;
