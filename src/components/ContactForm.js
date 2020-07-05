import React, {Component} from 'react';

export default class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayErrors: false
        }
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
            document.getElementById('contactForm').reset();
            let feedBack = {
                name: data.get('name'),
                email: data.get('email'),
                company: data.get('company'),
                phone: data.get('phoneno'),
                message: data.get('msg'),
                message_html: '<p>{data.get(\'msg\')}</p>'
            }

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
            .send('gmail', templateId, {
                senderEmail,
                receiverEmail,
                feedback
            })
            .then(res => {
            })
            // Handle errors here however you like
            .catch(err => console.error('Failed to send feedback. Error: ', err));
    }

    render() {
        const { displayErrors } = this.state;
        return(
            <div className="contactDiv">
                <div className="contactHeader">
                    <p className="getTouchFont">get in touch <span className="headerSpan">Quickly</span></p>
                </div>
                <form className={`formDiv ${displayErrors ? 'displayErrors' : ''}`} onSubmit={this.handleSubmit} noValidate id='contactForm'>
                    <div className="inputDiv">
                        <label htmlFor="name" className="formLabel" >Your Name</label>
                        <br/>
                        <input className="form-control" required="required" type="text" name="name" id="name"/>
                    </div>
                    <div className="inputDiv">
                        <label htmlFor="company" className="formLabel">Your Company (if any)</label>
                        <br/>
                        <input className="form-control" type="text" id="company" name="company"/>
                    </div>
                    <div className="inputDiv">
                        <label htmlFor="email" className="formLabel">Your Email</label>
                        <br/>
                        <input className="form-control" required="required"  type="email" name="email" id="email"/>
                    </div>
                    <div className="inputDiv">
                        <label htmlFor="phone" className="formLabel">Your Phone</label>
                        <br/>
                        <input className="form-control" required="required" type="phone" name="phoneno" id="phoneno"/>
                    </div>
                    <div className="inputDiv">
                        <label htmlFor="phone" className="formLabel">Your Message</label>
                        <br/>
                        <textarea className="form-control multline" required="required" name="msg" rows="2" id="msg"></textarea>
                    </div>
                    <button type="submit" className="btn buttonDes">Send Now</button>
                </form>
            </div>
        );
    }

}