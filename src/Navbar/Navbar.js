import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css"

class Navbar extends React.Component {

	content = [
		{ Templates: [ "3 Strikes", "Dimension Data" ] },
		{ Utenze: [ "Aerospace", "Transportation" ] },
		{ Solutions: [ "All solutions" ] },
		{ Drives: [ "Aerospace" ] }
	]

	renderNavlinks = () => {
		return this.content.map( ( obj, index ) => (
			<Navlink
				key={ index }
				title={ Object.keys( obj )[ 0 ] }
				links={ obj[ Object.keys( obj )[ 0 ] ] }
			/> )
		)
	}

	render () {
		return (
			<div className="Navbar">
				<h4 className="logo">Bombardier</h4>
				<ul className="links-ul">
					{ this.renderNavlinks() }
				</ul>
			</div>
		)
	}
}

class Navlink extends React.Component {

	renderLinks = () => {
		const links = this.props.links.map( ( link, index ) => ( <NavLink to={ `${ this.props.title }-${ link }` } key={ index }>{ link }</NavLink> ) )
		return <div className="dropdown">{ links }</div>
	}

	render () {
		return (
			<li className="open-dropdown">
				<h3>{ this.props.title }</h3>
				{ this.renderLinks() }
			</li>
		)
	}
}

export default Navbar;