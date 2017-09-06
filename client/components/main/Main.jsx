import React from 'react';
import Menu from './menu/Menu';
import Content from './content/Content';

class Main extends React.Component {
    render() {
        return (
            <main className="columns mt-3">
                <Menu/>
                <Content/>
            </main>
        )
    }
}

export default Main;