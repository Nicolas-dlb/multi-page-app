import Intro from "interfaces/Design/components/Intro/Intro";
import Project from "interfaces/Design/components/Project/Project";
import React from "react";
import { categories, projects } from "utils/constants/constants";
import OtherCategories from "../components/OtherCategory/OtherCategories";
import "./DesignPage.scss";

function DesignPage({ name }) {
	const category = categories.find((category) =>
		category.name.toLowerCase().includes(name)
	);

	return (
		<section className="design-page">
			<Intro title={category?.name} description={category?.description} />
			<div className="projects">
				{projects[name].map((project, index) => {
					return (
						<Project
							key={project.name}
							type={name}
							name={project.name}
							description={project.description}
						/>
					);
				})}
			</div>
			<OtherCategories current={name} />
		</section>
	);
}

export default DesignPage;
