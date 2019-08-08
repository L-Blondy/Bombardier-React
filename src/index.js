import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/index.css';
import App from './App/App';
import Navbar from './Navbar/Navbar';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import * as serviceWorker from './serviceWorker';


function Root () {

	return (
		<BrowserRouter>
			<Navbar />
			<Switch>
				<Route path="/" component={ App } exact />
				<Route path="/Templates-3 Strikes" component={ App } exact />
				<Route path="/Templates-Dimension Data" component={ App } exact />
				<Route path="/Utenze-Aerospace" component={ App } exact />
				<Route path="/Utenze-Transportation" component={ App } exact />
				<Route path="/Solutions-All solutions" component={ App } exact />
				<Route path="/Drives-Aerospace" component={ App } exact />
			</Switch>
		</BrowserRouter>
	)
}


ReactDOM.render( <Root />, document.getElementById( 'root' ) );

serviceWorker.unregister();
