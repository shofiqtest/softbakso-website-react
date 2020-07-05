import React from "react";
// import logo from '../../assets/images/logo.svg';
import "./OurService.css";
import ServiceDetails from "./ServiceDetails";
import Services from "./DataForServices";
import forwardIcon from "../../assets/images/serviceIcons/Forwardicon/forwardicon.png";

const ServiceCards = [];

class OurServicesWEB extends React.Component {
  _projectManager = () => {
    alert("at _projectManager: ");
  };

  _downloadPDF = () => {
    alert("at _downloadPDF: ");
  };

  _shareOption = () => {
    alert("at _shareOption: ");
  };

  _onAppStore = () => {
    alert("at _onAppStore: ");
  };

  _onPlayStore = () => {
    alert("at _onPlayStore: ");
  };

  _getQuotation = () => {
    alert("at on _getQuotation: ");
  };

  render() {
    Services.map((oneService, index) => {
      ServiceCards[index] = (
        <div
          key={oneService.id}
          id={oneService.id}
          className="one-service__div"
        >
          <div
            data-toggle="modal"
            data-target={`#oneServiceModal-${oneService.id}`}
          >
            <div className="one-service__img__div">
              <img
                className="one-service__div--img"
                src={oneService.icon}
                alt="logo"
                width={"25%"}
              />
            </div>
            <p className="one-service__div--pHeading">{oneService.Heading}</p>
            <p
              className="one-service__div--p"
              style={{ textAlign: "left" }}
              dangerouslySetInnerHTML={{
                __html:
                  oneService.DescriptionText.length > 220
                    ? oneService.DescriptionText.substring(0, 220) + " ... "
                    : oneService.DescriptionText
              }}
            ></p>

            <div style={{ display: "flex" }}>
              <span className="one-service__bottom-div--span-LearnMore top-leftOneService">
                <a
                  style={{ color: "#000000" }}
                  data-toggle="modal"
                  data-target={`#oneServiceModal-${oneService.id}`}
                >
                  Learn More
                </a>
              </span>

              <span className="one-service__bottom-div--span-arrowForward bottom-leftOneService">
                <a className="removeAnchor" style={{ color: "#000000" }}>
                  <img src={forwardIcon} alt="logo" />
                </a>
              </span>
            </div>
          </div>
          <div
            id={`oneServiceModal-${oneService.id}`}
            key={oneService.id}
            className="modal fade"
            role="dialog"
            tabIndex="-1"
          >
            <ServiceDetails
              id={oneService.id}
              goToProjectManageer={this._projectManager}
              share={this._shareOption}
              downloadPDF={this._downloadPDF}
              goToAppStore={this._onAppStore}
              goToPlayStore={this._onPlayStore}
              getQuotation={this._getQuotation}
            />
          </div>
        </div>
      );
    });
    return (
      <div>
        <div
          style={{
            alignItems: "center",
            margin: "auto",
            paddingTop: "20px"
          }}
        >
          <p className="service--h1">Services Designed for you</p>
          <div
            style={{
              width: "10%",
              margin: "auto"
            }}
          >
            <hr className="service--hr" />
          </div>
          <div className="serviceDescription__h3--div">
            <p className="ourService__div--p">
              We believe we have created the most efficient SaaS for your
              business. Services with features that will convince you to use it
              for your SaaS business.
            </p>
          </div>
        </div>

        <div style={{ margin: "2%" }}>{ServiceCards}</div>
      </div>
    );
  }
}

export default OurServicesWEB;
