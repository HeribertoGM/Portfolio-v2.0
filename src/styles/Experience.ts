import { timelineOppositeContentClasses } from "@mui/lab/TimelineOppositeContent";

import { style } from "../types";
import colors from "./Colors";

const ExperienceStyles: style = {
	SectionContainer: {
		border: "solid 5px pink",
		minHeight: "80vh",
		backgroundColor: colors.dark_blue,
	},
	Title: {
		textAlign: "center",
		paddingTop: "15px",
		color: colors.muted_gray,
	},
	Divider: {
		border: "solid 1px " + colors.light_gray,
		width: "85%",
	},
	InnerContainer: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		width: "90%",
		maxWidth: "1100px",
		marginTop: 2,
		marginBottom: 2,
	},
	Timeline: {
		[`& .${timelineOppositeContentClasses.root}`]: {
			flex: 0.2,
		},
		padding: 0,
	},
	TimelineOppositeContent: { paddingTop: 1.5 },
	TimelineSeparator: { paddingTop: 0.7 },
	TimelineContent: {
		padding: 0,
		marginLeft: 2,
		paddingBottom: 3,
	},
	ItemTime: { fontWeight: "light", color: colors.gray },
	ItemTitle: { fontSize: 32, color: colors.gray },
	ItemDescription: { fontSize: 17, color: colors.white },
};

export default ExperienceStyles;
