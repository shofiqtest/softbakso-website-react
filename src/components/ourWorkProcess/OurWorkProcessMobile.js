import React from "react";


import WorkProcessHorizontalScrollerMobile from "./WorkProcessHorizontalScrollerMobile";

class OurWorkProcessMobile extends React.Component {


    render() {

        return (

            <div className="howWeWorkMainDiv" style={{
               // paddingTop:'5%',
                // marginBottom:'5%'
            }}>

                    <div style={{
                        width: '80%',
                        margin:'auto',
                        // display:'flex',
                        display: 'content',

                    }}>
                        <h1 className="HowWeWork--header" style={{
                            textAlign: 'center',
                        }}>
                            How We Work
                        </h1>
                        <hr className="HowWeWork-Hr-Mobile"
                        />
                    </div>


                <div style={{
                    margin:'auto',
                    width: '90%',
                }}>
                    <p
                        className="howWeWork__div--p"
                    >
                        We believe
                        we have created the most efficient SaaS
                        for your business. Services with features
                        that will
                        convince you to use it for your
                        SaaS business.
                    </p>

                </div>
                <WorkProcessHorizontalScrollerMobile/>
            </div>
        );
    }
}



export default OurWorkProcessMobile;