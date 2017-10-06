import React from 'react';
import PropTypes from 'prop-types';

class UserProfile extends React.Component {
    render() {
        return (
            <div className="profile-box">
                <div className="panel-body">
                    <div className="tile tile-centered">
                        <div className="tile-content">
                            <div className="tile-title text-bold">E-mail</div>
                            <div className="tile-subtitle">{this.props.user.email}</div>
                        </div>
                        <div className="tile-action">
                            <button className="btn btn-link btn-action btn-lg"><i className="icon icon-mail"> </i>
                            </button>
                        </div>
                    </div>
                    <div className="tile tile-centered">
                        <div className="tile-content">
                            <div className="tile-title text-bold">Messengers</div>
                            <div className="tile-subtitle">Skype: <a href="#">{this.props.user.messengers.skype}</a></div>
                            <div className="tile-subtitle">Telegram: <a href="#">{this.props.user.messengers.telegram}</a></div>
                        </div>
                        <div className="tile-action">
                            <button className="btn btn-link btn-action btn-lg"><i className="icon icon-message"> </i>
                            </button>
                        </div>
                    </div>
                    <div className="tile tile-centered">
                        <div className="tile-content">
                            <div className="tile-title text-bold">Location</div>
                            <div className="tile-subtitle">{this.props.user.location}</div>
                        </div>
                        <div className="tile-action">
                            <button className="btn btn-link btn-action btn-lg"><i className="icon icon-location"> </i>
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

UserProfile.propTypes = {
    user: PropTypes.object.isRequired,
};

export default UserProfile;