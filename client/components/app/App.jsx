import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import 'whatwg-fetch';

//actions
import {login} from 'actions/loginActions';
import {getUser} from 'actions/userActions';

//styles
import './app.scss';

//components
import Header from "./header/Header";
import Authentication from "./authentication/Authentication";
import Main from "./main/Main";
import Footer from './footer/Footer';
import Loader from 'components/loader/Loader';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.getUser = this.getUser.bind(this);
        this.checkSession = this.checkSession.bind(this);
        this.state = {
            userIsLoaded: false
        }
    }

    checkSession() {
        fetch('/user/check_login', {
            method: 'POST',
            credentials: 'same-origin'
        }).then(resp => {
            return resp.json();
        }).then(resp => {
            this.props.onCheckSession(resp);
        }).catch(err => console.error(err));
    }

    getUser() {
        let user = {
            userId: this.props.data.userId
        };
        fetch('/user/get_user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user),
            credentials: 'same-origin'
        }).then(resp => {
            return resp.json();
        }).then(resp => {
            this.props.onGetUser(resp);
        })
    }

    componentWillMount() {
        this.checkSession();
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.props.data.isLogin && !this.props.data.userIsLoaded) {
            this.getUser();
            this.props.login({userIsLoaded: true});
        }
    }

    render() {
        console.log();
        return (
            <div className='container grid-sm wrapper'>
                <div className='main-wrapper'>
                    <Header/>
                    <Main data={this.props.data}/>
                </div>
                <Footer/>
            </div>
        )
    }
}

// App.propTypes = {
//     login: PropTypes.func.isRequired,
//     isLogin: PropTypes.bool.isRequired,
//     content: PropTypes.oneOf(['profile','messagesList','notificationsList','settings', 'search','userPage']).isRequired,
//     messages: PropTypes.array.isRequired,
//     notifications: PropTypes.array.isRequired
// };

const mapStateToProps = state => ({
    data: {
        isLogin: state.login.get('isLogin'),
        userIsLoaded: state.login.get('userIsLoaded'),
        userId: state.login.get('userId'),
        user: state.user,
        content: state.content.get('contentName'),
        messages: state.messages.get('messagesList'),
        notifications: state.notifications.get('notificationsList'),
        viewedUserId: state.viewedUser.get('userId'),
        activeTab: state.viewedUser.get('activeTab')
    }
});

const mapDispatchToProps = dispatch => ({
    login: (status) => {
        dispatch(login(status));
    },
    onGetUser: resp => {
        dispatch(getUser(resp));
    },
    onCheckSession: resp => {
        dispatch(login(resp));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);