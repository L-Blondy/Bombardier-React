import React from "react";
import RadioSection from "../3rd Level/RadioSection";
import ResetSection from "../3rd Level/ResetSection";
import CopySection from "../3rd Level/CopySection";
import LeftSide from "../2nd Level/LeftSide";
import RightSide from "../2nd Level/RightSide";
import HOC_1st_Lvl from "../../HOC/HOC_1st_Lvl";

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

	static constName = "LogsTemplates";

	static shouldComponentUpdate ( nextProps, nextState ) {
		const nextP = nextProps.textData;
		const { Strike, Voicemail, Skype, Email, copyLogsTemplates } = this.props.textData;

		return (
			Strike !== nextP.Strike
			|| Voicemail !== nextP.Voicemail
			|| Skype !== nextP.Skype
			|| Email !== nextP.Email
			|| copyLogsTemplates !== nextP.copyLogsTemplates
		);
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
								toggleCopyCmd={ ( e ) => this.props.toggleCopyCmd( e, "LogsTemplates" ) }
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
							cols="80"
							rows="1"
							readOnly
						/>
					</div>
				</> } />
			</div>
		)
	}
}

export default HOC_1st_Lvl( LogsTemplates, LogsTemplates.shouldComponentUpdate );
