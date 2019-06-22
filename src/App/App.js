import React from 'react';
import EmailsTemplates from "./Components/1st Level/EmailsTemplates/EmailsTemplates";
import LogsTemplates from "./Components/1st Level/LogsTemplates/LogsTemplates";

class App extends React.Component {

	state = {
		key: {
			strikes: 1000,
			logs: 2000
		},
		Strike: "S1"
	}

	getStrike = ( e ) => {
		this.setState( { Strike: e.target.className } )
	}

	handleReset = () => {
		this.setState( {
			key: {
				strikes: this.state.key.strikes + 1,
				logs: this.state.key.logs + 1
			}
		} )
	}

	render () {
		return (
			<div className="App">
				<EmailsTemplates
					key={ this.state.key.strikes }
					handleReset={ this.handleReset }
					Strike={ this.state.Strike }
					getStrike={ this.getStrike }
				/>
				<LogsTemplates
					key={ this.state.key.logs }
					handleReset={ this.handleReset }
					Strike={ this.state.Strike }
					getStrike={ this.getStrike }
				/>
			</div>
		);
	}
}

export default App;
