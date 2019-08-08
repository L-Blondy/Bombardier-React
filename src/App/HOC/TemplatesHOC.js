import React from "react";

function TemplatesHOC ( TemplateComponent, testArg ) {

	return class TemplatesHOC extends React.Component {

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

export default TemplatesHOC;