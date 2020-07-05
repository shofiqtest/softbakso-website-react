import React from "react";

import iconCertficate from "../../../assets/images/certification_and_awards_footer/iconCertficate.png";
import iconTrophy from "../../../assets/images/certification_and_awards_footer/iconCertificate.png";

const BestBrandAwardWeb = () => {
  return (
    <span className="footerItemsLinearWeb" style={{ visibility: "hidden" }}>
      <div className="footer__span-2-3--imgDiv">
        <img
          className="footer__span-2-3__div--img"
          src={iconCertficate}
          alt="logo"
        />
      </div>
      <h4 className="footer__span--h4Web">LEADERSHIP CERTIFICATION</h4>

      <div
        style={{
          display: "flex"
        }}
      >
        <span style={{}}>
          <a className="removeAnchor" style={{ color: "#000000" }} href="#">
            <img src={iconTrophy} alt="logo" />
          </a>
        </span>
        <span className="footer__nav--link-Award">
          <a style={{ color: "#000000" }} href="#">
            ISO CERTIFICATION
          </a>
        </span>
      </div>
    </span>
  );
};

export default BestBrandAwardWeb;
