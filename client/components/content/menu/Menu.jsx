import React from 'react';

class Menu extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="column col-4 col-xs-12">
                <ul className="menu">
                    <li className="menu-item">
                        <div className="tile tile-centered">
                            <div className="tile-icon">
                                <img src="/static/img/avatar-4.png" className="avatar" alt="Avatar"/>
                            </div>
                            <div className="tile-content">
                                Steve Rogers
                            </div>
                        </div>
                    </li>
                    <li className="divider"> </li>
                    <li className="menu-item">
                        <a href="#">
                            My profile
                        </a>
                    </li>
                    <li className="menu-item">
                        <div className="menu-badge">
                            <label className="label label-primary">4</label>
                        </div>
                        <a href="#" className="active">
                            Notifications
                        </a>
                    </li>
                    <li className="menu-item">
                        <a href="#">
                            Settings
                        </a>
                    </li>
                    <li className="menu-item">
                        <a href="#">
                            Logout
                        </a>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Menu;