import React from "react";
import { NavLink } from "react-router-dom";
import { navLinks } from "utils/constants/constants";
import "./Navbar.scss";

function NavBar({ navRef }) {
	return (
		<nav ref={navRef && navRef} className="navbar">
			<ul>
				{navLinks.map((link) => (
					<li key={link.name}>
						<NavLink className="navbar-link" to={`${link.path}`}>
							{link.name.toUpperCase()}
						</NavLink>
					</li>
				))}
			</ul>
		</nav>
	);
}

export default NavBar;
