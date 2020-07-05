<<<<<<< HEAD
import React from 'react';
import PropTypes from 'prop-types'; // ES6
import '../TheTeamHorizontalScroller.css';
import './TheTeamCard2.css';

import iconViewMore from "../../../assets/images/emplyeeDetails_Card_Images/iconviewmore.png";

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
import degreeIcon from "../../../assets/images/emplyeeDetails_Card_Images/iconDegreeSet.png";
//9
// import skillSetIcon from "../../assets/images/emplyeeDetails_Card_Images/iconSkillset.png";

import skillImage from "./../assets/iconSkillset.png";







// import PropTypes from 'prop-types';

const TheTeamCard2 = ({property}) => {
    const {
        index, picture, city, address, bedrooms,
        bathrooms, carSpaces, employeeDetails
    } = property;
    return (

        <div
            // className="App.js"
            id="TheTeamCard2Mobile" className="card2"

        >
            {/*1st part in the left most in the footer*/}
            <span
                className="theTeamCard2TopMargin"
                style={{width:'50%'}}
            >

         <div
             style={{
                 justifyContent: 'flex-start',
             }}>
               <p
                   style={{textAlign:'left'}}>
                            {employeeDetails.length >200 ?
                                (employeeDetails.substring(0,200))+(' ... '):
                                employeeDetails}
                        </p>
                        </div>
                     <div style={{

                         display: 'flex',
                         justifyContent: 'flex-start'

                     }}
                     >
             <span style={{
             }}>
                                <a className="removeAnchor" style={{color: '#000000',}}
                                   href="#">
                                    <img
                                        src={iconViewMore}
                                        alt="logo"
                                    />
                                </a>
                                </span>
                     </div>



        <div style={{

            display: 'flex',
            justifyContent: 'flex-start',
            marginTop:'22px',
        }}
        >

            {/*since this is the first element margin not added here*/}
            {/*className="socialIconsStyle"*/}
            <span  >
                                <a className="removeAnchor" style={{color: '#000000',}}
                                   href="#">

                                    <img
                                        src={fbIcon}

                                        alt="logo"

                                    />
                                </a>
                                </span>
              <span className="socialIconsStyle" >

                                <a className="removeAnchor" style={{color: '#000000',}}
                                   href="#">

                                    <img
                                        src={gitHubIcon}

                                        alt="logo"

                                    />
                                </a>
                                </span>

            <span className="socialIconsStyle" >

                                <a className="removeAnchor" style={{color: '#000000',}}
                                   href="#">

                                    <img
                                        src={twitterIcon}

                                        alt="logo"

                                    />
                                </a>
                                </span>

             <span className="socialIconsStyle" >

                                <a className="removeAnchor" style={{color: '#000000',}}
                                   href="#">

                                    <img
                                        src={linkedIn}

                                        alt="logo"

                                    />
                                </a>
                                </span>

                <span className="socialIconsStyle" >

                                <a className="removeAnchor" style={{color: '#000000',}}
                                   href="#">

                                    <img
                                        src={skypeIcon}

                                        alt="logo"

                                    />
                                </a>
                                </span>

               <span className="socialIconsStyle" >

                                <a className="removeAnchor" style={{color: '#000000',}}
                                   href="#">

                                    <img
                                        src={emailIcon}

                                        alt="logo"

                                    />
                                </a>
                                </span>

               <span className="socialIconsStyle" >

                                <a className="removeAnchor" style={{color: '#000000',}}
                                   href="#">

                                    <img
                                        src={adobeIcon}

                                        alt="logo"

                                    />
                                </a>
                                </span>

            {/*</div>*/}
                        </div>

    </span>

            {/*2nd part from left in the Card2 ==> employeed details card*/}
            {/*2nd */}
            {/* <span className="theTeamCard2TopMargin"> */}
         {/* <div
             style={{
             }}>
                            <img className="card2__div-2-3--img"
                                 src={degreeIcon}
                                 alt="logo"
                            />
                            <p
                                style=
                                    {{
                                        justifyContent: 'center',
                                    }}
                            >Education and Certification
                        </p>
                        </div> */}
    {/* </span> */}
            {/*3rd*/}
            {/* <span className="theTeamCard2TopMargin"> */}
         {/* <div
             style={{
                 // justifyContent: 'center',
                 // alignItems: 'center'
             }}>
                <img className="card2__div-2-3--img"
                     src={skillImage}
                     alt="logo"
                />
                        </div> */}
                      {/* <p
                          style=
                              {{
                                  justifyContent: 'center',
                              }}
                      >Professional Skills
                        </p> */}
    {/* </span> */}

        </div>)
};

TheTeamCard2.propTypes = {
    // import PropTypes from 'prop-types'; // ES6
    property: PropTypes.object.isRequired
};

