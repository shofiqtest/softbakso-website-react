import React from "react";
import "./Subscription.css";
import data from "../theTeam/data/data";

// import sendImage from "./../../assets/images/subscription/sendimage.png";

// const SendButton = ({ handleClick }) => {
//     const sayDefault = () => //console.log('Default');
//
//     const onClick = handleClick || sayDefault;
//
//     return (
//         <button className="button_SendEmail"
//
//                 onClick={onClick}
//                 type="submit"
//         >
//             <img className="button_SendEmailImage"
//                  alt="logo"
//                 // className="teamCard--button"
//                  src={sendImage}
//
//                 // src={logo}
//             />
//         </button>
//     );
// };

class SubscriptionWeb extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // userEmail: 'Please enter your email for subscription.',
      userEmail: ""
    };
  }

  handleClickEmailSubscription = () => {
    //console.log("at handleClick: ",this.state.userEmail);
    alert("your Email is:  " + this.state.userEmail);
    // let indexValue=this.props.property.index;
  };

  handleChange = event => {
    this.setState({ userEmail: event.target.value });
  };

  render() {
    return (
      // img-fluid
      // class="img-fluid"
      // img-fluid or img-responsive
      <div
        className="suscription-mainDivWEB img-fluid"
        style={{
          // padding:'10px',
          // paddingTop:'90px',
          // paddingBottom:  '90px',
          backgroundColor: "#99B0CF"
        }}
      >
        <div className="simple-subscription-form-Web">
          <form
            // onSubmit={this.handleClickEmailSubscription}
            onSubmit={this.handleClickEmailSubscription}
          >
            {/*<div className="input-group">*/}
            <div className="input-containerWeb">
              <p className="subscription-Text-Web">
                <strong>Subscribe now.</strong>{" "}
                <span
                  style={{
                    paddingRight: "8px",
                    paddingLeft: "4px"
                  }}
                >
                  {" "}
                  |{" "}
                </span>{" "}
                get updated notification from us.
              </p>

              <div className="inputAndIconDiv-web">
                <input
                  className="input-fieldWeb"
                  type="text"
                  // style={{color:'red'}}

                  value={this.state.userEmail}
                  onChange={this.handleChange}
                />

                <i
                  className="fa fa-paper-plane iconWeb"
                  onClick={this.handleClickEmailSubscription}
                ></i>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default SubscriptionWeb;
