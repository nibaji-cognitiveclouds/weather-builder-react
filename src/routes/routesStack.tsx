/** @format */

import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import Countries from "../screens/Countries";
import Home from "../screens/Home";

const RoutesStack: FC = () => {
	return (
		<Routes>
			<Route path="/" element={Home} />
			<Route path="/countries" element={Countries} />
		</Routes>
	);
};

export default RoutesStack;
