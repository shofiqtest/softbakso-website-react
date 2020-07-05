import React, { Component, useEffect, useState } from "react";
import "./TheTeamHorizontalScrollerWeb.css";
import TheTeamCardWeb from "./TheTeamCardWeb";
// import TheTeamCardMobile from './TheTeamCardMobile';
import EmployeeDetailWeb from "./theTeamCard2/EmployeeDetailWeb";
import data from "./data/data";
import previousButton from "./assets/icons8-forward-button-96.png";

import nextButton from "./assets/icons8-back-arrow-96.png";
// import nextButton from "./assets/icons8-arrow-96.png";

// import MediaQuery from 'react-responsive'
// import withSizes from 'react-sizes'

// let isMobile;
// let isTablet;
// const MyComponent = () => {
//
//
//     isMobile = useMediaQuery({ maxWidth: 750 })
//     isTablet = useMediaQuery({ minWidth: 751, maxWidth: 960 })
//     return (
//         <>
//             {isMobile && (<p>mobile</p>)}
//             {/*{isTablet && (<p>tablet</p>)}*/}
//         </>
//     )
// };

const minWidthOfEmployeeCard = 220;
// 220px;

// import logo from './assets/logo.svg';

// const Button = ({ handleClick }) => {
//     const sayDefault = () => console.log('Default');
//
//     const onClick = handleClick || sayDefault;
//
//     return (
//         <button className="card_button_image"
//
//                 onClick={onClick}
//                 type="button"
//         >
//             <img
//                 alt="logo"
//                 // className="teamCard--button"
//                 src={nextButton}
//                 // src={logo}
//             />
//         </button>
//     );
// };

// const Desktop = ({ children }) => {
//     const isDesktop = useMediaQuery({ minWidth: 992 })
//     return isDesktop ? children : null
// }
// const Tablet = ({ children }) => {
//     const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
//     return isTablet ? children : null
// }
// const Mobile = ({ children }) => {
//     const isMobile = useMediaQuery({ maxWidth: 767 })
//     return isMobile ? children : null
// }
// const Default = ({ children }) => {
//     const isNotMobile = useMediaQuery({ minWidth: 768 })
//     console.log('isNotMobile: ',isNotMobile);
//     return isNotMobile ? children : null
// }

let newIndex = 0;

