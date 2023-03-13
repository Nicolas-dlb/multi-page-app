import React from "react";
import "./AboutHero.scss";

function AboutHero() {
	return (
		<div className="about-hero">
			<div className="about-hero-image-wrapper">
				<picture className="about-hero-image">
					<source
						media="(max-width: 768px)"
						srcSet="/assets/about/mobile/image-about-hero.jpg"
					/>
					<source
						media="(max-width: 1280px)"
						srcSet="/assets/about/tablet/image-about-hero.jpg"
					/>
					<source
						media="(min-width: 1280px)"
						srcSet="/assets/about/desktop/image-about-hero.jpg"
					/>
					<img
						src="/assets/about/desktop/image-about-us.jpg"
						alt=""
						width="100%"
						height="100%"
					/>
				</picture>
			</div>
			<div className="about-hero-info-wrapper">
				<div className="about-hero-info">
					<h1 className="about-hero-info-title">About us</h1>
					<p className="about-hero-info-content">
						Founded in 2010, we are a creative agency that produces lasting
						results for our clients. We've partnered with many startups,
						corporations, and nonprofits alike to craft designs that make real
						impact. We're always looking forward to creating brands, products,
						and digital experiences that connect with our clients' audiences.
					</p>
				</div>
			</div>
		</div>
	);
}

export default AboutHero;
