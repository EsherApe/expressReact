import React from 'react';
import './logIn.scss';

class LogIn extends React.Component {
    constructor(props) {
        super(props);
        this.skipLogIn = this.skipLogIn.bind(this);
    }

    skipLogIn() {
        console.log('skip');
    };

    render() {
        return (
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
                                        <a href="#" className="btn btn-primary">Sign Up</a>
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
                                        <a href="#" className="btn btn-primary">Log In</a>
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
        )
    }
}

export default LogIn;