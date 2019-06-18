import React from "react";

import LeftSide from "../Modules/$LeftSide/LeftSide"
import RightSide from "../Modules/$RightSide/RightSide"

class LogsTemplates extends React.Component {

	state = {
		Language: "French",
		Strike: "S1",
		Gender: "",
		Name: "",
		Incident: "",
		text: "",
		copyAnimation: "inactive"
	}

	render () {
		return (
			<div className="LogsTemplates">
				<LeftSide
					getRadio={ this.getRadio }
					toggleCopyAnimation={ this.state.copyAnimation }
					toggleCopyCmd={ this.toggleCopyCmd }
					handleReset={ this.props.handleReset }
				/>
				<RightSide
					text={ this.state.text }
					toggleCopyAnimation={ this.state.copyAnimation }
				/>
			</div>
		)
	}
}

export default LogsTemplates;
