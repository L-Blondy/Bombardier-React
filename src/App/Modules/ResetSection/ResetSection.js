import React from "react";
import "./ResetSection.css";

function ResetSection ( { handleReset, className } ) {

	return (
		<div className={ "ResetSection " + className }>
			<input type="reset" value="Reset" onClick={ handleReset } />
		</div >
	)
}

export default ResetSection;