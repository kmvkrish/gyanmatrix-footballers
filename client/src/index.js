import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route, browserHistory} from 'react-router-dom';

import App from './components/app.js';

ReactDOM.render(
	<App />, document.getElementById("footballers-container")
);
