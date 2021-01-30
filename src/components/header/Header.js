import React, { useEffect, useRef } from "react";
import HeaderLogo from "./HeaderLogo";
import NavBar from "./NavBar";
import Menu from "./Menu";
import "./Header.css";

const Header = () => {
	const header_container = useRef();

	useEffect(() => {
		const showNavBarBackground = () => {
			const scrolled_position =
				document.body.scrollTop || document.documentElement.scrollTop;

			if (scrolled_position > 50) {
				header_container.current.classList.add(
					"header_container_white_background"
				);
			} else {
				header_container.current.classList.remove(
					"header_container_white_background"
				);
			}
		};
		window.addEventListener("scroll", showNavBarBackground);
	});
	return (
		<>
			<header ref={header_container} className="header">
				<div className="header_container">
					<HeaderLogo />
					<NavBar />
					<div className="header__contact">
						<button className="header__contact_button">CONTACT US</button>
					</div>
					<Menu />
				</div>
			</header>
		</>
	);
};

export default Header;
