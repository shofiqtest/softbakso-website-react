import React from "react";
import "./YellowFooterMobile.css";
import FirstColumnFooterLogoDiv from "./mobile/FirstColumnFooterLogoDiv";
import QuickNavFooterMobile from "./mobile/QuickNavFooterMobile";

const YellowFooterMobile = () => {
  return (
    <div className="footerMobile">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between"
        }}
      >
        <FirstColumnFooterLogoDiv />
        <QuickNavFooterMobile />
      </div>
      <div className="copyright">
        <p>&copy; Softbakso Limited</p>
      </div>
    </div>
  );
};

export default YellowFooterMobile;
