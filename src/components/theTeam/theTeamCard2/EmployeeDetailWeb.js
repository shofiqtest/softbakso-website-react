import React from "react";
import PropTypes from "prop-types"; // ES6
import "../TheTeamHorizontalScroller.css";
import "./EmployeeDetailWEB.css";

// import iconViewMore from "../../../assets/images/emplyeeDetails_Card_Images/iconviewmore.png";

// 1
import fbIcon from "../../../assets/images/emplyeeDetails_Card_Images/iconfb.png";

// 2

import gitHubIcon from "../../../assets/images/emplyeeDetails_Card_Images/icongithub.png";
//3
import twitterIcon from "../../../assets/images/emplyeeDetails_Card_Images/icontwitter.png";

//4
import linkedIn from "../../../assets/images/emplyeeDetails_Card_Images/iconlinkedin.png";

//5
import skypeIcon from "../../../assets/images/emplyeeDetails_Card_Images/iconskype.png";

//6
import emailIcon from "../../../assets/images/emplyeeDetails_Card_Images/iconemail.png";
//7
import adobeIcon from "../../../assets/images/emplyeeDetails_Card_Images/iconPDF.png";

//8
// import degreeIcon from "../../../assets/images/emplyeeDetails_Card_Images/iconDegreeSet.png";
//9
// import skillSetIcon from "../../assets/images/emplyeeDetails_Card_Images/iconSkillset.png";

// import skillImage from "./../assets/iconSkillset.png";

// import PropTypes from 'prop-types';

const EmployeeDetailWeb = ({ property }) => {
  const {
    index,
    picture,
    city,
    address,
    bedrooms,
    bathrooms,
    carSpaces,
    employeeDetails,
    skype,
    email,
    facebook,
    gitHUb,
    twitter,
    linkedinprofile,
    adobe
  } = property;
  return (
    <div
      // className="App.js"
      className="employeeDtailWeb"
    >
      <div className="row">
        <div className="col-sm-8 col-md-8 col-lg-12 col-xl-12 ">
          <span className="EmployeeDetailWeb-FirstSpan">
            <div
              style={{
                justifyContent: "flex-start"
              }}
            >
              <p className="one-employeeDtail-Description-Web">
                {" "}
                {employeeDetails}{" "}
              </p>
            </div>
          </span>
        </div>

        {/* <div className="col-sm-2 col-md-2 col-lg-2 col-xl-2">
                   <span
                       className="EmployeeDetailWeb-other-Spans">
                     <div className="one-EmpQuality__img__divWEB"
                     >
                          <img className="EmployeeDetail__div-2-3--imgWEB"
                               src={degreeIcon}
                               alt="logo"
                          />
                           </div>
                          <p className="one-EmpQuality-heading-web"
                          >Education and Certification
                         </p>

                 </span>

                </div>
                <div className="col-sm-2
                     col-md-2
                      col-lg-2
                      col-xl-2">
                       <span className="EmployeeDetailWeb-other-Spans">
                             <div className="one-EmpQuality__img__divWEB"
                             >
                                    <img className="EmployeeDetail__div-2-3--imgWEB"
                                         src={skillImage}
                                         alt="logo"
                                    />
                                </div>
                               <p className="one-EmpQuality-heading-web"

                               >Professional Skills
                                </p>

                    </span>
                </div> */}
      </div>

      {/*<div className="EMP-Description-Certification-Skills-web"*/}
      {/*>*/}
      {/**/}
      {/*</div>*/}

      <div className="EmpLinksWeb">
        {/* http://localhost:3000/+/Portfolio/%7Bindex%7D*/}
        {/*http://localhost:3000/Portfolio/0*/}
        {/*<img src=`${process.env.PUBLIC_URL}/images/example.png`*/}

        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            // display: 'flex',
            // justifyContent: 'flex-end',
            marginTop: "22px",
            marginBottom: "22px"
          }}
        >
          {/*since this is the first element margin not added here*/}
          {/*className="socialIconsStyle"*/}
          <span>
            <a
              className="removeAnchor"
              style={{ color: "#000000" }}
              href={property.facebook}
            >
              <img src={fbIcon} alt="facebook" />
            </a>
          </span>
          <span className="socialIconsStyle">
            <a
              className="removeAnchor"
              style={{ color: "#000000" }}
              href={property.gitHUb}
            >
              <img src={gitHubIcon} alt="github" />
            </a>
          </span>

          <span className="socialIconsStyle">
            <a
              className="removeAnchor"
              style={{ color: "#000000" }}
              href={property.twitter}
            >
              <img src={twitterIcon} alt="twitter" />
            </a>
          </span>

          <span className="socialIconsStyle">
            <a
              className="removeAnchor"
              style={{ color: "#000000" }}
              href={property.linkedinprofile}
            >
              <img src={linkedIn} alt="linkedin" />
            </a>
          </span>

          <span className="socialIconsStyle">
            <a
              className="removeAnchor"
              style={{ color: "#000000" }}
              href={property.skype}
            >
              <img src={skypeIcon} alt="skype" />
            </a>
          </span>

          <span className="socialIconsStyle">
            <a
              className="removeAnchor"
              style={{ color: "#000000" }}
              href={property.email}
            >
              <img src={emailIcon} alt="email" />
            </a>
          </span>

          <span className="socialIconsStyle">
            <a
              className="removeAnchor"
              style={{ color: "#000000" }}
              href={property.adobe}
            >
              <img src={adobeIcon} alt="adobepdf" />
            </a>
          </span>

          {/*</div>*/}
        </div>
      </div>
    </div>
  );
};

EmployeeDetailWeb.propTypes = {
  // import PropTypes from 'prop-types'; // ES6
  property: PropTypes.object.isRequired
};

export default EmployeeDetailWeb;
