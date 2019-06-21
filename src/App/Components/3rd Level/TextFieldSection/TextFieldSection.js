import React from "react";
import "./TextFieldSection.css";

function TextFieldSection ( { getTextInput, className, placeholder, pattern, maxLength, legend } ) {



	return (
		<div className={ "TextFieldSection " + className }>
			<input
				id={ className }
				type="text"
				autoComplete="off"
				placeholder={ placeholder }
				pattern={ pattern }
				maxLength={ maxLength ? maxLength : "" }
				onChange={ getTextInput }
				required
			/>
			<legend>{ legend }</legend>
		</div>
	)
}

export default TextFieldSection;