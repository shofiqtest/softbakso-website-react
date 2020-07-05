import React from "react";
import "../Careers.css";
import "./ReqResponsive.css";

export default function BackEndDev() {
  return (
    <div className="bg-clr">
      <div className="job-details">
        <div className="designation-title">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1>Back End Developer</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="job-card">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12">
              <div className="job-card-head">
                <ul className="m-0 p-0">
                  <li>
                    <span className="font-weight-bold">Location:</span> Dhaka
                    (Gulsan/Badda)
                  </li>
                  <li>
                    <span className="font-weight-bold">
                      Form of employment:
                    </span>
                    Full Time
                  </li>
                  <li>
                    <span className="font-weight-bold">Job Area:</span> Web
                    Depertment
                  </li>
                  <li>
                    <span className="font-weight-bold">
                      Application period:
                    </span>
                    28 August 2019 - 27 September 2019
                  </li>
                  <li>
                    <span className="font-weight-bold">Organization:</span>
                    Industry Software
                  </li>
                </ul>
                <div className="buttons d-inline-flex row">
                  <div className="apply-now-btn col-md-6 col-sm-6 col-xs-6">
                    <a
                      href="mailto:jobs@softbakso.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      Apply Now
                    </a>
                  </div>
                  <div className="apply-now-btn mr-auto col-md-6  col-sm-6 col-xs-6">
                    <a
                      href="https://www.facebook.com/pg/softbakso/jobs"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      Apply Via Facebook
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="job-card-body">
            <div className="bold-title">
              <h4>Back End Developer</h4>
              <p>
                Softbakso is looking for We are looking for BACK-END developer.
              </p>
            </div>
            <div className="bold-title">
              <h4>Job Responsibilities:</h4>
              <ul>
                <li>
                  Design, implement, test and deploy services in a variety of
                  languages and frameworks (JHipster, Java, Microservices )
                </li>
                <li>Design and implement back-end topology, </li>
                <li>Design and implement big data supporting solutions</li>
                <li>
                  Work with an awesome team on solving problems that were never
                  solved before
                </li>
              </ul>
            </div>
            <div className="bold-title">
              <h4>Educational Requirements:</h4>
              <ul>
                <li>
                  BSc or MSc in Computer Science or Related Subject from any
                  reputed University
                </li>
              </ul>
            </div>
            <div className="bold-title">
              <h4>Experience Requirements:</h4>
              <ul>
                <li>2+ years of experience in Back End development</li>
                <li>
                  Knowledge in Amazon Web Services / Cloud will get preference
                  (Not Mandatory)
                </li>
                <li>Thrilled about new, bleeding edge technologies</li>
                <li>
                  Able to take a new topic from research phase to production by
                  yourself
                </li>
                <li>Constantly push yourself out of comfort zone</li>
                <li>Care about well crafted and tested code</li>
              </ul>
            </div>
            <div className="bold-title">
              <h4>What We Offer:</h4>
              <ul>
                <li>
                  A fast paced environment with the possibility to have a really
                  great impact
                </li>
                <li>The salary you deserve</li>
                <li>
                  The possibility of a fast career growth linked with the
                  company's scalability
                </li>
              </ul>
            </div>
            <div className="nb">
              <p>
                Send CV to jobs@softbakso.com mentioning "Backend Developer" in
                subject Line
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
