import React from 'react';

class UserPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="panel profile-panel">
                <div className="panel-header text-center">
                    <figure className="avatar avatar-lg">
                        <img src="/static/img/avatar-2.png" alt="Avatar"/>
                    </figure>
                    <div className="panel-title h5 mt-10">Bruce Banner</div>
                    <div className="panel-subtitle">THE HULK</div>
                </div>
                <nav className="panel-nav">
                    <ul className="tab tab-block">
                        <li className="tab-item active">
                            <a href="#">
                                Profile
                            </a>
                        </li>
                        <li className="tab-item">
                            <a href="#">
                                Files
                            </a>
                        </li>
                        <li className="tab-item">
                            <a href="#">
                                Tasks
                            </a>
                        </li>
                    </ul>
                </nav>
                <div className="panel-body">
                    <div className="tile tile-centered">
                        <div className="tile-content">
                            <div className="tile-title">E-mail</div>
                            <div className="tile-subtitle">bruce.banner@hulk.com</div>
                        </div>
                        <div className="tile-action">
                            <button className="btn btn-link btn-action btn-lg"><i className="icon icon-edit"> </i></button>
                        </div>
                    </div>
                    <div className="tile tile-centered">
                        <div className="tile-content">
                            <div className="tile-title">Skype</div>
                            <div className="tile-subtitle">bruce.banner</div>
                        </div>
                        <div className="tile-action">
                            <button className="btn btn-link btn-action btn-lg"><i className="icon icon-edit"> </i></button>
                        </div>
                    </div>
                    <div className="tile tile-centered">
                        <div className="tile-content">
                            <div className="tile-title">Location</div>
                            <div className="tile-subtitle">Dayton, Ohio</div>
                        </div>
                        <div className="tile-action">
                            <button className="btn btn-link btn-action btn-lg"><i className="icon icon-edit"> </i></button>
                        </div>
                    </div>
                </div>
                <div className="panel-footer">
                    <button className="btn btn-primary btn-block">Chat</button>
                </div>
            </div>
        )
    }
}

export default UserPage;