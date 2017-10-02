import React from 'react';

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
                {this.props.data.content === 'profile' && <Profile user={this.props.data.user}/>}
                {this.props.data.content === 'messagesList' && <Messages messages={this.props.data.messages}/>}
                {this.props.data.content === 'notificationsList' && <Notifications notifications={this.props.data.notifications}/>}
                {this.props.data.content === 'settings' && <Settings/>}
                {this.props.data.content === 'userPage' && <UserPage userId={this.props.data.viewedUserId} activeTab={this.props.data.activeTab}/>}
            </section>
        )
    }
}

export default Content;