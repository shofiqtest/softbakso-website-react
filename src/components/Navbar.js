import React, { Component } from "react";
import logo from "../assets/images/Logo.png";
import { Link, animateScroll as scroll } from "react-scroll";

export default class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = { mobile: false };
    }

    scrollToTop = () => {
        scroll.scrollToTop();
    };

    componentWillMount() {
        if( navigator.userAgent.match(/Android/i)
            || navigator.userAgent.match(/webOS/i)
            || navigator.userAgent.match(/iPhone/i)
            || navigator.userAgent.match(/iPad/i)
            || navigator.userAgent.match(/iPod/i)
            || navigator.userAgent.match(/BlackBerry/i)
            || navigator.userAgent.match(/Windows Phone/i)
        ){
            this.setState({
                mobile: true
            })
        }
    }

    componentDidMount() {
        let nav = document.querySelector('nav'); // Identify target

        //console.log("nav: ",nav);
        let listEl = document.querySelectorAll(".navbar-nav")
        //console.log("listEl: ",listEl);
        let as = listEl[0].getElementsByTagName('a');

        //console.log("as: ",as);

        let thisHandler = this;





        if(this.props.loc.pathname.includes('portfolio')) {
            for(let i = 0; i < as.length; i++) {
                as[i].style.color = 'black';
                as[i].style.borderWidth='2px';
                as[i].style.borderStyle='solide';
                as[i].style.borderColor='gold';

                // margin: 2px;
                // background-color: blue;
                // border-radius: 1000px;
                // border-width: 2px;
                // width: 10px;
                // height: 10px;
                // display: inline-block;
                // /*opacity: 0.25;*/

                // opacity: 0.25;
                // transition: opacity 0.1s linear;
            }
        }

        else {




            nav.style.backgroundColor = 'white' // change from transparent to white upon Arafat vai's recommendation on august 07
            // nav.style.opacity='0.7';
            for(let i = 0; i < as.length; i++) {
                // as[i].style.color = 'white';
                as[i].style.color = 'black';
                // change from transparent to white upon Arafat vai's recommendation on august 07 --arefin.
            }
            window.addEventListener('scroll', function(event) { // To listen for event
                event.preventDefault();
                let home = .85 * window.innerHeight
                if(thisHandler.mobile) {
                    if (window.scrollY <= home) { // Just an example
                        nav.style.backgroundColor = 'transparent';
                        for(let i = 0; i < as.length; i++) {
                            as[i].style.color = 'white';
                        }
                    } else {
                        nav.style.backgroundColor = 'white';
                        for(let i = 0; i < as.length; i++) {
                            as[i].style.color = 'black';
                        }
                    }
                } else {
                    if (window.scrollY <= home) { // Just an example
                        nav.style.backgroundColor = 'white'; // or default color
                        // change from 'transparent' to 'white' upon Arafat vai's recommendation on august 07
                        for(let i = 0; i < as.length; i++) {
                            as[i].style.color = 'black';
                        }
                    } else {
                        nav.style.backgroundColor = 'white';
                        for(let i = 0; i < as.length; i++) {
                            as[i].style.color = 'black';
                        }
                    }
                }
            });
        }
        // let li = document.querySelectorAll('li')
        let li = document.getElementsByClassName('linkFont')
        for(let i=0; i<li.length; i++) {
            li[i].onclick = this.props.handleSetActive
        }
    }

    render() {
        return (
            <nav className="navbar navbar-dark navbar-inverse navbar-fixed-top navContainer" id="nav">
                <div className="container-fluid navMargin">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle navbar-toggler"
                                data-toggle="collapse"
                                data-target="#myNavbar">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>

                        <span className="brandlogo">
                            <a className="navbar-brand navHeader" href="#">
                                <img className="headerLogo" onClick={this.scrollToTop} src={logo} alt="logo"/>
                            </a>
                        </span>

                    </div>

                    <div className="collapse navbar-collapse collapseColor" id="myNavbar">
                        <ul className="nav navbar-nav navbar-right">
                            <li className="linkFont"
                                id={"1"}>
                                <Link
                                    activeClass="active"
                                    to="home"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                >
                                    HOME
                                </Link>
                            </li>
                            <li className="linkFont">
                                <Link
                                    activeClass="active"
                                    to="about"
                                    spy={true}
                                    smooth={true}
                                    // offset={-70}
                                    offset={-100}
                                    duration={500}
                                >
                                    ABOUT
                                </Link>
                            </li>
                            <li className="linkFont">
                                <Link
                                    activeClass="active"
                                    to="services"
                                    spy={true}
                                    smooth={true}
                                    // offset={-70}
                                    offset={-100}
                                    duration={500}
                                >
                                    SERVICES
                                </Link>
                            </li>





                            <li className="linkFont">
                                <Link
                                    activeClass="active"
                                    to="contact"
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    // offset={-70}
                                    duration={500}
                                >
                                    CONTACT
                                </Link>
                            </li>

                            <li className="linkFont">
                                <Link
                                    activeClass="active"
                                    to="career"
                                    spy={true}
                                    smooth={true}
                                    // offset={-70}
                                    offset={-100}
                                    duration={500}
                                >
                                    CAREER
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}
