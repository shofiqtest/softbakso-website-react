import React from "react";
import "./JoinUs.css";

export default function JoinUs() {
  return (
    <div className="join-us">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-sm-4 col-xs-4 bgr">
            <div className="join">
              <h4 className="join-us-title">Join us!</h4>
              <p className="join-us-text">
                Our employees are creating the IT solutions of the future,
                staying at the forefront of emerging businesses and technology
                while exchanging ideas with the best teams and field
                professionals.
              </p>
            </div>
          </div>
          <div className="col-md-8 col-sm-8 col-xs-8 bgl">
            <div className="career-team">
              <div className="row">
                <div className="col-md-12">
                  <div className="our-career-pages">
                    <h3 className="title-one">OUR CAREER PAGES</h3>
                    <ul>
                      <li>Open positions</li>
                      <li>Your Softbakso Journey</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="meet-our-team">
                    <h3 className="title-two">MEET OUR TEAM </h3>
                    <ul>
                      <li>General</li>
                      <li>Techniqal</li>
                      <li>Management</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
