import React from 'react';
import { connect } from 'react-redux';

//components
import Profile from './profile/Profile';
import Notifications from './notifications/Notifications';
import Messages from './messages/Messages';
import Settings from './settings/Settings';
import UserPage from './userPage/UserPage';

class Content extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <section className="column col-8 col-xs-12">
                {this.props.content === 'profile' && <Profile/>}
                {this.props.content === 'messagesList' && <Messages messages={this.props.messages}/>}
                {this.props.content === 'notificationsList' && <Notifications notifications={this.props.notifications}/>}
                {this.props.content === 'settings' && <Settings/>}
                {this.props.content === 'userPage' && <UserPage userId={this.props.userId}/>}
            </section>
        )
    }
}

export default connect(
    state => ({
        content: state.content.get('contentName'),
        messages: state.messages.get('messagesList'),
        notifications: state.notifications.get('notificationsList'),
        userId: state.users.get('showUserId'),
    }),
    dispatch => ({

    })
)(Content);