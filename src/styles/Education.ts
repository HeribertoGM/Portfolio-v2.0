import { style } from "../types";

const EducationStyles: style = {
	SectionContainer: {
		border: "solid 5px green",
		minHeight: "80vh",
		backgroundColor: "rgb(58,61,63)",
	},
	Title: {
		textAlign: "center",
		paddingTop: "15px",
		color: "steelblue",
	},
	Divider: {
		border: "solid 1px #444",
		width: "85%",
	},
	InnerContainer: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		width: "90%",
		maxWidth: "1000px",
		marginTop: "50px",
		marginBottom: "50px",
	},
	TecLogo: {
		border: "solid 3px white",
		backgroundColor: "white",
		borderRadius: "50%",
		height: "300px",
	},
	TextContainer: {
		marginLeft: "80px",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
	},
	Subtitle: { color: "steelblue", fontWeight: "light" },
	Text: { color: "gray", fontWeight: "light" },
};

export default EducationStyles;
