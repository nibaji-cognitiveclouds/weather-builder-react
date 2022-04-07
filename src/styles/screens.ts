/** @format */

import { SxProps, Theme } from "@mui/material/styles";

export const styles: Record<string, React.CSSProperties> = {
	container: {
		padding: 10,
		justifyContent: "center",
		alignItems: "center",
		height: window.innerHeight,
		// width: window.innerHeight,
		flexDirection: "column",
		display: "flex",
	},
	submitBtn: {
		marginTop: 10,
		backgroundColor: "rgba(0,150,255,.9)",
		borderRadius: 50,
	},
	container2: {
		padding: 10,
		alignItems: "center",
		height: window.innerHeight,
		// width: window.innerHeight,
		flexDirection: "column",
		display: "flex",
	},
	backBtn: {
		top: 10,
		left: 10,
		position: "absolute",
	},
	img: {
		marginTop: 15,
		margin: 5,
	},
	okBtn: {
		marginTop: 20,
		backgroundColor: "red",
		color: "white",
		borderRadius: 10,
	},
	progressAndError: {
		position: "absolute",
		top: "50%",
		bottom: "50%",
		textAlign: "center",
	},
	card: {
		margin: 10,
		padding: 20,
		borderRadius: 20,
		boxShadow: "0px 0px 10px rgba(0,0,0,.2)",
		alignItems: "center",
		flexDirection: "column",
		display: "flex",
	},
	weatherBtn: {
		color: "white",
		borderRadius: 10,
		backgroundColor: "rgba(0,150,255,.9)",
		padding: 10,
	},
};

export const muiStyles: Record<string, SxProps<Theme>> = {
	modal: {
		display: "flex",
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		bgcolor: "background.paper",
		border: "2px solid grey",
		boxShadow: 24,
		p: 4,
		borderRadius: 5,
		minWidth: 250,
		justifyContent: "center",
		alignItems: "center",
	},
};
