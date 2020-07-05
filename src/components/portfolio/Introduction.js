import React, { Component } from "react";

export default class Introduction extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <section
          id="colorlib-hero"
          className="js-fullheight portfolioBody"
          data-section="home"
        >
          <div className="flexslider js-fullheight">
            <ul className="slides">
              <li
                style={{
                  backgroundImage: `url(${this.props.employeeData.introInfo.backgroundImage})`
                }}
              >
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner js-fullheight">
                        <div className="desc">
                          <h1>
                            Hi! <br />
                            I'm {this.props.employeeData.introInfo.firstName}
                          </h1>
                          <p>
                            <a
                              className="btn btn-primary btn-learn"
                              href={this.props.employeeData.cvLink}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              View CV
                              <i className="icon-download4" />
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li
                style={{
                  backgroundImage: `url(${this.props.employeeData.introInfo.backgroundImage})`
                }}
              >
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1>
                            I love building
                            <br /> THINGS !!
                          </h1>
                          <p>
                            <a
                              className="btn btn-primary btn-learn"
                              href={this.props.employeeData.sidebarInfo.gitLink}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              View Projects <i className="icon-briefcase3" />
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li
                style={{
                  backgroundImage: `url(${this.props.employeeData.introInfo.backgroundImage})`
                }}
              >
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1>
                            I often <br />
                            Write ...{" "}
                          </h1>
                          <p>
                            <a
                              className="btn btn-primary btn-learn"
                              href={
                                this.props.employeeData.sidebarInfo.mediumLink
                              }
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              View Blog <i className="icon-book" />
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
    );
  }
}
