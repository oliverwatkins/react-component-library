import React from "react";
/**
 * Borrowed heavily from :
 *
 * David Gilbertsons blog on creating a pie chart in SVG :
 * https://hackernoon.com/a-simple-pie-chart-in-svg-dbdd653b6936
 *
 * @author Oliver Watkins
 * @type {number}
 */

export default class PieChart extends React.Component{

	constructor(props) {
		super(props)
	}

	render() {
		let viewBox=` -${this.props.width} -${this.props.width} ${this.props.width*2} ${this.props.width*2}`

		let transform = "rotate(0 0 0)"; //if you want it rotated a certain angle change the first number in the this transform object
		return (
			<div>
				<div>
					<svg width={this.props.width} height={this.props.width} viewBox={viewBox} transform = {transform}>
						{getPaths(this.props.slices, this.props.width)}
					</svg>
				</div>
			</div>
		);
	}
}

function getCoordinatesForPercent(percent) {
	const x = Math.cos(2 * Math.PI * percent);
	const y = Math.sin(2 * Math.PI * percent);
	return [x, y];
}

let cumulativePercent = 0;

const getPaths = (slices, size) => {
	let paths = [];

	slices.forEach(slice => {

		let [startX, startY] = getCoordinatesForPercent(cumulativePercent);

		cumulativePercent += slice.percent;

		const [endX, endY] = getCoordinatesForPercent(cumulativePercent);

		// if the slice is more than 50%, take the large arc (the long way around)
		const largeArcFlag = slice.percent > .5 ? 1 : 0;

		// create an array and join it just for code readability
		const pathData = [
			`M ${startX * size} ${startY * size}`, // Move
			`A ${size} ${size} 0 ${largeArcFlag} 1 ${endX * size} ${endY * size}`, // Arc (size is same as radius)
			`L 0 0`, // Line
		].join(' ');

		paths.push(<path d={pathData} fill={slice.color}/>)
	});
	return paths;
}