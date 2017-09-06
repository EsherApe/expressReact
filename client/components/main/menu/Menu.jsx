import React from 'react';

class Menu extends React.Component {
    constructor(props) {
        super(props);

        this.openMenuItem = this.openMenuItem;
    }

    openMenuItem(name) {
        console.log(name);
    }

    render() {
        return (
            <section className="column col-4 col-xs-12">
                <ul className="menu">
                    <li className="menu-item">
                        <div className="tile tile-centered">
                            <div className="tile-icon">
                                <img src="/static/img/avatar-2.png" className="avatar" alt="Avatar"/>
                            </div>
                            <div className="tile-content">
                                Bruce Banner
                            </div>
                        </div>
                    </li>
                    <li className="divider"> </li>
                    <li className="menu-item">
                        <a href="#" onClick={this.openMenuItem.bind(this, 'profile')}>
                            My profile
                        </a>
                    </li>
                    <li className="menu-item">
                        <div className="menu-badge">
                            <label className="label label-primary">6</label>
                        </div>
                        <a href="#" className="" onClick={this.openMenuItem.bind(this, 'messages')}>
                            Messages
                        </a>
                    </li>
                    <li className="menu-item">
                        <div className="menu-badge">
                            <label className="label label-primary">3</label>
                        </div>
                        <a href="#" className="active" onClick={this.openMenuItem.bind(this, 'notifications')}>
                            Notifications
                        </a>
                    </li>
                    <li className="menu-item">
                        <a href="#" onClick={this.openMenuItem.bind(this, 'settings')}>
                            Settings
                        </a>
                    </li>
                    <li className="menu-item">
                        <a href="#">
                            Logout
                        </a>
                    </li>
                    <li className="divider" data-content="LINKS">
                    </li>
                    <li className="menu-item">
                        <a href="#">
                            <i className="icon icon-link"> </i> Slack
                        </a>
                    </li>
                    <li className="menu-item">
                        <a href="#">
                            <i className="icon icon-link"> </i> Hipchat
                        </a>
                    </li>
                    <li className="menu-item">
                        <div className="menu-badge">
                            <label className="label label-primary">2</label>
                        </div>
                        <a href="#">
                            <i className="icon icon-link"> </i> Skype
                        </a>
                    </li>
                </ul>
            </section>
        )
    }
}

export default Menu;