import React from "react";
import {Link, withRouter} from "react-router-dom";


export default class TableComponent extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        if(!this.props.data)
            return <div></div>

        let tableStructure = getTable(this.props.data, this.props.selectTableRow);
        return (
            <div className="table ">
                {tableStructure}
            </div>
        );
    }
}


function getTable(data, selectTableRow) {

    let style = {
        cursor:"pointer"
    }

    let headers = data.headers;

    if (!data.headers)
        return <div></div>

    let headerHTML  = <tr> {
            data.headers.map((elem, i) => {
                return <td key={i}>{elem}</td>
            })
        } </tr>

    let dataRowsHTML =
        <table>
            {headerHTML}
            {data.data.map((elem, i) => {
                return <tr onClick={()=>selectTableRow(elem.id)}> {
                    headers.map((elem2, i2) => {
                        return <td className={"cursor_pointer"} key={i+"_"+i2}>{elem[elem2]}</td>;
                    })
                }
                </tr>
            }) }
    </table>

    let e =
        <div className={"table"}>
            {dataRowsHTML}
        </div>

    return e;
}