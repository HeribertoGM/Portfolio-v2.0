import { useEffect, useState } from "react";
import { Container, Typography, Fade } from "@mui/material";
import {
	Timeline,
	TimelineItem,
	TimelineSeparator,
	TimelineConnector,
	TimelineDot,
	TimelineContent,
	TimelineOppositeContent,
} from "@mui/lab";

import { props, experience_item_props } from "../types";
import { experience_transcript_object } from "../transcripts_types";
import { getTranscript } from "../transcripts";
import ExperienceStyles from "../styles/Experience";

function ExperienceItem(props: experience_item_props): JSX.Element {
	let { id, elem, visible, last } = props;

	return (
		<Fade in={visible}>
			<TimelineItem id={id}>
				<TimelineOppositeContent
					sx={ExperienceStyles.TimelineOppositeContent}
				>
					<Typography sx={ExperienceStyles.ItemTime}>
						{elem.Time}
					</Typography>
				</TimelineOppositeContent>
				<TimelineSeparator sx={ExperienceStyles.TimelineSeparator}>
					<TimelineDot variant="outlined" color="primary" />
					{last && <TimelineConnector />}
				</TimelineSeparator>
				<TimelineContent sx={ExperienceStyles.TimelineContent}>
					<Typography sx={ExperienceStyles.ItemTitle}>
						{elem.Title}
					</Typography>
					<ul>
						{elem.Description.map((text, idx) => {
							return (
								<Typography
									key={idx}
									component="li"
									sx={ExperienceStyles.ItemDescription}
								>
									{text}
								</Typography>
							);
						})}
					</ul>
				</TimelineContent>
			</TimelineItem>
		</Fade>
	);
}

function Experience({ language }: props): JSX.Element {
	const data: experience_transcript_object =
		getTranscript[language].Experience;
	const [visibility, setVisibility] = useState(data.Items.map(() => false));

	const handler = () => {
		let currState = visibility.slice();
		for (let i = 0; i < data.Items.length; i++) {
			let item = document.getElementById(`elem#${i}`);

			if (item) {
				let up = item.offsetTop;
				let height = item.offsetHeight;

				if (
					up <= window.scrollY + window.innerHeight * 0.75 &&
					up + height * 0.3 >= window.scrollY
				) {
					currState[i] = true;
				} else {
					currState[i] = false;
				}
			}
		}
		setVisibility(currState);
	};

	useEffect(() => {
		window.addEventListener("scroll", handler);

		return () => window.removeEventListener("scroll", handler);
	}, []);

	return (
		<Container
			sx={ExperienceStyles.SectionContainer}
			maxWidth={false}
			disableGutters={true}
		>
			<Typography variant="h3" sx={ExperienceStyles.Title}>
				{data.Title}
			</Typography>
			<hr style={ExperienceStyles.Divider} />
			<Container
				sx={ExperienceStyles.InnerContainer}
				maxWidth={false}
				disableGutters={true}
			>
				<Timeline sx={ExperienceStyles.Timeline}>
					{data.Items.map((elem, id) => (
						<ExperienceItem
							id={`elem#${id}`}
							key={id}
							elem={elem}
							visible={visibility[id]}
							last={data.Items.length - 1 !== id}
						/>
					))}
				</Timeline>
			</Container>
		</Container>
	);
}

export default Experience;
