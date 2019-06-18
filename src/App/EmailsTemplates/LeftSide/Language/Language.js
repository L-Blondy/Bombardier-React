import React from "react";
import Radio from "../../../Modules/Radio";

function Language ( { getRadio } ) {

	return (
		<div className="Language">
			<Radio name="language" id="English" getRadio={ getRadio } />
			<Radio name="language" id="French" getRadio={ getRadio } />
		</div>
	)
}

export default Language;