import { style } from "../types";

const HeaderStyles: style = {
	SectionContainer: {
		border: "solid 5px blue",
		height: "100vh",
		display: "flex",
		alignItems: "center",
		backgroundColor: "rgb(38, 81, 117)",
	},
	TextContainer: { width: "fit-content" },
	Title: {
		width: "fit-content",
		color: "#212529",
		fontWeight: "bold",
	},
	Subtitle: {
		width: "fit-content",
		color: "#6C757D",
		fontWeight: "medium",
	},
};

export default HeaderStyles;
