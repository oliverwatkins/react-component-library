import React from "react";

import '../global.less';
import TreeComponent from "./../components/TreeComponent/TreeComponent";

import PropTypes from 'prop-types';

import "./../components/TabbedPanel/Tab.less";


export default class ComponentDetailPanel extends React.Component {

	constructor(props) {
		super(props)
		this.state = {"showBottom": false}
	}

	static propTypes = {
		selectedClassData: PropTypes.array.isRequired,
		classTreeData: PropTypes.object.isRequired,
	};

	render() {

		let treeData = {
			"id": "777",
			"name": "Parent",
			"children": [
				{
					"id": "123",
					"name": "Child1",
					"contracted": true,
					"children": [
						{
							"id": "234",
							"name": "childchild1"
						},
						{
							"id": "345",
							"name": "childchild2"
						}
					]
				},
				{
					"id": "456",
					"name": "Child2",
					"children": [
						{
							"id": "567",
							"name": "childchild3"
						},
						{
							"id": "678",
							"name": "childchild4"
						},
						{
							"id": "789",
							"name": "childchild5"
						}
					]
				},
				{
					"id": "135",
					"name": "Child3",
					"children": [
						{
							"id": "246",
							"name": "childchild6"
						}
					]
				}
			]
		}

		let selectTreeNode = (id) => {

			alert('selected ' + id)
		}


		return (
			<div className="main astras_border_panel">
				<div>
					<b>Classification Tree </b>
					<TreeComponent treeData={treeData} selectTreeNode={this.props.fetchClassDetailData}/>
				</div>
			</div>
		);
	}

	fetchClassDetailData() {
		this.props.fetchClassDetailData();
	}
}






