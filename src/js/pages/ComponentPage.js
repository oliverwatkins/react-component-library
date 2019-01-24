import React from "react";

import '../global.less';
import SideBar from "../SideBar";
import ComponentDetailPanel from "../panels/ComponentDetailPanel";
import PieChart from "../components/PieChart/PieChart";

import BarChart from "../components/BarChart/BarChart";


class ComponentPage extends React.Component {

	constructor(props) {
		super(props)

		this.state = {
			url: "tree",
		};
		// this.setState({url:"tree"})
		this.handleSelectMenuItem = this.handleSelectMenuItem.bind(this);
	}

	componentDidMount() {
		// this.props.fetchRatingList();
	}

	handleSelectMenuItem(val, event) {
		this.props.selectMenuItem(val);
	}

	render() {

		let _this = this;

		let comppage = <div></div>

		let selectMenuItem = (a, url, c) => {
			_this.setState({url: url})

		}


		if (this.state.url === "tree") {
			comppage =
				<ComponentDetailPanel fetchClassDetailData={this.props.fetchClassDetailData}
															classTreeData={this.props.classTreeData}
															selectedClassData={this.props.selectedClassification}/>
		} else if (this.state.url === "table") {

			comppage = <div>table</div>
			// this.props.fetchClassTreeData("someRatingId")
		} else if (this.state.url === "pie") {

			let slices = [
				{percent: 0.1, color: '#c1d138'},
				{percent: 0.7, color: '#7e97db'},
				{percent: 0.2, color: '#00ab6b'}
			]

			comppage = <PieChart slices={slices} width={150}/>

			// this.props.fetchClassTreeData("someRatingId")
		} else if (this.state.url === "bar") {
			let bars = [
				{percent: 0.1, color: '#c1d138'},
				{percent: 0.7, color: '#7e97db'},
				{percent: 0.2, color: '#00ab6b'}
			]
			comppage = <BarChart bars={bars} width={150}/>

		}




		let menuItems = {
			headers: [
				{
					"name": "Main",
					"url": "main"
				},
				{
					"name": "Tree Components",
					"url": "tree"
				},
				{
					"name": "Table Components",
					"url": "table"
				},
				{
					"name": "Pie Chart",
					"url": "pie"
				},
				{
					"name": "Bar Chart",
					"url": "bar"
				},
				{
					"name": "XY Chart",
					"url": "xy"
				}
			]
		}
		return (
			<div className="flex-container astras_border_page">

				<div className="flex-container astras_border_panel">
					<SideBar selectMenuItem={selectMenuItem} fetchClassTreeData={this.props.fetchClassTreeData}
									 headers={menuItems.headers}>side bar</SideBar>
					{comppage}


				</div>


			</div>
		);
	}
}


export default ComponentPage