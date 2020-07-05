import React from "react";
import "./Careers.css";
import "./responsive.css";
import {Link} from 'react-router-dom';

export default function Careers() {
  return (
    <section className="career-section">
      <div className="opening-job">
        <h1 className="career-title">
          <span>C</span>areer
        </h1>
        <p className="career-text">
          We're building a positive, transparent and supportive working
          environment to help employees reach their full potential through
          collaboration, innovation and empowerment.
        </p>
        <button className="btn btn-primary job-button text-uppercase"><Link to="/career"> Opening Position</Link></button>
      </div>
    </section>
  );
}
