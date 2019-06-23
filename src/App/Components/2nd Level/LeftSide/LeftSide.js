import React from "react";
import "./LeftSide.css";

class LeftSide extends React.Component {

	shouldComponentUpdate = () => false;

	render = () => {

		return <div className="LeftSide">{ this.props.content }</div>;
	}
}

export default LeftSide;