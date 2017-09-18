import React from 'react';
import './message.scss';

class Message extends React.Component {
    constructor(props) {
        super(props);
        this.showUser = this.showUser.bind(this);
    }

    showUser(e) {
        e.preventDefault();
        this.setState({contentName: 'userPage'});
        console.log('user');
    }

    render() {
        return (
            <div className={this.props.message.isNew ? 'message message__new': 'message'}>
                <div className="tile">
                    <div className="tile-icon">
                        <figure className="avatar avatar-lg">
                            <img src={this.props.message.avatar} alt="Avatar"/>
                        </figure>
                    </div>
                    <div className="tile-content">
                        <a href='#' onClick={this.showUser} className="tile-title">{this.props.message.author}</a>
                        <p className="tile-subtitle text-gray">{this.props.message.text}</p>
                        <p>
                            <button className="btn btn-primary btn-sm mr-1">Join</button>
                            <button className="btn btn-sm bg-error text-light">Remove</button>
                        </p>
                    </div>
                </div>
                <div className="divider"> </div>
            </div>
        )
    }
}

export default Message;