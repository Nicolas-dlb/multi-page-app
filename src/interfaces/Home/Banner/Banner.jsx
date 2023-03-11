import React from "react";
import phone from "assets/home/image-hero-phone.png";
import "./Banner.scss";
import { Link } from "react-router-dom";

function Banner() {
	return (
		<div className="banner">
			<div className="banner-info">
				<h1 className="banner-info-title">
					Award-winning custom designs and digital branding solutions
				</h1>
				<p className="banner-info-content">
					With over 10 years in the indutry, we are experienced in creating
					fully responsive websites, app design, and engaging brand experiences.
					Find out more about our services
				</p>
				<Link className="btn-banner-info btn " to="/about">
					LEARN MORE
				</Link>
			</div>
			<img
				src={phone}
				alt=""
				className="banner-info-phone"
				width="600px"
				height="877px"
			/>
		</div>
	);
}

export default Banner;
