/** @format */

import Countries from "./screens/Countries";
import Home from "./screens/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/details/" element={<Countries />} />
			</Routes>
		</BrowserRouter>
	);
}
