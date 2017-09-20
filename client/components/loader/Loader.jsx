import React from 'react';
import './loader.scss';

class Loader extends React.Component {
    render() {
        return (
            <div className="col-12 loader">
                <i className="form-icon loading loading-lg"> </i>
            </div>
        )
    }
}

export default Loader;