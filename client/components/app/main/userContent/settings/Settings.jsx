import React from 'react';

class Settings extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className="column col-8 col-xs-12">
                <div className="panel profile-panel">
                    <div className="panel-header text-center">

                    </div>
                    <div className="panel-body">
                        settings
                    </div>
                    <div className="panel-footer">
                        <button className="btn btn-primary btn-block">Save</button>
                    </div>
                </div>
            </section>
        )
    }
}

export default Settings;