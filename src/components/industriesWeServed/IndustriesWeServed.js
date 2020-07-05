import React from "react";
import "./IndustriesWeServed.css";

const AllIndustries = [
  {
    id: 1,
    IndustryName: "Fintech",
    companyLink: "https://fintechfinland.fi/"
  },
  {
    id: 2,
    IndustryName: "Software Companies",
    companyLink: "https://fintechfinland.fi/"
  },
  {
    id: 3,
    IndustryName: "Real Estates",
    companyLink: "https://fintechfinland.fi/"
  },

  {
    id: 4,
    IndustryName: "Telecom",
    companyLink: "https://fintechfinland.fi/"
  },

  {
    id: 5,
    IndustryName: "Ecommerce",
    companyLink: "https://fintechfinland.fi/"
  },

  {
    id: 6,
    IndustryName: "Non-Profits",
    companyLink: "https://fintechfinland.fi/"
  },
  {
    id: 7,
    IndustryName: "Startups",
    companyLink: "https://fintechfinland.fi/"
  },

  {
    id: 8,
    IndustryName: "Retail",
    companyLink: "https://fintechfinland.fi/"
  },
  {
    id: 9,
    IndustryName: "Pharmaceuticals",
    companyLink: "https://fintechfinland.fi/"
  },

  {
    id: 10,
    IndustryName: "RMG",
    companyLink: "https://fintechfinland.fi/"
  },

  {
    id: 11,
    IndustryName: "Education",
    companyLink: "https://fintechfinland.fi/"
  },
  {
    id: 12,
    IndustryName: "Service Platforms",
    companyLink: "https://fintechfinland.fi/"
  },

  {
    id: 13,
    IndustryName: "Government",
    companyLink: "https://fintechfinland.fi/"
  }
];

let evenItems = [];
let oddItems = [];
class IndustriesWeServed extends React.Component {
  render() {
    AllIndustries.map((oneIndustry, index) => {
      if (index % 2 === 0) {
        evenItems[Math.round(index / 2)] = (
          <p
            key={oneIndustry.id}
            id={oneIndustry.id}
            className="evenCompaniesRight--p"
          >
            {oneIndustry.IndustryName}
          </p>
        );
      } else {
        oddItems[Math.floor(index / 2)] = (
          <p
            key={oneIndustry.id}
            id={oneIndustry.id}
            className="oddCompaniesLeft--p"
          >
            {oneIndustry.IndustryName}
          </p>
        );
      }
    });
    return (
      <div
        className="industrisServed__div--MainOuterDiv"
        style={{ paddingTop: "50px" }}
      >
        <p className="industrisServed__h2--Heading">Industries We Served</p>

        <div className="industrisServed__hr--outerDiv">
          <hr className="industrisServed--hr" />
        </div>

        <p className="industryServed-SubHeading-p">
          We have served different industries with custom solutions for
          different technology adaptations.
        </p>
        <div id="parent5" className="industrisServed--parent">
          <div className="left__div--p ">{evenItems}</div>
          <div className="right__div--p">{oddItems}</div>
        </div>
      </div>
    );
  }
}

export default IndustriesWeServed;
