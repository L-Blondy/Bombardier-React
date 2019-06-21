import React from "react";
import "./Radio.css"

function Radio ( { name, id, getRadio, content } ) {

	return (
		<div className="Radio ">
			<input className={content} type="radio" name={ name } id={ id } content={ content } onChange={ getRadio } />
			<label htmlFor={ id }>{ content }</label>
		</div>
	)
}

export default Radio;