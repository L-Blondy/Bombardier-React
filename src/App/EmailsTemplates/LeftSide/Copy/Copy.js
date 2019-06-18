import React from "react";

function Copy ( { toggleCopyCmd, toggleCopyAnimation, className } ) {

	return (
		<div className={ "Copy" + className }>
			<button
				onClick={ toggleCopyCmd }
				className={ toggleCopyAnimation }
			>
				Copy
			</button>
		</div>
	)
}

export default Copy;