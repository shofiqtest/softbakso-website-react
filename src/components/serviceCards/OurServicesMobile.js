import React from "react";
// import logo from '../../assets/images/logo.svg';
import "./OurService.css";

import forwardIcon from "../../assets/images/serviceIcons/Forwardicon/forwardicon.png";

// SERVICE ICONS

import ServiceDetails from "./ServiceDetails";

// import App from "../appArefin/App";

// import DataForServices from './DataForServices';

import Services from "./DataForServices";
const ServiceCards = [];

// const A= (<h1>Hello</h1>);

class OurServicesMobile extends React.Component {
  _projectManager = () => {
    // oneParameter
    // //console.log('at _projectManager: ');
    alert("at _projectManager: ");

    // this.setState({
    //     // oneEmployee: this.state.allEmployees[newIndex],
    //
    //
    // });
  };

  _downloadPDF = () => {
    // oneParameter
    // //console.log('at newAction: ');
    alert("at _downloadPDF: ");
    // this.setState({
    //     // oneEmployee: this.state.allEmployees[newIndex],

    // });
  };

  _shareOption = () => {
    // oneParameter
    // //console.log('at newAction: ');
    alert("at _shareOption: ");
  };

  _onAppStore = () => {
    // oneParameter
    // //console.log('at newAction: ');
    alert("at _onAppStore: ");
  };

  _onPlayStore = () => {
    // oneParameter
    alert("at _onPlayStore: ");
  };

  _getQuotation = () => {
    // oneParameter
    alert("at on _getQuotation: ");
  };

  render() {
    Services.map((oneService, index) => {
      ServiceCards[index] = (
        <div
          key={oneService.id}
          id={oneService.id}
          className="one-service__divMobile"
        >
          <div
            data-toggle="modal"
            data-target={`#oneServiceModal-${oneService.id}`}
          >
            <div className="one-service__img__div">
              <img
                className="one-service__div--img"
                style={{}}
                src={oneService.icon}
                // className="App-logo"
                alt="logo"
                width={"25%"}
                // height={'20%'}
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
            >
              {/*{oneService.DescriptionText.length >120?*/}
              {/*(oneService.DescriptionText.substring(0,120))+(' ... '):*/}
              {/*oneService.DescriptionText}*/}
            </p>

            <div
              style={{
                display: "flex",
                // justifyContent:'space-between',
                justifyContent: "space-around"
              }}
            >
              <span className="one-service__bottom-div--span" style={{}}>
                <a style={{ color: "#000000" }}>Learn More</a>
              </span>

              <span style={{ paddingTop: "90", marginLeft: 110 }}>
                <a
                  className="removeAnchor"
                  style={{ color: "#000000" }}
                  href="#"
                  data-toggle="modal"
                  data-target={`#oneServiceModal-${oneService.id}`}
                >
                  <img src={forwardIcon} alt="logo" />
                </a>
              </span>
            </div>
          </div>
          {/*MODAL*/}
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

          {/*MODAL*/}
        </div>
      );
    });
    // className="App"
    // return A;
    return (
      <div className="OurServicesMobile-mainDiv">
        <div
          style={{
            alignItems: "center",
            margin: "auto"
          }}
        >
          <h1 className="service--headingMobile">Services Designed for you</h1>

          <div
            style={{
              width: "40%",
              margin: "auto"
            }}
          >
            <hr className="service--hr" />
          </div>
          <div className="serviceDescription-divMobile">
            <p className="ourService__div--p">
              We believe we have created the most efficient SaaS for your
              business. Services with features that will convince you to use it
              for your SaaS business.
            </p>
          </div>
        </div>

        <div
          style={{
            // display: 'content',
            // flex: 1,
            // flexDirection: 'row',
            margin: "2%"
          }}
        >
          {ServiceCards}
        </div>
      </div>
    );
  }
}

export default OurServicesMobile;
