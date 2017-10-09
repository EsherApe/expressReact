import React from 'react';
import moment from 'moment';

class PersonalInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fullName: this.props.info.get('fullName'),
            location: this.props.info.get('location'),
            birthday: moment(this.props.info.get('birthday')).format('LL'),
            about: this.props.info.get('about'),
        };
    }

    render() {
        return (
            <div className='profile__contacts'>
                <div className="tile tile-centered">
                    <div className="tile-content">
                        <div className="tile-title text-bold">Name</div>
                        <div className="tile-subtitle">{this.state.fullName}</div>
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
                <div className="tile tile-centered">
                    <div className="tile-content">
                        <div className="tile-title text-bold">Date of birth</div>
                        <div className="tile-subtitle">{this.state.birthday}</div>
                    </div>
                    <div className="tile-action">
                        <button className="btn btn-link btn-action btn-lg"><i className="icon icon-edit"> </i></button>
                    </div>
                </div>
                <div className="tile tile-centered">
                    <div className="tile-content">
                        <div className="tile-title text-bold">About</div>
                        <div className="tile-subtitle">{this.state.about}</div>
                    </div>
                    <div className="tile-action">
                        <button className="btn btn-link btn-action btn-lg"><i className="icon icon-edit"> </i></button>
                    </div>
                </div>
            </div>
        )
    }
}

export default PersonalInfo;