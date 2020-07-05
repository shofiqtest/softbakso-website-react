import React from "react";
import './SubscriptionMobile.css';

class SubscriptionMobile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {


            // userEmail: 'Please enter your email for subscription.',
            userEmail: '',

        }
    }

    handleClickEmailSubscription = () => {
        //console.log("at handleClick: ",this.state.userEmail);
        alert("your Email is:  " + this.state.userEmail);
        // let indexValue=this.props.property.index;

    };

    handleChange=(event)=> {
        this.setState({userEmail: event.target.value});
    };



    render() {
        return (

            <div className="suscription-mainDivMobile">
                <div className="simple-subscription-form-Mobile">
                    <form style={{
                        // display: "block",
                        // textAlign: 'center',
                        // // width:'50%',
                        //
                        // justifyContent:'center',
                        // flexDirection: 'column',
                        //
                        // display: 'flex',


                    }}
                          onSubmit={this.handleClickEmailSubscription}
                    >
                        {/*<div className="input-group">*/}

                        <div className="input-containerMobile">


                            {/*<strong>Subscribe now.</strong> <span style={{*/}
                            {/*paddingRight: '8px',*/}
                            {/*paddingLeft: '4px'}}>  | </span>  get updated notification from us.*/}
                        {/*</p>*/}
                            <p className="subscription-Text-Mobile"


                            >
                                <strong>Subscribe now.</strong>  <span style={{
                                paddingRight: '8px',
                                paddingLeft: '4px'}}>  | </span>  get updated notification from us.
                            </p>

                            <input className="input-fieldMobile" type="text"
                                   value={this.state.userEmail}
                                   onChange={this.handleChange}
                            />
                            <i className="fa fa-paper-plane iconMobile"
                               onClick={this.handleClickEmailSubscription}
                            >

                            </i>


                        </div>

                    </form>
                </div>
            </div>

        );

    }
}


export default SubscriptionMobile;