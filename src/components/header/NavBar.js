import React from "react";
import NavLink from "./NavLink";
import "./NavBar.css";

const NavBar = () => {
	return (
		<ul className="navbar">
			<NavLink linkName={"ABOUT US"} />
			<div className="navbar_navlink_seperator">/</div>
			<NavLink linkName={"SERVICES"} />
			<div className="navbar_navlink_seperator">/</div>
			<NavLink linkName={"CASE STUDIES"} />
			<div className="navbar_navlink_seperator">/</div>
			<NavLink linkName={"HOW IT WORKS"} />
			<div className="navbar_navlink_seperator">/</div>
			<NavLink linkName={"BLOG"} />
		</ul>
	);
};

export default NavBar;