=======
import React from 'react';
import PropTypes from 'prop-types'; // ES6
import '../TheTeamHorizontalScroller.css';
import './TheTeamCard2.css';

import iconViewMore from "../../../assets/images/emplyeeDetails_Card_Images/iconviewmore.png";

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
import degreeIcon from "../../../assets/images/emplyeeDetails_Card_Images/iconDegreeSet.png";
//9
// import skillSetIcon from "../../assets/images/emplyeeDetails_Card_Images/iconSkillset.png";

import skillImage from "./../assets/iconSkillset.png";







// import PropTypes from 'prop-types';

const TheTeamCard2 = ({property}) => {
    const {
        index, picture, city, address, bedrooms,
        bathrooms, carSpaces, employeeDetails
    } = property;
    return (

        <div
            // className="App.js"
            id="TheTeamCard2Mobile" className="card2"

        >
            {/*1st part in the left most in the footer*/}
            <span
                className="theTeamCard2TopMargin"
                style={{width:'50%'}}
            >

         <div
             style={{
                 justifyContent: 'flex-start',
             }}>
               <p
                   style={{textAlign:'left'}}>
                            {employeeDetails.length >200 ?
                                (employeeDetails.substring(0,200))+(' ... '):
                                employeeDetails}
                        </p>
                        </div>
                     <div style={{

                         display: 'flex',
                         justifyContent: 'flex-start'

                     }}
                     >
             <span style={{
             }}>
                                <a className="removeAnchor" style={{color: '#000000',}}
                                   href="#">
                                    <img
                                        src={iconViewMore}
                                        alt="logo"
                                    />
                                </a>
                                </span>
                     </div>



        <div style={{

            display: 'flex',
            justifyContent: 'flex-start',
            marginTop:'22px',
        }}
        >

            {/*since this is the first element margin not added here*/}
            {/*className="socialIconsStyle"*/}
            <span  >
                                <a className="removeAnchor" style={{color: '#000000',}}
                                   href="#">

                                    <img
                                        src={fbIcon}

                                        alt="logo"

                                    />
                                </a>
                                </span>
              <span className="socialIconsStyle" >

                                <a className="removeAnchor" style={{color: '#000000',}}
                                   href="#">

                                    <img
                                        src={gitHubIcon}

                                        alt="logo"

                                    />
                                </a>
                                </span>

            <span className="socialIconsStyle" >

                                <a className="removeAnchor" style={{color: '#000000',}}
                                   href="#">

                                    <img
                                        src={twitterIcon}

                                        alt="logo"

                                    />
                                </a>
                                </span>

             <span className="socialIconsStyle" >

                                <a className="removeAnchor" style={{color: '#000000',}}
                                   href="#">

                                    <img
                                        src={linkedIn}

                                        alt="logo"

                                    />
                                </a>
                                </span>

                <span className="socialIconsStyle" >

                                <a className="removeAnchor" style={{color: '#000000',}}
                                   href="#">

                                    <img
                                        src={skypeIcon}

                                        alt="logo"

                                    />
                                </a>
                                </span>

               <span className="socialIconsStyle" >

                                <a className="removeAnchor" style={{color: '#000000',}}
                                   href="#">

                                    <img
                                        src={emailIcon}

                                        alt="logo"

                                    />
                                </a>
                                </span>

               <span className="socialIconsStyle" >

                                <a className="removeAnchor" style={{color: '#000000',}}
                                   href="#">

                                    <img
                                        src={adobeIcon}

                                        alt="logo"

                                    />
                                </a>
                                </span>

            {/*</div>*/}
                        </div>

    </span>

            {/*2nd part from left in the Card2 ==> employeed details card*/}
            {/*2nd */}
            {/* <span className="theTeamCard2TopMargin"> */}
         {/* <div
             style={{
             }}>
                            <img className="card2__div-2-3--img"
                                 src={degreeIcon}
                                 alt="logo"
                            />
                            <p
                                style=
                                    {{
                                        justifyContent: 'center',
                                    }}
                            >Education and Certification
                        </p>
                        </div> */}
    {/* </span> */}
            {/*3rd*/}
            {/* <span className="theTeamCard2TopMargin"> */}
         {/* <div
             style={{
                 // justifyContent: 'center',
                 // alignItems: 'center'
             }}>
                <img className="card2__div-2-3--img"
                     src={skillImage}
                     alt="logo"
                />
                        </div> */}
                      {/* <p
                          style=
                              {{
                                  justifyContent: 'center',
                              }}
                      >Professional Skills
                        </p> */}
    {/* </span> */}

        </div>)
};

TheTeamCard2.propTypes = {
    // import PropTypes from 'prop-types'; // ES6
    property: PropTypes.object.isRequired
};

>>>>>>> d998f109d5068a3c8af387fdb474faa245912f2d
export default TheTeamCard2;