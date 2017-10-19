import React from 'react';
import Header from './components/header';
import Player from './page/player';
import MusicList from './page/musiclist';
import {MUSIC_LIST} from './config/musiclist';//只有取export default的值的时候不需要{}
import { Router, IndexRoute, Link, Route, hashHistory } from 'react-router';

const App = React.createClass({
    getInitialState() {
        return {
            musicList: MUSIC_LIST,
            currentMusicItem: MUSIC_LIST[1]
        }
    },
    componentDidMount() {
        $("#player").jPlayer({
            ready: function() {
                $(this).jPlayer('setMedia', {
                    // mp3: currentMusicItem.file
                    mp3: 'http://oj4t8z2d5.bkt.clouddn.com/%E9%AD%94%E9%AC%BC%E4%B8%AD%E7%9A%84%E5%A4%A9%E4%BD%BF.mp3'
                }).jPlayer('play');
            },
            supplied: 'mp3',
            wmode: 'window'
        });
    },
    render() {
        return (
            <div>
                <Header />
                {React.cloneElement(this.props.children, this.state)}
            </div>
        );
    }
});

const Root = React.createClass({
    render() {
        return (
            <Router history={hashHistory}>
                <Route path="/" component={App}>
                    <IndexRoute component={Player}></IndexRoute>
                    <Route path="/list" component={MusicList}></Route>
                </Route>
            </Router>
        );
    }
});

export default Root;

// getDefaultProps
// getInitialState
// componentWillMount
// render
// componentDidMount
// componentWillMount