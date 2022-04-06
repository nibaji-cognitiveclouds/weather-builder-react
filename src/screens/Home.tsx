/** @format */

import { Button, Card, Container, TextField } from "@mui/material";
import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home: FC = () => {
	const [text, setText] = useState("");

	const navigate = useNavigate();

	return (
		<div
			style={{
				padding: 10,
				justifyContent: "center",
				alignItems: "center",
				height: window.innerHeight,
				// width: window.innerHeight,
				flexDirection: "column",
				display: "flex",
			}}
		>
			<TextField
				id="outlined-basic"
				label="Enter Country name"
				variant="outlined"
				onChange={(e) => setText(e.target.value)}
			/>
			<Button
				disabled={!text?.length}
				style={{
					marginTop: 10,
					backgroundColor: "rgba(0,150,255,.9)",
					borderRadius: 50,
				}}
				onClick={() => {
					navigate(`/details/`, {
						state: {
							country: text,
						},
					});
				}}
			>
				🔎
			</Button>
		</div>
	);
};

export default Home;
