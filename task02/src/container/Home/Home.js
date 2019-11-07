import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import List from "./List";

export default class Home extends Component {
  render() {
    let url = this.props.match.url; //跳到当前的路由
    console.log(this.props);
    return (
      <div className="panel">
        <div className="header">
          <Link className={"topic-tab"} to={url + "?tab=all"}>
            全部
          </Link>
          <Link className={"topic-tab"} to={url + "?tab=good"}>
            精华
          </Link>
          <Link className={"topic-tab"} to={url + "?tab=share"}>
            分享
          </Link>
          <Link className={"topic-tab"} to={url + "?tab=job"}>
            工作
          </Link>
        </div>
        <Route path={url} component={List} />
      </div>
    );
  }
}
