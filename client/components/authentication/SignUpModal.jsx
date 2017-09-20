import React from 'react';

class SignUpModal extends React.Component {
    constructor(props) {
        super(props);
        this.closeModal = this.closeModal.bind(this);
    }

    closeModal() {
        this.props.closeModal();
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
                                <div className="form-group">
                                    <label className="form-label" htmlFor="input-example-8">Login</label>
                                    <input className="form-input" type="email" id="input-example-8" placeholder="Login"/>
                                </div>
                                <div className="form-group">
                                    <label className="form-label" htmlFor="input-example-8">Email</label>
                                    <input className="form-input" type="email" id="input-example-8" placeholder="Email" pattern="[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$"/>
                                </div>
                                <div className="form-group">
                                    <label className="form-label" htmlFor="input-example-12">Password</label>
                                    <input className="form-input" type="password" id="input-example-12" placeholder="Password"/>
                                </div>
                                <div className="form-group">
                                    <label className="form-label" htmlFor="input-example-12">Repeat password</label>
                                    <input className="form-input" type="password" id="input-example-12" placeholder="Password"/>
                                </div>
                                <div className="form-group">
                                    <label className="form-label" htmlFor="input-example-14">Date of birth</label>
                                    <input className="form-input" type="date" id="input-example-14"/>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button className="btn btn-primary">Submit</button>
                        <button className="btn btn-link" onClick={this.closeModal}>Close</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignUpModal