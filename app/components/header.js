import React, {Component} from 'react';
import './header.less';

let Header = React.createClass({
    render() {
        return (
            <div className="component-header row">
                <img src="/static/images/logo.png" width="40" className="-col-auto" />
                <h1 className="caption">React Music Player</h1>
            </div>
        );
    }
});

export default Header;
