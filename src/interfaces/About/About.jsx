import React from "react";
import AboutHero from "./AboutHero/AboutHero";
import "./About.scss";
import AboutSection from "./AboutSection/AboutSection";
import { about } from "utils/constants/constants";

function About() {
	const worldClassTalent = about.worldClassTalent;

	return (
		<section className="about">
			<AboutHero />
			<AboutSection
				title={worldClassTalent.title}
				firstParagraph={worldClassTalent.firstParagraph}
				secondParagraph={worldClassTalent.secondParagraph}
			/>
		</section>
	);
}

export default About;
