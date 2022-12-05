import { props, experience_item_props } from "../types";
import { experience_transcript_object } from "../transcripts_types";
import { getTranscript } from "../transcripts";
import { Container, Typography } from "@mui/material";
import {
	Timeline,
	TimelineItem,
	TimelineSeparator,
	TimelineConnector,
	TimelineDot,
	TimelineContent,
	TimelineOppositeContent,
} from "@mui/lab";

import ExperienceStyles from "../styles/Experience";

function ExperienceItem({ elem, last }: experience_item_props): JSX.Element {
	return (
		<TimelineItem>
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
	);
}

function Experience({ language }: props): JSX.Element {
	const data: experience_transcript_object =
		getTranscript[language].Experience;

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
							key={id}
							elem={elem}
							last={data.Items.length - 1 !== id}
						/>
					))}
				</Timeline>
			</Container>
		</Container>
	);
}

export default Experience;
