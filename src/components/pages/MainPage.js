import React, { Component } from "react";
import { Header } from "../sections/Header";
import { Content } from "../sections/Content";

class MainPage extends Component {
  handleKeyPress = event => {
    switch (event.keyCode) {
      case 13:
        this.props.logout();
        break;
      default:
        console.log(event.keyCode);
    }
  };

  componentDidMount() {
    document.addEventListener("keypress", this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener("keypress", this.handleKeyPress);
  }

  render() {
    return (
      <div>
        <Header logout={this.props.logout} />
        <Content />
      </div>
    );
  }
}

export default MainPage;