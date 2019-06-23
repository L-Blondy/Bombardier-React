import React from "react";
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

	componentDidMount = () => {
		document.querySelector( `.LogsTemplates .${ this.props.textData.Strike }` ).checked = true;
	}
	componentWillUpdate = () => {
		document.querySelector( `.LogsTemplates .${ this.props.textData.Strike }` ).checked = false;
	}
	componentDidUpdate = () => {
		document.querySelector( `.LogsTemplates .${ this.props.textData.Strike }` ).checked = true;
	}

	render = () => {
		const { Strike, Voicemail, Skype, Email } = this.props.textData;
		return (
			<div className="LogsTemplates">
				<LeftSide content={
					<>
						<RadioSection
							className="StrikeLog"
							legend="Strike"
							IDs={ [ "Closure", "S1", "S2", "S3" ] }
							getRadio={ this.props.getRadio }
						/>
						<RadioSection
							className="Voicemail"
							legend="Voicemail"
							IDs={ [ "None", "Yes", "No" ] }
							getRadio={ this.props.getRadio }
						/>
						<RadioSection
							className="Skype"
							legend="Skype"
							IDs={ [ "Yes", "No" ] }
							getRadio={ this.props.getRadio }
						/>
						<RadioSection
							className="Email"
							legend="Email"
							IDs={ [ "Yes", "No" ] }
							getRadio={ this.props.getRadio }
						/>
						<div className="wrap">
							<CopySection
								toggleCopyAnimation={ this.props.textData.copyLogsTemplates }
								toggleCopyCmd={ ( e ) => this.props.toggleCopyCmd( e, this.constructor.name ) }
							/>
							<legend></legend>
						</div>
						<div className="wrap">
							<ResetSection
								handleReset={ this.props.handleReset }
							/>
							<legend></legend>
						</div>
					</>
				} />

				<RightSide templateName="LogsTemplates" content={ <>
					<div className={ this.props.textData.copyLogsTemplates } >
						<textarea
							value={
								template.StrikeLog[ Strike ]
								+ ( Voicemail === "" ? "" : template.Voicemail[ Voicemail ] )
								+ ( Skype === "" ? "" : template.Skype[ Skype ] )
								+ ( Email === "" ? "" : template.Email[ Email ] )
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
