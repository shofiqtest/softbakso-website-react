import React from "react";


import PropTypes from 'prop-types'; // ES6

class OneThoughtDiv extends React.Component {
// class OneThoughtDiv = ({oneThought}) => {

    render() {

        const isMobile =this.props.isMobile;
        const oneThought = this.props.oneThought;


        const {index, bloggerBio, blogDetails, bloggerImage} = oneThought;

        return (
            <div className="row">
                {
                    isMobile ?
                        <div className="col-xs-10 col-xs-offset-1 rectangle">
                            <img className="circle" src={bloggerImage} alt=""/>
                            <p className="bioFont">
                                {bloggerBio}
                            </p>
                            <div className="col-xs-12">
                                <p className="processFont tabText">
                                    {blogDetails}
                                </p>
                            </div>
                        </div>
                        :
                        <div
                            className="col-lg-7 col-lg-offset-3 col-md-9 col-md-offset-2 col-sm-9 col-sm-offset-1 blog">
                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-4">
                                <div className="blogger blogMargin">
                                    <div className="imageDiv">
                                        <img className="bloggerImage" src={bloggerImage} alt=""/>
                                    </div>
                                    <p className="bioFont">
                                        {bloggerBio}
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-8 col-md-offset-1 col-sm-7 col-sm-offset-2 col-lg-offset-1">
                                <p className="processFont tabText">
                                    {blogDetails}
                                </p>
                            </div>
                        </div>
                }
            </div>
        )
    }
}

OneThoughtDiv.propTypes = {
    // import PropTypes from 'prop-types'; // ES6
    oneThought: PropTypes.object.isRequired
};

export default OneThoughtDiv;

