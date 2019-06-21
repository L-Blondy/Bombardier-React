import React from "react";
import "./CopySection.css";

function CopySection ( { toggleCopyCmd, toggleCopyAnimation, className } ) {

	return (
		<div className={ "CopySection " + className }>
			<button
				onClick={ toggleCopyCmd }
				className={ toggleCopyAnimation }
			>
				Copy
			</button>
			<legend></legend>
		</div>
	)
}

export default CopySection;