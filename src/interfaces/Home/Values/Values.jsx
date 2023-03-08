import React from "react";
import { values } from "utils/constants/constants";
import Value from "./Value/Value";
import "./Values.scss";

function Values() {
	return (
		<div className="values">
			{values.map((value) => (
				<Value
					key={value.name}
					img={value.img}
					name={value.name}
					description={value.description}
				/>
			))}
		</div>
	);
}

export default Values;
