import React from "react";
import RadioSection from "../../Modules/RadioSection/RadioSection";
import CopySection from "../../Modules/CopySection/CopySection";
import ResetSection from "../../Modules/ResetSection/ResetSection";
import TextFieldSection from "../../Modules/TextFieldSection/TextFieldSection";
import "./LeftSide.css";

function LeftSide ( { getRadio, getTextInput, toggleCopyCmd, toggleCopyAnimation, handleReset } ) {

	return (
		<div className="LeftSide">
			<RadioSection
				className="Language"
				IDs={ [ "English", "French" ] }
				getRadio={ getRadio }
			/>
			<RadioSection
				className="Strike"
				IDs={ [ "Closure", "S1", "S2", "S3" ] }
				getRadio={ getRadio }
			/>
			<RadioSection
				className="Gender"
				IDs={ [ "Male", "Female" ] }
				getRadio={ getRadio }
			/>
			<TextFieldSection
				className="Name"
				placeholder="Name here"
				pattern="[\sA-Za-z]{3,}"
				getTextInput={ getTextInput }
			/>
			<TextFieldSection
				className="Incident"
				placeholder="INC0000000"
				maxLength="10"
				pattern="(inc|inC|iNC|INC|iNc|INc|Inc|InC)+[0-9]{7}"
				getTextInput={ getTextInput }
			/>
			<CopySection
				toggleCopyAnimation={ toggleCopyAnimation }
				toggleCopyCmd={ toggleCopyCmd }
			/>
			<ResetSection
				handleReset={ handleReset }
			/>
		</div>
	)
}

export default LeftSide;