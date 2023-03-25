import { style } from "../types";
import colors from "./Colors";

const EducationStyles: style = {
	SectionContainer: {
		height: "550px",
		minHeight: "550px",
		maxHeight: "600px",
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
		flexDirection: "row",
		alignItems: "center",
		width: "90%",
		maxWidth: "1000px",
		marginTop: "50px",
		marginBottom: "50px",
	},
	TecLogo: {
		border: "solid 3px " + colors.white,
		backgroundColor: colors.white,
		borderRadius: "50%",
		height: "300px",
	},
	TextContainer: {
		marginLeft: "80px",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
	},
	Subtitle: { color: colors.light_blue, fontWeight: "light" },
	Text: { color: colors.gray, fontWeight: "light" },
};

export default EducationStyles;
