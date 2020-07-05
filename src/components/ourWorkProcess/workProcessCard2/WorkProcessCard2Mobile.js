import React from "react";
import PropTypes from "prop-types"; // ES6
import "../OurWorkProcessSlider.css";
import "./WorkProcessCardMobile.css";

// import iconViewMore from "../../../assets/images/emplyeeDetails_Card_Images/iconviewmore.png";

// import meetingImage from "./../assets/meetingimage.png";

// import PropTypes from 'prop-types';

const WorkProcessCard2Mobile = ({ currentProcess }) => {
  const { detailedProcess, descriptionPicture } = currentProcess;
  return (
    <div id="card2" className="workProcessCard2_main_divMobile">
      <div
        style={{
          display: "flex",
          flexDirection: "column"
        }}
      >
        <span style={{ flex: "1" }}>
          <img
            className="meeting-imageMobile"
            src={descriptionPicture}
            alt="logo"
          />
        </span>

        {/*1st part in the left most in the footer*/}
        <span className="WorkProcessCard2TopMarginMobile">
          <div className="workProcessCard2__span1--outerDivMobile">
            <div
              style={{
                justifyContent: "flex-start",
                display: "flex",
                alignItems: "center",
                fontSize: "10px"
                // justifyContent: 'center',
              }}
            >
              <p
                style={{
                  // textAlign:'left',
                  textAlign: "justify",
                  textJustify: "inter-word"
                }}
                dangerouslySetInnerHTML={{ __html: detailedProcess }}
              ></p>
            </div>
          </div>
        </span>
        {/*2nd part from left in the Card2 ==> employeed details card*/}
        {/*2nd */}
      </div>
    </div>
  );
};

WorkProcessCard2Mobile.propTypes = {
  // import PropTypes from 'prop-types'; // ES6
  currentProcess: PropTypes.object.isRequired
};

export default WorkProcessCard2Mobile;
