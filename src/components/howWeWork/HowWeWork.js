import React from "react";
import './HowWeWork.css';
import MediaQuery from 'react-responsive';

import OurWorkProcess from '../ourWorkProcess/OurWorkProcess';
import OurWorkProcessMobile from '../ourWorkProcess/OurWorkProcessMobile';
// const A= (<h1>Hello</h1>);

class HowWeWork extends React.Component {


    render() {

        return (

            <div
                // style={{paddingTop:'100px',}}
            >


                <MediaQuery minDeviceWidth={750} device={{ deviceWidth: 1600 }}>
                    <OurWorkProcess/>
                </MediaQuery>

                <MediaQuery maxDeviceWidth={750}
                            device={{ deviceWidth: 750 }}>
                    <OurWorkProcessMobile/>
                </MediaQuery>
            </div>
          );

    }
}




export default HowWeWork;