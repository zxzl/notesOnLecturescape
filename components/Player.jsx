import React from 'react';
import ReactDOM from 'react-dom';
import YouTube from 'react-youtube';

export default class Player extends React.Component {
  render() {
    const opts = {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };

    return (
      <YouTube
        videoId="ls7Ke48jCt8"
        opts={opts}
        onReady={this._onReady}
        onPause={this._onPause}
      />
    );
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

  _onPause(event) {
    console.log(event);
    console.log(event.target.getCurrentTime())
  }
}
