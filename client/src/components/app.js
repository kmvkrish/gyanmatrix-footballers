import React from 'react';
import {BrowserRouter, Switch, Route, browserHistory, Redirect} from 'react-router-dom';

import PlayersList from './PlayersList';
import PlayerDetails from './PlayerDetails';

class App extends React.Component {
	constructor() {
		super();
	}

	render() {
		return(
			<BrowserRouter history={browserHistory}>
				<Switch>
					<Route path="/players" exact component={PlayersList} />
					<Route path="/players/:player([a-zA-Z\s]+)" component={PlayerDetails} />
					<Redirect to="/players" />
				</Switch>
			</BrowserRouter>
		)
	}
	
}

export default App;