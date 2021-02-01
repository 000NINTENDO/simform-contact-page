import React from "react";
import MapSvg from "../../static/footer-map-c26309b369d51410f3ceb06fe7c24f08.svg";
import LocationList from "./LocationList";
import "./Footer.css";

const Footer = () => {
	return (
		<div className="footer">
			<div className="footer__background">
				<img
					src={MapSvg}
					className="footer__background__image"
					alt="footer background"
				/>
			</div>
			<div className="footer__branches_section">
				<LocationList />
			</div>
		</div>
	);
};

export default Footer;
