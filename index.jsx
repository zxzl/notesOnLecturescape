require("./node_modules/bootstrap/dist/css/bootstrap.min.css")
import React from 'react';
import ReactDOM from 'react-dom';
import Player from './components/Player.jsx';
import RollerCoaster from './components/RollerCoaster.jsx';
import UserTimeline from './components/UserTimeline.jsx';

export class App extends React.Component {
	render() {
		return (
			<div style={wrapperStyle}>
				<RollerCoaster />
				<UserTimeline />
			</div>
		);
	}
}

const wrapperStyle = {
	width: 640,
}

ReactDOM.render(<App/>, document.querySelector("#myApp"));
