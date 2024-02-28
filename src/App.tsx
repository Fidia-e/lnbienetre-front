import React, { FunctionComponent } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Header from "components/Header";
import Footer from "components/Footer";
import LegalesMentions from "pages/LegalesMentions";
import "./styles/index.scss";

const App: FunctionComponent = () => {
	return (
		<div className="App">
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/mentions-légales" element={<LegalesMentions />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	);
};

export default App;
