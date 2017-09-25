import React from 'react';

//components
import Contacts from './contacts/Contacts';
import PersonalInfo from './personalInfo/PersonalInfo';
import Friends from './friends/Friends';
//styles
import './profile.scss';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 'contacts'
        }
    }

    switchTabs(tabName) {
        this.setState({activeTab: tabName});
    }

    render() {
        return (
            <div className="panel profile-panel">
                <div className="panel-header text-center">
                    <figure className="avatar avatar-lg">
                        <img src="/static/img/avatar-2.png" alt="Avatar"/>
                    </figure>
                    <div className="panel-title h5 mt-10">{this.props.user.get('firstName')} {this.props.user.get('lastName')}</div>
                    <div className="panel-subtitle">{this.props.user.get('login').toUpperCase()}</div>
                </div>
                <nav className="panel-nav">
                    <ul className="tab tab-block">
                        <li className={this.state.activeTab === 'contacts' ? "tab-item active" : "tab-item"}
                            onClick={this.switchTabs.bind(this, 'contacts')}>
                            <a href="#">
                                Contacts
                            </a>
                        </li>
                        <li className={this.state.activeTab === 'personalInfo' ? "tab-item active" : "tab-item"}
                            onClick={this.switchTabs.bind(this, 'personalInfo')}>
                            <a href="#">
                                Personal Info
                            </a>
                        </li>
                        <li className={this.state.activeTab === 'friends' ? "tab-item active" : "tab-item"}
                            onClick={this.switchTabs.bind(this, 'friends')}>
                            <a href="#">
                                Friends
                            </a>
                        </li>
                    </ul>
                </nav>
                <div className="panel-body">
                    {this.state.activeTab === 'contacts' && <Contacts contacts={this.props.user}/>}
                    {this.state.activeTab === 'personalInfo' && <PersonalInfo info={this.props.user}/>}
                    {this.state.activeTab === 'friends' && <Friends/>}
                </div>
                <div className="panel-footer">
                    <button className="btn btn-primary btn-block">Save</button>
                </div>
            </div>
        )
    }
}

export default Profile;