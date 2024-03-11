import { style } from "../types";
import colors from "./Colors";

const EducationStyles: style = {
	SectionContainer: {
		backgroundColor: colors.light_gray,
	},
	Title: {
		textAlign: "center",
		paddingTop: "15px",
		color: colors.light_blue,
	},
	Divider: {
		border: "solid 1px #555",
		width: "85%",
	},
	InnerContainer: {
		display: "flex",
		alignItems: "center",
		width: "90%",
		maxWidth: "1000px",
		paddingTop: "50px",
		paddingBottom: "50px",
	},
	TecLogo: {
		border: "solid 3px " + colors.white,
		backgroundColor: colors.white,
		borderRadius: "50%",
		height: "300px",
	},
	TextContainer: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
	},
	Subtitle: { color: colors.light_blue, fontWeight: "light" },
	Text: { color: colors.gray, fontWeight: "light" },
};

export default EducationStyles;
