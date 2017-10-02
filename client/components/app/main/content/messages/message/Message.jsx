import React from 'react';
import './message.scss';
import { connect } from 'react-redux';
import {switchContent} from 'actions/contentActions';
import {showSelectedUser} from 'actions/userActions';

class Message extends React.Component {
    constructor(props) {
        super(props);
    }

    showUser(userPage, activeTab, userId, e) {
        e.preventDefault();
        this.props.onSwitchPage(userPage, activeTab, userId);
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
                        <a href='#' onClick={this.showUser.bind(this, 'userPage', 'profile', this.props.message.authorId)} className="tile-title">{this.props.message.author}</a>
                        <p className="tile-subtitle text-gray" onClick={this.showUser.bind(this, 'userPage', 'chat', this.props.message.authorId)}>{this.props.message.text}</p>
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

const mapStateToProps = state => ({
    content: state.content.get('contentName')
});

const mapDispatchToProps = dispatch => ({
    onSwitchPage: (contentName, activeTab, userId) => {
        dispatch(switchContent(contentName));
        dispatch(showSelectedUser(activeTab, userId));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Message);