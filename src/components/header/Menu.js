import React from "react";
import "./Menu.css";

const Menu = () => {
	return (
		<div className="header_menu">
			<div className="header_menu__hamburger">
				<div className="header_menu__hamburger__top_ine hamburger_line"></div>
				<div className="header_menu__hamburger__middle_ine hamburger_line"></div>
				<div className="header_menu__hamburger__bottom_line hamburger_line"></div>
			</div>
			<div className="header_menu__menu_text">Menu</div>
		</div>
	);
};

export default Menu;
