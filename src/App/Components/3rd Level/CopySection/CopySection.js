import React from "react";
import "./CopySection.css";

class CopySection extends React.Component {

	shouldComponentUpdate = ( nextProps ) => {
		return this.props.toggleCopyAnimation !== nextProps.toggleCopyAnimation;
	}

	render = () => {

		const { toggleCopyCmd, toggleCopyAnimation, className } = this.props;

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
}

export default CopySection;