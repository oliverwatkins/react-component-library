import React from "react";
const size = 140;

export default class BarChart extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			size:size,
			bars:props.bars
		}
	}

	render() {
		return (
			<div>
				<svg width={this.state.size} height={this.state.size} transform = "rotate(0 100 100)">
					{this.getPaths()}
				</svg>
			</div>
		);
	}


	getPaths () {
		let paths = [];
		let xPos = 0;
		let yPos = 0;
		let widthBar = size/this.state.bars.length;
		let heightBar = 0;

		this.state.bars.forEach(bar => {
			heightBar = size*bar.percent;
			let offset = size - size*bar.percent;
			yPos = offset;
			paths.push(<rect className="baranimate" x={xPos}  y={yPos} width={widthBar} height={heightBar} style={{fill:bar.color}} ></rect>)
			xPos = xPos + widthBar;
		});
		return paths;
	}
}