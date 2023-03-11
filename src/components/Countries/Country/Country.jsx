import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./Country.scss";

function Country({ name, img }) {
	return (
		<div className="country">
			<div className="country-illustration">
				<img src={img} alt="" />
			</div>
			<h3 className="country-name">{name}</h3>
			<Link
				to={`/locations#${name.toLowerCase().replace(" ", "-")}`}
				className="btn"
			>
				SEE LOCATION
			</Link>
		</div>
	);
}

export default Country;
