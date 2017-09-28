import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

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
        console.log(this.props.user);
        return (
            <section className="column col-8 col-xs-12">
                {this.props.content === 'profile' && <Profile user={this.props.user}/>}
                {this.props.content === 'messagesList' && <Messages messages={this.props.messages}/>}
                {this.props.content === 'notificationsList' && <Notifications notifications={this.props.notifications}/>}
                {this.props.content === 'settings' && <Settings/>}
                {this.props.content === 'userPage' && <UserPage userId={this.props.userId}/>}
            </section>
        )
    }
}

Content.propTypes = {
    content: PropTypes.oneOf(['profile','messagesList','notificationsList','settings','userPage']).isRequired,
    messages: PropTypes.array.isRequired,
    notifications: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
    content: state.content.get('contentName'),
    messages: state.messages.get('messagesList'),
    notifications: state.notifications.get('notificationsList'),
    userId: state.users.get('showUserId')
});

const mapDispatchToProps = dispatch => ({});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Content);