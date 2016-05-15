require("./node_modules/bootstrap/dist/css/bootstrap.min.css")
import React from 'react';
import ReactDOM from 'react-dom';
import RollerCoaster from './components/RollerCoaster.jsx';
import YouTube from 'react-youtube';

export class App extends React.Component {
	constructor() {
		super()

		this.state = {
			videoId: "ls7Ke48jCt8",
			player: null,
			isPlaying: false,
			userLog: new Array(749).fill(0),
			pauseLength: 0,
		}
		this.onReady = this.onReady.bind(this)
		this.onPlayVideo = this.onPlayVideo.bind(this)
		this.onPauseVideo = this.onPauseVideo.bind(this)
	}

	onReady(event) {
    console.log(`YouTube Player object for videoId: "${this.state.videoId}" has been saved to state.`); // eslint-disable-line
		this.setState({
      player: event.target,
    });
  }

	onPlayVideo() {
    this.state.player.playVideo();
  }

	onPauseVideo(event) {
    this.state.player.pauseVideo();
  }

	render() {
		return (
			<div style={wrapperStyle}>
				<button onClick={this.onPlayVideo}>Play</button>
        <button onClick={this.onPauseVideo}>Pause</button>
        <button onClick={this.onChangeVideo}>Change Video</button>
				<YouTube
					videoId={this.state.videoId}
					onReady={this.onReady}
					opts={opts}
				/>
				<RollerCoaster />
			</div>
		);
	}
}

const opts = {
	height: '390',
	width: '640',
};

const wrapperStyle = {
	width: 640,
}

ReactDOM.render(<App/>, document.querySelector("#myApp"));
