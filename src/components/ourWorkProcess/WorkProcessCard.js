
import React from 'react';
import PropTypes from 'prop-types'; // ES6
import './OurWorkProcessSlider.css';

// import PropTypes from 'prop-types';
// const WorkProcessCard = ({currentProcess, currentIndex, newItemSelected()}) => {
class WorkProcessCard extends React.Component {
       // handleClick
    handleClick = () => {
        let indexValue=this.props.currentProcess.index;
        this.props.newItemSelected(indexValue);
    };

    render() {
        const {index, iconPicture, city, heading} = this.props.currentProcess;

        let currentIndexNew = this.props.currentIndex;

        return (
            <div
                id={`card-${index}`}
                className="workProcess_card"
                onClick={this.handleClick}
            >
                <img src={iconPicture} alt={city}/>
                <div className="workProcess_details">
                    <p className="workProcess_heading">
                        {heading}
                    </p>
                </div>
            </div>
        );
    }
}

WorkProcessCard.propTypes = {
    // import PropTypes from 'prop-types'; // ES6
    currentProcess: PropTypes.object.isRequired
};

export default WorkProcessCard;