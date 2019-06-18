import React from "react";

function Name ( { getName } ) {

	return (
		<div className="Name textfield">
			<input
				type="text"
				autoComplete="off"
				placeholder="Name here"
				onChange={ getName }
				pattern="[\sA-Za-z]{3,}"
				required
			/>
		</div >
	)
}
export default Name;