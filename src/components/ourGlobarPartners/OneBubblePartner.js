import React from "react";
import PropTypes from "prop-types"; // ES6

// import PropTypes from 'prop-types';

class OneBubblePartner extends React.Component {
  handleClickForNewBrand = () => {
    // let indexValue=this.props.property.index;
    let indexValue = this.props.currentIndex;
    this.props.newBrandSelected(indexValue);
  };
  // newItemSelected
  render() {
    let currentSpan;

    if (this.props.isActive) {
      currentSpan = (
        <span className="bubble active" onClick={this.handleClickForNewBrand} />
      );
    } else {
      currentSpan = (
        <span className="bubble" onClick={this.handleClickForNewBrand} />
      );
    }

    // const {index, picture} = brand;
    return currentSpan;
  }
}

OneBubblePartner.propTypes = {
  // import PropTypes from 'prop-types'; // ES6
  //newBrandSelected: PropTypes.number.isRequired
};

export default OneBubblePartner;
