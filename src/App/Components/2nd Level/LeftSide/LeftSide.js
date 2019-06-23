import React from "react";
import "./LeftSide.css";

class LeftSide extends React.Component {

	shouldComponentUpdate = ( nextProps ) => {
		return false;
	}

	render () {

		return <div className="LeftSide">{ this.props.content }</div>;
	}
}

export default LeftSide;