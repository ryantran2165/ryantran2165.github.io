import React, { Component } from "react";

class Preloader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showingPreloader: true,
    };
  }

  componentDidMount() {
    const delayTime = 250;
    setTimeout(this.setState({ showingPreloader: false }), delayTime);
  }

  render() {
    return <div id="preloader" className={this.state.showingPreloader ? "show" : "hide"}></div>;
  }
}

export default Preloader;
