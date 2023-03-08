import React, { useCallback, useEffect, useRef } from "react";
import { useClickOutside } from "utils/hooks/useClickOutside";
import NavBar from "../Navbar/Navbar";
import "./Menu.scss";
import disableScroll from "disable-scroll";

function Menu({ setIsMenuOpen }) {
	const navbar = useRef();
	const onClickOutside = useCallback(
		(event) =>
			!event.target.classList.contains("btn-header-nav-icon") &&
			setIsMenuOpen(false),
		[setIsMenuOpen]
	);

	useClickOutside(navbar, onClickOutside);

	useEffect(() => {
		window.scrollTo(0, 0);
		setTimeout(() => disableScroll.on(), 100);

		return () => disableScroll.off();
	}, []);

	return (
		<div className="menu">
			<NavBar navRef={navbar} />
		</div>
	);
}

export default Menu;
