import React from "react";
import "./Footer.scss";
import { navLinks, socialMedia } from "utils/constants/constants";
import CTA from "components/Footer/CTA/CTA";
import { Link } from "react-router-dom";
import logoLight from "../../assets/shared/desktop/logo-light.png";

function Footer({ disableCTA }) {
	return (
		<>
			<footer className={disableCTA ? "disabledCTA" : undefined}>
				{!disableCTA && <CTA />}
				<div className="footer-top">
					<img
						src={logoLight}
						width="200"
						height="26"
						className="footer-logo"
						alt=""
					/>
					<span className="border" />
					<div className="footer-links">
						{navLinks.map((link) => (
							<Link className="footer-link" key={link.name} to={link.path}>
								{link.name.toUpperCase()}
							</Link>
						))}
					</div>
				</div>
				<div className="footer-bottom">
					<div className="footer-bottom-info">
						<div className="footer-bottom-adress">
							<p className="bold">Designo Central Office</p>
							<p>3886 Wellington Street</p>
							<p>Toronto, Ontario M9C 3J5</p>
						</div>
						<div className="footer-bottom-contact">
							<p className="bold">Contact Us (Central Office)</p>
							<p>P : +1 253-863-8967</p>
							<p>M : contact@designo.co</p>
						</div>
					</div>
					<div className="footer-social-media">
						{socialMedia.map((media) => {
							const MediaIcon = media.icon;
							return (
								<MediaIcon
									key={media.name}
									className="footer-social-media-icon"
								/>
							);
						})}
					</div>
				</div>
			</footer>
		</>
	);
}

export default Footer;
