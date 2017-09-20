import React from 'react';

class LogInModal extends React.Component {
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
                            <form>
                                <div className="form-group">
                                    <label className="form-label" htmlFor="login-email-input">E-mail</label>
                                    <input className="form-input" type="text" id="login-email-input" placeholder="E-mail"/>
                                </div>
                                <div className="form-group">
                                    <label className="form-label" htmlFor="input-example-7">Password</label>
                                    <input className="form-input" type="password" id="input-example-7" placeholder="Password"/>
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

export default LogInModal