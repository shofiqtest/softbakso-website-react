import React, { Component } from "react";
import video from "../assets/icons/video.png";
// import Contact from "../components/ContactForm";
import sendImage from "../assets/icons/sendimage.png";
import { Link, animateScroll as scroll } from "react-scroll";
import PromoText from "./../components/promoText/PromoText";
import { env } from "../config";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobile: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    if (!event.target.checkValidity()) {
      this.setState({ displayErrors: true });
      return;
    } else {
      this.setState({ displayErrors: false });
      document.getElementById("contactForm").reset();
      let feedBack = {
        name: data.get("name"),
        email: data.get("email"),
        company: data.get("company"),
        phone: data.get("phoneno"),
        message: data.get("msg"),
        message_html: "<p>{data.get('msg')}</p>"
      };

      this.sendFeedback(
        this.props.env.REACT_APP_EMAILJS_TEMPLATEID,
        feedBack.email,
        this.props.env.REACT_APP_EMAILJS_RECEIVER,
        feedBack
      );
    }
  }

  sendFeedback(templateId, senderEmail, receiverEmail, feedback) {
    window.emailjs
      .send("gmail", templateId, {
        senderEmail,
        receiverEmail,
        feedback
      })
      .then(res => {
        console.log("email sent", res);
      })
      // Handle errors here however you like
      .catch(err => console.error("Failed to send feedback. Error: ", err));
  }

  componentWillMount() {
    console.log(env);
    if (
      navigator.userAgent.match(/Android/i) ||
      navigator.userAgent.match(/webOS/i) ||
      navigator.userAgent.match(/iPhone/i) ||
      navigator.userAgent.match(/iPad/i) ||
      navigator.userAgent.match(/iPod/i) ||
      navigator.userAgent.match(/BlackBerry/i) ||
      navigator.userAgent.match(/Windows Phone/i)
    ) {
      this.setState({
        mobile: true
      });
    }
  }

  componentDidMount() {
    let status = this;
    window.addEventListener("resize", function() {
      if (window.innerWidth < 768) {
        status.setState({
          mobile: true
        });
      } else {
        status.setState({
          mobile: false
        });
      }
    });
    console.log(this.state.mobile);
  }

  // componentWillUnmount() {
  //     clearInterval(this.timeout)
  // }

  render() {
    const { displayErrors } = this.state;
    // let textThatChanges = this.state.promoText[this.state.index]
    return (
      <div className="homePage" id={"home"}>
        <div className="homeBody">
          <div className="row mobileHome">
            <div className="col-lg-9 col-md-8 col-sm-11 col-xs-11">
              <PromoText />             
            </div>
            {/* {this.state.mobile ? (
              <div className="col-xs-2 col-xs-offset-1 col-sm-6">
                <div
                  className="leftCircle"
                  data-toggle="modal"
                  data-target="#myModal"
                >
                  <img className="mobileSendIcon" src={sendImage} alt="send" />
                </div>
              </div>
            ) : (
              <div className="col-lg-3 col-sm-4 col-lg-offset-1 col-md-4 col-sm-3">
                <Contact env={env}></Contact>
              </div>
            )} */}
          </div>
          {!this.state.mobile && (
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <a href="#" className="round-button animate-flicker">
                <i className="fa fa-arrow-down marginArrow fa-2x"></i>
              </a>
            </Link>
          )}
          {this.state.mobile && (
            <a className="play-btn homeBottom" href="#"></a>
          )}
          <div id="myModal" className="modal fade" role="dialog">
            <div className="modal-dialog contactDiv">
              <div className="modal-content modalDesign">
                <div className="modal-header">
                  <div className="contactHeader">
                    <p className="getTouchFont headerClass font-weight-bold">
                      get in touch quickly
                    </p>
                  </div>
                </div>

                <div className="modal-body">
                  <form
                    className={`formDiv ${
                      displayErrors ? "displayErrors" : ""
                    }`}
                    onSubmit={this.handleSubmit}
                    noValidate
                    id="contactForm"
                  >
                    <div className="inputDiv">
                      <label htmlFor="name" className="formLabel">
                        Your Name
                      </label>
                      <br />
                      <input
                        className="form-control"
                        required="required"
                        type="text"
                        id="name"
                      />
                    </div>
                    <div className="inputDiv">
                      <label htmlFor="company" className="formLabel">
                        Your Company (if any)
                      </label>
                      <br />
                      <input
                        className="form-control"
                        type="text"
                        id="company"
                      />
                    </div>
                    <div className="inputDiv">
                      <label htmlFor="email" className="formLabel">
                        Your Email
                      </label>
                      <br />
                      <input
                        className="form-control"
                        required="required"
                        type="email"
                        id="email"
                      />
                    </div>
                    <div className="inputDiv">
                      <label htmlFor="phone" className="formLabel">
                        Your Phone
                      </label>
                      <br />
                      <input
                        className="form-control"
                        type="text"
                        required="required"
                        id="phoneno"
                      />
                    </div>
                    <div className="inputDiv">
                      <label htmlFor="phone" className="formLabel">
                        Your Message
                      </label>
                      <br />
                      <textarea
                        className="form-control multline"
                        required="required"
                        rows="2"
                        id="message"
                      ></textarea>
                    </div>
                    <button type="submit" className="btn buttonDes">
                      Send Now
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
