import React from "react";
import "./test.css";
const size = 40;

export default class BarChart extends React.Component {

	constructor(props) {
		super(props)

		const slices = [
			{percent: 0.1, color: '#c1d138'},
			{percent: 0.7, color: '#7e97db'},
			{percent: 0.2, color: '#00ab6b'},
		];


		this.state = {
			size:size,
			slices:slices
		}
		this.doSomething = this.doSomething.bind(this);
	}


	render() {
		return (
			<div>
					<div onMouseOver={()=>this.doSomething()}>
					<svg width={this.state.size} height={this.state.size} transform = "rotate(0 100 100)">
						{this.getPaths()}
					</svg>
				</div>
			</div>
		);
	}


	getPaths () {
		let paths = [];
		let xPos = 0;
		let yPos = 0;
		let widthSlice = size/this.state.slices.length;
		let heightSlice = 0;

		this.state.slices.forEach(slice => {
			heightSlice = size*slice.percent;
			let offset = size - size*slice.percent;
			yPos = offset;
			paths.push(<rect className="baranimate" x={xPos}  y={yPos} width={widthSlice} height={heightSlice} style={{fill:slice.color}} >
				<animateTransform attributeName="transform"
													attributeType="XML"
													type="rotate"
													from="0 60 70"
													to="360 60 70"
													dur="10s"
													repeatCount="indefinite"/>
				</rect>

			)
			xPos = xPos + widthSlice;
		});
		return paths;
	}

	doSomething()  {
		const s2 = [
			{percent: 0.4, color: '#c1d138'},
			{percent: 0.1, color: '#7e97db'},
			{percent: 0.3, color: '#00ab6b'},
		];

		this.setState({
			slices:s2
		})

	}
}