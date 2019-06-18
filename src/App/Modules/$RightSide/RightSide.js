import React from "react";
import "./RightSide.css";

function RightSide ( { text, toggleCopyAnimation } ) {

	return (
		<div className="RightSide">
			<div className={ toggleCopyAnimation } >
				<textarea
					value={ text }
					cols="70"
					rows="5"
					readOnly
				/>
			</div>
		</div>
	)

}

export default RightSide;