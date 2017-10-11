import React from 'react';
import {connect} from 'react-redux';
import {switchContent} from 'actions/contentActions';
import {showSelectedUser} from 'actions/userActions';
import 'whatwg-fetch';

class Friends extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            friendsIds: this.props.user.get('friends'),
            friends: []
        };
        this.getFriends = this.getFriends.bind(this);
    }

    showUser(userPage, activeTab, userId, e) {
        e.preventDefault();
        this.props.onSwitchPage(userPage, activeTab, userId);
    }

    getFriends() {
        let friends = {
            friendsIds: this.state.friendsIds
        };

        fetch('/user/get_friends', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(friends)
        }).then(resp => {
            return resp.json();
        }).then(resp => {
            this.setState({friends: resp});
        }).catch(console.error);
    }

    componentWillMount() {
        this.getFriends();
    }

    render() {
        return (
            <div className='profile__contacts'>
                {this.state.friends.map((user, i) => {
                    return (
                        <div className="tile" key={i}>
                            <div className="tile-icon">
                                <figure className="avatar avatar-lg">
                                    <img src={user.avatar} alt={user.firstName}/>
                                </figure>
                            </div>
                            <div className="tile-content">
                                <div className="">
                                    <a href="#" onClick={this.showUser.bind(this, 'userPage', 'chat', user.userId)}>{user.fullName}</a>
                                </div>
                                <div className="tile-subtitle text-gray">{user.about}</div>
                                <small><a href="#" className='text-secondary'>{user.location}</a></small>
                            </div>
                            <div className="tile-action">
                                <button className='btn btn-link btn-action btn-sm'><i className="icon icon-cross text-error"> </i></button>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

const mapStateToProps = dispatch => ({

});

const mapDispatchToProps = dispatch => ({
    onSwitchPage: (contentName, activeTab, userId) => {
        dispatch(switchContent(contentName));
        dispatch(showSelectedUser(activeTab, userId));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Friends);