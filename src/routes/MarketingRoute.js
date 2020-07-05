import React, { Component } from "react";

import DigitalMarketing from "../components/Career/JobRequirements/DigitalMarketing";
import Navbar from "../components/Navbar";
import Footer from "../pages/Footer";

export default class Marketing extends Component {
  constructor(props) {
    super(props);
    this.handleRoute = this.handleRoute.bind(this);
  }

  handleRoute() {
    if (this.props.location.pathname != "/") {
      this.props.history.push("/");
    }
  }

  render() {
    return (
      <div>
        <Navbar loc={this.props.location} handleSetActive={this.handleRoute} />
        <DigitalMarketing />
        <Footer />
      </div>
    );
  }
}
