import React from 'react';
import './message.scss';
import { connect } from 'react-redux';

class Message extends React.Component {
    constructor(props) {
        super(props);
    }

    showUser(userPage, userId, e) {
        e.preventDefault();
        this.props.onSwitchPage(userPage, userId)
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
                        <a href='#' onClick={this.showUser.bind(this, 'userPage', this.props.message.authorId)} className="tile-title">{this.props.message.author}</a>
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

export default connect(
    state => ({
        content: state.content.get('contentName'),
    }),
    dispatch => ({
        onSwitchPage: (contentName, userId) => {
            dispatch({type: 'SWITCH_CONTENT', contentName: contentName});
            dispatch({type: 'SHOW_USER', userId: userId});
        }
    })
)(Message);