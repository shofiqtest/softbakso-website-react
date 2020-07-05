import React, { Component } from "react";
import Sidebar from "./../components/portfolio/Sidebar";
import Introduction from "./../components/portfolio/Introduction";
import About from "../components/portfolio/About";
import Timeline from "../components/portfolio/Timeline";
import Navbar from "../components/Navbar";

export default class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emplyeeInfo: {
        id: 1,
        sidebarInfo: {
          fullName: "Dhruv Barochiya",
          email: "Dhruv.barochiya34788@gmail.com",
          fblink: "https://www.facebook.com/dhruv.barochia",
          twitterLink: "https://twitter.com/ddbarochiya",
          instaLink: "https://www.instagram.com/ddbarochiya/",
          linkdinLink: "https://www.linkedin.com/in/dhruv-b-545b52a9/",
          gitLink: "https://github.com/Dhruv34788",
          mediumLink: "https://medium.com/@dhruv.barochia34788",
          proPic:
            "https://upload.wikimedia.org/wikipedia/commons/e/e4/Hypericum_olympicum_Dziurawiec_olimpijski_01.jpg"
        },
        introInfo: {
          backgroundImage:
            "https://upload.wikimedia.org/wikipedia/commons/c/c1/Amanhecer_entre_as_pedras.jpg",
          firstName: "Dhruv",
          cvLink:
            "https://docs.google.com/document/d/15coSa2rnZcdywihM-pWTvoGqE65JAkxQAh6JDBNrF2Q/edit?usp=sharing"
        },
        aboutInfo: {
          whoAmI1:
            "I am a computer grad student from DAIICT-Gandhinagar with ICT as my major.I love exploring new technologies and often amazed by the progress we as a human species have mad so far in the recent years (apart from the headphone-jack part!!)",
          whoAmI2:
            "I have started reflecting my ideas and thougths through the medium of words recently so spelling and grammer mistaks are very often.You can write me back if you spot any and don't want to live anymore :P ",
          expertiseList: [
            {
              id: 1,
              name: "WEB DEVELOPMENT",
              iconName: "icon-bulb",
              details:
                "I have experience building websites and chrome extentions using JavaScript,React,HTML,CSS"
            },
            {
              id: 2,
              name: "Data Structures & Algorithms",
              iconName: "icon-phone3",
              details:
                "As coming from the CS background, I have good grasp over fundamental concepts of DSA"
            },
            {
              id: 3,
              name: "Dev Ops",
              iconName: "icon-data",
              details:
                "I am pursuing my internship with DevOps team at Juniper and working with tools like Jenkins, Docker, K8s"
            }
          ]
        },
        timelineInfo: [
          {
            id: 1,
            title: "Internship at Juniper",
            timeInterval: "2019-present",
            details:
              "I recently have joined the Juniper Networs as a Software Developer-Intern in the DevOps team. My major part of the work has been into the field of creating sustainable and flexible CI/CD (Continuous Integration & Continuous Development) pipelines which enables developers at Juniper to do rapid development. I am also exploring the role of container technology like Docker and container-orchrastation technologies like K8s, Swarm to create industry standard production environments."
          },
          {
            id: 2,
            title: "Undergraduation at DAIICT",
            timeInterval: "2015-2019",
            details:
              "I am pursuing my under-graduation studies with major in I.C.T.(Information & Communication Technology). I have taken courses like DSA, OOPs, Computer Networks, IOT, Web-Data Management over the years and have better understanding of these subjects.I have also been part of S.B.G.(Student Body Govenance) scince my first year of college."
          },
          {
            id: 3,
            title: "Primary and Higher Education",
            timeInterval: "2019-present",
            details:
              "I have completed my higher secondary education with major subjects as Physics,Chemistry & Maths with 91 merit. During my time at school, I have developed interest in solving complex problems of the fundamental physics which helped me to improve my understanding of any problem and also my mathematical skills to actually solve the problems."
          }
        ]
      }
    };
    this.handleRoute = this.handleRoute.bind(this);
  }

  handleRoute() {
    if (this.props.location.pathname= "/") {
      this.props.history.push("/");
    }
  }

  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
          <Sidebar employeeData={this.state.emplyeeInfo.sidebarInfo}></Sidebar>
          <div id="colorlib-main">
            <Navbar
              loc={this.props.location}
              handleSetActive={this.handleRoute}
            ></Navbar>
            <Introduction employeeData={this.state.emplyeeInfo}></Introduction>
            <About employeeData={this.state.emplyeeInfo.aboutInfo}></About>
            <Timeline employeeData={this.state.emplyeeInfo}></Timeline>
          </div>
        </div>
      </div>
    );
  }
}
