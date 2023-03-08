import React from "react";
import "./Value.scss";
import background from "../../../../assets/home/bg-pattern-hero-home.svg";

function Value({ img, name, description }) {
	return (
		<div className="value">
			<div className="value-illustration">
				<img loading="lazy" src={img} alt="" width="200" height="200" />
				<img
					className="value-illustration-bg"
					width="100%"
					height="100%"
					src={background}
					alt=""
				/>
			</div>
			<div className="value-info">
				<h3 className="value-name">{name}</h3>
				<p className="value-description">{description}</p>
			</div>
		</div>
	);
}

export default Value;
