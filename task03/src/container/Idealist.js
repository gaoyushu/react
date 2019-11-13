import React, { Component } from "react";

let data = [
  {
    img:
      "http://m.qpic.cn/psb?/V14cmF3P4K82ah/BAW0w4oO*JZNcFFTwsMBU6gYFPZ1doNg7iK5vnVpAJw!/b/dL8AAAAAAAAA&bo=SQL0AQAAAAARB44!&rf=viewer_4",
    user: "Gluneko",
    head:
      "http://b272.photo.store.qq.com/psb?/V14cmF3P0wK1jN/sBIjg8OU5Tq.giESuSxl8lySEPP*0BmihcB.WmuPTg4!/b/dBABAAAAAAAA&bo=IAMgAyADIAMRCT4!&rf=viewer_4"
  }
];

for(let i = 1; i< 30; i++){
  data[i]=data[i-1]
}

export default class Idealist extends Component {
  render() {
    let items = data.map((item, idx) => (
      <div
        style={{
          height: window.screen.width / 1.8,
          flex: "0 0 45%",
          position: "relative",
          borderRadius: "10px",
          margin: window.screen.width / 40,
          background: "#fff"
        }}
        key={idx}
      >
        <img
          style={{
            width: (window.screen.width / 20) * 9,
            height: (window.screen.width / 20) * 9,
            borderTopLeftRadius: "5px",
            borderTopRightRadius: "5px"
          }}
          src={item.img}
          alt=""
        />
        <img
          style={{
            position: "absolute",
            top: (window.screen.width / 20) * 8.5,
            left: window.screen.width / 30,
            width: window.screen.width / 10,
            height: window.screen.width / 10,
            borderRadius: window.screen.width / 10
          }}
          src={item.head}
          alt=""
        />
        <span
          style={{
            position: "absolute",
            top: window.screen.width / 2.1,
            left: (window.screen.width / 30) * 5
          }}
        >
          {item.user}
        </span>
      </div>
    ));
    return (
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between"
        }}
      >
        {items}
      </div>
    );
  }
}
