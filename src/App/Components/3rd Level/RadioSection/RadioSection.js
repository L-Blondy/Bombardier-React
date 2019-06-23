import React from "react";
import Radio from "./RadioButton/Radio.js";
import "./RadioSection.css";

class RadioSection extends React.Component {

	render = () => {

		const { getRadio, className, IDs, legend } = this.props;

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
				<legend>{ legend }</legend>
			</div>
		)
	}
}

export default RadioSection;