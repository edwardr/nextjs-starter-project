import React from 'react';
import formStyles from '../public/styles/modules/components/form.module.css';
import ApiService from '../services/Api'
import Link from 'next/link';

class ContactForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      email_address: '',
      phone_number: '',
      message: '',
      message: '',
      working: false,
      confirmation: false,
      error: false
    }

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    //
  }

  componentDidUpdate() {
    const {working} = this.state;
    let html = document.querySelector('html');

    if( working ) {
      html.classList.add('working');
    } else {
      html.classList.remove('working');
    }
  }

  handleChange(event) {
    let name = event.target.getAttribute('name');
    this.setState({
      [name]: event.target.value
    },
    () => {
      //
    });
  }

  _processSubmission = (e) => {
    e.preventDefault();
    var firstNameField,
        lastNameField,
        emailAddressField,
        phoneNumberField,
        messageField,
        url,
        json,
        button,
        component;

    component = this;

    firstNameField = document.querySelector('input[name="first_name"]');
    lastNameField = document.querySelector('input[name="last_name"]');
    emailAddressField = document.querySelector('input[name="email_address"]');
    phoneNumberField = document.querySelector('input[name="phone_number"]');
    messageField = document.querySelector('textarea[name="message"]');

    if (!firstNameField.checkValidity()) {
      firstNameField.classList.add('invalid');
      return false;
    } else {
      firstNameField.classList.remove('invalid');
    }

    if (!lastNameField.checkValidity()) {
      lastNameField.classList.add('invalid');
      return false;
    } else {
      lastNameField.classList.remove('invalid');
    }

    if (!emailAddressField.checkValidity()) {
      emailAddressField.classList.add('invalid');
      return false;
    } else {
      emailAddressField.classList.remove('invalid');
    }

    if (!phoneNumberField.checkValidity()) {
      phoneNumberField.classList.add('invalid');
      return false;
    } else {
      phoneNumberField.classList.remove('invalid');
    }

    if (!messageField.checkValidity()) {
      messageField.classList.add('invalid');
      return false;
    } else {
      messageField.classList.remove('invalid');
    }

    button = document.querySelector('.js-submit');
		const api = new API;
		api.processForm(
			'form-endpoint-name',
			this.state.first_name,
			this.state.last_name,
			this.state.email_address,
			this.state.state,
			this.state.phone_number,
			this.state.message
		).then(function(data) {
			setTimeout( function() {
				button.disabled = false;
				let flat = JSON.stringify(data);
				component.setState({
					working: false
				});
				if( flat.includes('registration_error') ) {
					component.setState({
						error: {
							registration_error: data.message
						}
					});
					return false;
				} else {
					component.setState({
						render_success: true
					})
				}
			}, 500 );
		})
  }

  _renderForm() {
    if( this.state.confirmation == false ) {
      return(
        <form>
          <label>First Name
            <input onChange={this.handleChange} name="first_name" value={this.state.first_name} type="text" placeholder="First Name" required />
          </label>
          <label>Last Name
            <input onChange={this.handleChange} name="last_name" value={this.state.last_name} type="text" placeholder="Last Name" required />
          </label>
          <label>Email
            <input onChange={this.handleChange} name="email_address" value={this.state.email_address} type="email" placeholder="Email Address" required />
          </label>
          <label>Phone
            <input onChange={this.handleChange} name="phone_number" value={this.state.phone_number} type="tel" placeholder="e.g. 323-555-5555" required />
          </label>

          <label>Message
            <textarea
              onChange={this.handleChange}
              value={this.state.message}
              name="message"
              placeholder="..."
              rows="5">
            </textarea>
          </label>

          <div className={`row ${formStyles.signin}`}>
            <div className="small-12 columns text-center">
              <input onClick={this._processSubmission} type="submit" className="js-submit button" value="Send" />
            </div>
          </div>
        </form>
      );

    } else {
      return(
        <h5 className="text-center">{this.state.confirmation}</h5>
      );
    }
  }

  render() {

    return(
      <>
      <div className={formStyles.wrap}>
        <div className={`${formStyles.contact}`}>
          <div className={`${formStyles.form}`}>
          {this._renderForm()}
          </div>
        </div>
      </div>
      </>
    );
  }

}

export default ContactForm;
