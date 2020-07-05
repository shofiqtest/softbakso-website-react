import React, {Component} from 'react';
import aboutPic from '../assets/images/about.png'

export default class About extends Component {
    constructor(props) {
        super(props);
        this.state = {mobile: false};
    }

    componentWillMount() {
        if (navigator.userAgent.match(/Android/i)
            || navigator.userAgent.match(/webOS/i)
            || navigator.userAgent.match(/iPhone/i)
            || navigator.userAgent.match(/iPad/i)
            || navigator.userAgent.match(/iPod/i)
            || navigator.userAgent.match(/BlackBerry/i)
            || navigator.userAgent.match(/Windows Phone/i)
        ) {
            this.setState({
                mobile: true
            })
        }
    }

    componentDidMount() {
        let status = this
        window.addEventListener('resize', function () {
            if (window.innerWidth < 768) {
                status.setState({
                    mobile: true
                })
            } else {
                status.setState({
                    mobile: false
                })
            }
        })
    }

    render() {
        return (
            <div id={"about"}>
                {
                    this.state.mobile ?
                        <div className="">
                            <div className="row" style={{
                                width: '100%',
                                // margin:'auto',
                                display: 'flex',

                            }}>
                                <img src={aboutPic} className="aboutImage tint" alt=""/>
                            </div>
                            <div className="aboutDiv">
                                <div className="row" style={{
                                    width: '99%',
                                    margin: 'auto',
                                    // display:'flex',
                                    display: 'content',

                                }}>
                                    <p className="aboutFont">What are we Doing...</p>
                                    <div className="hrDiv">
                                        <hr className="hrAbout"/>
                                    </div>
                                </div>
                                {/*<div className="row">*/}
                                {/*    <p className="addFont">With logic! With ethics! With love!</p>*/}
                                {/*</div>*/}
                                <div id={"about"} className="row">
                                    <div className="col-xs-11" style={{padding: '0px',}}>
                                        <p className="paraFont">
                                            Softbakso Limited believes in quality, flexibility, accuracy, and
                                            robustness. So we develop every solution by prioritizing your business
                                            ethics. We love to share, care and nourish everything you deserve from us.
                                            We have high-potential, talented, workaholic developers and a dedicated
                                            support team ready to support you and your business.

                                        </p>

                                        <p className="paraFont">
                                            <strong className="strongFont">Our mission </strong> is to enhance the
                                            business growth of our customers to deliver market-defining high-quality
                                            solutions that create value and reliable competitive advantage for our
                                            clients around the world.

                                        </p>

                                        <p className="paraFont">
                                            Our mission is to deliver optimal solutions with quality and services at
                                            reasonable prices. For us customer satisfaction is a top priority. We are
                                            very friendly flexible and it helps us retain existing clients and expand
                                            customer circle. We always try to improve the quality of our products by
                                            exploring innovative ideas and collecting feedback non stop.
                                        </p>
                                        <p className="paraFont">
                                            <strong className="strongFont">Our vision </strong>
                                            is to develop in a constant manner and grow as a major IT service provider
                                            to become a leading performer, in providing quality Web and Software
                                            Development solutions in most competitive global marketplaces. Our
                                            professional, flexible and integrated process reflects in what we do. We
                                            always guide our customers to success.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div> :
                        <div className="container-fluid">
                            <div className="row">
                                <div
                                    className="col-lg-5 col-lg-offset-1 col-md-5 col-md-offset-1 col-sm-5 col-sm-offset-1 aboutDiv">
                                    <p className="aboutFont">What are we Doing...</p>
                                    <div className="hrDiv">
                                        <hr className="hrAbout "/>
                                    </div>
                                    <p className="paraFont">
                                        Softbakso Limited believes in quality, flexibility, accuracy, and robustness. So
                                        we develop every solution by prioritizing your business ethics. We love to
                                        share, care and nourish everything you deserve from us. We have high-potential,
                                        talented, workaholic developers and a dedicated support team ready to support
                                        you and your business.

                                    </p>

                                    <p className="paraFont">
                                        <strong className="strongFont">Our mission </strong> is to enhance the business
                                        growth of our customers to deliver market-defining high-quality solutions that
                                        create value and reliable competitive advantage for our clients around the
                                        world.

                                    </p>

                                    <p className="paraFont">
                                        Our mission is to deliver optimal solutions with quality and services at
                                        reasonable prices. For us customer satisfaction is a top priority. We are very
                                        friendly flexible and it helps us retain existing clients and expand customer
                                        circle. We always try to improve the quality of our products by exploring
                                        innovative ideas and collecting feedback non stop.
                                    </p>
                                    <p className="paraFont">
                                        <strong className="strongFont">Our vision </strong>
                                        is to develop in a constant manner and grow as a major IT service provider to
                                        become a leading performer, in providing quality Web and Software Development
                                        solutions in most competitive global marketplaces. Our professional, flexible
                                        and integrated process reflects in what we do. We always guide our customers to
                                        success.
                                    </p>

                                </div>
                                <div
                                    className="col-lg-4 col-lg-offset-1 col-md-4 col-md-offset-1 col-sm-3 col-sm-offset-1">
                                    <img src={aboutPic} className="aboutImage tint img-fluid" alt=""/>
                                </div>
                            </div>
                        </div>
                }


            </div>
        )
    }
}
