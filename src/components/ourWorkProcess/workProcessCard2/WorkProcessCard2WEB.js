import React from "react";
import PropTypes from "prop-types"; // ES6
// import '../OurWorkProcessSlider.css';
import "./WorkProcessCardWEB.css";

// import iconViewMore from "../../../assets/images/emplyeeDetails_Card_Images/iconviewmore.png";

// import meetingImage from "./../assets/meetingimage.png";

// import PropTypes from 'prop-types';

const WorkProcessCard2WEB = ({ currentProcess }) => {
  const { detailedProcess, descriptionPicture } = currentProcess;
  return (
    <div
      // className="App.js"
      id="card2"
      className="workProcessCard2_main_div"
    >
      <div
        style={{
          display: "flex",
          paddingLeft: "50px"
        }}
      >
        {/*1st part in the left most in the footer*/}
        <span className="WorkProcessCard2TopMargin" style={{ flex: "0.7" }}>
          <div className="workProcessCard2__span1--outerDiv">
            <div
              style={{
                justifyContent: "flex-start",
                display: "flex",
                alignItems: "center"
                // justifyContent: 'center',
              }}
            >
              <p
                style={{
                  textAlign: "left"
                }}
                dangerouslySetInnerHTML={{ __html: detailedProcess }}
              ></p>
            </div>

            {/*<div*/}
            {/*style={{*/}
            {/*display: 'flex',*/}
            {/*marginBottem:'20px',*/}
            {/*}}*/}
            {/*>*/}
            {/*</div>*/}
          </div>
        </span>
        {/*2nd part from left in the Card2 ==> employeed details card*/}
        {/*2nd */}
        <span className="WorkProcessCard2TopMargin" style={{ flex: "0.3" }}>
          <img
            className="meeting-imageWEB"
            src={descriptionPicture}
            alt="logo"
          />
        </span>
      </div>
    </div>
  );
};

WorkProcessCard2WEB.propTypes = {
  // import PropTypes from 'prop-types'; // ES6
  currentProcess: PropTypes.object.isRequired
};

export default WorkProcessCard2WEB;
