import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class List extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
    console.log(window.location);
  }
  componentDidMount() {
    let search = this.props.location.search;
    fetch("https://cnodejs.org/api/v1/topics" + search)
      .then(res => res.json())
      .then(res => {
        this.setState({ data: res.data });
        // console.log("componentDidMount: ", this.state.data);
      });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.location.search !== this.props.location.search) {
      let search = this.props.location.search;
      fetch("https://cnodejs.org/api/v1/topics" + search)
        .then(res => res.json())
        .then(res => {
          this.setState({ data: res.data });
          // console.log("componentDidUpdate: ", this.state.data);
        });
    }
  }

  render() {
    let search = window.location.search.split("&")[0];
    let page = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    let list = this.state.data.map((item, idx) => {
      return (
        <div className="cell" key={idx}>
          <img
            style={{ width: "30px" }}
            className="user_avatar pull-left"
            src={item.author.avatar_url}
            alt={item.loginname}
          />
          <div className="reply_count pull-left">
            <span className="count_of_replies" title="回复数">
              {item.reply_count}
            </span>
            <span className="count_seperator">/</span>
            <span className="count_of_visits" title="点击数">
              {item.visit_count}
            </span>
          </div>

          <Link className="topic_title" to={{ pathname: `/topic/${item.id}` }}>
            {item.title}
          </Link>
        </div>
      );
    });
    page = page.map((item, idx) => {
      return (
        <li key={idx}>
          <Link to={{ search: `${search}&page=${item}` }}>{item}</Link>
        </li>
      );
    });

    return (
      <div className="inner no-padding">
        <div className="topic_list">{list}</div>
        <div className="pagination">
          <ul>{page}</ul>
        </div>
      </div>
    );
  }
}
