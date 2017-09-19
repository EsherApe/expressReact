import React from 'react';

class Loader extends React.Component {
    render() {
        return (
            <div className="col-12" style={{height: '100%'}}>
                <i className="form-icon loading"> </i>
            </div>
        )
    }
}

export default Loader;