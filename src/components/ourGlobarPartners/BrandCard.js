import React from "react";
import PropTypes from "prop-types"; // ES6
// import PropTypes from 'prop-types';

const BrandCard = ({ brand }) => {
  const { index, picture } = brand;
  return (
    <div id={`card-${index}`} className="card">
      <img src={picture} alt="" />
    </div>
  );
};

BrandCard.propTypes = {
  // import PropTypes from 'prop-types'; // ES6
  brand: PropTypes.object.isRequired
};

export default BrandCard;
