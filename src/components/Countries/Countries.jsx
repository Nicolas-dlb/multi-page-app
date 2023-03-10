import React from "react";
import { countries } from "utils/constants/constants";
import "./Countries.scss";
import Country from "./Country/Country";

function Countries() {
	return (
		<section className="countries">
			{countries.map((country) => (
				<Country
					key={country.name}
					name={country.name}
					img={country.illustration}
				/>
			))}
		</section>
	);
}

export default Countries;
