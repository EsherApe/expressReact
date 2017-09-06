import React from 'react';
import './app.scss';

import Header from "../header/Header";
import LogIn from "../logIn/LogIn";
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
                    <Main/>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default App;