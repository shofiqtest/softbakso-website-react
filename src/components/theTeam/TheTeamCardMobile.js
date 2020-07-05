import React from 'react';
import PropTypes from 'prop-types'; // ES6
import './TheTeamHorizontalScrollerMobile.css';
// import nextButton from "./assets/iconleftarrow.png";
// import previousButton from "./assets/forwardicon.png";

class TheTeamCardMobile extends React.Component {


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
                id={`teamCardMobile-${index}`}
                className="theTeam_cardMobile"
                onClick={this.handleClickForNewEmployee}
            >
                <img
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

TheTeamCardMobile.propTypes = {
    // import PropTypes from 'prop-types'; // ES6
    property: PropTypes.object.isRequired,
    // lastIndex:PropTypes.number.isRequired,
};


export default TheTeamCardMobile;