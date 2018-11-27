import {Component} from "react";
import PropTypes from "prop-types";
import React from "react";

class DateField extends Component {
    render() {
        return (
            <div className="astras_border_component">
                <input ref={this.props.ref} type={"text"}/>
                <button type="button">select date</button>
            </div>
        );
    }
}
export default DateField;