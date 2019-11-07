import React, { Component } from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./container/Home/Home";
import Start from "./container/Start";
import Api from "./container/Api";
import About from "./container/About";
import Login from "./container/Login";
import Content from './container/Home/Content'
import Sidebar from "./components/Sidebar";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <div className="main">
            <Sidebar />
            <div className="content">
              <Route exact path="/" component={Home} />
              <Route path="/home" component={Home} />
              <Route path="/start" component={Start} />
              <Route path="/api" component={Api} />
              <Route path="/about" component={About} />
              <Route path="/login" component={Login} />
              <Route path="/topic/:id" component={Content} />
            </div>
          </div>
        </div>
      </Router>
    );
  }
}
