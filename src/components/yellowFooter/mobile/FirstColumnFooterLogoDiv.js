import React from "react";

import softBaksoLogo from "../../../assets/images/certification_and_awards_footer/Logo.png";
import fbIcon from "../../../assets/images/certification_and_awards_footer/social_icons/iconFb.png";
import youtubeIcon from "../../../assets/images/certification_and_awards_footer/social_icons/iconYoutube.png";
import linkedInIcon from "../../../assets/images/certification_and_awards_footer/social_icons/iconLinedin.png";
import dribbleIcon from "../../../assets/images/certification_and_awards_footer/social_icons/icondribble.png";

const FirstColumnFooterLogoDiv = () => {
  return (
    <div className="footerItemsLinearMobile">
      <div className="footer_SoftBaksoLogo_Mobile_Div">
        <img
          className="SoftBakso_FooterLogoImage_Mobile"
          src={softBaksoLogo}
          alt="logo"
        />
      </div>

      <div className="paragraph-footer-adressMobile">
        <p
          style={{
            marginBottom: "0px",
            paddingBottom: "0px",
            fontSize: "8px"
          }}
        >
          H#13, R#11, Middle Badda,Dhaka-1214.
        </p>

        <p
          style={{
            marginBottom: "0px",
            paddingBottom: "0px",
            fontSize: "8px",
            textAlign: "left"
          }}
        >
          <a
            className="removeAnchor"
            style={{
              color: "#000000",

              fontSize: "8px"
            }}
            href="www.softbakso.com"
          >
            www.softbakso.com
          </a>
          >
        </p>

        <p
          style={{
            marginBottom: "0px",
            paddingBottom: "0px",
            fontSize: "8px",
            textAlign: "left"
          }}
        >
          <a
            target="_blank"
            className="removeAnchor"
            style={{
              color: "#000000",
              fontSize: "8px"
            }}
            href="mailto:info@softbakso.com?Subject=Hello%20again"
            target="_top"
          >
            info@softbakso.com
          </a>
          >
        </p>
      </div>
      <span className="footer__div-1st--div-hrMobile">
        <hr className="footer__span-1st--hrMobile" />
      </span>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between"
          // justifyContent: 'space-between'
          // justifyContent: 'center'
        }}
      >
        <span style={{}}>
          <a
            className="socialIcon-yellowFooter-mobile-a"
            href="https://www.facebook.com/softbakso"
          >
            <img
              className="socialIconsFooter-mobile-img"
              src={fbIcon}
              alt="logo"
            />
          </a>
        </span>
        <span
          style={
            {
              // paddingTop: '90',
              // marginLeft: 110
            }
          }
        >
          <a
            target="_blank"
            className="socialIcon-yellowFooter-mobile-a"
            href="#"
          >
            <img
              className="socialIconsFooter-mobile-img"
              src={youtubeIcon}
              alt="logo"
            />
          </a>
        </span>

        <span
          style={
            {
              // paddingTop: '90',
              // marginLeft: 110
            }
          }
        >
          <a
            target="_blank"
            className="socialIcon-yellowFooter-mobile-a"
            href="https://www.linkedin.com/company/softbakso-limited"
          >
            <img
              className="socialIconsFooter-mobile-img"
              src={linkedInIcon}
              alt="logo"
            />
          </a>
        </span>

        <span style={{}}>
          <a
            target="_blank"
            className="socialIcon-yellowFooter-mobile-a"
            href="#"
          >
            <img
              className="socialIconsFooter-mobile-img"
              src={dribbleIcon}
              alt="logo"
            />
          </a>
        </span>
      </div>
    </div>
  );
};

export default FirstColumnFooterLogoDiv;
