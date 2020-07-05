import React from "react";

import WorkProcessHorizontalScrollerWEB from "./WorkProcessHorizontalScrollerWEB";



class OurWorkProcess extends React.Component {


    render() {

        return (
            <div className="howWeWorkMainDiv"
                 style={{   paddingTop:'20px',}}
            >

                <p className="HowWeWork--header"

                >
                    How We Work
                </p>

                <div className="how-we-work__divHR"
                >
                    <hr className="hr"/>
                </div>
                <div style={{
                    margin:'auto',
                    width: '35%',
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
                <WorkProcessHorizontalScrollerWEB/>
            </div>


        );
    }
}



export default OurWorkProcess;