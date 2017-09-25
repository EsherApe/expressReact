import React from 'react';

class Contacts extends React.Component {
    render() {
        return (
            <div className='profile__contacts'>
                <div className="tile tile-centered">
                    <div className="tile-content">
                        <div className="tile-title">E-mail</div>
                        <div className="tile-subtitle">{this.props.contacts.get('email')}</div>
                    </div>
                    <div className="tile-action">
                        <button className="btn btn-link btn-action btn-lg"><i className="icon icon-edit"> </i></button>
                    </div>
                </div>
                <div className="tile tile-centered">
                    <div className="tile-content">
                        <div className="tile-title">Skype</div>
                        <div className="tile-subtitle"> Set skype </div>
                    </div>
                    <div className="tile-action">
                        <button className="btn btn-link btn-action btn-lg"><i className="icon icon-edit"> </i></button>
                    </div>
                </div>
                <div className="tile tile-centered">
                    <div className="tile-content">
                        <div className="tile-title">Location</div>
                        <div className="tile-subtitle"> Set Location </div>
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