import { useEffect, useState } from "react";
import {
	Container,
	Typography,
	Paper,
	IconButton,
	Tooltip,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";

import { projects_item_props, props } from "../types";
import {
	projects_item_object,
	projects_transcript_object,
	projects_item_icon_object,
} from "../transcripts_types";
import { getTranscript } from "../transcripts";
import { getImage } from "../images/projects";
import ProjectsStyles from "../styles/Projects";

function ProjectItem(props: projects_item_props): JSX.Element {
	const { elem, id } = props;
	const [hover, setHover] = useState(false);
	const [height, setHeight] = useState(500);

	useEffect(() => {
		window.addEventListener(
			"resize",
			() => {
				let h = document.getElementById(`img#${id}`);
				if (h) {
					setHeight(h.clientHeight);
				}
			},
			false
		);
	}, [id]);

	const getIcon = (type: string) => {
		switch (type) {
			case "Github":
				return <GitHubIcon sx={{ fontSize: 50 }} />;
			case "Link":
				return <LaunchIcon sx={{ fontSize: 45 }} />;
			default:
				return <LaunchIcon sx={{ fontSize: 45 }} />;
		}
	};

	return (
		<div style={ProjectsStyles.ItemContainer}>
			<img
				id={`img#${id}`}
				src={getImage(elem.Img)}
				alt={elem.Img}
				style={{
					...ProjectsStyles.ItemImg,
					left: id % 2 === 0 ? 0 : "auto",
					right: id % 2 === 0 ? "auto" : 0,
					filter: hover
						? "none"
						: "sepia(90%) hue-rotate(180deg) saturate(220%)",
				}}
				onLoad={(e) => setHeight(e.currentTarget.scrollHeight)}
			/>
			<div
				style={{
					...ProjectsStyles.ItemImgHitbox,
					height: `${height}px`,
					zIndex: 1,
					left: id % 2 === 0 ? 0 : "auto",
					right: id % 2 === 0 ? "auto" : 0,
				}}
				onMouseEnter={() => setHover(true)}
				onMouseLeave={() => setHover(false)}
			/>
			<div
				style={{
					...ProjectsStyles.ItemDescriptionContainer,
					alignItems: id % 2 === 0 ? "flex-end" : "flex-start",
					left: id % 2 === 0 ? "auto" : 0,
					right: id % 2 === 0 ? 0 : "auto",
				}}
			>
				<div
					style={{
						...ProjectsStyles.ItemTitleDiv,
						flexDirection: id % 2 === 0 ? "row-reverse" : "row",
					}}
				>
					<Typography variant="h4" sx={ProjectsStyles.ItemTitle}>
						{elem.Title}
					</Typography>
					<Typography
						variant="subtitle1"
						sx={ProjectsStyles.ItemTime}
					>
						{elem.Time}
					</Typography>
				</div>
				<Paper
					sx={{
						...ProjectsStyles.ItemDescription,
						textAlign: id % 2 === 0 ? "right" : "left",
					}}
					elevation={1}
				>
					<Typography variant="body1">{elem.Description}</Typography>
				</Paper>
				<div style={ProjectsStyles.ItemTagGroup}>
					{elem.Tags.map((e: string, i: number) => (
						<Typography
							variant="h6"
							key={i}
							sx={ProjectsStyles.ItemTagElement}
						>
							{e}
						</Typography>
					))}
				</div>
				<div>
					{elem.RepoLinks.map(
						(e: projects_item_icon_object, i: number) => (
							<Tooltip title={e.Label} key={i}>
								<IconButton
									sx={ProjectsStyles.ItemIconButton}
									onClick={() =>
										window.open(e.Link, "_blank")
									}
								>
									{getIcon(e.Type)}
								</IconButton>
							</Tooltip>
						)
					)}
				</div>
			</div>
		</div>
	);
}

function Projects({ language }: props): JSX.Element {
	const data: projects_transcript_object = getTranscript[language].Projects;

	return (
		<Container
			id={"projects"}
			sx={ProjectsStyles.SectionContainer}
			maxWidth={false}
			disableGutters={true}
		>
			<Typography variant="h3" sx={ProjectsStyles.Title}>
				{data.Title}
			</Typography>
			<hr style={ProjectsStyles.Divider} />
			<Container
				sx={ProjectsStyles.InnerContainer}
				maxWidth={false}
				disableGutters={true}
			>
				{data.Items.map((elem: projects_item_object, idx: number) => (
					<ProjectItem key={idx} elem={elem} id={idx} />
				))}
			</Container>
		</Container>
	);
}

export default Projects;
