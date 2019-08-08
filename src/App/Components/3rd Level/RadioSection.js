import React from "react";

function Radio ( { name, id, getRadio, content } ) {

	return (
		<div className="Radio ">
			<input className={ content } type="radio" name={ name } id={ id } content={ content } onChange={ getRadio } />
			<label htmlFor={ id }>{ content }</label>
		</div>
	)
}

export default class RadioSection extends React.Component {

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