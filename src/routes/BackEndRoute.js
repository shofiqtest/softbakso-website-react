import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Footer from "../pages/Footer";
import BackEndDev from "../components/Career/JobRequirements/BackEndDev";

export default class BackEnd extends Component {
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
        <BackEndDev />
        <Footer />
      </div>
    );
  }
}
