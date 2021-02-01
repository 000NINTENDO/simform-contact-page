import React from "react";
import "./LocationAddress.css";

const LocationAddress = ({ country, address }) => {
	return (
		<div className="location_address">
			<h4 className="location_address__country">{country}</h4>
			<p className="location_address__adsress">{address}</p>
			<a className="location_address__contact_number" href="tel:7434004386">
				Call us now
			</a>
		</div>
	);
};

export default LocationAddress;
