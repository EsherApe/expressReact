import React from 'react';

class Navbar extends React.Component {
    render() {
        return (
            <section className="columns">
                <div className="col-12">
                    <header className="navbar mt-2">
                        <section className="navbar-section">
                            <a href="#" className="btn btn-link">Docs</a>
                            <a href="/about" className="btn btn-link">About</a>
                        </section>
                        <section className="navbar-center">
                            <a href="#">
                                <figure className="avatar avatar-md" data-initial="AB">
                                    <i className="avatar-presence online"> </i>
                                </figure>
                            </a>
                        </section>
                        <section className="navbar-section">
                            <a href="#" className="btn btn-link">Twitter</a>
                            <a href="#" className="btn btn-link">GitHub</a>
                        </section>
                    </header>
                </div>
            </section>
        )
    }
}

export default Navbar;