import React from "react";

import '../global.less';
import SideBar from "../SideBar";
import ComponentDetailPanel from "../panels/ComponentDetailPanel";

class ComponentPage extends React.Component {

  constructor(props) {
    super(props)
    this.handleSelectMenuItem = this.handleSelectMenuItem.bind(this);
  }

  componentDidMount() {
    // this.props.fetchRatingList();
  }

  handleSelectMenuItem(val, event) {
    this.props.selectMenuItem(val);
  }

  render() {
    let selectMenuItem = (a, url, c) => {
      if (url === "cat") {
        // this.props.fetchClassTreeData("someRatingId")
      }
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
        }
      ]
    }
    return (
      <div className="flex-container astras_border_page">

        <div className="flex-container astras_border_panel">
          <SideBar selectMenuItem={selectMenuItem} fetchClassTreeData={this.props.fetchClassTreeData}
                   headers={menuItems.headers}>side bar</SideBar>

          <ComponentDetailPanel fetchClassDetailData={this.props.fetchClassDetailData}
                                classTreeData={this.props.classTreeData}
                                selectedClassData={this.props.selectedClassification}/>

        </div>


      </div>
    );
  }
}


export default ComponentPage