import React from "react";
import { Link } from "react-router-dom";
import "./CTA.scss";

function CTA() {
	return (
		<div className="cta">
			<div className="cta-content">
				<h2 className="cta-title">
					Let's talk about
					<br /> your project
				</h2>
				<p className="cta-description">
					Ready to take it to the next level? Contact us today and find out how
					our expertise can help your business grow.
				</p>
			</div>
			<Link className="btn btn-cta" to="/contact">
				GET IN TOUCH
			</Link>
		</div>
	);
}

export default CTA;
