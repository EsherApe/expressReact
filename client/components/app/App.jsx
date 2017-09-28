import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import 'whatwg-fetch';

//styles
import './app.scss';

//components
import Header from "../header/Header";
import Authentication from "../authentication/Authentication";
import Main from "../main/Main";
import Footer from '../footer/Footer';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.getUser = this.getUser.bind(this);
    }

    getUser() {
        let user = {
            userId: this.props.userId
        };

        console.log(user);
        fetch('/user/get', {
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
        console.log(this.props.isLogin);
        if(this.props.isLogin) {
            this.getUser();
        }
    }

    render() {
        return (
            <div className='container grid-sm wrapper'>
                <div className='main-wrapper'>
                    <Header/>
                    {this.props.isLogin ? <Main/> : <Authentication loginFn={this.props.login}/>}
                </div>
                <Footer/>
            </div>
        )
    }
}

App.propTypes = {
    login: PropTypes.func.isRequired,
    isLogin: PropTypes.bool.isRequired,
    userId: PropTypes.string.isRequired
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
        dispatch({type: 'LOG_IN', login: status});
    },
    onGetUser: (resp) => {
        dispatch({type: 'GET_USER', user: resp});
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);