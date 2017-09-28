import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import 'whatwg-fetch';

//actions
import {login} from '../../actions/loginActions';
import {getUser} from '../../actions/userActions';

//styles
import './app.scss';

//components
import Header from "./header/Header";
import Authentication from "./authentication/Authentication";
import Main from "./main/Main";
import Footer from './footer/Footer';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.getUser = this.getUser.bind(this);
        this.state = {
            userIsLoaded: false
        }
    }

    getUser() {
        let user = {
            userId: this.props.userId
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

    componentDidUpdate(prevProps, prevState) {
        if(this.props.isLogin && !this.state.userIsLoaded) {
            this.getUser();
            this.setState({userIsLoaded: true});
        }
    }

    render() {
        return (
            <div className='container grid-sm wrapper'>
                <div className='main-wrapper'>
                    <Header/>
                    {this.props.user.get('isLogin') ? <Main user={this.props.user}/> : <Authentication loginFn={this.props.login}/>}
                </div>
                <Footer/>
            </div>
        )
    }
}

App.propTypes = {
    login: PropTypes.func.isRequired,
    isLogin: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
    isLogin: state.login.get('isLogin'),
    userId: state.login.get('userId'),
    user: state.user
});

const mapDispatchToProps = dispatch => ({
    login: () => {
        let status = {
           isLogin: false
        };
        dispatch(login(status));
    },
    onGetUser: resp => {
        dispatch(getUser(resp));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);