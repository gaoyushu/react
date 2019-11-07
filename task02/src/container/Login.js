import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Login extends Component {
  render() {
    return (
      <div className="content">
        <div className="panel">
          <div className="header">
            <ul className="breadcrumb">
              <li>
                <a href="/">主页</a>
                <span className="divider">/</span>
              </li>
              <li className="active">登录</li>
            </ul>
          </div>
          <div className="inner">
            <form id="signin_form" className="form-horizontal">
              <div className="control-group">
                <label className="control-label">用户名</label>

                <div className="controls">
                  <input
                    className="input-xlarge"
                    type="text"
                    autoComplete="username"
                  />
                </div>
              </div>
              <div className="control-group">
                <label className="control-label">密码</label>

                <div className="controls">
                  <input
                    className="input-xlarge"
                    type="password"
                    autoComplete="password"
                  />
                </div>
              </div>

              <div className="form-actions">
                <Link className="span-primary" to='/home' style={{ color: "#fff" }}>
                  登录
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
