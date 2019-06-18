import React from "react";
import Radio from "../../../Modules/Radio";

function Gender ( { getRadio } ) {

	return (
		<div className="Gender">
			<Radio name="gender" id="Male" getRadio={ getRadio } />
			<Radio name="gender" id="Female" getRadio={ getRadio } />
		</div>
	)
}

export default Gender;