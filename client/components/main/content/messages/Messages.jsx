import React from 'react';
import Message from './message/Message';

class Messages extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="panel profile-panel">
                <div className="panel-header text-center">

                </div>
                <div className="panel-body">
                    {this.props.messages.map((item, index) => {
                        return <Message message={item} key={index}/>
                    })}
                </div>
                <div className="panel-footer">
                    <button className="btn btn-primary btn-block">Clear</button>
                </div>
            </div>
        )
    }
}

export default Messages;