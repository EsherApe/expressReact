import React from 'react';
import 'whatwg-fetch';
import PropTypes from 'prop-types';

//styles
import './userPage.scss';
//components
import Loader from '../../../../loader/Loader';
import UserProfile from './UserProfile';
import UserChat from './UserChat';


class UserPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: [],
            userIsLoaded: false,
            tabActive: 'chat'
        };
        this.fetchUsers = this.fetchUsers.bind(this);
    }

    fetchUsers() {
        fetch('https://gist.githubusercontent.com/EsherApe/aacc03db0c43aaf2808839d25cf7ff4d/raw/ace6c8d14df49685a8b66e8c01b28a87f68b6315/users.json')
            .then( response => {
                return response.json()
            }).then( users => {
                users.forEach((user) => {
                    if (user.id === this.props.userId) {
                        this.setState({user: user, userIsLoaded: true});
                    }
                });
        }).catch( ex => {
            console.log('parsing failed', ex)
        });
    }

    clickTab(tab) {
        this.setState({tabActive: tab});
    }

    componentDidMount() {
        this.fetchUsers();
    }

    render() {
        return (
            <div className='full-size'>
                {!this.state.userIsLoaded && <Loader/>}
                {this.state.userIsLoaded &&
                <div className="panel user-panel">
                    <div className="panel-header text-center">
                        <figure className="avatar avatar-lg">
                            <img src={this.state.user.avatar} alt="Avatar"/>
                        </figure>
                        <div className="panel-title h5 mt-10">{this.state.user.fullName}</div>
                        <div className="panel-subtitle">{this.state.user.alias}</div>
                    </div>
                    <nav className="panel-nav">
                        <ul className="tab tab-block">
                            <li className={this.state.tabActive === 'chat' ? "tab-item active" : "tab-item"} onClick={this.clickTab.bind(this, 'chat')}>
                                <a href="#">
                                    Chat
                                </a>
                            </li>
                            <li className={this.state.tabActive === "profile" ? "tab-item active" : "tab-item"} onClick={this.clickTab.bind(this, 'profile')}>
                                <a href="#">
                                    Profile
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <div className="panel-body user-panel-body">
                        {this.state.tabActive === 'chat' && <UserChat/>}
                        {this.state.tabActive === 'profile' && <UserProfile user={this.state.user}/>}
                    </div>
                </div>}
            </div>
        )
    }
}

UserPage.propTypes = {
    userId: PropTypes.number.isRequired
};

export default UserPage;