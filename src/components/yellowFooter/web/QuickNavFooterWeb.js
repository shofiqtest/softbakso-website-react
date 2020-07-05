import React from "react";

const QuickNavFooterWeb = () => {
  return (
    <span className="footerItemsLinearNumber4-item-footer">
      <div
        style={{
          justifyContent: "flex-start",
          alignItems: "flex-start"
        }}
      ></div>
      {/* <p
                        className=
                            "footer__span--h4-web"
                    >
                        QUICK NAV.
                        </p> */}

      <div className="footer__nav--link">
        {/*<i className="fas fa-chevron-right"></i>*/}
        <a className="paddingForArrowWeb" href="#">
          Sitemap
        </a>
      </div>

      <div className="footer__nav--link">
        {/*<i className="fas fa-chevron-right"></i>*/}
        <a className="paddingForArrowWeb" href="#">
          Company Profile
        </a>
      </div>

      <div className="footer__nav--link">
        {/*<i className="fas fa-chevron-right"></i>*/}
        <a className="paddingForArrowWeb" href="#">
          FAQ
        </a>
      </div>
    </span>
  );
};

export default QuickNavFooterWeb;

// const BestBrandAwardMobile = () => {
