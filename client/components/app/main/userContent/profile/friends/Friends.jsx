import React from 'react';
import {connect} from 'react-redux';
import {switchContent} from 'actions/contentActions';
import {showSelectedUser} from 'actions/userActions';

class Friends extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            friends: this.props.user.get('friends')
        }
    }

    showUser(userPage, activeTab, userId, e) {
        e.preventDefault();
        this.props.onSwitchPage(userPage, activeTab, userId);
    }

    render() {
        console.log(this.state.friends);
        return (
            <div className='profile__contacts'>
                <div className='panel-body' style={{position: 'relative'}}>
                    {this.props.user.get('friends') ? this.props.user.get('friends').map((user, i) => {
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
                                        <button className="btn btn-sm btn-danger">Remove</button>
                                </div>
                            </div>
                        )
                    }) : null}
                </div>
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