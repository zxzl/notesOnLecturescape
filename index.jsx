require("./node_modules/bootstrap/dist/css/bootstrap.min.css")
import React from 'react';
import ReactDOM from 'react-dom';
import update from 'react-addons-update';
import TimerMixin from 'react-timer-mixin';
import YouTube from 'react-youtube';

import RollerCoaster from './components/RollerCoaster.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      videoId: "ls7Ke48jCt8",
      player: null,
			userLog: new Array(749).fill(0.1),
			isPaused: false,
			afterPaused: 0,
    };

    this.onReady = this.onReady.bind(this);
    this.onChangeVideo = this.onChangeVideo.bind(this);
    this.onPlayVideo = this.onPlayVideo.bind(this);
    this.onPauseVideo = this.onPauseVideo.bind(this);
  }

  onReady(event) {
    console.log(`YouTube Player object for videoId: "${this.state.videoId}" has been saved to state.`); // eslint-disable-line
    this.setState({
      player: event.target,
    });
		TimerMixin.setInterval(
			() => {
				const pos = Math.floor(this.state.player.getCurrentTime())
				console.log(pos + ' ' + this.state.afterPaused)
				this.setState({
					afterPaused: this.state.isPaused ? this.state.afterPaused + 1 : this.state.afterPaused,
					userLog: update(this.state.userLog, {[pos]: {$set: 0.4}}),
				})
			},
			1000
		)
  }

  onPlayVideo() {
    this.setState({
			isPaused: false,
			afterPaused: 0,
		})
  }

  onPauseVideo() {
    this.setState({ isPaused: true })
  }

  onChangeVideo() {
    this.setState({
      videoId: this.state.videoId === videoIdA ? videoIdB : videoIdA,
    });
  }

  render() {
    return (
      <div>
        <YouTube
					videoId={this.state.videoId}
					onReady={this.onReady}
					onPlay={this.onPlayVideo}
					onPause={this.onPauseVideo}
				/>
				<RollerCoaster
					userLog={this.state.userLog}
					afterPaused={this.state.afterPaused}
				/>
      </div>
    );
  }
}


ReactDOM.render(<App/>, document.querySelector("#myApp"));
