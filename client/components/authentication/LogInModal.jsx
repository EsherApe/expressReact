import React from 'react';
import PropTypes from 'prop-types';
import 'whatwg-fetch';
import {connect} from 'react-redux';

class LogInModal extends React.Component {
    constructor(props) {
        super(props);
        this.closeModal = this.closeModal.bind(this);
        this.login = this.login.bind(this);
        this.state = {
            responseMessage: ''
        }
    }

    closeModal() {
        this.props.closeModal();
    }

    login() {
        let user = {
            email: this.refs.email.value,
            password: this.refs.password.value
        };

        if (user.email && user.password) {

            fetch('/user/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            }).then(resp => {
                return resp.json();
            }).then(resp => {
                if (resp.error) {
                    this.setState({responseMessage: resp.message});
                    setTimeout(() => {
                        this.setState({responseMessage: ''});
                    }, 5000)
                } else {
                    this.props.onLogIn(resp);
                }
            }).catch(err => console.error(err));
        }
    }

    render() {
        return (
            <div>
                <div className="modal modal-sm active">
                    <div className="modal-overlay" onClick={this.closeModal}>
                        {this.state.responseMessage && <div className='col-mx-auto col-4'><div className="toast toast-error">{this.state.responseMessage}</div></div>}
                    </div>
                    <div className="modal-container column" role="document">
                        <div className="modal-header">
                            <button type="button" className="btn btn-clear float-right" aria-label="Close"
                                    onClick={this.closeModal}> </button>
                            <div className="modal-title h5">Login!</div>
                        </div>
                        <div className="modal-body">
                            <div className="content">
                                <form>
                                    <div className="form-group">
                                        <label className="form-label" htmlFor="login-email-input">E-mail</label>
                                        <input className="form-input" type="text" id="login-email-input" ref='email'
                                               placeholder="E-mail"/>
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label" htmlFor="input-example-7">Password</label>
                                        <input className="form-input" type="password" id="input-example-7" ref='password'
                                               placeholder="Password"/>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-primary" onClick={this.login}>Submit</button>
                            <button className="btn btn-link" onClick={this.closeModal}>Close</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

LogInModal.propTypes = {
    closeModal: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    isLogin: state.user.get('isLogin')
});

const mapDispatchToProps = dispatch => ({
    onLogIn: user => {
        dispatch({type: 'LOG_IN', user: user})
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LogInModal);