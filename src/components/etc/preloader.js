import React, { Component } from "react";

const DELAY_TIME = 250;

class Preloader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showingPreloader: true,
    };
  }

  componentDidMount() {
    setTimeout(this.setState({ showingPreloader: false }), DELAY_TIME);
  }

  render() {
    return <div id="preloader" className={this.state.showingPreloader ? "show" : "hide"}></div>;
  }
}

export default Preloader;
