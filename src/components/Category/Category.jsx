import React from "react";
import "./Category.scss";
import { Link } from "react-router-dom";
import rightArrow from "../../assets/shared/desktop/icon-right-arrow.svg";

function Category({ name }) {
	const formattedName = name.toLowerCase().replace(" ", "-");
	return (
		<Link
			type="button"
			aria-label="select a project category"
			className="category"
			reloadDocument
			to={`/${formattedName}`}
		>
			<picture className="category-background">
				<source
					media="(max-width: 768px)"
					srcSet={`/assets/home/mobile/image-${formattedName}.jpg`}
				/>
				<source
					media="(max-width: 1280px)"
					srcSet={`/assets/home/tablet/image-${formattedName}.jpg`}
				/>
				<source
					media="(min-width: 1280px)"
					srcSet={`/assets/home/desktop/image-${formattedName}.jpg`}
				/>
				<img
					src={`/assets/home/mobile/image-${formattedName}.jpg`}
					alt=""
					width="100%"
					height="100%"
				/>
			</picture>
			<div className="category-content">
				<h2 className="category-content-title">{name}</h2>
				<span className="category-content-cta">
					<p>View projects</p>
					<img
						src={rightArrow}
						className="category-content-cta-arrow"
						width="4"
						height="8"
						alt=""
					/>
				</span>
			</div>
		</Link>
	);
}

export default Category;
