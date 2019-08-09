import React from "react";

class CopySection extends React.Component {

	shouldComponentUpdate = ( nextProps ) => {
		return this.props.toggleCopyAnimation !== nextProps.toggleCopyAnimation;
	}

	render = () => {

		console.log( this.props )
		const { toggleCopyCmd, toggleCopyAnimation } = this.props;

		return (
			<div className={ "CopySection" }>
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
}

export default CopySection;