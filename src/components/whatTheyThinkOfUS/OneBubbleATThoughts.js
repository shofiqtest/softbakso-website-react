

import React from 'react';
import PropTypes from 'prop-types'; // ES6

// import PropTypes from 'prop-types';


class OneBubbleATThoughts extends React.Component {
    handleClickForNewBlog = () => {
        // let indexValue=this.props.property.index;
        let indexValue = this.props.currentIndex;
        this.props.newThought(indexValue);
    };
    // newItemSelected
    render() {
        // console.log("a22");
        let currentSpan;

        if(this.props.isActive){
            currentSpan=(
                <span className="bubble active"
                      onClick={this.handleClickForNewBlog}

                />
            );
        }
        else{
            currentSpan=(
                <span className= "bubble"
                      onClick={this.handleClickForNewBlog}
                />
            )
        }

        // const {index, picture} = brand;
        return (

            currentSpan

        )
    };
}

OneBubbleATThoughts.propTypes = {
    // import PropTypes from 'prop-types'; // ES6
    //newBrandSelected: PropTypes.number.isRequired
};

export default OneBubbleATThoughts;






