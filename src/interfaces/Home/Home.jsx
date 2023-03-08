import React from "react";
import "./Home.scss";
import Banner from "./Banner/Banner";
import Values from "./Values/Values";
import { default as Category } from "./HomeCategory/HomeCategory";

function Home() {
	return (
		<div className="home">
			<Banner />
			<Category />
			<Values />
		</div>
	);
}

export default Home;
