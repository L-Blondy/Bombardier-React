import React from "react";
import LeftSide from "./LeftSide/LeftSide"

class EmailsTemplates extends React.Component {

	state = {
		copyAnimation: "inactive"
	}

	getRadio = ( e ) => {
		console.log( e.target.id )
	}

	getName = ( e ) => {
		console.log( e.target.value )
	}

	getIncident = ( e ) => {
		console.log( e.target.value )
	}

	toggleCopyCmd = ( e ) => {
		console.log( "toggleCopyCmd" )
	}

	render () {
		return (
			<div className="EmailsTemplates">
				<LeftSide
					getRadio={ this.getRadio }
					getName={ this.getName }
					getIncident={ this.getIncident }
					toggleCopyAnimation={ this.state.copyAnimation }
					toggleCopyCmd={ this.toggleCopyCmd }
				/>
			</div>
		)
	}
}

export default EmailsTemplates;