import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './../routes/HomeRoute';
import Portfolio from './../routes/PortfolioRoute';
import Job from './../routes/CareerRoute'
import BackEndDev from "./BackEndRoute";
import DigitalMarketing from "./MarketingRoute";

// import "./App.css";

export default class App extends Component {
    
    render() {
        return(

        <Router>
            <div>
                <Route exact path="/" component={Home} />
                <Route path="/portfolio/:id" component={Portfolio} />
                <Route path="/career" component={Job}/>
                <Route path="/backend-developer" component={BackEndDev}/>
                <Route path="/marketing" component={DigitalMarketing}/>           
            </div>
        </Router>
     );
    }
}










