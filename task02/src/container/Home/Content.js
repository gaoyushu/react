import React, { Component } from "react";

export default class Content extends Component {
  constructor() {
    super();
    this.state = {
      data: {}
    };
  }
  componentDidMount() {
    let id = this.props.match.params.id;
    console.log("id", id);
    fetch(`https://cnodejs.org/api/v1/topic/${id}`)
      .then(res => res.json())
      .then(res => {
        this.setState({ data: res.data });
        console.log("componentDidMount", this.state.data);
      });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.location.search !== this.props.location.search) {
      let id = this.props.match.params.id;
      console.log("id", id);
      fetch(`https://cnodejs.org/api/v1/topic/${id}`)
        .then(res => res.json())
        .then(res => {
          this.setState({ data: res.data });
          console.log("componentDidUpdate", this.state.data);
        });
    }
  }
  render() {
    // console.log(this.state.data);
    
    return (
      <div>
        <div className="panel" style={{ background: "#fff", margin: "0" }}>
          <div className="header topic_header">
            <h2>{this.state.data.title}</h2>
          </div>
        </div>
        <div className="panel1" style={{ background: "#fff" }}>
          <div className="inner topic">
            <div
              className="topic_content"
              dangerouslySetInnerHTML={{ __html: this.state.data.content }}
            ></div>
          </div>
        </div>
      </div>
    );
  }
}
