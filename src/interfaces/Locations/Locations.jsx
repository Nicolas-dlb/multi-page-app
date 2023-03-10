import React from "react";
import { locations } from "utils/constants/constants";
import Location from "./Location/Location";
import "./Locations.scss";

function Locations() {
	return (
		<section className="locations">
			{locations.map((location) => (
				<Location key={location.country} {...location} />
			))}
		</section>
	);
}

export default Locations;
