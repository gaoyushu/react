import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import List from "./List";

export default class Home extends Component {
  render() {
    let url = this.props.match.url;

    return (
      <div className="panel">
        <div className="header">
          <Link className={"topic-tab"} to={{pathname: url,search: "?tab=all"}}>
            全部
          </Link>
          <Link className={"topic-tab"} to={{pathname: url,search: "?tab=good"}}>
            精华
          </Link>
          <Link className={"topic-tab"} to={{pathname: url,search: "?tab=share"}}>
            分享
          </Link>
          <Link className={"topic-tab"} to={{pathname: url,search: "?tab=job"}}>
            工作
          </Link>
        </div>
        <Route path={url} component={List} />
      </div>
    );
  }
}
