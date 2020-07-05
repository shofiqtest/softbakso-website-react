import React, { Component } from 'react'

export default class About extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <section className="colorlib-about" data-section="about">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                                    <div className="col-md-12">
                                        <div className="about-desc">
                                            <span className="heading-meta">About Us</span>
                                            <h2 className="colorlib-heading">Who Am I?</h2>
                                            <p>{this.props.employeeData.whoAmI1}</p>
                                            <p>{this.props.employeeData.whoAmI2}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="colorlib-about">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                                <span className="heading-meta">What I do?</span>
                                <h2 className="colorlib-heading">Here are some of my expertise</h2>
                            </div>
                        </div>
                        <div className="row row-pt-md">
                            {
                                this.props.employeeData.expertiseList.map((expertise,index) => {
                                    return(
                                        <div className="col-md-4 text-center animate-box" key={index}>
                                            <div className={ "services color-" + expertise.id}>
                                                <span className="icon">
                                                    <i className={expertise.iconName} />
                                                </span>
                                                <div className="desc">
                                                    <h3>{expertise.title}</h3>
                                                    <p>{expertise.details}</p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
