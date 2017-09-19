import React from 'react';

class UserProfile extends React.Component {
    render() {
        return (
            <div className="profile-box">
                <div className="panel-body">
                    <div className="tile tile-centered">
                        <div className="tile-content">
                            <div className="tile-title">E-mail</div>
                            <div className="tile-subtitle">{this.props.user.email}</div>
                        </div>
                        <div className="tile-action">
                            <button className="btn btn-link btn-action btn-lg"><i className="icon icon-edit"> </i>
                            </button>
                        </div>
                    </div>
                    <div className="tile tile-centered">
                        <div className="tile-content">
                            <div className="tile-title">Skype</div>
                            <div className="tile-subtitle">bruce.banner</div>
                        </div>
                        <div className="tile-action">
                            <button className="btn btn-link btn-action btn-lg"><i className="icon icon-edit"> </i>
                            </button>
                        </div>
                    </div>
                    <div className="tile tile-centered">
                        <div className="tile-content">
                            <div className="tile-title">Location</div>
                            <div className="tile-subtitle">{this.props.user.address}</div>
                        </div>
                        <div className="tile-action">
                            <button className="btn btn-link btn-action btn-lg"><i className="icon icon-edit"> </i>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="panel-footer">
                    {/*<button className="btn btn-primary btn-block">Chat</button>*/}
                </div>
            </div>
        )
    }
}

export default UserProfile;