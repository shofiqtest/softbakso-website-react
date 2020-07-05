import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import About from "../pages/About";
import Career from "../pages/Career";
import Services from "../pages/Services";
import Contact from "../pages/Contact";
import Portfolio from "../pages/Portfolio";
// import OurPartnersThought from "../components/OurPartnersThought/OurPartnersThought";
// import HappyMoment from "../pages/HappyMoments";
import Footer from "../pages/Footer";
import "../assets/styles/pageStyle.css";
import "../assets/styles/blinkButton.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.handleRoute = this.handleRoute.bind(this);
  }

  handleRoute() {
    //console.log(this.props.location)
  }

  render() {
    return (
      <div className="App overFlow">
        <Navbar loc={this.props.location} handleSetActive={this.handleRoute} />
        <Home id="home" />
        <About id="about" />
        <Services id="services" />
        <Portfolio id="portfolio" />
        <Contact id="contact" />
        <Career id="career" />
        <Footer id="footer" />
      </div>
    );
  }
}

export default App;
