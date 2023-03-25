import { style } from "../types";
import colors from "./Colors";

const ErrorStyles: style = {
	Container: {
		backgroundColor: colors.dark_blue,
		height: "100vh",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
	Paper: {
		minHeight: 300,
		height: "30vh",
		maxHeight: 400,
		minWidth: 700,
		width: "70vh",
		maxWidth: 1000,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: colors.light_gray,
	},
	Column: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		height: "25vh",
	},
	Img: {
		minWidth: 250,
		width: "25vh",
	},
	Title: {
		color: colors.light_blue,
		fontWeight: 700,
	},
	Subtitle: {
		color: colors.gray,
	},
};

export default ErrorStyles;
