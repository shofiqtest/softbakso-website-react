import React from "react";
import './ExploreJobs.css';
import {Link} from 'react-router-dom'

export default function ExploreJobs() {
    return (
        <div className="explore-jobs">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="main-headline">
                            <h1>Explore <span>our open positions</span></h1>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <Link to="/backend-developer">
                    <div className="col-md-6 col-sm-6 col-xs-6">
                        <div className="jobs-posted bg-color">
                            <div className="department">
                                <Link to='/backend-developer'>Web Developer</Link>
                            </div>
                            <div className="designation">
                                <Link to="/backend-developer">Back End Developer</Link>
                            </div>
                            <div className="location">
                                <Link to="/backend-developer">Dhaka(Gulsan/Badda)</Link>
                            </div>
                        </div>
                    </div>
                    </Link>
                    <Link to="/marketing">
                    <div className="col-md-6 col-sm-6 col-xs-6">
                        <div className="jobs-posted bg-color">
                            <div className="department">
                                <Link to="/marketing">Marketing Specialist</Link>
                            </div>
                            <div className="designation">
                                <Link to="/marketing">Marketing</Link>
                            </div>
                            <div className="location">
                                <Link to="/marketing">Dhaka (Gulsan/Badda)</Link>
                            </div>
                        </div>
                    </div>
                    </Link>                   
                </div>
            </div>
        </div>
    );
}
