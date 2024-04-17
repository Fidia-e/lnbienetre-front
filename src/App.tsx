import React, { FunctionComponent } from "react";
import { BrowserRouter, Routes, Route, createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Header from "components/Header";
import Footer from "components/Footer";
import ScrollToTopButton from "components/ScrollToTop";
import LegalesMentions from "pages/LegalesMentions";
import Blog from "pages/Blog";
import Article from "pages/Article";
import "./styles/index.scss";

const App: FunctionComponent = () => {
	return (
		<div className="App">
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/mentions-légales" element={<LegalesMentions />} />
					<Route path="/blog" element={<Blog />} />
					<Route path="/:article-label" element={<Article />} />
				</Routes>
				<ScrollToTopButton />
				<Footer />
			</BrowserRouter>
		</div>
	);
};

export default App;
