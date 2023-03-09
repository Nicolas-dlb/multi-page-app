import React from "react";
import "./Country.scss";

function Country({ name, img }) {
	return (
		<div className="country">
			<div className="country-illustration">
				<img src={img} alt="" />
			</div>
			<h3 className="country-name">{name}</h3>
			<button className="btn">SEE LOCATION</button>
		</div>
	);
}

export default Country;
