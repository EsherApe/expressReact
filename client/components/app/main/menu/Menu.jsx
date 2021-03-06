import React from 'react';
import {connect} from 'react-redux';

//actions
import {logout} from 'actions/loginActions';
import {switchContent} from 'actions/contentActions';
import {getUser} from 'actions/userActions';

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.newMessages = this.props.data.messages.filter(message => {return message.isNew});
        this.newNotifications = this.props.data.notifications.filter(notification => {return notification.isNew});
    }

    openMenuItem(contentName) {
        this.props.onSwitchPage(contentName)
    }

    userLogout() {
        fetch('/logout', {
            method: 'POST',
            credentials: 'same-origin'
        }).then(resp => {
            return resp.json();
        }).then(resp => {
            if(!resp.error) {
                let resp = {
                    isLogin: false,
                    userId: null,
                    userIsLoaded: false
                };
                this.props.onLogout(resp);
            }
        }).catch(err => console.error(err));
    }

    render() {
        return (
            <section className="column col-4 col-xs-12">
                <ul className="menu">
                    <li className="menu-item">
                        <div className="tile tile-centered">
                            <div className="tile-icon">
                                <img src={this.props.data.user.get('avatar')} className="avatar" alt="Avatar"/>
                            </div>
                            <div className="tile-content">
                                {this.props.data.user.get('fullName')}
                            </div>
                        </div>
                    </li>
                    <li className="divider"> </li>
                    <li className="menu-item">
                        <a href="#"
                           className={this.props.data.content === 'profile' ? 'active' : ''}
                           onClick={this.openMenuItem.bind(this, 'profile')}>
                            My profile
                        </a>
                    </li>
                    <li className="menu-item">
                        {this.props.data.messages &&
                        <div className="menu-badge">
                            <label className="label label-primary">{this.newMessages.length}</label>
                        </div>}
                        <a href="#"
                           className={this.props.data.content === 'messages' ? 'active' : ''}
                           onClick={this.openMenuItem.bind(this, 'messagesList')}>
                            Messages
                        </a>
                    </li>
                    <li className="menu-item">
                        {this.props.data.notifications &&
                        <div className="menu-badge">
                            <label className="label label-primary">{this.newNotifications.length}</label>
                        </div>}
                        <a href="#"
                           className={this.props.data.content === 'notifications' ? 'active' : ''}
                           onClick={this.openMenuItem.bind(this, 'notificationsList')}>
                            Notifications
                        </a>
                    </li>
                    <li className="menu-item">
                        <a href="#"
                           className={this.props.data.content === 'settings' ? 'active' : ''}
                           onClick={this.openMenuItem.bind(this, 'settings')}>
                            Settings
                        </a>
                    </li>
                    <li className="menu-item">
                        <a href="#"
                           className={this.props.data.content === 'search' ? 'active' : ''}
                           onClick={this.openMenuItem.bind(this, 'search')}>
                            Search
                        </a>
                    </li>
                    <li className="menu-item">
                        <a href="#" onClick={this.userLogout.bind(this)}>
                            Logout
                        </a>
                    </li>
                    <li className="divider" data-content="LINKS">
                    </li>
                    <li className="menu-item">
                        <a href="#">
                            <i className="icon icon-link"> </i> Slack
                        </a>
                    </li>
                    <li className="menu-item">
                        <a href="#">
                            <i className="icon icon-link"> </i> Hipchat
                        </a>
                    </li>
                    <li className="menu-item">
                        <div className="menu-badge">
                            <label className="label label-primary">2</label>
                        </div>
                        <a href="#">
                            <i className="icon icon-link"> </i> Skype
                        </a>
                    </li>
                </ul>
            </section>
        )
    }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
    onSwitchPage: contentName => {
        dispatch(switchContent(contentName))
    },
    onLogout: (resp) => {
        dispatch(logout(resp));
        dispatch(getUser(null));
    },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Menu);