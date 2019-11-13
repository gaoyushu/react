import React, { Component } from "react";
import { NavBar,  Tabs } from "antd-mobile";
import Idealist from './Idealist.js';

const tabs2 = [
  { title: "推荐" },
  { title: "冬季" },
  { title: "宜家" },
  { title: "小清新" },
  { title: "小户型" },
  { title: "个性色彩" }
];
export default class AppHome extends Component {
  render() {
    let idea1 = (
      <NavBar
        style={{ backgroundColor: "#3fcccb", color: "#fff" }}
        rightContent={[
        ]}
      >
        灵感
      </NavBar>
    );

    let idea2 = (
      <Tabs
        tabs={tabs2}
        initialPage={0}
        tabBarUnderlineStyle={{ border: "0px solid #000" }}
        // onChange={(tab, index) => {
        //   console.log("onChange", index, tab);
        // }}
        // onTabClick={(tab, index) => {
        //   console.log("onTabClick", index, tab);
        // }}
        tabBarActiveTextColor="#3fcccb"
      >
        {tabs2.map(item=><Idealist key={item.title}/>)}
      
      </Tabs>
    );

    return (
      <div>
        {idea1}
        {idea2}
      </div>
    );
  }
}
