import iconGlobalAward from "../../../assets/images/certification_and_awards_footer/iconAwards.png";
import iconMedal from "../../../assets/images/certification_and_awards_footer/iconMedal.png";
import React from "react";

const BestBrandAwardMobile = () => {
  // const {
  //     detailedProcess, descriptionPicture
  // } = currentProcess;

  return (
    <div className="footerItemsLinearMobile">
      <div className="footer__span-2-3--imgDivMobile">
        <img
          className="footer__span-2-3__div--img"
          // top image in this span
          src={iconGlobalAward}
          alt="logo"
        />
      </div>

      <h4 className="footer__span--h4">GLOBAL AWARDS</h4>

      {/*BEST BRAND AWARD */}
      <div
        style={{
          display: "flex",

          justifyContent: "center"
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
    </div>
  );
};

export default BestBrandAwardMobile;
