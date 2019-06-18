import React from "react";
import LeftSide from "./LeftSide/LeftSide";
import RightSide from "./RightSide/RightSide";
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
		console.log( document.querySelector( `.EmailsTemplates .${ this.state.Language }` ) )
		document.querySelector( `.EmailsTemplates .${ this.state.Language }` ).checked = true;
		document.querySelector( `.EmailsTemplates .${ this.state.Strike }` ).checked = true;
		this.setText();
	}

	getRadio = ( e ) => {
		this.setState( { [ e.target.name ]: e.target.className } )
		setTimeout( () => this.setText() );
		setTimeout( () => this.resizeTextArea() );
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
					: value
			);
			this.setState( { [ e.target.id ]: value } )
		}
		else
			this.setState( { [ e.target.id ]: "" } );

		setTimeout( () => this.setText() );
		setTimeout( () => this.resizeTextArea() );
	}

	setText = () => {
		const { Language, Strike, Gender, Name, Incident } = this.state;
		const curLang = templates[ Language ];

		this.setState( {
			text: curLang[ Strike ][ 0 ]
				+ ( Gender == "" ? "" : curLang[ Gender ] )
				+ Name
				+ curLang[ Strike ][ 1 ]
				+ Incident
				+ curLang[ Strike ][ 2 ]
		} );
	}

	resizeTextArea = () => {
		const textarea = document.querySelector( ".RightSide textarea" );
		textarea.style.height = "10px";
		textarea.style.height = textarea.scrollHeight + 10 + "px";
	}

	toggleCopyCmd = ( e ) => {
		this.setState( { copyAnimation: "inactive" } )
		setTimeout( () => this.setState( { copyAnimation: "active" } ), 17 )

		const textarea = document.querySelector( ".RightSide textarea" );
		textarea.select();
		document.execCommand( 'copy' );
		textarea.setSelectionRange( 0, 0 );
	}

	render () {
		return (
			<div className="EmailsTemplates">
				<LeftSide
					getRadio={ this.getRadio }
					getTextInput={ this.getTextInput }
					toggleCopyAnimation={ this.state.copyAnimation }
					toggleCopyCmd={ this.toggleCopyCmd }
					handleReset={ this.props.handleReset }
				/>
				<RightSide
					text={ this.state.text }
					toggleCopyAnimation={ this.state.copyAnimation }
				/>
			</div>
		)
	}
}

export default EmailsTemplates;