import React from "react";

export default function Header() {
  return (
    <div id="sidebar">
      <div className="panel">
        <div className="inner">
          <p>CNode：Node.js专业中文社区</p>

          <div>
            您可以
            <a href='/'>登录</a>或<a href='/'>注册</a>, 也可以
            <a href='https://github.com/gaoyushu/react/tree/master/task02'>
              <span className="span-info">看我的github仓库</span>
            </a>
          </div>
        </div>
      </div>

      <div className="panel">
        <div className="inner ads">
          <a href='/' className="banner sponsor_outlink">
            <img
              alt=""
              src="//static.cnodejs.org/FufeQ8S-sz6aKH5bvPXzVXvQG2Z-"
            />
          </a>

          <div className="sep10"></div>

          <a href='/' className="banner sponsor_outlink">
            <img
              alt=""
              src="//static.cnodejs.org/Fn4D6BhOTz1IswvmzeZ1q7QW1ls_"
            />
          </a>

          <div className="sep10"></div>

          <a href='/' className="banner sponsor_outlink">
            <img
              alt=""
              src="//static.cnodejs.org/FlajCCXkxZaOsuWp3k0iaiqfrJaS"
            />
          </a>
        </div>
      </div>

      <div className="panel">
        <div className="header">
          <span className="col_fade">友情社区</span>
        </div>
        <div className="inner">
          <ol className="friendship-community">
            <li>
              <a href='/'>
                <img
                  alt=""
                  src="//static2.cnodejs.org/public/images/ruby-china-20150529.png"
                />
              </a>
            </li>
            <div className="sep10"></div>
            <li>
              <a href='/'>
                <img
                  alt=""
                  src="//static2.cnodejs.org/public/images/golangtc-logo.png"
                />
              </a>
            </li>
            <div className="sep10"></div>
            <li>
              <a href='/'>
                <img
                  alt=""
                  src="//static2.cnodejs.org/public/images/phphub-logo.png"
                />
              </a>
            </li>
            <div className="sep10"></div>
            <li>
              <a href='/'>
                <img
                  alt=""
                  src="//static.cnodejs.org/FjLUc7IJ2--DqS706etPQ1EGajxK"
                />
              </a>
            </li>
          </ol>
        </div>
      </div>
      <div className="panel">
        <div className="header">
          <span className="col_fade">客户端二维码</span>
        </div>
        <div className="inner cnode-app-download">
          <img
            alt=""
            width="200"
            src="//static.cnodejs.org/FtG0YVgQ6iginiLpf9W4_ShjiLfU"
          />
          <br />
          <a href='/'>
            客户端源码地址
          </a>
        </div>
      </div>
    </div>
  );
}
