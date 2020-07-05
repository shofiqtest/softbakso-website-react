import React from "react";
import "./YellowFooter.css";

import FirstColumnFooterLogoDivWeb from "./web/FirstColumnFooterLogoDivWeb";
import BestBrandAwardWeb from "./web/BestBrandAwardWeb";
import LeaderShipCertificationWeb from "./web/LeaderShipCertificationWeb";
import QuickNavFooterWeb from "./web/QuickNavFooterWeb";

// const A= (<h1>Hello</h1>);

class YellowFooterWeb extends React.Component {
  render() {
    return (
      <div className="bg-image">
        <div className="footer">
          <FirstColumnFooterLogoDivWeb />
          <LeaderShipCertificationWeb />
          <BestBrandAwardWeb />
          <QuickNavFooterWeb />
        </div>
        <div className="copyright">
          <p>&copy; Softbakso Limited</p>
        </div>
      </div>
    );
  }
}

export default YellowFooterWeb;
