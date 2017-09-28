import React from 'react';

class Footer extends React.Component {
    render() {
        return (
            <footer className="footer">
                <p>
                    <a href="https://github.com/picturepan2/spectre" target="_blank">GitHub</a> |
                    <a href="https://twitter.com/spectrecss" target="_blank">Twitter</a> |
                    <a href="https://www.paypal.me/picturepan2" target="_blank">PayPal Donate</a> | Version
                    <span className="version">1.0.0</span>
                </p>
                <p>Designed and built with ♥ by
                    <a href="#" target="_blank"> EsherApe</a>.
                    Licensed under the
                    <a href="#" target="_blank"> MIT License</a>.
                </p>
            </footer>
        )
    }
}

export default Footer;