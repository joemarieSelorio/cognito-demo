import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Welcome!! {this.props.auth.user.username}</h1>
      </div>
    );
  }
}

export default Home;
