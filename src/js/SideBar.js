import React from "react";


import './global.less';


export default class SideBar extends React.Component {

    render() {

        let selectMenuItem = this.props.selectMenuItem;

        let style = {
            cursor:"pointer"
        }

        return (
            <div className="side astras_border_component">
                <ul style={style}>
                    {this.props.headers.map(function(object, i){
                        return  <li className="hover" text={object.name} key={i} onClick={(e) => selectMenuItem(e, object.url, i)}>
                                        {object.name}
                                </li>;
                    })}
                </ul>
            </div>
        );
    }
}









