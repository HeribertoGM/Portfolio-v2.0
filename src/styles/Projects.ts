import { style } from "../types";
import colors from "./Colors";

const ProjectsStyles: style = {
	SectionContainer: {
		border: "solid 5px green",
		minHeight: "80vh",
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
		flexDirection: "column",
		alignItems: "center",
		width: "90%",
		maxWidth: "1250px",
		marginTop: "50px",
		marginBottom: "50px",
	},
	ItemContainer: {
		width: "90%",
		height: "75vh",
		minHeight: "400px",
		position: "relative",
	},
	ItemImg: {
		width: "60%",
		height: "fit-content",
		position: "absolute",
		margin: "auto",
		top: 0,
		bottom: 0,
		zIndex: 0,
		borderRadius: "10px",
	},
	ItemImgHitbox: {
		width: "60%",
		height: "100%",
		position: "absolute",
		margin: "auto",
		top: 0,
		bottom: 0,
		zIndex: 0,
		borderRadius: "10px",
	},
	ItemDescriptionContainer: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		width: "60%",
		zIndex: 0,
		position: "absolute",
		top: "10%",
		bottom: "10%",
	},
	ItemTitleDiv: {
		display: "flex",
		alignItems: "flex-end",
	},
	ItemTitle: {
		color: colors.light_blue,
		marginLeft: "5px",
		marginRight: "5px",
		marginBottom: "5px",
		padding: "5px",
		borderRadius: "5px",
		backgroundColor: colors.light_gray,
	},
	ItemTime: {
		color: colors.silver,
		marginLeft: "5px",
		marginRight: "5px",
		marginBottom: "5px",
		padding: "5px",
		borderRadius: "5px",
		backgroundColor: colors.light_gray,
	},
	ItemDescription: {
		width: "90%",
		backgroundColor: colors.slategray,
		color: colors.gainsboro,
		padding: "15px",
		fontSize: 16,
	},
	ItemTagGroup: {
		display: "flex",
		flexDirection: "row",
		fontSize: 18,
	},
	ItemTagElement: {
		marginTop: "5px",
		marginLeft: "10px",
		marginRight: "10px",
		padding: "5px",
		borderRadius: "5px",
		color: colors.silver,
		backgroundColor: colors.light_gray,
	},
	ItemIconButton: {
		color: colors.aliceblue,
		marginLeft: "5px",
		marginRight: "5px",
	},
};

export default ProjectsStyles;
