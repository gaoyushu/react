import React, { Component } from "react";
import { NavBar, Icon } from "antd-mobile";
import { Carousel, WingBlank } from "antd-mobile";
import { Card, WhiteSpace } from "antd-mobile";

const data2 = [
  {
    text: "热门品牌",
    icon:
      "http://m.qpic.cn/psb?/V14cmF3P4K82ah/2QTHwfW1lan5*cUTlKC3Gkvjpa8txT1Xzt*5GPX4GBY!/b/dMMAAAAAAAAA&bo=SgHcAAAAAAADB7U!&rf=viewer_4"
  },
  {
    text: "私人搭配师",
    icon:
      "http://m.qpic.cn/psb?/V14cmF3P4K82ah/2QTHwfW1lan5*cUTlKC3Gkvjpa8txT1Xzt*5GPX4GBY!/b/dMMAAAAAAAAA&bo=SgHcAAAAAAADB7U!&rf=viewer_4"
  },
  {
    text: "选购指南",
    icon:
      "http://m.qpic.cn/psb?/V14cmF3P4K82ah/2QTHwfW1lan5*cUTlKC3Gkvjpa8txT1Xzt*5GPX4GBY!/b/dMMAAAAAAAAA&bo=SgHcAAAAAAADB7U!&rf=viewer_4"
  }
];

let data3=[];
for(var i =0; i < 20;i++){
  data3[i]=i
}

export default class Home extends Component {
  state = {
    data: ["1", "2"],
    imgHeight: 176
  };
  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: [
          "http://m.qpic.cn/psb?/V14cmF3P4K82ah/2QTHwfW1lan5*cUTlKC3Gkvjpa8txT1Xzt*5GPX4GBY!/b/dMMAAAAAAAAA&bo=SgHcAAAAAAADB7U!&rf=viewer_4",
          "http://m.qpic.cn/psb?/V14cmF3P4K82ah/x32*yOn.O1TZyvOD6FpkZIOKG3CC87AkVXc5f1TW6lQ!/b/dE0BAAAAAAAA&bo=9AFPAQAAAAARF5s!&rf=viewer_4"
        ]
      });
    }, 100);
  }

  render() {
    let home1 = (
      <NavBar
        style={{ backgroundColor: "#3fcccb", color: "#fff" }}
        rightContent={[
          <Icon
            key="0"
            type="search"
            style={{ color: "#fff", marginRight: "16px" }}
          />
        ]}
      >
        住吧家居
      </NavBar>
    );

    let home2 = (
      <WingBlank style={{ margin: 0 }}>
        <Carousel
          autoplay={true}
          infinite
          slideWidth={1}
          dotStyle={{ width: window.screen.width / 10, borderRadius: 0 }}
          dotActiveStyle={{
            width: window.screen.width / 10,
            borderRadius: 0,
            background: "#3fcccb"
          }}
          // beforeChange={(from, to) =>
          //   // console.log(`slide from ${from} to ${to}`)
          // }
          // afterChange={index => console.log("slide to", index)}
        >
          {this.state.data.map(val => (
            <a
              key={val}
              href={val}
              style={{
                display: "inline-block",
                width: "100%",
                height: this.state.imgHeight
              }}
            >
              <img
                src={val}
                alt=""
                style={{ width: "100%", verticalAlign: "top" }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event("resize"));
                  this.setState({ imgHeight: "auto" });
                }}
              />
            </a>
          ))}
        </Carousel>
      </WingBlank>
    );

    let home3 = (
      <div style={{ display: "flex", margin: window.screen.width / 61 / 2 }}>
        {data2.map((item, idx) => (
          <div
            style={{
              width: (window.screen.width / 61) * 19,
              height: (window.screen.width / 61) * 19,
              margin: window.screen.width / 61 / 2,
              position: "relative",
              background: "#000"
            }}
            key={idx}
          >
            <img
              src={item.icon}
              style={{
                width: (window.screen.width / 61) * 19,
                height: (window.screen.width / 61) * 19,
                filter: "alpha(Opacity=70)",
                opacity: 0.7
              }}
              alt=""
            />
            <p
              style={{
                position: "absolute",
                top: "35%",
                width: "100%",
                textAlign: "center",
                color: "#fff"
              }}
            >
              {item.text}
            </p>
          </div>
        ))}
      </div>
    );

    let home4 = (
      <div>
        <WhiteSpace size="lg" />
        <Card full>
          <Card.Header
            style={{ paddingLeft: 0 }}
            title="热门推荐"
            thumb={
              <div
                style={{
                  background: "#3fcccb",
                  width: "5px",
                  height: "30px",
                  marginRight: "10px"
                }}
              ></div>
            }
          />
          <Card.Body style={{ padding: 0 }}>
          {data3.map((item)=>(<div
              style={{
                position: "relative",
                width: window.screen.width,
                height: "180px",
                background: "#000",
                marginBottom: '10px'
              }} key={item}
            >
              <img
                style={{
                  width: "100%",
                  height: "100%",
                  filter: "alpha(Opacity=70)",
                  opacity: 0.7
                }}
                src="http://m.qpic.cn/psb?/V14cmF3P4K82ah/x32*yOn.O1TZyvOD6FpkZIOKG3CC87AkVXc5f1TW6lQ!/b/dE0BAAAAAAAA&bo=9AFPAQAAAAARB4s!&rf=viewer_4"
                alt=""
              />
              <p style={{ position: "absolute", bottom: "-5%", color: "#fff" }}>
                什么是英伦装修风格 英伦风家装 英伦风格装修效果图
              </p>
            </div>))}
          </Card.Body>
        </Card>
      </div>
    );

    return (
      <div>
        {home1}
        {home2}
        {home3}
        {home4}
      </div>
    );
  }
}
