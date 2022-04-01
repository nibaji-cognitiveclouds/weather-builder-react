/** @format */

import { Card } from "@mui/material";
import React, { FC } from "react";
import { useLocation } from "react-router-dom";

const Countries: FC = () => {
	const location = useLocation();

	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				flexDirection: "column",
				height: window.innerHeight,
			}}
		>
			<h2>Countries</h2>
			<Card
				style={{
					padding: 10,
					paddingLeft: 20,
					paddingRight: 20,
					margin: 10,
				}}
			>
				{/* @ts-ignore */}
				<p>{location.state.country}</p>
			</Card>
		</div>
	);
};

export default Countries;
