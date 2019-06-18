import React from "react";
import Radio from "./RadioButton/Radio.js";
import "./RadioSection.css";

function RadioSection ( { getRadio, className, IDs } ) {

	/*
	 * className = radio input Name
	 * IDs = define each button content
	 * 
	 * NOTE : small chance of duplicate id for input elements if 2 or more radio sections have the same "className + IDs"
	*/

	const radioButtons = IDs.map( ID => {
		return (
			<Radio
				content={ ID }
				name={ className }
				id={ ID + Math.random() }
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