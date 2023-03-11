import React, { useEffect } from "react";
import "./App.scss";
import Header from "../../components/Header/Header";
import Home from "../../interfaces/Home/Home";
import Footer from "components/Footer/Footer";
import { Route, Routes, useLocation } from "react-router-dom";
import NotFound from "interfaces/NotFound/NotFound";
import About from "interfaces/About/About";
import Locations from "interfaces/Locations/Locations";
import Contact from "interfaces/Contact/Contact";

function App() {
	const { pathname, hash, key } = useLocation();

	useEffect(() => {
		if (hash === "") {
			window.scrollTo(0, 0);
		} else {
			setTimeout(() => {
				const id = hash.replace("#", "");
				const element = document.getElementById(id);
				if (element) {
					element.scrollIntoView();
				}
			}, 0);
		}
	}, [pathname, hash, key]);

	return (
		<div className="app">
			<div className="layout">
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/locations" element={<Locations />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</div>
			<Footer />
		</div>
	);
}

export default App;
