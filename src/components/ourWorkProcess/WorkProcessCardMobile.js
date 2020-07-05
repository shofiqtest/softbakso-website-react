import React from 'react';
import PropTypes from 'prop-types'; // ES6
import './OurWorkProcessSliderMobile.css';

// import PropTypes from 'prop-types';
// const WorkProcessCard = ({currentProcess, currentIndex, newItemSelected()}) => {
class WorkProcessCardMobile extends React.Component {
    // constructor(props){
    //     super(props);
    // }


    // handleClick
    handleClick = () => {
        //console.log("at handleClick: ");
        let indexValue=this.props.currentProcess.index;
        //console.log("It's index is: ",this.props.currentProcess.index);
        this.props.newItemSelected(indexValue);
    };


    render() {


// = ({currentProcess, currentIndex, newItemSelected()}) => {
        const {index, iconPicture, city, heading} = this.props.currentProcess;

        let currentIndexNew = this.props.currentIndex;

        // //console.log('currentIndexNew: ', currentIndexNew);
        // //console.log('heading: ', heading);
        // //console.log('current index: ', index);


        return (
            <div
                id={`card-${index}`}
                className="workProcess_cardMobile"
                onClick={this.handleClick}
            >
                <img src={iconPicture} alt={city}/>
                <div className="workProcess_detailsMobile">
                    {/*<span className="index">*/}
                    {/*{heading}*/}
                    {/*/!*{index+1}*!/*/}
                    {/*</span>*/}
                    <p className="workProcess_headingMobile">
                        {heading}
                    </p>
                </div>
            </div>
        );
    }
}

WorkProcessCardMobile.propTypes = {
    // import PropTypes from 'prop-types'; // ES6
    currentProcess: PropTypes.object.isRequired
};

export default WorkProcessCardMobile;