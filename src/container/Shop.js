import React, { Component } from "react";
import { SearchBar, Carousel, WingBlank, Grid,NavBar,Icon } from "antd-mobile";
// import {i} from 'http://at.alicdn.com/t/font_1506376_71kb9s8krmq.js';

let data1 = [
  {
    icon: "icon-zhuozi",
    text: "桌"
  },
  {
    icon: "icon-chuang",
    text: "床"
  },
  {
    icon: "icon-yizi",
    text: "椅"
  },
  {
    icon: "icon-chaji",
    text: "几"
  },
  {
    icon: "icon-icon-test",
    text: "柜"
  },
  {
    icon: "icon-books",
    text: "书架"
  },
  {
    icon: "icon-shafa",
    text: "沙发"
  },
  {
    icon: "icon-shanzibaijian",
    text: "家居饰品"
  },
  {
    icon: "icon-jiaju-",
    text: "户外家居"
  },
  {
    icon: "icon-quanbu-copy",
    text: "全部分类"
  }
];

let data2 = [
  {
    img:
      "http://m.qpic.cn/psb?/V14cmF3P4K82ah/2QTHwfW1lan5*cUTlKC3Gkvjpa8txT1Xzt*5GPX4GBY!/b/dMMAAAAAAAAA&bo=SgHcAAAAAAADB7U!&rf=viewer_4",
    text: "Top Art Studio 欧式风格",
    price: 39.95
  },
  {
    img:
      "http://m.qpic.cn/psb?/V14cmF3P4K82ah/2QTHwfW1lan5*cUTlKC3Gkvjpa8txT1Xzt*5GPX4GBY!/b/dMMAAAAAAAAA&bo=SgHcAAAAAAADB7U!&rf=viewer_4",
    text: "Top Art Studio 欧式风格",
    price: 39.95
  }
];

for(let i = 2; i< 30; i+=2){
  data2[i]=data2[i-2];
  data2[i+1]=data2[i-1];
}

export default class Shop extends Component {
  state = {
    value: "输入关键字搜索",
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

    let shop1 = (
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
        商城
      </NavBar>
    )
    let shop2 = (
      <WingBlank style={{ margin: 0 }}>
        <SearchBar placeholder="输入关键字搜索" maxLength={8} />
        <Carousel
          autoplay={true}
          infinite
          slideWidth={1}
          dotActiveStyle={{
            background: "#3fcccb"
          }}
          // beforeChange={(from, to) =>
          //   console.log(`slide from ${from} to ${to}`)
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

    let shop3 = (
      <Grid
        style={{ padding: 0 }}
        data={data1}
        columnNum={5}
        renderItem={dataItem => (
          <div>
            <svg
              className="icon"
              aria-hidden="true"
              style={{
                width: window.screen.width / 9,
                height: window.screen.width / 9,
                background: "#3fcccb",
                borderRadius: "100%",
                padding: "5px"
              }}
            >
              <use href={"#" + dataItem.icon}></use>
            </svg>
            <div style={{ color: "#888", fontSize: "14px" }}>
              <span>{dataItem.text}</span>
            </div>
          </div>
        )}
      />
    );

    let shop4= (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          marginTop: "20px"
        }}
      >
        {data2.map((item, idx) => (
          <div
            key={idx}
            style={{
              height:window.screen.width / 3,
              flex: "0 0 45%",
              borderRadius: "10px",
              margin: window.screen.width / 40,
            }}
          >
            <img alt="" src={item.img} style={{width: '100%', height: '75%'}}/>
            <span>{item.text}</span>
            <span>{"￥" + item.price}</span>
          </div>
        ))}
      </div>
    );

    return (
      <div>
        {shop1}
        {shop2}
        {shop3}
        {shop4}
      </div>
    );
  }
}
