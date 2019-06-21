import React, { Fragment } from "react";
import RadioSection from "../../3rd Level/RadioSection/RadioSection";
import ResetSection from "../../3rd Level/ResetSection/ResetSection";
import CopySection from "../../3rd Level/CopySection/CopySection";
import LeftSide from "../../2nd Level/LeftSide/LeftSide";
import RightSide from "../../2nd Level/RightSide/RightSide";
import "./LogsTemplates.css";

const template = {
	StrikeLog: {
		Closure: "Closing ticket as per 3 strikes process.\nEmailed the user.",
		S1: "1st contact attempt.",
		S2: "2nd contact attempt.",
		S3: "3rd contact attempt."
	},
	Voicemail: {
		None: "\nNo phone number found.",
		Yes: "\nLeft a voicemail.",
		No: "\nVoicemail disabled."
	},
	Skype: {
		Yes: "\nMessaged the user on Skype.",
		No: "\nSkype offline."
	},
	Email: {
		Yes: "\nEmail sent.",
		No: "\nNo Email found."
	}

}

class LogsTemplates extends React.Component {

	state = {
		Language: "French",
		StrikeLog: "S1",
		Voicemail: "",
		Skype: "",
		Email: "",
		text: "",
		copyAnimation: "inactive"
	}

	componentDidMount = () => {
		document.querySelector( `.LogsTemplates .${ this.state.StrikeLog }` ).checked = true;
	}

	getRadio = ( e ) => {
		//console.log( e );
		this.setState( { [ e.target.name ]: e.target.className } );
	}

	toggleCopyCmd = ( e ) => {
		this.setState( { copyAnimation: "inactive" } )
		setTimeout( () => this.setState( { copyAnimation: "active" } ), 17 )

		const textarea = document.querySelector( ".LogsTemplates .RightSide textarea" );
		textarea.select();
		document.execCommand( 'copy' );
		textarea.setSelectionRange( 0, 0 );
		this.resetAfterCopy();
	}

	resetAfterCopy = () => {
		setTimeout( () => {
			if ( this.state.Voicemail !== "" )
				document.querySelector( `.LogsTemplates .Voicemail .${ this.state.Voicemail }` ).checked = false;
			if ( this.state.Skype !== "" )
				document.querySelector( `.LogsTemplates .Skype .${ this.state.Skype }` ).checked = false;
			if ( this.state.Email !== "" )
				document.querySelector( `.LogsTemplates .Email .${ this.state.Email }` ).checked = false;
			this.setState( {
				Voicemail: "",
				Skype: "",
				Email: "",
			} )
		}, 1000 )
	}

	render () {
		return (
			<div className="LogsTemplates">
				<LeftSide content={
					<Fragment>
						<RadioSection
							className="StrikeLog"
							legend="Strike"
							IDs={ [ "Closure", "S1", "S2", "S3" ] }
							getRadio={ this.getRadio }
						/>
						<RadioSection
							className="Voicemail"
							legend="Voicemail"
							IDs={ [ "None", "Yes", "No" ] }
							getRadio={ this.getRadio }
						/>
						<RadioSection
							className="Skype"
							legend="Skype"
							IDs={ [ "Yes", "No" ] }
							getRadio={ this.getRadio }
						/>
						<RadioSection
							className="Email"
							legend="Email"
							IDs={ [ "Yes", "No" ] }
							getRadio={ this.getRadio }
						/>
						<div className="wrap">
							<CopySection
								toggleCopyAnimation={ this.state.copyAnimation }
								toggleCopyCmd={ this.toggleCopyCmd }
							/>
							<legend></legend>
						</div>
						<div className="wrap">
							<ResetSection
								handleReset={ this.props.handleReset }
							/>
							<legend></legend>
						</div>
					</Fragment>
				} />

				<RightSide templateName="LogsTemplates" content={ <>
					<div className={ this.state.copyAnimation } >
						<textarea
							value={
								template.StrikeLog[ this.state.StrikeLog ]
								+ ( this.state.Voicemail === "" ? "" : template.Voicemail[ this.state.Voicemail ] )
								+ ( this.state.Skype === "" ? "" : template.Skype[ this.state.Skype ] )
								+ ( this.state.Email === "" ? "" : template.Email[ this.state.Email ] )
							}
							cols="70"
							rows="1"
							readOnly
						/>
					</div>
				</> } />
			</div>
		)
	}
}

export default LogsTemplates;
