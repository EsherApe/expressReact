import React from 'react';

class Contacts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: this.props.contacts.get('email'),
            location: this.props.contacts.get('location'),
            messengers: {
                skype: this.props.contacts.get('messengers').get('skype'),
                telegram: this.props.contacts.get('messengers').get('telegram')
            }
        }
    }
    render() {
        return (
            <div className='profile__contacts'>
                <div className="tile tile-centered">
                    <div className="tile-content">
                        <div className="tile-title text-bold">E-mail</div>
                        <div className="tile-subtitle">{this.state.email}</div>
                    </div>
                    <div className="tile-action">
                        <button className="btn btn-link btn-action btn-lg"><i className="icon icon-edit"> </i></button>
                    </div>
                </div>
                <div className="tile tile-centered">
                    <div className="tile-content">
                        <div className="tile-title text-bold">Messengers</div>
                        <div className="tile-subtitle">Skype: <a href="#">{this.state.messengers.skype}</a></div>
                        <div className="tile-subtitle">Telegram: <a href="#">{this.state.messengers.telegram}</a></div>
                    </div>
                    <div className="tile-action">
                        <button className="btn btn-link btn-action btn-lg"><i className="icon icon-edit"> </i></button>
                    </div>
                </div>
                <div className="tile tile-centered">
                    <div className="tile-content">
                        <div className="tile-title text-bold">Location</div>
                        <div className="tile-subtitle">{this.state.location}</div>
                    </div>
                    <div className="tile-action">
                        <button className="btn btn-link btn-action btn-lg"><i className="icon icon-edit"> </i></button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contacts;