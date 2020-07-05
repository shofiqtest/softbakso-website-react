import React, { Component } from "react";
import "./App.css";
import ReactGA from "react-ga";
import Root from "./routes/RootRouter";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Root />
        <div className="fixed-btn">
          <ul className="btn-group text-center">
            <li><a href="https://www.facebook.com/softbakso" target="_blank" className="btn facebook"><i class="fab fa-facebook-f"></i></a></li>
            <li><a href="https://www.linkedin.com/company/softbakso-limited" target="_blank" className="btn linkedin"><i class="fab fa-linkedin-in"></i></a></li>
            <li><a href="https://twitter.com/softbakso" target="_blank" className="btn twitter"><i class="fab fa-twitter"></i></a></li>
          </ul>
        </div>
      </div>
    );
  }
}

function initializeReactGA() {
  ReactGA.initialize("UA-115085898-1");
  ReactGA.pageview("/");
}
