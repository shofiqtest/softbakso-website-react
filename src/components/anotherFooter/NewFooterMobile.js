<<<<<<< HEAD
import React,{Component}from 'react';


import './NewFooterMobile.css';
import softBaksoLogo from "../../assets/images/certification_and_awards_footer/Logo.png";


import PropTypes from 'prop-types'; // ES6
const NewFooterMobile = () => {
//  class NewFooterMobile extends Component {

    // render() {
        return (
            <div
                className="NewFooter-main-div-mobile"
            >


                <span className="NewFooter-logo-span-Mobile">

                            <img className="SoftBakso_NewLogoImage_Mobile"
                                 src={softBaksoLogo}
                                 alt="logo"
                            />

                </span>



            </div>)

};

NewFooterMobile.propTypes = {
    // import PropTypes from 'prop-types'; // ES6
    // currentProcess: PropTypes.object.isRequired
};

=======
import React,{Component}from 'react';


import './NewFooterMobile.css';
import softBaksoLogo from "../../assets/images/certification_and_awards_footer/Logo.png";


import PropTypes from 'prop-types'; // ES6
const NewFooterMobile = () => {
//  class NewFooterMobile extends Component {

    // render() {
        return (
            <div
                className="NewFooter-main-div-mobile"
            >


                <span className="NewFooter-logo-span-Mobile">

                            <img className="SoftBakso_NewLogoImage_Mobile"
                                 src={softBaksoLogo}
                                 alt="logo"
                            />

                </span>



            </div>)

};

NewFooterMobile.propTypes = {
    // import PropTypes from 'prop-types'; // ES6
    // currentProcess: PropTypes.object.isRequired
};

>>>>>>> d998f109d5068a3c8af387fdb474faa245912f2d
export default NewFooterMobile;