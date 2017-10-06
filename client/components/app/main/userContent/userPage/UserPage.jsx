import React from 'react';
import 'whatwg-fetch';
import PropTypes from 'prop-types';

//styles
import './userPage.scss';
//components
import Loader from 'components/loader/Loader';
import UserProfile from './UserProfile';
import UserChat from './UserChat';


class UserPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: [],
            userIsLoaded: false,
            tabActive: this.props.activeTab
        };
        this.fetchUsers = this.fetchUsers.bind(this);
    }

    fetchUsers() {
        let user = {
            userId: this.props.userId
        };

        fetch('/user/get_user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        }).then(resp => {
            return resp.json()
        }).then(user => {
            this.setState({user: user, userIsLoaded: true});
        }).catch(ex => {
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
            <section className="column col-8 col-xs-12">
                <div className='full-size'>
                    {!this.state.userIsLoaded && <Loader/>}
                    {this.state.userIsLoaded &&
                    <div className="panel user-panel">
                        <div className="panel-header text-center">
                            <figure className="avatar avatar-lg">
                                <img src={this.state.user.avatar} alt="Avatar"/>
                            </figure>
                            <div className="panel-title h5 mt-10">{this.state.user.fullName}</div>
                            <div className="panel-subtitle">{this.state.user.login}</div>
                        </div>
                        <nav className="panel-nav">
                            <ul className="tab tab-block">
                                <li className={this.state.tabActive === 'chat' ? "tab-item active" : "tab-item"}
                                    onClick={this.clickTab.bind(this, 'chat')}>
                                    <a href="#">
                                        Chat
                                    </a>
                                </li>
                                <li className={this.state.tabActive === "profile" ? "tab-item active" : "tab-item"}
                                    onClick={this.clickTab.bind(this, 'profile')}>
                                    <a href="#">
                                        Profile
                                    </a>
                                </li>
                            </ul>
                        </nav>
                        <div className="panel-body user-panel-body">
                            {this.state.tabActive === 'chat' && <UserChat user={this.state.user}/>}
                            {this.state.tabActive === 'profile' && <UserProfile user={this.state.user}/>}
                        </div>
                    </div>}
                </div>
            </section>
        )
    }
}

// UserPage.propTypes = {
//     userId: PropTypes.number.isRequired,
//     activeTab: PropTypes.string.isRequired
// };

export default UserPage;