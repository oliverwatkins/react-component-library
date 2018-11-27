import React from "react";
import {Link, withRouter} from "react-router-dom";


export default class TreeComponent extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        let treeStructure = getTreeElement(this.props.treeData, 0, this.props.selectTreeNode);
        return (
            <div className="tree astras_border_component">
                {treeStructure}
            </div>
        );
    }
}

function getTreeElement(data, level, selectNodeFunction) {


    let style = {
        cursor:"pointer"
    }

    let t = createTabSpace(level)
    let label = <span className="hover" onClick={(e) => selectNodeFunction(data.id)}>{data.name}</span>;
    level = level + 5;
    let e = <div style={style} key={data.id + "_" + level}> {t}{label}
        <div>
            {data.children && data.children.map((elem, i) => {
                    return (getTreeElement(elem, level, selectNodeFunction))
                }
            )
        }
        </div>
    </div>
    return e;
}


function createTabSpace(level) {
    let y = "";
    for (let i = 0; i < level; i++) {
        y = y + " \u00A0 ";
    }
    let x = <span>{y}</span>;
    return x
}