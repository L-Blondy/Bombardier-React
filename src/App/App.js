import React from 'react';
import EmailsTemplates from "./Components/1st Level/EmailsTemplates/EmailsTemplates";
import LogsTemplates from "./Components/1st Level/LogsTemplates/LogsTemplates";

class App extends React.Component {

	state = {
		Strike: "S1",
		Language: "French",
		Gender: "",
		Name: "",
		Incident: "",
		Voicemail: "",
		Skype: "",
		Email: ""
	}

	getRadio = ( e ) => {
		const prop = ( e.target.name === "StrikeLog" ? "Strike" : e.target.name )
		this.setState( { [ prop ]: e.target.className } )
	}

	getTextInput = ( e ) => {
		if ( e.target.checkValidity() ) {
			let value = (
				e.target.id === "Name"
					? " " + e.target.value.charAt( 0 ).toUpperCase() + e.target.value.slice( 1 )
					: " " + e.target.value.toUpperCase()
			);
			value = (
				value.charAt( value.length - 1 ) === " "
					? value.slice( 0, value.length - 1 )
					: value;
			);
			this.setState( { [ e.target.id ]: value } )
		}
		else
			this.setState( { [ e.target.id ]: "" } );
	}

	toggleCopyCmd = ( e, templateName ) => {
		this.setState( { [ `copy${ templateName }` ]: "inactive" } )
		setTimeout( () => this.setState( { [ `copy${ templateName }` ]: "active" } ), 17 )

		const textarea = document.querySelector( `.${ templateName } .RightSide textarea` );
		textarea.select();
		document.execCommand( 'copy' );
		textarea.setSelectionRange( 0, 0 );
		setTimeout( () => this.handleReset(), 700 );
	}

	handleReset = () => {
		[ "Gender", "Skype", "Voicemail", "Email" ].forEach( val => {
			if ( this.state[ val ] !== "" )
				document.querySelector( ` .${ val } .${ this.state[ val ] }` ).checked = false;
		} )
		document.querySelector( ".EmailsTemplates .Name #Name" ).value = "";
		document.querySelector( ".EmailsTemplates .Incident #Incident" ).value = "";

		this.setState( {
			Language: "French",
			Gender: "",
			Name: "",
			Incident: "",
			Voicemail: "",
			Skype: "",
			Email: ""
		} )
	}

	render () {
		return (
			<div className="App">
				<EmailsTemplates
					handleReset={ this.handleReset }
					getStrike={ this.getStrike }
					getRadio={ this.getRadio }
					getTextInput={ this.getTextInput }
					textData={ this.state }
					toggleCopyCmd={ this.toggleCopyCmd }
				/>
				<LogsTemplates
					handleReset={ this.handleReset }
					getStrike={ this.getStrike }
					getRadio={ this.getRadio }
					textData={ this.state }
					toggleCopyCmd={ this.toggleCopyCmd }
				/>
			</div>
		);
	}
}

export default App;
