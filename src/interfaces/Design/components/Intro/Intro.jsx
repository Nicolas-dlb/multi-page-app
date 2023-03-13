import React from "react";
import "./Intro.scss";

function Intro({ title, description }) {
	return (
		<div className="intro">
			<h2 className="intro-title">{title}</h2>
			<p className="intro-description">{description}</p>
		</div>
	);
}

export default Intro;
