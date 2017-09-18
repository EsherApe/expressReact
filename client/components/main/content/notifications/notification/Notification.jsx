import React from 'react';

class Notification extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='notification'>
                <div className="tile">
                    <div className="tile-icon">
                        <figure className="avatar avatar-lg">
                            <img src="/static/img/avatar-1.png" alt="Avatar"/>
                        </figure>
                    </div>
                    <div className="tile-content">
                        <p className="tile-title">The S.H.I.E.L.D.</p>
                        <p className="tile-subtitle text-gray">{this.props.notification.text}</p>
                        <p>
                            <button className="btn btn-primary btn-sm mr-1">Join</button>
                            <button className="btn btn-sm">Contact</button>
                        </p>
                    </div>
                </div>
                <div className="divider"> </div>
            </div>
        )
    }
}

export default Notification;