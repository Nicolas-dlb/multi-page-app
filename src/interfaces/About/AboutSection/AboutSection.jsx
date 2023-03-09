import React from "react";
import "./AboutSection.scss";

function AboutSection({ title, firstParagraph, secondParagraph }) {
	const formattedTitle = title.toLowerCase().replaceAll(" ", "-");

	return (
		<div className="about-section">
			<picture className="about-section-image">
				<source
					media="(max-width: 768px)"
					srcSet={`/assets/about/mobile/image-${formattedTitle}.jpg`}
				/>
				<source
					media="(max-width: 1280px)"
					srcSet={`/assets/about/tablet/image-${formattedTitle}.jpg`}
				/>
				<source
					media="(min-width: 1280px)"
					srcSet={`/assets/about/desktop/image-${formattedTitle}.jpg`}
				/>
				<img
					src={`/assets/about/desktop/image-${formattedTitle}.jpg`}
					alt=""
					width="100%"
					height="100%"
				/>
			</picture>
			<div className="about-section-info-wrapper">
				<div className="about-section-info">
					<h2 className="about-section-info-title">{title}</h2>
					<p className="about-section-info-content">{firstParagraph}</p>
					<p className="about-section-info-content">{secondParagraph}</p>
				</div>
			</div>
		</div>
	);
}

export default AboutSection;
