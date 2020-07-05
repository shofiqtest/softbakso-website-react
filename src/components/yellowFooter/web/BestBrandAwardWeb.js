import React from "react";
import iconGlobalAward from "../../../assets/images/certification_and_awards_footer/iconAwards.png";
import iconMedal from "../../../assets/images/certification_and_awards_footer/iconMedal.png";

const BestBrandAwardWeb = () => {
  return (
    <span className="footerItemsLinearWeb" style={{ visibility: "hidden" }}>
      <div className="footer__span-2-3--imgDiv">
        <img
          className="footer__span-2-3__div--img"
          // top image in this span
          src={iconGlobalAward}
          alt="logo"
        />
      </div>

      <h4 className="footer__span--h4Web">GLOBAL AWARDS</h4>

      <div
        style={{
          display: "flex"
        }}
      >
        <span style={{}}>
          <a className="removeAnchor" style={{ color: "#000000" }} href="#">
            <img src={iconMedal} alt="logo" />
          </a>
        </span>
        <span className="footer__nav--link-Award">
          <a style={{ color: "#000000" }} href="#">
            BEST BRAND AWARDS
          </a>
        </span>
      </div>

      {/*BEST BRAND AWARD */}
    </span>
  );
};

export default BestBrandAwardWeb;
