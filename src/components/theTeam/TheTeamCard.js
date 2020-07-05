import React from 'react';
import PropTypes from 'prop-types'; // ES6
import './TheTeamHorizontalScroller.css';
// import nextButton from "./assets/iconleftarrow.png";
// import previousButton from "./assets/forwardicon.png";


// import data from "./data/data";
// import PropTypes from 'prop-types';




// const A=(<h1> Hello World</h1>);
// const TheTeamCard = ({property,currentIndex,lastIndex,nextButtonPress,previousButtonPress}) => {
//     const {index, picture,teamMemberName,designation,city} = property;
class TheTeamCard extends React.Component {



    // handleClick__nextEmployee = () => {
    //     //console.log("at handleClick__nextEmployee: ");
    //     let indexValue=this.props.property.index;
    //     //console.log("It's index is: ",this.props.property.index);
    //     // translateX(-${property.index*(94/properties.length)}%)
    //
    //     this.props.nextButtonPress();
    // };
    //
    // handleClick__prevEmployee = () => {
    //     //console.log("at handleClick__prevEmployee: ");
    //     let indexValue=this.props.property.index;
    //     //console.log("It's index is: ",this.props.property.index);
    //     this.props.previousButtonPress(indexValue);
    // };

    handleClickForNewEmployee = () => {
        //console.log("at handleClick: ");
        // let indexValue=this.props.property.index;
        let indexValue=this.props.currentIndex;
        //console.log("It's index is: ",this.props.property.index);
        this.props.newItemSelected(indexValue);
    };
    // newItemSelected
    render() {
        // let lastIndexinTeamCard = this.props.lastIndex;
        // let lengthInTeamCard= lastIndexinTeamCard + 1;
        // //console.log('pbp: ',this.state.pbp);

        // //console.log("this.props.currentIndex: ",this.props.currentIndex);
        // //console.log("this.props.lastIndex: ",this.props.lastIndex);
        const oneProperty = this.props.property;
        const {index, picture, teamMemberName, designation} = oneProperty;


        // //console.log('currentIndex: ', this.props.currentIndex);
        // //console.log('index: ', index);
        // //console.log('lastIndex: ', this.props.lastIndex);

        return (


            <div
                id={`teamCard-${index}`}
                className="theTeam_card"
                onClick={this.handleClickForNewEmployee}
            >
                <img
                    className="img img-responsive img-circle img-center"
                    src={picture}
                    alt="Emp. Pic."
                />
                <div className="theTeam_details">
                    {/*<span className="index">{index+1}</span>*/}
                    <p
                        className="location"
                    >
                        {teamMemberName}
                        <br/>
                        {designation}
                    </p>

                </div>
            </div>



        );
    }
}

TheTeamCard.propTypes = {
    // import PropTypes from 'prop-types'; // ES6
    property: PropTypes.object.isRequired,
    // lastIndex:PropTypes.number.isRequired,
};

export default TheTeamCard;