import Category from "components/Category/Category";
import React from "react";
import { categories } from "utils/constants/constants";
import "./OtherCategories.scss";

function OtherCategories({ current }) {
	return (
		<div className="other-categories">
			{categories
				.filter((category) => !category.name.toLowerCase().includes(current))
				.map((category) => (
					<Category key={category.name} name={category.name} />
				))}
		</div>
	);
}

export default OtherCategories;