let allEmployeeData = [
  ...data.properties,
  ...data.properties,
  ...data.properties,
  ...data.properties,
  ...data.properties,
  ...data.properties
];
class TheTeamHorizontalScrollerWeb extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allEmployees: allEmployeeData,
      // data.properties IS AN  array of objects of type

      // {object type is "Flat or Apartment or More Precisely Property."}
      oneEmployee: data.properties[0],
      firstIndex: data.properties[0].index,
      lastIndex: data.properties.length - 1
      // previousButtonPressed: false,
      // previousANDNormalButtonPressed: false,
      // goLeft: 0,
      // goRight: 0,
    };
  }

  newEmployee = currentIndex => {
    //console.log('currentIndex/currentIndex: ', currentIndex);
    //console.log("hurray arefin");
    newIndex = currentIndex;
    // this.state.currentProcess.index+1; // something i don't know.
    // this.setState({
    //     currentProcess: workingProcessSliderData.processes[newIndex]
    // });

    // const newIndex = this.state.currentProcess.index+1; // something i don't know.
    this.setState({
      oneEmployee: this.state.allEmployees[newIndex] //oneEmployee:  undefined
      // oneEmployee: data.properties[newIndex],
      // goLeft: 0,
      // goRight: 0,
    });
  };

  nextEmployee = () => {
    //console.log('next button pressed');

    if (newIndex === allEmployeeData.length - 1) {
      newIndex = 0;
      // oneEmployee: this.state.allEmployees[newIndex],
      this.setState({
        oneEmployee: this.state.allEmployees[newIndex]
      });
    } else if (newIndex >= allEmployeeData.length) {
      newIndex = 0;
      this.setState({
        oneEmployee: this.state.allEmployees[newIndex]
      });
    } else {
      newIndex = newIndex + 1; // something i don't know.

      this.setState({
        // oneEmployee: data.properties[newIndex],
        oneEmployee: this.state.allEmployees[newIndex]
        // goLeft: 0,
        // testIndex: newIndex,
        // lastIndex: data.properties.length-1,
      });
    }
  };

  prevEmployee = () => {
    // someIndexofEmployee WILL ALWAYS BE THE LAST ITEM'S INDEX HERE.
    //console.log('previous button pressed');
    // COUNTER MEASURES WHEN USER ZOOM IN AND HIT THE PREVIOUS BUTTON

    // this.state.lastIndex
    // this.state.property.index

    // console.log('index_lastItem: ', index_lastItem);
    //console.log(' this.state.firstIndex : ', this.state.firstIndex);
    //console.log('this.state.property.index: ', this.state.property.index);

    // if(this.state.oneEmployee.index === this.state.lastIndex){
    //     // REACHED END OF THE LIST.
    //     //console.log("this.state.property.index === this.state.lastIndex");
    //     //console.warn("NO more employee items to the Left");
    //     //console.warn('You are at the beginning.');
    //     const newIndex = this.state.firstIndex;
    //     this.setState({
    //         oneEmployee: data.properties[newIndex],
    //         // goLeft: 1,
    //
    //         // testIndex: newIndex,
    //         // lastIndex: data.properties.length-1,
    //
    //     });
    // }else
    if (newIndex === 0) {
      //console.log("this.state.property.index === this.state.firstIndex");
      // REACHED END OF THE LIST.
      console.warn("NO more employee items to the right");
      console.warn("REACHED END OF THE LIST.");
      // newIndex = this.state.firstIndex;
      this.setState({
        oneEmployee: this.state.allEmployees[newIndex]
        // goLeft: 1,

        // testIndex: newIndex,
        // lastIndex: data.properties.length-1,
      });
    } else {
      //console.log("AT ELSE STATEMENT");
      newIndex = newIndex - 1;
      // this.state.oneEmployee.index - 1;
      this.setState({
        oneEmployee: this.state.allEmployees[newIndex]
        // testIndex: newIndex,
        // lastIndex: data.properties.length-1,
        // previousButtonPressed: true,
      });
    }
  };

  render() {
    const { allEmployees, oneEmployee } = this.state; // js assignment or something check redux document.// or react redux.
    // console.log("oneEmployee: ",oneEmployee);
    // console.log("new Index ---> : ",newIndex);
    oneEmployee.index = newIndex;
    // console.log("oneEmployee: ",oneEmployee);
    // console.log("oneEmployee is: ",oneEmployee.index);
    // console.log("AllEmployee is: ",allEmployees);

    // https://github.com/contra/react-responsive
    // const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 })
    // @withSizes(({ width }) => ({ isMobile: width < 480 }))

    // console.log("deviceWidth: ", this.props.deviceWidth);
    return (
      <div>
        <div className="wrapper-ThreeDivs">
          <div className="left-ofThreeDivs">
            <div className="icon-center-team-slider-web">
              <img
                className="sliderMove-iconStyle-img-web"
                onClick={this.nextEmployee}
                alt="logo"
                src={nextButton}
              />
            </div>
          </div>
          <div className="middle-ofThreeDivs">
            <div className="theTeam_col">
              <div
                className={`theTeam_cards-slider active-slide-${oneEmployee.index}`}
              >
                <div
                  className="theTeam_cards-slider-wrapper"
                  style={{
                    transform: `translateX(-${oneEmployee.index *
                      (100 / allEmployees.length)}%)`
                  }}
                >
                  {allEmployees.map((oneEmployee, index) => (
                    <TheTeamCardWeb
                      currentIndex={index}
                      // key={oneEmployee._id}
                      key={index.toString()}
                      property={oneEmployee}
                      newItemSelected={this.newEmployee}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="right-ofThreeDivs">
            <div className="icon-center-team-slider-web">
              <img
                className="sliderMove-iconStyle-img-web"
                onClick={this.prevEmployee}
                alt="logo"
                src={previousButton}
              />
            </div>
            {/*</span>*/}
          </div>
        </div>
        {
          // js map() function -->
          <EmployeeDetailWeb key={oneEmployee._id} property={oneEmployee} />
        }
      </div>
    );
  }
}

// const mapSizesToProps = ({ width }) => ({
//     isMobile: width < 480,
// })

// const mapSizesToProps = ({ width }) => ({
//     isMobile: width < 480,
// })

// const mapSizesToProps = ({ width }) => ({
//     deviceWidth: width,
//     isMobile: width < 480,
// });

// export default  withSizes(mapSizesToProps)(TheTeamHorizontalScrollerWeb)
export default TheTeamHorizontalScrollerWeb;

// export default withSizes(mapSizesToProps)(MyComponent)
