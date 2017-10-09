import React from 'react';
import 'whatwg-fetch';
import {connect} from 'react-redux';
import {switchContent} from 'actions/contentActions';
import {showSelectedUser} from 'actions/userActions';
import {getUser} from 'actions/userActions';

//components
import Loader from 'components/loader/Loader';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.searchUser = this.searchUser.bind(this);
        this.state = {
            users: null,
            time: null
        };
    }

    searchUser() {
        clearTimeout(this.state.time);
        let timeout = setTimeout(() => {
            if (this.refs.searchUserName.value) {
                let data = {
                    name: this.refs.searchUserName.value
                };

                fetch('user/search', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                }).then(resp => {
                    return resp.json();
                }).then(resp => {
                    this.setState({users: resp})
                }).catch(err => console.error(err));
            } else {
                this.setState({users: []})
            }
        }, 800);

        this.setState({time: timeout});
    }

    showUser(userPage, activeTab, userId, e) {
        e.preventDefault();
        this.props.onSwitchPage(userPage, activeTab, userId);
    }

    addToFriends(userToFriends, e) {
        e.preventDefault();
        let user = {
            userId: this.props.userId,
            userToFriends
        };

        fetch('/user/add_to_friends', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user),
            credentials: 'same-origin'
        }).then(resp => {
            return resp.json();
        }).then(resp => {
            this.props.onAddToFriends(resp);
        }).catch(console.error);
    }

    render() {
        return (
            <section className='column col-8 col-xs-12'>
                <form className='form-horizontal' action=''>
                    <div className='panel profile-panel'>
                        <div className='panel-header text-center'>
                            <p className='text-primary'>Start enters the name</p>
                            <div className='form-group'>
                                <div className='col-3'>
                                    <label className='form-label' htmlFor='search-user-name'>Search</label>
                                </div>
                                <div className='col-9'>
                                    <input className='form-input' type='text'
                                           id='search-user-name'
                                           placeholder='Name'
                                           ref='searchUserName'
                                           onChange={this.searchUser}
                                    />
                                </div>
                            </div>
                            <div className="divider"> </div>
                        </div>
                        <div className='panel-body' style={{position: 'relative'}}>
                            {this.state.users ? this.state.users.map((user, i) => {
                                return (
                                    <div className="tile" key={i}>
                                        <div className="tile-icon">
                                            <figure className="avatar avatar-lg">
                                                <img src={user.avatar} alt={user.firstName}/>
                                            </figure>
                                        </div>
                                        <div className="tile-content">
                                            <div className=""><a href="#"
                                                                 onClick={this.showUser.bind(this, 'userPage', 'chat', user.userId)}>{user.fullName}</a>
                                            </div>
                                            <div className="tile-subtitle text-gray">{user.about}</div>
                                            <small><a href="#" className='text-secondary'>{user.location}</a></small>
                                        </div>
                                        <div className="tile-action">
                                            {this.props.userFriends.includes(user.userId) || this.props.userId === user.userId ?
                                                this.props.userId === user.userId ? <small className='text-center text-success text-bold'>you</small> : <i className="icon icon-check text-success" aria-hidden="true"> </i> :
                                                <button className="btn btn-sm btn-success"
                                                        onClick={this.addToFriends.bind(this, user.userId)}>Add</button>}
                                        </div>
                                    </div>
                                )
                            }) : null}
                        </div>
                        <div className='panel-footer'>

                        </div>
                    </div>
                </form>
            </section>
        )
    }
}

const mapStateToProps = state => ({
    content: state.content.get('contentName'),
    userFriends: state.user.get('friends'),
    userId: state.user.get('id')
});

const mapDispatchToProps = dispatch => ({
    onSwitchPage: (contentName, activeTab, userId) => {
        dispatch(switchContent(contentName));
        dispatch(showSelectedUser(activeTab, userId));
    },
    onAddToFriends: user => {
        dispatch(getUser(user));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Search);