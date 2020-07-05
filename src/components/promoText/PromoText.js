import React, { Component } from "react";
import "./PromoText.css";
import Typed from "typed.js";
import MediaQuery from "react-responsive";
import OurServicesWEB from "../serviceCards/OurServicesWEB";

// promoText: [
// ],
// 'Some <i>strings</i> are slanted',
// 'Some <strong>strings</strong> are bold',
// 'HTML characters &times; &copy;'

export default class PromoText extends Component {
  render() {
    return (
      <div>
        <MediaQuery minDeviceWidth={750}>
          {/*<p>hi services</p>*/}
          <TypedReactDemo
            strings={[
              "Build Your Website and Stand Out from the Rest",
              "Create a Mobile App, Make Real Solution For a Real Problem",
              "Engage with Your Customers, Maximize your Revenue Potential"
            ]}
          />
        </MediaQuery>

        <MediaQuery maxDeviceWidth={750} device={{ deviceWidth: 750 }}>
          <TypedReactDemoMobile
            strings={[
              "Build Your Website and Stand Out from the Rest",
              "Create a Mobile App, Make Real Solution For a Real Problem",
              "Engage with Your Customers, Maximize your Revenue Potential"
            ]}
          />
        </MediaQuery>
      </div>
    );
  }
}

class TypedReactDemoMobile extends React.Component {
  componentDidMount() {
    // If you want to pass more options as props, simply add
    // your desired props to this destructuring assignment.
    const { strings } = this.props;
    // You can pass other options here, such as typing speed, back speed, etc.
    const options = {
      strings: strings,
      loop: true,

      typeSpeed: 70,
      backSpeed: 80,
      backDelay: 1000
    };
    // this.el refers to the <span> in the render() method
    this.typed = new Typed(this.el, options);
  }

  componentWillUnmount() {
    // Make sure to destroy Typed instance on unmounting
    // to prevent memory leaks
    this.typed.destroy();
  }

  render() {
    return (
      <div
        className="homeTitlePromoTextMobile homeSubtitlePromoTextMobile"
        id="title"
        style={{ whiteSpace: "pre" }}
        ref={el => {
          this.el = el;
        }}
      />
    );
  }
}

class TypedReactDemo extends React.Component {
  componentDidMount() {
    // If you want to pass more options as props, simply add
    // your desired props to this destructuring assignment.
    const { strings } = this.props;
    // You can pass other options here, such as typing speed, back speed, etc.
    const options = {
      strings: strings,
      loop: true,

      typeSpeed: 70,
      backSpeed: 80,
      backDelay: 1000
    };
    // this.el refers to the <span> in the render() method
    this.typed = new Typed(this.el, options);
  }

  componentWillUnmount() {
    // Make sure to destroy Typed instance on unmounting
    // to prevent memory leaks
    this.typed.destroy();
  }

  render() {
    return (
      <div
        className="homeTitlePromoText homeSubtitlePromoText"
        id="title"
        style={{ whiteSpace: "pre" }}
        ref={el => {
          this.el = el;
        }}
      />
    );
  }
}
