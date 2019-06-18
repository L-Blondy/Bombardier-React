import React from "react";

function RightSide ( { text } ) {

	return (
		<div className="RightSide">
			<textarea
				value={ text }
				cols="70"
				rows="5"
				readOnly
			/>
		</div>
	)

}

export default RightSide;