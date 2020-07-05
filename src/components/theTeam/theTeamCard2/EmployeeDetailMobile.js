import React from "react";
import PropTypes from "prop-types"; // ES6
import "../TheTeamHorizontalScrollerWeb.css";
import "./EmployeeDetailMobile.css";

// import iconViewMore from "../../../assets/images/emplyeeDetails_Card_Images/iconviewmore.png";

// 1
import fbIcon from "../../../assets/images/emplyeeDetails_Card_Images/iconfb.png";
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

const EmployeeDetailMobile = ({ property }) => {
  const {
    index,
    picture,
    city,
    address,
    bedrooms,
    bathrooms,
    carSpaces,
    employeeDetails
  } = property;
  return (
    <div
      // className="App.js"
      className="card2Mobile"
    >
      {/*1st part in the left most in the footer*/}
      <span className="EmployeeDetailMobile-FirstSpan">
        <div
          style={{
            justifyContent: "flex-start",
            marginRight: "8px"
            // marginLeft: '7px',
            // width:'90%',
          }}
        >
          <p className="EmployeeDescription-ParagraphMobile">
            {employeeDetails}
          </p>
        </div>

        {/*2nd part from left in the Card2 ==> employeed details card*/}
        {/*2nd */}
        <div
          style={{
            display: "flex",
            // justifyContent: 'space-between'
            justifyContent: "space-around"
          }}
        >
          {/* <span
                className="EmployeeEducation-span-Mobile"
            >
                 <div className="employeeEducation-image-DivMobile">
                            <img className="EmployeeDetail__div-2-3--img"
                                 src={degreeIcon}
                                 alt="logo"
                            />
                        </div>

                     <p className="EmployeeEducation-paragraph-Mobile-span"
                        style=
                            {{
                                display: 'flex',
                                // justifyContent: 'flex-start',
                                justifyContent: 'center',
                            }}
                     >Education & Certification
                        </p>

    </span> */}
          {/* 3rd
                    <span className="EmployeeEducation-span-Mobile">



         <div
             style={{
                 justifyContent: 'center',
                 alignItems: 'center'
             }}>
                <img className="card2__div-2-3--img"
                     src={skillImage}
                     alt="logo"

                />
                        </div>
                     <p className="EmployeeEducation-paragraph-Mobile-span"
                        style=
                            {{

                                display: 'flex',
                                // justifyContent: 'center',
                            }}
                     >Professional skills
                        </p>
    </span> */}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: "22px",
            marginRight: "22px"
          }}
        >
          {/*since this is the first element margin not added here*/}
          {/*className="socialIconsStyle"*/}
          <span>
            <a className="removeAnchor" style={{ color: "#000000" }} href="#">
              <img src={fbIcon} alt="logo" />
            </a>
          </span>
          <span className="socialIconsStyle">
            <a className="removeAnchor" style={{ color: "#000000" }} href="#">
              <img src={gitHubIcon} alt="logo" />
            </a>
          </span>

          <span className="socialIconsStyle">
            <a className="removeAnchor" style={{ color: "#000000" }} href="#">
              <img src={twitterIcon} alt="logo" />
            </a>
          </span>

          <span className="socialIconsStyle">
            <a className="removeAnchor" style={{ color: "#000000" }} href="#">
              <img src={linkedIn} alt="logo" />
            </a>
          </span>

          <span className="socialIconsStyle">
            <a className="removeAnchor" style={{ color: "#000000" }} href="#">
              <img src={skypeIcon} alt="logo" />
            </a>
          </span>

          <span className="socialIconsStyle">
            <a className="removeAnchor" style={{ color: "#000000" }} href="#">
              <img src={emailIcon} alt="logo" />
            </a>
          </span>

          <span className="socialIconsStyle">
            <a className="removeAnchor" style={{ color: "#000000" }} href="#">
              <img src={adobeIcon} alt="logo" />
            </a>
          </span>

          {/*</div>*/}
        </div>
      </span>
    </div>
  );
};

EmployeeDetailMobile.propTypes = {
  // import PropTypes from 'prop-types'; // ES6
  property: PropTypes.object.isRequired
};

export default EmployeeDetailMobile;
