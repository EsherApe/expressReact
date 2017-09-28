import React from 'react';
import Menu from './menu/Menu';
import Content from './content/Content';
import './main.scss';

class Main extends React.Component {
    render() {
        return (
            <main className="columns mt-3">
                <Menu/>
                <Content user={this.props.user}/>
            </main>
        )
    }
}

export default Main;