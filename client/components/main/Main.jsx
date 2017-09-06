import React from 'react';
import './main.scss';

import Header from "../header/Header";
import LogIn from "../logIn/LogIn";
import Content from "../content/Content";
import Footer from '../footer/Footer';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {skip: true};
    }
    render() {
        return (
            <div className='container grid-sm wrapper'>
                <main className='main'>
                    <Header/>
                    {this.state.skip ? <Content/> : <LogIn/>}
                </main>
                <Footer/>
            </div>
        )
    }
}

export default Main;