import React from 'react';
import './authentication.scss';

//components
import LogInModal from './LogInModal';
import SignUpModal from './SignUpModal';

class Authentication extends React.Component {
    constructor(props) {
        super(props);
        this.skipLogIn = this.skipLogIn.bind(this);
        this.logIn = this.logIn.bind(this);
        this.signUp = this.signUp.bind(this);
        this.closeLogInModal = this.closeLogInModal.bind(this);
        this.closeSignUpModal = this.closeSignUpModal.bind(this);

        this.state = {
            showLoginModal: false,
            showSignUpModal: false
        }
    }

    skipLogIn() {
        this.props.loginFn();
    };

    logIn() {
        //this.props.loginFn();
        this.setState({showLoginModal: true})
    }

    signUp() {
        this.setState({showSignUpModal: true})
    }

    closeLogInModal() {
        this.setState({showLoginModal: false})
    }

    closeSignUpModal() {
        this.setState({showSignUpModal: false})
    }

    render() {
        return (
            <div>
                <section className='logIn-container'>
                    <div className="empty">
                        <div className="empty-icon">
                            <i className="icon icon-message" style={{fontSize: '2rem'}}> </i>
                        </div>
                        <p className="empty-title h5">Welcome my friend!</p>
                        <p className="empty-subtitle">you've come to the right place.</p>
                        <div className="empty-action">
                            <div className="columns">
                                <div className="column">
                                    <div className="card">
                                        <div className="card-header">
                                            <h6 className="card-title h6"> </h6>
                                        </div>
                                        <div className="card-body text-gray">
                                            <span>If you haven't registered</span>
                                        </div>
                                        <div className="card-footer">
                                            <a href="#" className="btn btn-primary" onClick={this.signUp}>Sign Up</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="divider-vert" data-content="OR"> </div>
                                <div className="column">
                                    <div className="card">
                                        <div className="card-header">
                                            <h6 className="card-title h6"> </h6>
                                        </div>
                                        <div className="card-body text-gray">
                                            <span>Log in to your account</span>
                                        </div>
                                        <div className="card-footer">
                                            <a href="#" className="btn btn-primary" onClick={this.logIn}>Log In</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="divider text-center"> </div>
                        <div className="empty-action">
                            <button className="btn btn-link" onClick={this.skipLogIn}>Skip</button>
                        </div>
                    </div>
                </section>
                {this.state.showLoginModal && <LogInModal closeModal={this.closeLogInModal}/>}
                {this.state.showSignUpModal && <SignUpModal closeModal={this.closeSignUpModal}/>}
            </div>
        )
    }
}

export default Authentication;