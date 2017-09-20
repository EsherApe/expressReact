import React from 'react';
import { connect } from 'react-redux';

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

export default connect(
    state => ({
        isLogin: state.user.get('isLogin')
    }),
    dispatch => ({
        login: () => {
            dispatch({type: 'LOG_IN', isLogin: true});
        }
    })
)(App);