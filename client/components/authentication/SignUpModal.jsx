import React from 'react';
import PropTypes from 'prop-types';
import 'whatwg-fetch';

//components
import FormErrors from './FormErrors';

class SignUpModal extends React.Component {
    constructor(props) {
        super(props);

        this.closeModal = this.closeModal.bind(this);
        this.handleUserInput = this.handleUserInput.bind(this);
        this.validateField = this.validateField.bind(this);
        this.validateForm = this.validateForm.bind(this);
        this.errorClass = this.errorClass.bind(this);
        this.submitSignUpForm = this.submitSignUpForm.bind(this);

        this.state = {
            login: '',
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            passwords: '',
            birthday: '',
            formErrors: { login: '', email: '', password: '', passwords: '', birthday: '' },
            firstNameValid: false,
            lastNameValid: false,
            loginValid: false,
            emailValid: false,
            passwordValid: false,
            passwordsValid: false,
            birthdayValid: false,
            formValid: false
        }
    }

    closeModal() {
        this.props.closeModal();
    }

    handleUserInput(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value}, () => {
            this.validateField(name, value)
        });
    }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let firstNameValid = this.state.firstNameValid;
        let lastNameValid = this.state.lastNameValid;
        let loginValid = this.state.loginValid;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;
        let passwordsValid = this.state.passwordsValid;
        let birthdayValid = this.state.birthdayValid;

        switch (fieldName) {
            case 'login':
                loginValid = value.length;
                break;
            case 'firstName':
                firstNameValid = value.length;
                break;
            case 'lastName':
                lastNameValid = value.length;
                break;
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.email = emailValid ? '' : ' is invalid';
                break;
            case 'password':
                passwordValid = value.length >= 8;
                fieldValidationErrors.password = passwordValid ? '' : ' is too short';
                break;
            case 'passwords':
                passwordsValid = this.state.password === this.state.passwords;
                fieldValidationErrors.passwords = passwordsValid ? '' : ' are not equal';
                break;
            case 'birthday':
                birthdayValid = value.length;
                break;
            default:
                break;
        }

        this.setState({
            formErrors: fieldValidationErrors,
            loginValid: loginValid,
            firstNameValid: firstNameValid,
            lastNameValid: lastNameValid,
            emailValid: emailValid,
            passwordValid: passwordValid,
            passwordsValid: passwordsValid,
            birthdayValid: birthdayValid,
        }, this.validateForm);
    }

    validateForm() {
        this.setState({
            formValid: this.state.loginValid &&
                       this.state.firstNameValid &&
                       this.state.lastNameValid &&
                       this.state.emailValid &&
                       this.state.passwordValid &&
                       this.state.passwordsValid &&
                       this.state.birthdayValid
        });
    }

    errorClass(error) {
        return(error.length === 0 ? '' : 'has-error');
    }

    submitSignUpForm() {
        let user = {
            firstName: this.refs.firstName.value,
            lastName: this.refs.lastName.value,
            login: this.refs.login.value,
            email: this.refs.email.value,
            password: this.refs.password.value,
            birthday: this.refs.birthday.value,
        };

        fetch('/user/save', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        }).then( response => {
            if ( response.status !== 200 ) {
                console.error('Looks like there was a problem. Status Code: ' + response.status);
                return
            }

            console.log(response.data);

        }).catch(console.error);

        this.closeModal();
    }

    render() {
        return (
            <div className="modal modal-sm active">
                <div className="modal-overlay" onClick={this.closeModal}> </div>
                <div className="modal-container column" role="document">
                    <div className="modal-header">
                        <button type="button" className="btn btn-clear float-right" aria-label="Close"
                                onClick={this.closeModal}> </button>
                        <div className="modal-title h5">Sign Up!</div>
                    </div>
                    <div className="modal-body">
                        <div className="content">
                            <form>
                                <div className={`form-group ${this.errorClass(this.state.formErrors.login)}`}>
                                    <label className="form-label">Login</label>
                                    <input className="form-input"
                                           type="text"
                                           name="login"
                                           ref='login'
                                           value={this.state.login}
                                           onChange={this.handleUserInput}/>
                                </div>
                                <div className="form-group">
                                    <label className="form-label">First name</label>
                                    <input className="form-input"
                                           type="text"
                                           name="firstName"
                                           ref='firstName'
                                           value={this.state.firstName}
                                           onChange={this.handleUserInput}/>
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Last name</label>
                                    <input className="form-input"
                                           type="text"
                                           name="lastName"
                                           ref='lastName'
                                           value={this.state.lastName}
                                           onChange={this.handleUserInput}/>
                                </div>
                                <div className={`form-group ${this.errorClass(this.state.formErrors.email)}`}>
                                    <label className="form-label">Email</label>
                                    <input className="form-input"
                                           type="email"
                                           name="email"
                                           ref='email'
                                           value={this.state.email}
                                           onChange={this.handleUserInput}/>
                                    <FormErrors formErrors={this.state.formErrors} name='email'/>
                                </div>
                                <div className="columns">
                                    <div className="column col-6">
                                        <div className={`form-group ${this.errorClass(this.state.formErrors.password)}`}>
                                            <label className="form-label">Password</label>
                                            <input className="form-input"
                                                   type="password"
                                                   name="password"
                                                   ref='password'
                                                   value={this.state.password}
                                                   onChange={this.handleUserInput}/>
                                            <FormErrors formErrors={this.state.formErrors} name='password'/>
                                        </div>
                                    </div>
                                    <div className="column col-6">
                                        <div className={`form-group ${this.errorClass(this.state.formErrors.passwords)}`}>
                                            <label className="form-label">Repeat password</label>
                                            <input className="form-input"
                                                   type="password"
                                                   name="passwords"
                                                   value={this.state.passwords}
                                                   onChange={this.handleUserInput}/>
                                            <FormErrors formErrors={this.state.formErrors} name='passwords'/>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Date of birth</label>
                                    <input className="form-input"
                                           type="date"
                                           name='birthday'
                                           ref='birthday'
                                           value={this.state.birthday}
                                           onChange={this.handleUserInput}/>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button className="btn btn-primary" disabled={!this.state.formValid} onClick={this.submitSignUpForm}>Submit</button>
                        <button className="btn btn-link" onClick={this.closeModal}>Close</button>
                    </div>
                </div>
            </div>
        )
    }
}

SignUpModal.propTypes = {
    closeModal: PropTypes.func.isRequired
};

export default SignUpModal