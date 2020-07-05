import React from "react";
// import logo from '../../assets/images/logo.svg';
import "./OurService.css";
import ServiceDetails from "./ServiceDetails";

import forwardIcon from "../../assets/images/serviceIcons/Forwardicon/forwardicon.png";

// import App from "../appArefin/App";

import Services from "./DataForServices";

const ServiceCards = [];

// const A= (<h1>Hello</h1>);

class OurServices extends React.Component {
  newAction = () => {
    // oneParameter
    // //console.log('at newAction: ');
    this.setState({
      // oneEmployee: this.state.allEmployees[newIndex],
    });
  };

  render() {
    Services.map((oneService, index) => {
      ServiceCards[index] = (
        <div
          key={oneService.id}
          id={oneService.id}
          className="one-service__div"
        >
          <div className="one-service__img__div">
            <img
              className="one-service__div--img"
              style={{}}
              src={oneService.icon}
              alt="logo"
              width={"25%"}
            />
          </div>
          <p className="one-service__div--pHeading">{oneService.Heading}</p>
          <p className="one-service__div--p" style={{ textAlign: "left" }}>
            {oneService.DescriptionText.length > 120
              ? oneService.DescriptionText.substring(0, 120) + " ... "
              : oneService.DescriptionText}
          </p>

          <div
            style={{
              display: "flex"
            }}
          >
            <span
              className="one-service__bottom-div--span-LearnMore top-leftOneService"
              style={{}}
            >
              <a style={{ color: "#000000" }}>Learn More</a>
            </span>

            {/*<div>*/}
            {/*<a className="play-btn homeBottom" href="#"  data-toggle="modal" data-target="#myModal"></a>*/}
            {/*</div>*/}
            <div
              id="myModal2"
              className="modal fade"
              role="dialog"
              tabindex="-1"
            >
              {/*<div className="modal-dialog">*/}
              <ServiceDetails
                descriptionText={oneService.DescriptionText}
                key={oneService.id}
                localImageResource={index.toString()}
                oneServiceData={oneService}
                actionLink={this.newAction}
                serviceIcon={oneService.icon}
              />
              {/*</div>*/}
            </div>

            <span
              style={
                {
                  // paddingTop:'90',
                  // marginLeft:110
                }
              }
              className="one-service__bottom-div--span-arrowForward bottom-leftOneService"
            >
              <a
                className="removeAnchor"
                style={{ color: "#000000" }}
                href="#"
                data-toggle="modal"
                data-target="#myModal2"
              >
                <img src={forwardIcon} alt="logo" />
              </a>
            </span>
          </div>
        </div>
      );
    });
    // className="App"
    // return A;
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

        <div
          style={{
            margin: "2%"
          }}
        >
          {ServiceCards}
        </div>
      </div>
    );
  }
}

export default OurServices;
