import React from 'react';
import PropTypes from 'prop-types';

class SignUpModal extends React.Component {
    constructor(props) {
        super(props);
        this.closeModal = this.closeModal.bind(this);
        this.submitSignUpForm = this.submitSignUpForm.bind(this);
        this.validateForm = this.validateForm.bind(this);
        this.state = {
            loginIsValid: true,
            passwordIsValid: true,
            emailIsValid: true,
            passwordsIsEqual: true,
            birthdayIsValid: true,
            login: null,
            email: null,
            password: null,
            repeatPassword: null,
            birthday: null
        }
    }

    closeModal() {
        this.props.closeModal();
    }

    submitSignUpForm() {
        this.setState({
            login: this.refs.login.value,
            password: this.refs.password.value,
            repeatPassword: this.refs.repeatPassword.value,
            birthday: this.refs.birthday.value
        });
    }

    validateForm() {
        this.state.password === this.state.repeatPassword ? this.setState({passwordsIsEqual: true}) : this.setState({passwordsIsEqual: false});
    }

    validateLogin() {
        this.state.login ? this.setState({loginIsValid: true}) : this.setState({loginIsValid: false});
    }

    validateEmail() {
        this.state.email ? this.setState({emailIsValid: true}) : this.setState({emailIsValid: false});
    }

    validatePassword() {
        this.state.password ? this.setState({passwordIsValid: true}) : this.setState({passwordIsValid: false});
    }

    validateBirthday() {
        this.state.birthday ? this.setState({birthdayIsValid: true}) : this.setState({birthdayIsValid: false});
    }

    render() {
        return (
            <div className="modal modal-sm active">
                <div className="modal-overlay" onClick={this.closeModal}> </div>
                <div className="modal-container column" role="document">
                    <div className="modal-header">
                        <button type="button" className="btn btn-clear float-right" aria-label="Close" onClick={this.closeModal}> </button>
                        <div className="modal-title h5">Modal title</div>
                    </div>
                    <div className="modal-body">
                        <div className="content">
                            <form action="">
                                <div className={this.state.loginIsValid ? "form-group" : "form-group has-error"}>
                                    <label className="form-label">Login</label>
                                    <input className="form-input"
                                           type="text"
                                           ref='login'
                                           onBlur={this.validateLogin.bind(this)}/>
                                    {!this.state.loginIsValid && <span className="form-input-hint">This option is required.</span>}
                                </div>
                                <div className={this.state.emailIsValid ? "form-group" : "form-group has-error"}>
                                    <label className="form-label">Email</label>
                                    <input className="form-input"
                                           type="email"
                                           pattern="[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$"
                                           ref='email'
                                           onBlur={this.validateEmail.bind(this)}/>
                                    {!this.state.emailIsValid && <span className="form-input-hint">This option is required.</span>}
                                    {/*<span className="form-input-hint">E-mail is invalid.</span>*/}
                                </div>
                                <div className={this.state.passwordIsValid ? "form-group" : "form-group has-error"}>
                                    <label className="form-label">Password</label>
                                    <input className="form-input"
                                           type="password"
                                           ref='password'
                                           onBlur={this.validatePassword.bind(this)}/>
                                    {!this.state.passwordIsValid && <span className="form-input-hint">This option is required.</span>}
                                    {/*<span className="form-input-hint">Passwords must have at least 8 characters.</span>*/}
                                </div>
                                <div className={this.state.passwordsIsEqual ? "form-group" : "form-group has-error"}>
                                    <label className="form-label">Repeat password</label>
                                    <input className="form-input" type="password" ref='repeatPassword'/>
                                    {!this.state.emailIsValid && <span className="form-input-hint">This option is required.</span>}
                                    {!this.state.passwordsIsEqual && <span className="form-input-hint">Passwords not equal.</span>}
                                </div>
                                <div className={this.state.birthdayIsValid ? "form-group" : "form-group has-error"}>
                                    <label className="form-label">Date of birth</label>
                                    <input className="form-input"
                                           type="date"
                                           ref='birthday'
                                           onBlur={this.validateBirthday.bind(this)}/>
                                    {!this.state.birthdayIsValid && <span className="form-input-hint">This option is required.</span>}
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button className="btn btn-primary" onClick={this.submitSignUpForm}>Submit</button>
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