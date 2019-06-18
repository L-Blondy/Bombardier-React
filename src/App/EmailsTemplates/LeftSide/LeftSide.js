import React from "react";
import Language from "./Language/Language"
import Strike from "./Strike/Strike"
import Gender from "./Gender/Gender"
import Name from "./Name/Name"
import Incident from "./Incident/Incident"
import Copy from "./Copy/Copy"

function LeftSide ( { getRadio, getName, getIncident, toggleCopyCmd, toggleCopyAnimation } ) {

	return (
		<div className="LeftSide">
			<Language getRadio={ getRadio } />
			<Strike getRadio={ getRadio } />
			<Gender getRadio={ getRadio } />
			<Name getName={ getName } />
			<Incident getIncident={ getIncident } />
			<Copy toggleCopyAnimation={ toggleCopyAnimation } toggleCopyCmd={ toggleCopyCmd } />
		</div>
	)
}

export default LeftSide;