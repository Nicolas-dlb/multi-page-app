import React from "react";
import AboutHero from "./AboutHero/AboutHero";
import AboutSection from "./AboutSection/AboutSection";
import { about } from "utils/constants/constants";
import Countries from "./Countries/Countries";
import "./About.scss";

function About() {
	const worldClassTalent = about.worldClassTalent;
	const theRealWorld = about.theRealDeal;
	return (
		<section className="about">
			<AboutHero />
			<AboutSection
				title={worldClassTalent.title}
				firstParagraph={worldClassTalent.firstParagraph}
				secondParagraph={worldClassTalent.secondParagraph}
			/>
			<Countries />
			<AboutSection
				title={theRealWorld.title}
				firstParagraph={theRealWorld.firstParagraph}
				secondParagraph={theRealWorld.secondParagraph}
			/>
		</section>
	);
}

export default About;
