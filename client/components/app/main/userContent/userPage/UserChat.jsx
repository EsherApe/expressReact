import React from 'react';

class UserChat extends React.Component {
    render() {
        return (
            <div className="chat-box">
                <div className="panel-header">

                </div>
                <div className="panel-body chat-box__body">
                    <div className="tile">
                        <div className="tile-icon">
                            <figure className="avatar">
                                <img src={this.props.user.avatar} alt="Avatar"/>
                            </figure>
                        </div>
                        <div className="tile-content">
                            <p className="tile-title">{this.props.user.firstName} {this.props.user.lastName}</p>
                            <p className="tile-subtitle">{this.props.user.about}</p>
                        </div>
                    </div>
                    <div className="tile">
                        <div className="tile-icon">
                            <figure className="avatar">
                                <img src="/static/img/avatar-2.png" alt="Avatar"/>
                            </figure>
                        </div>
                        <div className="tile-content">
                            <p className="tile-title">Bruce Banner</p>
                            <p className="tile-subtitle">The Strategic Homeland Intervention, Enforcement, and Logistics Division...</p>
                        </div>
                    </div>
                    <div className="tile">
                        <div className="tile-icon">
                            <figure className="avatar" data-initial="TS"> </figure>
                        </div>
                        <div className="tile-content">
                            <p className="tile-title">Tony Stark</p>
                            <p className="tile-subtitle">Earth's Mightiest Heroes joined forces to take on threats that were too big for any one hero to tackle...</p>
                        </div>
                    </div>
                    <div className="tile">
                        <div className="tile-icon">
                            <figure className="avatar">
                                <img src="/static/img/avatar-4.png" alt="Avatar"/>
                            </figure>
                        </div>
                        <div className="tile-content">
                            <p className="tile-title">Steve Rogers</p>
                            <p className="tile-subtitle">The Strategic Homeland Intervention, Enforcement, and Logistics Division...</p>
                        </div>
                    </div>
                    <div className="tile">
                        <div className="tile-icon">
                            <figure className="avatar">
                                <img src="/static/img/avatar-3.png" alt="Avatar"/>
                            </figure>
                        </div>
                        <div className="tile-content">
                            <p className="tile-title">Natasha Romanoff</p>
                            <p className="tile-subtitle">Earth's Mightiest Heroes joined forces to take on threats that were too big for any one hero to tackle...</p>
                        </div>
                    </div>
                </div>
                <div className="panel-footer clearfix">
                    <div className="form-group">
                        <textarea className="form-input" id="input-example-3" placeholder="Write message..." rows="3"></textarea>
                    </div>
                    <button className="btn btn-primary float-right">Send</button>
                </div>
            </div>
        )
    }
}

export default UserChat;