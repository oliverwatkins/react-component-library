import React from "react";
import {Link, withRouter} from "react-router-dom";


export default class TreeComponent extends React.Component {

	constructor(props) {
		super(props)
		this.state = {treeData: props.treeData};
	}

	render() {
		let treeStructure = this.getTreeElement(this.state.treeData, 0, this.props.selectTreeNode);
		return (
			<div className="tree astras_border_component">
				{treeStructure}
			</div>
		);
	}

	getTreeElement(data, level, selectNodeFunction) {
		let style = {
			cursor: "pointer"
		}

		let exContr = <span onClick={(e) => this.expandContractClick(data, false, this.state.treeData)}>{"[-]"}</span>
		if (data.contracted == true)
			exContr = <span onClick={(e) => this.expandContractClick(data, true, this.state.treeData)}>{"[+]"}</span>


		let t = createTabSpace(level)
		let label = <span className="hover" onClick={(e) => selectNodeFunction(data.id)}>{data.name}</span>;
		level = level + 5;
		let e = <div style={style} key={data.id + "_" + level}> {t}{exContr}{label}
			{!data.contracted && this.getChildren(data, level, selectNodeFunction)}
		</div>
		return e;
	}

	getChildren(data, level, selectNodeFunction) {

		return <div>
			{data.children && data.children.map((elem, i) => {
					return (this.getTreeElement(elem, level, selectNodeFunction))
				}
			)
			}
		</div>
	}

	expandContractClick(data, expand, treeStructure) {
		if (expand)
			data.contracted = false;
		else
			data.contracted = true;
		this.setState(treeStructure);
	}
}

function createTabSpace(level) {
	let y = "";
	for (let i = 0; i < level; i++) {
		y = y + " \u00A0 ";
	}
	let x = <span>{y}</span>;
	return x
}
