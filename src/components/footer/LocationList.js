import React from "react";
import LocationAddress from "./LocationAddress";
import "./LocationList.css";

const LocationList = () => {
	const locations = [
		{
			country: "Austin",
			address: "701 Tillery St #12, Austin, TX, USA 78702",
		},
		{
			country: "San Diego",
			address:
				"2305 Historic Decatur Road, Suite 100, San Diego, California, USA 92106",
		},
		{
			country: "Los Angeles",
			address: "700 S Flower Street, Suite 1000, Los Angeles, CA, USA 90017",
		},
		{
			country: "Chicago",
			address: "73 West Monroe Street, Chicago, IL, USA 60603",
		},
		{
			country: "San Francisco",
			address: "388 Market Street, Suite 1300 San Francisco, CA, USA 94111",
		},
		{
			country: "Canada",
			address: "14 Rue Brentwood, Dollard-Des-Ormeaux, QC H9A 2P7, Canada",
		},
		{
			country: "Orlando",
			address: "111 North Orange Avenue Suite 800, Orlando, FL 32801, USA",
		},
		{
			country: "Boston",
			address: "120 St James Ave Floor 6, Boston, MA 02116",
		},
		{
			country: "Houston",
			address: "2500 Yale St Suite B2, Houston, TX 77008",
		},
		{
			country: "Dallas",
			address: "17250 Dallas Pkwy Dallas,TX 75248",
		},
	];

	const locationList = locations.map((location) => {
		return (
			<LocationAddress country={location.country} address={location.address} />
		);
	});
	return <div className="locationlist">{locationList}</div>;
};

export default LocationList;
