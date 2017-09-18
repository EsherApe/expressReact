import React from 'react';
import { connect } from 'react-redux';

//components
import Profile from './profile/Profile';
import Notifications from './notifications/Notifications';
import Messages from './messages/Messages';
import Settings from './settings/Settings';

class Content extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <section className="column col-8 col-xs-12">
                {this.props.content === 'profile' && <Profile/>}
                {this.props.content === 'messages' && <Messages messages={this.props.messages}/>}
                {this.props.content === 'notifications' && <Notifications notifications={this.props.notifications}/>}
                {this.props.content === 'settings' && <Settings/>}
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

    })
)(Content);