import React from 'react';
import MusicListItem from '../components/musiclistitem';

const MusicList = React.createClass({
    render() {
        return (
            <ul>
                {
                    this.props.musicList.map((item) => {
                        return <MusicListItem
                            focus={item === this.props.currentMusicItem}
                         key={item.id} musicItem={item}>{item.title}</MusicListItem>
                    })
                }
            </ul>
        );
    }
});

export default MusicList;