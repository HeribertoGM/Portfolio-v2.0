import { style } from "../types";
import colors from "./Colors";

const SkillStyles: style = {
	SectionContainer: {
		minHeight: "80vh",
		backgroundColor: colors.dark_blue,
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		padding: "15px 0px",
	},
	Title: {
		textAlign: "center",
		color: colors.muted_gray,
	},
	Divider: {
		border: "solid 1px " + colors.light_gray,
		width: "85%",
	},
	TypeTitle: {
		textAlign: "center",
		color: colors.muted_gray,
	},
	TypeDivider: {
		height: "0px",
		border: "solid 1px " + colors.light_gray,
		width: "40%",
	},
	SkillBadgeBox: {
		position: "relative",
		display: "inline-flex",
	},
	SkillBadgeCircularProgress: {
		backgroundColor: "gray",
		borderRadius: "50%",
	},
	SkillBadgeInnerBox: {
		top: 0,
		left: 0,
		bottom: 0,
		right: 0,
		position: "absolute",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		borderRadius: "50%",
	},
	SkillBadgeText: { textAlign: "center" },
	SkillSectionBox: { width: "80%" },
	SkillSectionTitle: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		paddingTop: "25px",
	},
	SkillSectionRow: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
};

export default SkillStyles;
