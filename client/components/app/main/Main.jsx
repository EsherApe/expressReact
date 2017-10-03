import React from 'react';
import UserContent from './userContent/UserContent';
import Authentication from '../authentication/Authentication'
import './main.scss';
import Loader from "../../loader/Loader";

class Main extends React.Component {
    render() {
        return (
            <main className="mt-3">
                {this.props.data.user.get('id') && this.props.data.isLogin ?
                <UserContent data={this.props.data}/> :
                this.props.data.isLogin ? <Loader/> : <Authentication loginFn={this.props.data.login}/>}
            </main>
        )
    }
}

export default Main;