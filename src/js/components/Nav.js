import React from "react";
import {Link, withRouter} from "react-router-dom";

// import './style.less';

class Nav extends React.Component {
    constructor() {
        super()
        this.state = {
            collapsed: true,
        };
    }

    toggleCollapse() {
        const collapsed = !this.state.collapsed;
        this.setState({collapsed});
    }

    render() {
        return (
            <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
                <div className="container">
                    <div className={"navbar-collapse " } id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav">
                            <li >
                                <Link to="/" onClick={this.toggleCollapse.bind(this)}>
                                    Welcome
                                </Link>
                            </li>
                            <li>
                                <Link to="rating" onClick={this.toggleCollapse.bind(this)} >
                                    Components
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

//HOC gives Nav access to routing objects
export default withRouter(Nav)