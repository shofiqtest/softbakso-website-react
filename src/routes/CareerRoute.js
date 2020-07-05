import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Footer from "../pages/Footer";
import JobsOpening from "../components/Career/JobsOpening";

export default class Career extends Component {
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
        <JobsOpening />
        <Footer />
      </div>
    );
  }
}
