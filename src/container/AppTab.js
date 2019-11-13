import React from "react";
import { TabBar } from "antd-mobile";
import Home from "./Home";
import Idea from "./Idea";
import Shop from "./Shop";
import Mine from "./Mine";

export default class AppTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: "home"
    };
  }
  render() {
    return (
      <div
        style={{
          position: "fixed",
          height: "100%",
          width: "100%",
          top: 0
        }}
      >
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#3fcccb"
          barTintColor="white"
        >
          <TabBar.Item
            title="首页"
            key="home"
            icon={
              <svg
                className="icon"
                aria-hidden="true"
                style={{
                  width: "22px",
                  height: "22px"
                }}
              >
                <use href={"#icon-shouye"}></use>
              </svg>
            }
            selectedIcon={
              <svg
                className="icon"
                aria-hidden="true"
                style={{
                  width: "22px",
                  height: "22px"
                }}
              >
                <use href={"#icon-shouye"}></use>
              </svg>
            }
            selected={this.state.selectedTab === "home"}
            onPress={() => {
              this.setState({
                selectedTab: "home"
              });
            }}
          >
            <Home />
          </TabBar.Item>
          <TabBar.Item
            icon={
              <svg
                className="icon"
                aria-hidden="true"
                style={{
                  width: "22px",
                  height: "22px"
                }}
              >
                <use href={"#icon-linggan"}></use>
              </svg>
            }
            selectedIcon={
              <svg
                className="icon"
                aria-hidden="true"
                style={{
                  width: "22px",
                  height: "22px"
                }}
              >
                <use href={"#icon-linggan"}></use>
              </svg>
            }
            title="灵感"
            key="idea"
            selected={this.state.selectedTab === "idea"}
            onPress={() => {
              this.setState({
                selectedTab: "idea"
              });
            }}
          >
            <Idea />
          </TabBar.Item>
          <TabBar.Item
            icon={
              <svg
                className="icon"
                aria-hidden="true"
                style={{
                  width: "22px",
                  height: "22px"
                }}
              >
                <use href={"#icon-shangchenggaikuang"}></use>
              </svg>
            }
            selectedIcon={
              <svg
                className="icon"
                aria-hidden="true"
                style={{
                  width: "22px",
                  height: "22px"
                }}
              >
                <use href={"#icon-shangchenggaikuang"}></use>
              </svg>
            }
            title="商城"
            key="shop"
            selected={this.state.selectedTab === "shop"}
            onPress={() => {
              this.setState({
                selectedTab: "shop"
              });
            }}
          >
            <Shop />
          </TabBar.Item>
          <TabBar.Item
            icon={
              <svg
                className="icon"
                aria-hidden="true"
                style={{
                  width: "22px",
                  height: "22px"
                }}
              >
                <use href={"#icon-wode"}></use>
              </svg>
            }
            selectedIcon={
              <svg
                className="icon"
                aria-hidden="true"
                style={{
                  width: "22px",
                  height: "22px"
                }}
              >
                <use href={"#icon-wode"}></use>
              </svg>
            }
            title="我的"
            key="mine"
            selected={this.state.selectedTab === "mine"}
            onPress={() => {
              this.setState({
                selectedTab: "mine"
              });
            }}
          >
            <Mine />
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}
