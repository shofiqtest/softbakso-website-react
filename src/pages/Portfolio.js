import React, { Component } from "react";
import PortfolioGrid from "../components/PortfolioWork/PortfolioGrid";
import data from "../components/PortfolioWork/PortFolioData";

export default class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectType: [
        {
          id: 1,
          name: "ALL"
        },
        {
          id: 2,
          name: "APP"
        },
        {
          id: 3,
          name: "E-COMMERCE"
        },
        {
          id: 4,
          name: "SOFTWARE"
        },
        {
          id: 5,
          name: "WEB DESIGN"
        }
      ],
      index: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(id) {
    this.setState({ index: id - 1 });
  }

  render() {
    return (
      <div
        className="container-fluid"
        id="portfolio"
        style={{ height: "auto" }}
      >
        <div className="row">
          <p className="workHeader">Our Work</p>
          <p className="workSubtitle">Latest Project</p>
          <hr className="hrTag" />
        </div>
        <div className="row" style={{ marginTop: "40px" }}>
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 btn-block">
            {this.state.projectType.map(type => {
              return (
                <button
                  className="typeButton btn btn-primary"
                  onClick={e => {
                    this.handleClick(type.id);
                  }}
                  key={type.id}
                >
                  {type.name}
                </button>
              );
            })}
          </div>
        </div>
        <PortfolioGrid item={data[this.state.index]}></PortfolioGrid>
      </div>
    );
  }
}
