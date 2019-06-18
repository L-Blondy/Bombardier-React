import React from "react";
import Radio from "./RadioButton/Radio.js";
import "./RadioSection.css";

function RadioSection ( { getRadio, className, IDs } ) {

	const radioButtons = IDs.map( ID => {
		return (
			<Radio
				name={ className }
				id={ ID }
				getRadio={ getRadio }
				key={ className + ID }
			/>
		)
	} )

	return (
		<div className={ "RadioSection " + className }>
			{ radioButtons }
		</div>
	)
}

export default RadioSection;