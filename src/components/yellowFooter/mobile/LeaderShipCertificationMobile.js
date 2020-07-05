import iconCertficate from "../../../assets/images/certification_and_awards_footer/iconCertficate.png";
import iconTrophy from "../../../assets/images/certification_and_awards_footer/iconCertificate.png";
import React from "react";

const LeaderShipCertificationMobile = () => {
  // const {
  //     detailedProcess, descriptionPicture
  // } = currentProcess;

  return (
    <div className="footerItemsLinearMobile">
      <div className="footer__span-2-3--imgDivMobile">
        <img
          className="footer__span-2-3__div--img"
          src={iconCertficate}
          alt="logo"
        />
      </div>
      <h4 className="footer__span--h4">LEADERSHIP CERTIFICATION</h4>
      <div
        style={{
          display: "flex",

          justifyContent: "center"
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
    </div>
  );
};

export default LeaderShipCertificationMobile;
