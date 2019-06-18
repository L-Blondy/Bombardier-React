import React from "react";
import Radio from "../../../Modules/Radio";

function Strike ( { getRadio } ) {

	return (
		<div className="Strike">
			<Radio name="strike" id="Closure" getRadio={ getRadio } />
			<Radio name="strike" id="S1" getRadio={ getRadio } />
			<Radio name="strike" id="S2" getRadio={ getRadio } />
			<Radio name="strike" id="S3" getRadio={ getRadio } />
		</div>
	)
}

export default Strike;