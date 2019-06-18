import React from "react";
import "./Radio.css"

function Radio ( { name, id, getRadio } ) {

	return (
		<div className="Radio">
			<input type="radio" name={ name } id={ id } onChange={ getRadio } />
			<label htmlFor={ id }>{ id }</label>
		</div>
	)
}

export default Radio;