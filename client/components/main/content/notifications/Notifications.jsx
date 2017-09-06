import React from 'react';
import Notification from './notification/Notification';

class Notifications extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="panel profile-panel">
                <div className="panel-header text-center">

                </div>
                <div className="panel-body">
                    <Notification/>
                    <Notification/>
                    <Notification/>
                </div>
                <div className="panel-footer">
                    <button className="btn btn-primary btn-block">Clear</button>
                </div>
            </div>
        )
    }
}

export default Notifications;