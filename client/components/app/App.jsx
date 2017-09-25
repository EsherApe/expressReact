import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

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
    isLogin: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
    isLogin: state.user.get('isLogin')
});

const mapDispatchToProps = dispatch => ({
    login: () => {
        let user = {
           isLogin: false
        };
        dispatch({type: 'LOG_IN', user: user});
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);