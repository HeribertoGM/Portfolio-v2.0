import { style } from "../types";
import colors from "./Colors";

const HeaderStyles: style = {
	SectionContainer: {
		height: "100vh",
		display: "flex",
		alignItems: "center",
		backgroundColor: colors.dark_blue,
	},
	TextContainer: { width: "fit-content" },
	Title: {
		width: "fit-content",
		color: colors.dark_gray,
		fontWeight: "bold",
	},
	Subtitle: {
		width: "fit-content",
		color: colors.muted,
		fontWeight: "medium",
	},
};

export default HeaderStyles;
