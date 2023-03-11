import React from "react";
import "./Location.scss";

function Location({ country, symbol, street, city, phone, mail }) {
	const formattedName = country.replace(" ", "-").toLowerCase();
	return (
		<div id={formattedName} className="location">
			<picture className="location-map">
				<source
					media="(min-width: 768px) and (max-width: 1280px)"
					srcSet={`/assets/locations/tablet/image-map-${formattedName}.png`}
				/>

				<img
					src={`/assets/locations/desktop/image-map-${formattedName}.png`}
					alt=""
					loading="lazy"
					width="100%"
					height="100%"
				/>
			</picture>
			<div className="location-info">
				<div className="location-info-element">
					<h2 className="location-info-name">{country}</h2>
					<div className="locations-contry-info-address">
						<p className="bold">Designo {symbol} Office</p>
						<p>{street}</p>
						<p>{city}</p>
					</div>
				</div>
				<div className="location-info-element">
					<div className="locations-contry-info-contact">
						<p className="bold">Contact</p>
						<p>P : {phone}</p>
						<p>M : {mail}</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Location;
