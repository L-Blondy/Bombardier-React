import React from 'react';
import EmailsTemplates from "./EmailsTemplates/EmailsTemplates";

class App extends React.Component {

	state = {
		key: {
			strikes: 1000,
			logs: 1000
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
			</div>
		);
	}
}

export default App;
