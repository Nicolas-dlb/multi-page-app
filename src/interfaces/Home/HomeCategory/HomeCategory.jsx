import React from "react";
import Category from "../../../components/Category/Category";
import "./HomeCategory.scss";

function HomeCategory() {
	return (
		<div className="home-category">
			<Category name="Web Design" />
			<div className="home-category-group">
				<Category name="App Design" />
				<Category name="Graphic Design" />
			</div>
		</div>
	);
}

export default HomeCategory;
