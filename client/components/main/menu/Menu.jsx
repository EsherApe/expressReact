import React from 'react';
import {connect} from 'react-redux';

class Menu extends React.Component {
    constructor(props) {
        super(props);
    }

    openMenuItem(contentName) {
        this.props.onSwitchPage(contentName)
    }

    render() {
        return (
            <section className="column col-4 col-xs-12">
                <ul className="menu">
                    <li className="menu-item">
                        <div className="tile tile-centered">
                            <div className="tile-icon">
                                <img src="/static/img/avatar-2.png" className="avatar" alt="Avatar"/>
                            </div>
                            <div className="tile-content">
                                Bruce Banner
                            </div>
                        </div>
                    </li>
                    <li className="divider"> </li>
                    <li className="menu-item">
                        <a href="#"
                           className={this.props.content === 'profile' ? 'active' : ''}
                           onClick={this.openMenuItem.bind(this, 'profile')}>
                            My profile
                        </a>
                    </li>
                    <li className="menu-item">
                        {this.props.messages &&
                        <div className="menu-badge">
                            <label className="label label-primary">{this.props.messages.length}</label>
                        </div>}
                        <a href="#"
                           className={this.props.content === 'messages' ? 'active' : ''}
                           onClick={this.openMenuItem.bind(this, 'messages')}>
                            Messages
                        </a>
                    </li>
                    <li className="menu-item">
                        {this.props.notifications &&
                        <div className="menu-badge">
                            <label className="label label-primary">{this.props.notifications.length}</label>
                        </div>}
                        <a href="#"
                           className={this.props.content === 'notifications' ? 'active' : ''}
                           onClick={this.openMenuItem.bind(this, 'notifications')}>
                            Notifications
                        </a>
                    </li>
                    <li className="menu-item">
                        <a href="#"
                           className={this.props.content === 'settings' ? 'active' : ''}
                           onClick={this.openMenuItem.bind(this, 'settings')}>
                            Settings
                        </a>
                    </li>
                    <li className="menu-item">
                        <a href="#">
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

export default connect(
    state => ({
        content: state.content.get('contentName'),
        messages: state.messages.get('messages'),
        notifications: state.notifications.get('notifications')
    }),
    dispatch => ({
        onSwitchPage: contentName => {
            dispatch({type: 'SWITCH_CONTENT', contentName: contentName})
        }
    })
)(Menu);