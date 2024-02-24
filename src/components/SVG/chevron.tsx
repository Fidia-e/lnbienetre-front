import React, { FunctionComponent } from "react";

export interface FacebookProps {
	className: string;
	width: number;
	height: number;
	color?: string;
}

const Chevron: FunctionComponent<FacebookProps> = ({ className, color, width, height }: FacebookProps) => {
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
				<clipPath id="37ee453491">
					<path
						d="M 1.308594 5 L 65.335938 5 L 65.335938 39.90625 L 1.308594 39.90625 Z M 1.308594 5 "
						clipRule="nonzero"
					/>
				</clipPath>
			</defs>
			<g clipPath="url(#37ee453491)">
				<path
					fill={color}
					d="M 64.5 6.089844 C 63.328125 4.917969 61.429688 4.917969 60.261719 6.089844 L 33.5 32.851562 L 6.734375 6.089844 C 5.566406 4.917969 3.667969 4.917969 2.5 6.089844 C 1.328125 7.257812 1.328125 9.15625 2.5 10.324219 L 31.378906 39.207031 C 31.964844 39.792969 32.730469 40.085938 33.5 40.085938 C 34.265625 40.085938 35.03125 39.792969 35.617188 39.207031 L 64.5 10.324219 C 65.667969 9.15625 65.667969 7.257812 64.5 6.089844 "
					fillOpacity="1"
					fillRule="nonzero"
				/>
			</g>
		</svg>
	);
};

export default Chevron;
