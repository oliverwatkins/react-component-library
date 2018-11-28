import React from "react";

import '../global.less';
import SideBar from "../SideBar";
import ComponentDetailPanel from "../panels/ComponentDetailPanel";

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
      _this.setState({url:url})

    }


    if (this.state.url === "tree") {
      comppage =
        <ComponentDetailPanel fetchClassDetailData={this.props.fetchClassDetailData}
                              classTreeData={this.props.classTreeData}
                              selectedClassData={this.props.selectedClassification}/>
    }
    else if (this.state.url === "table") {

      comppage = <div>table</div>
      // this.props.fetchClassTreeData("someRatingId")
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
          {comppage}


        </div>


      </div>
    );
  }
}


export default ComponentPage