import React, { Component } from "react";
import YellowFooterWeb from "../components/yellowFooter/YellowFooterWeb";
import YellowFooterMobile from "../components/yellowFooter/YellowFooterMobile";
import MediaQuery from "react-responsive";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <MediaQuery minDeviceWidth={750} device={{ deviceWidth: 1600 }}>
          <div id={"services"}>
            <YellowFooterWeb />
          </div>
        </MediaQuery>

        <MediaQuery
          maxDeviceWidth={750}
          device={{ deviceWidth: 750 }}
          // for mobile only
        >
          <div id={"services"}>
            <YellowFooterMobile />
          </div>
        </MediaQuery>
      </div>
    );
  }
}
