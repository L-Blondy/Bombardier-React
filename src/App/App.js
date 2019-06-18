import React from 'react';
import EmailsTemplates from "./EmailsTemplates/EmailsTemplates";
import LogsTemplates from "./LogsTemplates/LogsTemplates";

class App extends React.Component {

	state = {
		key: {
			strikes: 1000,
			logs: 2000
		}
	}

	handleReset = () => {
		this.setState( {
			key: {
				strikes: this.state.key.strikes + 1,
				logs: this.state.key.logs
			}
		} )
	}

	render () {
		return (
			<div className="App">
				<EmailsTemplates key={ this.state.key.strikes } handleReset={ this.handleReset } />
				<LogsTemplates key={ this.state.key.logs } handleReset={ this.handleReset } />
			</div>
		);
	}
}

export default App;
