import React, {Component} from 'react';
import logo from '../assets/images/Logo.png';
import qr from '../assets/images/qrCode.png';
import {Link} from 'react-router-dom';

export default class CareerComponent extends Component{
    render() {
        return(
            <div className="careerSection">
                <div className="careerNav">
                    <a href="#"><img src={logo}/></a>
                    <button><Link to="/career"> Apply Now</Link></button>
                </div>
                <div className="careerBody">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-9">
                                <h1>Opening Jobs</h1>
                                <div className="line"></div>
                                <h2>1. UX/UI Designer</h2>
                                <ul>
                                    <li>Lorem ipsum dolor sit amet, consectetur.</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur.</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur.</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur.</li>
                                </ul>
                                <h2>2. FullStack Laravel Developer</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae voluptatem dolor rerum
                                    assumenda consectetur autem, reiciendis unde vero illo, voluptates.</p>
                                <ul>
                                    <li>Lorem ipsum dolor sit amet, consectetur.</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur.</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur.</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur.</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur.</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur.</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6 col-md-3 col-lg-2">
                                <button className="apply"> Apply Now</button>
                            </div>
                            <div className="col-sm-6 col-md-5">
                                <p className="mail">mail to : jobs@softbakso.com</p>
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-5">
                                <div className="qr">
                                    <span className="scan">SCAN TO APPLY</span>
                                    <div className="qr-img"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}