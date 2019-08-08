import React from "react";

function HOC_1st_Lvl ( TemplateComponent, testArg ) {

	return class HOC_1st_Lvl extends React.Component {

		shouldComponentUpdate = testArg;

		componentDidMount = () => {
			if ( document.querySelector( `.${ TemplateComponent.Name } .${ this.props.textData.Language }` ) )
				document.querySelector( `.${ TemplateComponent.Name } .${ this.props.textData.Language }` ).checked = true
			document.querySelector( `.${ TemplateComponent.Name } .${ this.props.textData.Strike }` ).checked = true;
		}

		componentWillUpdate = () => {
			document.querySelector( `.${ TemplateComponent.Name } .${ this.props.textData.Strike }` ).checked = false;
		}

		componentDidUpdate = () => {
			document.querySelector( `.${ TemplateComponent.Name } .${ this.props.textData.Strike }` ).checked = true;
		}

		render () {
			//console.log( testArg )
			return (
				<TemplateComponent { ...this.props } />
			)
		}
	}
}

export default HOC_1st_Lvl;