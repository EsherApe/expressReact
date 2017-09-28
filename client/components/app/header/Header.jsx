import React from 'react';
import Navbar from './navbar/Navbar'
import BreadCrambs from './breadCrambs/BreadCrambs'

class Header extends React.Component {
    render() {
        return (
            <header className="columns">
                <div className="column col-12">
                    <Navbar/>
                </div>
            </header>
        )
    }
}

export default Header;