import React from "react";
import "./App.scss";
import Header from "../../components/Header/Header";
import Home from "../../interfaces/Home/Home";
import Footer from "components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import NotFound from "interfaces/NotFound/NotFound";

function App() {
	return (
		<div className="app">
			<div className="layout">
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</div>
			<Footer />
		</div>
	);
}

export default App;
