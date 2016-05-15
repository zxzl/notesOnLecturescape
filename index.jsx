require("./node_modules/bootstrap/dist/css/bootstrap.min.css")
import React from 'react';
import ReactDOM from 'react-dom';
import Player from './components/Player.jsx';
import RollerCoaster from './components/RollerCoaster.jsx';
import UserTimeline from './components/UserTimeline.jsx';

export class App extends React.Component {
	render() {
		return (
			<div>
				Simple React + Babel + Bootstrap + Webpack
				<Player />
				<RollerCoaster />
				<UserTimeline />
			</div>
		);
	}
}

ReactDOM.render(<App/>, document.querySelector("#myApp"));
