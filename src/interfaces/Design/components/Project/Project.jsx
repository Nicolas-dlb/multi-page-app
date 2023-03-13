import React from "react";
import "./Project.scss";

function Project({ type, name, description }) {
	const formattedName = name.toLowerCase().replace(" ", "-");
	return (
		<div className="project">
			<div className="project-image-wrapper">
				<img
					src={`/assets/${type}-design/desktop/image-${formattedName}.jpg`}
					alt=""
					height="640"
					width="700"
					className="project-image"
				/>
			</div>
			<div className="project-info">
				<h3 className="project-info-title">{name}</h3>
				<p className="project-info-description">{description}</p>
			</div>
		</div>
	);
}

export default Project;
