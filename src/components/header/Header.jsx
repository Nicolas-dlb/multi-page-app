import React, { useCallback, useState } from "react";
import "./Header.scss";
import logo from "assets/shared/desktop/logo-dark.png";
import hamburgerIcon from "../../assets/shared/mobile/icon-hamburger.svg";
import close from "../../assets/shared/mobile/icon-close.svg";
import Menu from "./Menu/Menu";
import NavBar from "./Navbar/Navbar";
import { Link } from "react-router-dom";

function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const toggleMenu = useCallback(
		() => setIsMenuOpen(!isMenuOpen),
		[isMenuOpen]
	);

	return (
		<header data-testid="header">
			<Link to="/">
				<img
					className="header-logo"
					src={logo}
					aria-label="logo"
					alt=""
					width="150px"
					height="20px"
				/>
			</Link>
			<div className="header-nav-wrapper">
				<NavBar />
				<button
					aria-label="toggle navbar"
					className="btn-header-menu"
					onClick={toggleMenu}
				>
					<img
						src={isMenuOpen ? close : hamburgerIcon}
						className="btn-header-nav-icon"
						width="20"
						height="20"
						alt=""
					/>
				</button>
				{isMenuOpen && <Menu setIsMenuOpen={setIsMenuOpen} />}
			</div>
		</header>
	);
}

export default Header;
