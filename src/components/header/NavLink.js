import React from "react";
import { Link } from "react-router-dom";
import "./NavLink.css";

const NavLink = ({ linkName }) => {
	return (
		<>
			<li className="navbar_navlink">
				<Link to="" className="navbar_navlink__link">
					{linkName}
				</Link>
			</li>
		</>
	);
};

export default NavLink;
