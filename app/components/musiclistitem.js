import React from 'react';
import './musiclistitem.less';

const MusicListItem = React.createClass({
    render() {
        let musicItem = this.props.musicItem;
        return (
            <li className={`component-listitem row ${this.props.focus ? 'focus': ''}`}>
                <p><strong>{musicItem.title} - {musicItem.artist}</strong></p>
                <p className="-col-auto delete"></p>
            </li>
        );
    }
});

export default MusicListItem;