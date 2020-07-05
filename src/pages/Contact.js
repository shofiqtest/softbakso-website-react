import React, { Component } from "react";
import IndustriesWeServed from "./../components/industriesWeServed/IndustriesWeServed";
import TheTeam from "./../components/theTeam/TheTeam";
import SubscriptionMobile from "./../components/subscription/SubscriptionMobile";
import SubscriptionWeb from "./../components/subscription/SubscriptionWeb";
import OurGlobarPartners from "./../components/ourGlobarPartners/OurGlobarPartners";

import OurPartnersThought from "../components/OurPartnersThought/OurPartnersThought";

import MediaQuery from "react-responsive";
import OurServices from "./Services";

export default class Contact extends Component {
  render() {
    return (
      <div id={"contact"}>
        <MediaQuery minDeviceWidth={750} device={{ deviceWidth: 1600 }}>
          <div id={"services"}>
            {/*<p>hi services</p>*/}
            {/* <OurServices/> */}
            <SubscriptionWeb />
          </div>
        </MediaQuery>

        <MediaQuery
          maxDeviceWidth={750}
          device={{ deviceWidth: 750 }}
          // for mobile only
        >
          <div id={"services"}>
            {/*<OurServicesMobile/>*/}
            <SubscriptionMobile />
            {/*<SkillsWeHave/>*/}
          </div>
        </MediaQuery>
        <IndustriesWeServed />
        {/* <TheTeam/> */}
        <OurGlobarPartners />
        <OurPartnersThought />
      </div>
    );
  }
}
