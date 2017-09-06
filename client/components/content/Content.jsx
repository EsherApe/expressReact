import React from 'react';
import Menu from './menu/Menu';

class Content extends React.Component {
    render() {
        return (
            <section className="columns mt-4">
                <Menu/>
            </section>
        )
    }
}

export default Content;