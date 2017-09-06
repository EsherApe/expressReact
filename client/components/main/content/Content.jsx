import React from 'react';
import Profile from './profile/Profile';
import Notifications from './notifications/Notifications';
import Messages from './messages/Messages';

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            profile: false,
            messages: true,
            notifications: false,
            settings: false,
        }
    }
    render() {
        return (
            <section className="column col-8 col-xs-12">
                {this.state.profile && <Profile/>}
                {this.state.profile && <Profile/>}
                {this.state.messages && <Messages/>}
            </section>
        )
    }
}

export default Content;