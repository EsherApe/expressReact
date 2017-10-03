import React from 'react';

//components
import Profile from './profile/Profile';
import Notifications from './notifications/Notifications';
import Messages from './messages/Messages';
import Settings from './settings/Settings';
import UserPage from './userPage/UserPage';
import Menu from '../menu/Menu';

class UserContent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <section className='columns'>
                <Menu/>
                {this.props.data.content === 'profile' && <Profile user={this.props.data.user}/>}
                {this.props.data.content === 'messagesList' && <Messages messages={this.props.data.messages}/>}
                {this.props.data.content === 'notificationsList' && <Notifications notifications={this.props.data.notifications}/>}
                {this.props.data.content === 'settings' && <Settings/>}
                {this.props.data.content === 'userPage' && <UserPage userId={this.props.data.viewedUserId} activeTab={this.props.data.activeTab}/>}
            </section>
        )
    }
}

export default UserContent;