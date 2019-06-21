import React from "react";
import LeftSide from "../../2nd Level/LeftSide/LeftSide";
import RightSide from "../../2nd Level/RightSide/RightSide";
import RadioSection from "../../3rd Level/RadioSection/RadioSection";
import CopySection from "../../3rd Level/CopySection/CopySection";
import ResetSection from "../../3rd Level/ResetSection/ResetSection";
import TextFieldSection from "../../3rd Level/TextFieldSection/TextFieldSection";
import "./EmailsTemplates.css";

const templates = {
	French: {
		S1: [ "Bonjour", ",\nNous avons essayé de vous contacter aujourd’hui à l'égard de votre incident", ".\nVeuillez ne pas répondre directement à ce courriel mais nous rappeler au numéro de votre  Centre d’assistance local.\nCordialement,\nCentre d'Assistance de Bombardier." ],
		S2: [ "Bonjour", ",\nNous avons essayé de vous contacter aujourd’hui pour la seconde fois à l'égard de votre incident", ".\nVeuillez ne pas répondre directement à ce courriel mais nous rappeler au numéro de votre  Centre d’assistance local.\nCordialement,\nCentre d'Assistance de Bombardier." ],
		S3: [ "Bonjour", ",\nNous avons essayé de vous contacter aujourd’hui pour la troisième fois à l'égard de votre incident", ".\nConstatant l’impossibilité de vous joindre ces derniers jours, sans réponse de votre part nous serons dans l’obligation de fermer votre billet.\nVeuillez ne pas répondre directement à ce courriel mais nous rappeler au numéro de votre  Centre d’assistance local.\nCordialement,\nCentre d'Assistance de Bombardier." ],
		Closure: [ "Bonjour", ",\nNous avons essayé de vous contacter déjà trois fois à l’égard de votre incident", ".\nNous vous contactons aujourd’hui pour vous informer que nous avons fermé votre billet.\nDans l’éventualité où votre problème ne serait pas réglé, nous vous invitons à nous contacter au numéro habituel afin d’ouvrir un nouveau ticket.\nVeuillez ne pas répondre directement à ce courriel mais communiquer avec nous au numéro de votre Centre d’assistance local.\nCordialement,\nCentre d’Assistance Bombardier." ],
		Male: " Monsieur",
		Female: " Mme"
	},
	English: {
		S1: [ "Dear", ",\nWe tried to contact you today about your incident", ".\nPlease do not reply directly to this email, but call us at the number of your local help desk.\nRegards,\nBombardier Service Center." ],
		S2: [ "Dear", ",\nWe tried to contact you today for the second time about your incident", ".\nPlease do not reply directly to this email, but call us at the number of your local help desk.\nRegards,\nBombardier Service Center." ],
		S3: [ "Dear", ",\nWe tried to contact you today for the third time about your incident", ".\nNoting the impossibility to reach you these last days, without answer on your part we will be in the obligation to close your ticket.\nPlease do not reply directly to this email, but call us at the number of your local help desk.\nRegards,\nBombardier Service Center." ],
		Closure: [ "Dear", ",\nWe tried to contact you already three times about your incident", ".\nWe are contacting you today to inform you that we have closed your ticket.\nIn the event that your problem is not resolved, we invite you to contact us at the usual number to open a new ticket.\nPlease do not reply directly to this email, but call us at the number of your local help desk.\nRegards,\nBombardier Service Center." ],
		Male: " Mr",
		Female: " Madam"
	}
};

class EmailsTemplates extends React.Component {

	state = {
		Language: "French",
		Strike: "S1",
		Gender: "",
		Name: "",
		Incident: "",
		text: "",
		copyAnimation: "inactive"
	}

	componentDidMount = () => {
		document.querySelector( `.EmailsTemplates .${ this.state.Language }` ).checked = true;
		document.querySelector( `.EmailsTemplates .${ this.state.Strike }` ).checked = true;
	}

	getRadio = ( e ) => {
		this.setState( { [ e.target.name ]: e.target.className } )
	}

	getTextInput = ( e ) => {
		if ( e.target.checkValidity() ) {
			let value = (
				e.target.id === "Name"
					? " " + e.target.value.charAt( 0 ).toUpperCase() + e.target.value.slice( 1 )
					: " " + e.target.value.toUpperCase()
			);
			value = (
				value.charAt( value.lengasdth - 1 ) === " "
					? value.slice( 0, value.length - 1 )
					: value
			);
			this.setState( { [ e.target.id ]: value } )
		}
		else
			this.setState( { [ e.target.id ]: "" } );
	}

	toggleCopyCmd = ( e ) => {
		this.setState( { copyAnimation: "inactive" } )
		setTimeout( () => this.setState( { copyAnimation: "active" } ), 17 )

		const textarea = document.querySelector( ".RightSide textarea" );
		textarea.select();
		document.execCommand( 'copy' );
		textarea.setSelectionRange( 0, 0 );
		this.resetAfterCopy();
	}

	resetAfterCopy = () => {
		setTimeout( () => {
			if ( this.state.Gender !== "" )
				document.querySelector( `.EmailsTemplates .${ this.state.Gender }` ).checked = false;
			document.querySelector( `.EmailsTemplates #Name` ).value = "";
			document.querySelector( `.EmailsTemplates #Incident` ).value = "";
			this.setState( {
				Gender: "",
				Name: "",
				Incident: ""
			} )
		}, 1000 )
	}

	render () {
		return (
			<div className="EmailsTemplates">
				<LeftSide content={ <>
					<RadioSection
						className="Language"
						legend="Language"
						IDs={ [ "English", "French" ] }
						getRadio={ this.getRadio }
					/>
					<RadioSection
						className="Strike"
						legend="Strike"
						IDs={ [ "Closure", "S1", "S2", "S3" ] }
						getRadio={ this.getRadio }
					/>
					<RadioSection
						className="Gender"
						legend="Gender"
						IDs={ [ "Male", "Female" ] }
						getRadio={ this.getRadio }
					/>
					<TextFieldSection
						className="Name"
						legend="Name"
						placeholder="Name here"
						getTextInput={ this.getTextInput }
					/>
					<TextFieldSection
						className="Incident"
						legend="Incident"
						placeholder="INC0000000"
						maxLength="10"
						pattern="(inc|inC|iNC|INC|iNc|INc|Inc|InC)+[0-9]{7}"
						getTextInput={ this.getTextInput }
					/>
					<CopySection
						toggleCopyAnimation={ this.state.copyAnimation }
						toggleCopyCmd={ this.toggleCopyCmd }
					/>
					<ResetSection
						handleReset={ this.props.handleReset }
					/>
				</> } />
				<RightSide templateName="EmailsTemplates" content={ <>
					<div className={ this.state.copyAnimation } >
						<textarea
							value={
								templates[ this.state.Language ][ this.state.Strike ][ 0 ]
								+ ( this.state.Gender === "" ? "" : templates[ this.state.Language ][ this.state.Gender ] )
								+ this.state.Name
								+ templates[ this.state.Language ][ this.state.Strike ][ 1 ]
								+ this.state.Incident
								+ templates[ this.state.Language ][ this.state.Strike ][ 2 ]
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

export default EmailsTemplates;
