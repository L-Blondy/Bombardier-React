import React, { useEffect } from "react";

function RightSide ( { content, templateName } ) {

	useEffect( () => {
		const textarea = document.querySelector( `.${ templateName } .RightSide textarea` );
		textarea.style.height = "10px";
		textarea.style.height = textarea.scrollHeight + 10 + "px";
	} )

	return <div className="RightSide">{ content }</div>;

}

export default RightSide;