import React, { Component } from "react";

export default class Timeline extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  {this.props.employeeData.timelineInfo.map(
                    (timeline, index) => {
                      return (
                        <article
                          className="timeline-entry animate-box"
                          data-animate-effect="fadeInLeft"
                          key={index}
                        >
                          <div className="timeline-entry-inner">
                            <div
                              className={"timeline-icon color-" + timeline.id}
                            >
                              <i className="icon-pen2" />
                            </div>
                            <div className="timeline-label">
                              <h2>
                                {timeline.title}{" "}
                                <span>{timeline.timeInterval}</span>
                              </h2>
                              <p>{timeline.details}</p>
                            </div>
                          </div>
                        </article>
                      );
                    }
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
