import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import Navbar from './Navbar/Navbar';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import * as serviceWorker from './serviceWorker';


function Root () {

	return (
		<BrowserRouter>
			<Navbar />
			<App />
			{/* <Switch>
				<Route path="/" component={ App } exact />
				<Route path="/Templates-3 Strikes" component={ App } exact />
				<Route path="/Templates-Dimension Data" component={ App } exact />
				<Route path="/Utenze-Aerospace" component={ App } exact />
				<Route path="/Utenze-Transportation" component={ App } exact />
				<Route path="/Solutions-All solutions" component={ App } exact />
				<Route path="/Drives-Aerospace" component={ App } exact />
			</Switch> */}
		</BrowserRouter>
	)
}


ReactDOM.render( <Root />, document.getElementById( 'root' ) );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
