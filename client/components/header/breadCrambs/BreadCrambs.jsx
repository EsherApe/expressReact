import React from 'react';

class BreadCrambs extends React.Component {
    render() {
        return (
            <section className="columns">
                <div className="column col-12">
                    <nav>
                        <ul className="breadcrumb">
                            <li className="breadcrumb-item">
                                <a href="#">Home</a>
                            </li>
                            <li className="breadcrumb-item">
                                <a href="#">login</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </section>
        )
    }
}

export default BreadCrambs;