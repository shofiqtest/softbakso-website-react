import React, { Component } from "react";
// import OurServices from "../App";
import OurServicesWEB from "../components/serviceCards/OurServicesWEB";
// import OurServices from './components/serviceCards/OurServices';
// import SkillsWeHave from './../components/skillsWeHave/SkillsWeHave';
import OurServicesMobile from "./../components/serviceCards/OurServicesMobile";

import MediaQuery from "react-responsive";
// import SkillsWeHave from "../App";

export default class Services extends Component {
  render() {
    return (
      <div>
        {/*<MediaQuery minDeviceWidth={750} device={{ deviceWidth: 1600 }}>*/}
        <MediaQuery minDeviceWidth={750}>
          <div id={"services"}>
            <OurServicesWEB />
          </div>
        </MediaQuery>

        <MediaQuery
          maxDeviceWidth={750}
          device={{ deviceWidth: 750 }}
        >
          <div id={"services"}>
            <OurServicesMobile />
          </div>
        </MediaQuery>
      </div>
    );
  }
}
