import React from "react";

function Incident ( { getIncident } ) {

	return (
		<div className="Incident textfield">
			<input
				type="text"
				autoComplete="off"
				placeholder="INC0000000"
				onChange={ getIncident }
				maxLength="10"
				pattern="(inc|inC|iNC|INC|iNc|INc|Inc|InC)+[0-9]{7}"
				required
			/>
		</div >
	)
}
export default Incident;