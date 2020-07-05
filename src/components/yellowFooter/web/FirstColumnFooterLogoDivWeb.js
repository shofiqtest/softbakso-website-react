import React from "react";
import softBaksoLogo from "../../../assets/images/certification_and_awards_footer/Logo.png";
import fbIcon from "../../../assets/images/certification_and_awards_footer/social_icons/iconFb.png";
import youtubeIcon from "../../../assets/images/certification_and_awards_footer/social_icons/iconYoutube.png";
import linkedInIcon from "../../../assets/images/certification_and_awards_footer/social_icons/iconLinedin.png";
import dribbleIcon from "../../../assets/images/certification_and_awards_footer/social_icons/icondribble.png";

const FirstColumnFooterLogoDivWeb = () => {
  return (
    <span className="footerItemsLinearLogo">
      <div
        style={{
          justifyContent: "flex-start"
        }}
      >
        <img src={softBaksoLogo} alt="logo" width={"40%"} />
      </div>
      <div
        style={{
          justifyContent: "flex-start",
          paddingTop: "20px"
        }}
      >
        <p className="noSpaceInP-Footer-Web" style={{ border: "none" }}>
          H#13, R#11, Middle Badda,
        </p>
        <p className="noSpaceInP-Footer-Web" style={{ border: "none" }}>
          Dhaka-1214.
        </p>
        <p className="noSpaceInP-Footer-Web" style={{ border: "none" }}>
          info@softbakso.com
        </p>
        <p className="noSpaceInP-Footer-Web" style={{ border: "none" }}>
          www.softbakso.com
        </p>
      </div>
      <div className="footer__span-1st--div-hr">
        <hr className="footer__span-1st--hr" />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between"
        }}
      >
        <span
          style={
            {
              // paddingTop: '90',
              // marginLeft: 110
            }
          }
        >
          <a target="_blank"
            className="removeAnchor"
            style={{ color: "#000000" }}
            href="https://www.facebook.com/softbakso"
          >
            <img src={fbIcon} alt="logo" />
          </a>
        </span>
        <span>
          <a target="_blank" className="removeAnchor" style={{ color: "#000000" }} href="#">
            <img src={youtubeIcon} alt="logo" />
          </a>
        </span>

        <span>
          <a target="_blank"
            className="removeAnchor"
            style={{ color: "#000000" }}
            href="https://www.linkedin.com/company/softbakso-limited"
          >
            <img src={linkedInIcon} alt="logo" />
          </a>
        </span>

        <span>
          <a target="_blank" className="removeAnchor" style={{ color: "#000000" }} href="#">
            <img src={dribbleIcon} alt="logo" />
          </a>
        </span>
      </div>
    </span>
  );
};

export default FirstColumnFooterLogoDivWeb;
