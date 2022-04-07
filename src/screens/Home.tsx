/** @format */

import { Button, Container, TextField } from "@mui/material";
import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { styles } from "../styles/screens";

const Home: FC = () => {
	const [text, setText] = useState("");

	const navigate = useNavigate();

	return (
		<Container style={styles.container}>
			<TextField
				id="outlined-basic"
				label="Enter Country name"
				variant="outlined"
				onChange={(e) => setText(e.target.value)}
			/>
			<Button
				disabled={!text?.length}
				style={styles.submitBtn}
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
		</Container>
	);
};

export default Home;
