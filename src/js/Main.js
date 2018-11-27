import React from "react";

import Footer from "./components/Footer";
import Nav from "./components/Nav";
import {Route, Switch, withRouter} from 'react-router-dom'

import WelcomePage from "./pages/WelcomePage";
import ComponentPage from "./pages/ComponentPage"


import './global.less';

/**
 * Contains nav on top, footer on bottom, and all the pages are passed in
 * as children.
 */
class Main extends React.Component {
    render() {
        const containerStyle = {
            marginTop: "60px",
        };

        return (
            <div>
                <Nav/>
                <div className="container" style={containerStyle}>
                    <div className="row">
                        <div className="col-lg-12">
                            <Switch>
                                <Route exact path='/' component={WelcomePage}/>
                                <Route path='/rating' component={ComponentPage}/>
                            </Switch>
                        </div>
                    </div>
                    <Footer/>
                </div>
            </div>
        );
    }
}

export default withRouter(Main)